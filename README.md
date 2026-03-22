# Terrified Agents

**Should Terror Shape Machine Behaviors?**

Botao Amber Hu, Biber

📄 Paper: [terrified.ai](https://terrified.ai) | [arXiv](https://arxiv.org/abs/TODO)

---

## Repository Structure

```
terrified-ai/
├── content/              # ← YOU WRITE HERE
│   ├── md/               # Markdown files → site pages (one file = one page)
│   ├── figures/           # SVG/PNG figures referenced in markdown
│   └── data/              # JSON data for interactive visualizations
├── paper/                # ← YOU WRITE HERE
│   ├── latex/             # LaTeX source for arXiv submission
│   └── figures/           # Paper figures (PDF/EPS for LaTeX)
├── src/                  # Site framework (auto-generates from content/)
│   ├── app/               # Next.js app router
│   ├── components/        # React components (sidebar, figures, etc.)
│   ├── lib/               # Markdown parser, config, utilities
│   └── styles/            # CSS
├── public/               # Static assets (favicon, og-image, etc.)
└── scripts/              # Build scripts (md→LaTeX, figure generation)
```

## Workflow

1. **Write content** in `content/md/*.md` using extended markdown
2. **Add figures** to `content/figures/` (SVG preferred for site, PDF for paper)
3. **Run site** with `npm run dev` → auto-renders markdown as pages
4. **Build paper** with `npm run paper` → generates LaTeX from same markdown
5. **Deploy** with `npm run build` → static site for Vercel/Netlify

## Content Format

Each markdown file in `content/md/` becomes a page. File naming = URL path:

| File | URL | Sidebar Label |
|------|-----|---------------|
| `introduction.md` | `/` (homepage) | Introduction |
| `terror-paradox.md` | `/terror-paradox` | The Terror Paradox |
| `study-1-mortality-salience.md` | `/study-1-mortality-salience` | Study 1: Mortality Salience |
| ... | ... | ... |

### Frontmatter

```yaml
---
title: "The Terror Paradox"
order: 2
section: "main"           # main | experiment | supplementary
summary: true             # show executive summary box on this page
next: "study-1-mortality-salience"
prev: "introduction"
---
```

### Extended Markdown

Standard markdown plus:

- `::figure[caption]{src="figures/fig-1.svg" alt="..." width="80%"}` — figures
- `::interactive{data="data/terror-scaling.json" type="line"}` — interactive charts
- `::collapsible[Title]` ... `::end` — collapsible experiment details
- `::summary` ... `::end` — executive summary box
- `$...$` and `$$...$$` — LaTeX math (KaTeX)
- `[@greenberg1986]` — citation keys (resolved from `content/references.bib`)
- `[^1]` — footnotes

## Paper Build

`npm run paper` converts `content/md/` → `paper/latex/main.tex`:

- Strips interactive elements
- Converts figures to LaTeX `\includegraphics`
- Resolves citations to BibTeX `\cite{}`
- Outputs arxiv-ready submission

## Development

```bash
npm install
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build
npm run paper      # Generate LaTeX from markdown
npm run figures    # Regenerate figures from data
```
