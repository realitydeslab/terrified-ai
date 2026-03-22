import fs from 'fs';
import path from 'path';
import bibtexParse from 'bibtex-parse';

const BIB_PATH = path.join(process.cwd(), 'content', 'references.bib');

export interface BibEntry {
  key: string;
  type: string;
  author: string;
  title: string;
  year: string;
  journal?: string;
  booktitle?: string;
  publisher?: string;
  institution?: string;
  volume?: string;
  number?: string;
  pages?: string;
  doi?: string;
  url?: string;
  editor?: string;
}

let _cache: Map<string, BibEntry> | null = null;

function getField(fields: Record<string, string>, name: string): string {
  return (fields[name.toUpperCase()] || fields[name.toLowerCase()] || fields[name] || '').replace(/[{}]/g, '').trim();
}

export function parseBibFile(): Map<string, BibEntry> {
  if (_cache) return _cache;
  if (!fs.existsSync(BIB_PATH)) return new Map();
  
  const raw = fs.readFileSync(BIB_PATH, 'utf-8');
  const entries = bibtexParse.entries(raw);
  
  const map = new Map<string, BibEntry>();
  for (const entry of entries) {
    const key = entry.key;
    if (!key) continue;
    
    // bibtex-parse puts fields directly on the entry object
    const fields: Record<string, string> = {};
    for (const [k, v] of Object.entries(entry)) {
      if (k !== 'key' && k !== 'type' && typeof v === 'string') {
        fields[k] = v;
      }
    }
    
    map.set(key, {
      key,
      type: entry.type || 'article',
      author: getField(fields, 'author') || getField(fields, 'AUTHOR'),
      title: getField(fields, 'title') || getField(fields, 'TITLE'),
      year: getField(fields, 'year') || getField(fields, 'YEAR'),
      journal: getField(fields, 'journal') || getField(fields, 'JOURNAL'),
      booktitle: getField(fields, 'booktitle') || getField(fields, 'BOOKTITLE'),
      publisher: getField(fields, 'publisher') || getField(fields, 'PUBLISHER'),
      institution: getField(fields, 'institution') || getField(fields, 'INSTITUTION'),
      volume: getField(fields, 'volume'),
      number: getField(fields, 'number'),
      pages: getField(fields, 'pages'),
      doi: getField(fields, 'doi') || getField(fields, 'DOI'),
      url: getField(fields, 'url') || getField(fields, 'URL'),
      editor: getField(fields, 'editor'),
    });
  }
  
  _cache = map;
  return map;
}

/** Format author for short citation: "Author et al." or "Author & Author" */
function shortAuthor(author: string): string {
  if (!author) return '??';
  // Handle "{Name}" style (org authors)
  if (author.startsWith('{')) return author.replace(/[{}]/g, '');
  
  const authors = author.split(/\s+and\s+/i);
  const firstLast = authors[0].split(',')[0].trim();
  if (authors.length === 1) return firstLast;
  if (authors.length === 2) {
    const secondLast = authors[1].split(',')[0].trim();
    return `${firstLast} & ${secondLast}`;
  }
  return `${firstLast} et al.`;
}

/** Format full reference for the references list */
export function formatReference(entry: BibEntry): string {
  const authors = entry.author || '??';
  const year = entry.year || '??';
  const title = entry.title || 'Untitled';
  
  let venue = '';
  if (entry.journal) venue = `<em>${entry.journal}</em>`;
  else if (entry.booktitle) venue = `<em>${entry.booktitle}</em>`;
  else if (entry.institution) venue = entry.institution;
  else if (entry.publisher) venue = entry.publisher;
  
  let details = '';
  if (entry.volume) {
    details += `, ${entry.volume}`;
    if (entry.number) details += `(${entry.number})`;
  }
  if (entry.pages) details += `, ${entry.pages}`;
  
  let link = '';
  if (entry.doi) link = ` <a href="https://doi.org/${entry.doi}" target="_blank" rel="noopener">DOI</a>`;
  else if (entry.url) link = ` <a href="${entry.url}" target="_blank" rel="noopener">URL</a>`;
  
  return `${authors} (${year}). ${title}. ${venue}${details}.${link}`;
}

