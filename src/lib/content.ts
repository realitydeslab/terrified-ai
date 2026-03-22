import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import { parseBibFile, processCitations, getAllReferences, formatReference } from './references';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'md');

export interface PageMeta {
  title: string;
  slug: string;
  order?: number;
  section?: 'main' | 'experiment' | 'supplementary';
  summary?: boolean;
  next?: string;
  prev?: string;
  [key: string]: unknown;
}

export interface Page {
  meta: PageMeta;
  content: string;
  html: string;
  headings: { id: string; text: string; level: number }[];
}

export function getPageSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export async function getPage(slug: string): Promise<Page | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  // Extract headings for sidebar subsections
  const headings: Page['headings'] = [];
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/\*\*/g, '').trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    headings.push({ id, text, level });
  }

  // Process markdown → HTML
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'prepend', properties: { className: ['heading-anchor'], ariaHidden: true, tabIndex: -1 } })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  let html = String(result);

  // Post-process: resolve inline citations [Author et al., Year] → linked references
  const bib = parseBibFile();
  const { html: citedHtml, cited } = processCitations(html, bib);
  html = citedHtml;

  // Post-process: wrap "Executive Summary" section in a SummaryBox
  // Matches the h2 with id="executive-summary" and wraps everything until the next h1/h2/hr
  html = html.replace(
    /(<h2 id="executive-summary"[^>]*>[\s\S]*?<\/h2>)([\s\S]*?)(?=<h[12][ >]|<hr|$)/,
    (_, heading, content) => {
      // Extract heading text
      const titleMatch = heading.match(/>([^<]+)</);
      const title = titleMatch ? titleMatch[1].replace(/Executive Summary/, 'Executive Summary') : 'Executive Summary';
      return `<div class="summary-box"><div class="summary-title-wrapper"><span class="summary-title">${title}</span></div><div class="summary-content">${content.trim()}</div></div>`;
    }
  );

  // For the references page, append the auto-generated bibliography
  if (slug === 'references') {
    const allRefs = getAllReferences();
    const refsHtml = allRefs.map(entry => 
      `<li id="ref-${entry.key}" class="reference-item">${formatReference(entry)}</li>`
    ).join('\n');
    html += `<ol class="references-list">\n${refsHtml}\n</ol>`;
  }

  return {
    meta: { slug, ...data } as PageMeta,
    content,
    html,
    headings,
  };
}

export function getSiteConfig() {
  const configPath = path.join(process.cwd(), 'content', 'site.config.json');
  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}
