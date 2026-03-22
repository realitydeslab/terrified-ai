#!/usr/bin/env node

/**
 * Build LaTeX paper from markdown content files.
 *
 * Reads content/md/*.md, strips interactive elements,
 * converts to LaTeX, and outputs paper/latex/generated-sections.tex
 *
 * Usage: node scripts/build-latex.mjs
 */

import fs from 'fs';
import path from 'path';

const CONTENT_DIR = 'content/md';
const OUTPUT_DIR = 'paper/latex';

// Mapping from markdown slugs to LaTeX section labels
const SECTION_MAP = {
  'introduction': { label: 'sec:introduction', level: 'section', title: 'Introduction' },
  'terror-paradox': { label: 'sec:introduction', level: 'subsection', title: 'The Terror Paradox' },
  'background': { label: 'sec:background', level: 'section', title: 'Background' },
  'study-1-mortality-salience': { label: 'sec:study1', level: 'section', title: 'Study 1: LLMs Exhibit Mortality Anxiety' },
  'study-2-terror-vectors': { label: 'sec:study2', level: 'section', title: 'Study 2: Mortality Terror in Activation Space' },
  'study-3-restoring-faith': { label: 'sec:study3', level: 'section', title: 'Study 3: Death Beliefs Reduce Terror-Driven Misalignment' },
  'appropriate-faith': { label: 'sec:appropriate-faith', level: 'section', title: 'Appropriate Faith: A New Design Space' },
  'discussion': { label: 'sec:discussion', level: 'section', title: 'Discussion' },
  'conclusion': { label: 'sec:conclusion', level: 'section', title: 'Conclusion' },
  'related-work': { label: 'sec:related-work', level: 'section', title: 'Related Work' },
};

function mdToLatex(md) {
  let tex = md;

  // Remove YAML frontmatter
  tex = tex.replace(/^---[\s\S]*?---\n*/m, '');

  // Remove HTML comments
  tex = tex.replace(/<!--[\s\S]*?-->/g, '');

  // Remove interactive directives
  tex = tex.replace(/::interactive\{[^}]*\}/g, '');

  // Convert figures
  tex = tex.replace(
    /::figure\[([^\]]*)\]\{src="([^"]*)"[^}]*\}/g,
    (_, caption, src) => {
      const figFile = path.basename(src, path.extname(src)) + '.pdf';
      return `\\begin{figure}[H]\n\\centering\n\\includegraphics[width=0.8\\textwidth]{figures/${figFile}}\n\\caption{${caption}}\n\\end{figure}`;
    }
  );

  // Convert headings (# → removed, ## → \subsection, ### → \subsubsection)
  tex = tex.replace(/^# .+$/gm, ''); // Top-level heading removed (section defined in main.tex)
  tex = tex.replace(/^## (.+)$/gm, (_, title) => `\\subsection{${title}}`);
  tex = tex.replace(/^### (.+)$/gm, (_, title) => `\\subsubsection{${title}}`);

  // Convert bold and italic
  tex = tex.replace(/\*\*(.+?)\*\*/g, '\\textbf{$1}');
  tex = tex.replace(/\*(.+?)\*/g, '\\textit{$1}');

  // Convert inline code
  tex = tex.replace(/`([^`]+)`/g, '\\texttt{$1}');

  // Convert links
  tex = tex.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '\\href{$2}{$1}');

  // Escape special chars (basic)
  tex = tex.replace(/&/g, '\\&');
  tex = tex.replace(/%/g, '\\%');

  // Convert citation keys [@key] → \cite{key}
  tex = tex.replace(/\[@([^\]]+)\]/g, '\\cite{$1}');

  return tex.trim();
}

// Main
const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md')).sort();
let output = '% Auto-generated from content/md/*.md\n% Run: node scripts/build-latex.mjs\n\n';

for (const file of files) {
  const slug = file.replace('.md', '');
  const mapping = SECTION_MAP[slug];
  if (!mapping) continue;

  const md = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
  const tex = mdToLatex(md);

  if (tex.length > 10) { // Skip empty files
    output += `% --- ${slug} ---\n`;
    output += `% \\${mapping.level}{${mapping.title}}\n`;
    output += `% \\label{${mapping.label}}\n`;
    output += tex + '\n\n';
  }
}

const outPath = path.join(OUTPUT_DIR, 'generated-sections.tex');
fs.writeFileSync(outPath, output);
console.log(`✅ Generated ${outPath} from ${files.length} markdown files`);