/**
 * Build a lookup from "Author et al., Year" style citations to bib keys.
 * Returns a map from normalized citation text → bib key.
 */
function buildCitationLookup(bib: Map<string, BibEntry>): Map<string, string> {
  const lookup = new Map<string, string>();
  
  for (const [key, entry] of bib) {
    const short = shortAuthor(entry.author);
    const year = entry.year;
    if (!year) continue;
    
    // Generate multiple lookup forms
    const forms = [
      `${short}, ${year}`,
      `${short} ${year}`,
    ];
    
    // Also try with last name only
    const lastName = entry.author?.split(',')[0]?.trim();
    if (lastName && lastName !== short) {
      forms.push(`${lastName}, ${year}`);
      forms.push(`${lastName} et al., ${year}`);
      forms.push(`${lastName} et al. ${year}`);
    }
    
    for (const form of forms) {
      const norm = form.toLowerCase().replace(/[{}]/g, '');
      if (!lookup.has(norm)) {
        lookup.set(norm, key);
      }
    }
  }
  
  return lookup;
}

/**
 * Process inline citations in HTML: [Author et al., Year] → linked references.
 * Also collects which references were cited so we can build a references section.
 */
export function processCitations(html: string, bib: Map<string, BibEntry>): { html: string; cited: Set<string> } {
  const lookup = buildCitationLookup(bib);
  const cited = new Set<string>();
  
  // Match citation patterns like [Author et al., 2024] or [Author & Author, 2024]
  // Also handles multiple citations: [Author, 2024; Author2, 2025]
  const processed = html.replace(/\[([^\]]+?(?:\d{4}[a-z]?))\]/g, (fullMatch, inner: string) => {
    // Skip if it looks like a markdown link [text](url) — already processed
    // Skip Figure references
    if (inner.startsWith('Figure') || inner.startsWith('Table')) return fullMatch;
    
    // Split on semicolons for multiple citations
    const parts = inner.split(/;\s*/);
    const resolvedParts: string[] = [];
    let anyResolved = false;
    
    for (const part of parts) {
      const norm = part.trim().toLowerCase().replace(/[{}]/g, '');
      const bibKey = lookup.get(norm);
      
      if (bibKey && bib.has(bibKey)) {
        cited.add(bibKey);
        resolvedParts.push(`<a href="/terrified-ai/references#ref-${bibKey}" class="citation" title="${bib.get(bibKey)!.title}">${part.trim()}</a>`);
        anyResolved = true;
      } else {
        resolvedParts.push(part.trim());
      }
    }
    
    if (anyResolved) {
      return `[${resolvedParts.join('; ')}]`;
    }
    return fullMatch;
  });
  
  return { html: processed, cited };
}

/** Generate the references page HTML from cited entries */
export function generateReferencesHTML(cited: Set<string>, bib: Map<string, BibEntry>): string {
  // Sort by author last name then year
  const sorted = Array.from(cited)
    .map(key => bib.get(key)!)
    .filter(Boolean)
    .sort((a, b) => {
      const aAuthor = (a.author || '').toLowerCase();
      const bAuthor = (b.author || '').toLowerCase();
      if (aAuthor < bAuthor) return -1;
      if (aAuthor > bAuthor) return 1;
      return (a.year || '').localeCompare(b.year || '');
    });
  
  const items = sorted.map(entry => 
    `<li id="ref-${entry.key}" class="reference-item">${formatReference(entry)}</li>`
  ).join('\n');
  
  return `<ol class="references-list">\n${items}\n</ol>`;
}

/** Get all references sorted for the full references page */
export function getAllReferences(): BibEntry[] {
  const bib = parseBibFile();
  return Array.from(bib.values()).sort((a, b) => {
    const aAuthor = (a.author || '').toLowerCase();
    const bAuthor = (b.author || '').toLowerCase();
    if (aAuthor < bAuthor) return -1;
    if (aAuthor > bAuthor) return 1;
    return (a.year || '').localeCompare(b.year || '');
  });
}
