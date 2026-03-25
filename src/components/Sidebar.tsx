'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  slug: string;
  label: string;
  home?: boolean;
}

interface SiteConfig {
  nav: {
    main: NavItem[];
    experiments: NavItem[];
    supplementary: NavItem[];
    external: { label: string; url: string | null }[];
  };
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function Sidebar({
  config,
  headings = [],
}: {
  config: SiteConfig;
  headings?: HeadingItem[];
}) {
  const pathname = usePathname();
  const [experimentsOpen, setExperimentsOpen] = useState(false);
  const [supplementaryOpen, setSupplementaryOpen] = useState(false);

  const isActive = (slug: string, home?: boolean) => {
    if (home) return pathname === '/';
    return pathname === `/${slug}`;
  };

  return (
    <>
      <nav className="sidebar">
        <ul className="sidebar-list">
          {config.nav.main.map((item) => (
            <li key={item.slug} className="sidebar-item">
              <Link
                href={item.home ? '/' : `/${item.slug}`}
                className={`sidebar-link ${isActive(item.slug, item.home) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
              {/* Subsections with animation */}
              <div className={`subsections ${isActive(item.slug, item.home) && headings.length > 0 ? 'visible' : ''}`}>
                <div className={`subsection-wrapper ${isActive(item.slug, item.home) && headings.length > 0 ? 'visible' : 'hidden'}`}>
                  {headings.filter((h) => h.level <= 2).length > 0 && (
                    <div className="toc">
                      {headings
                        .filter((h) => h.level <= 2)
                        .map((h) => (
                          <a key={h.id} href={`#${h.id}`} className="toc-link">
                            {h.text}
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}

          {/* Experiments collapsible */}
          <li className="sidebar-item appendix-group">
            <button
              className={`sidebar-link appendix-toggle`}
              onClick={() => setExperimentsOpen(!experimentsOpen)}
              aria-expanded={experimentsOpen}
            >
              <span className={`chevron ${experimentsOpen ? 'open' : ''}`} />
              Experiments
            </button>
            <ul className={`appendix-list ${experimentsOpen ? 'open' : ''}`}>
              {config.nav.experiments.map((item) => (
                <li key={item.slug} className="sidebar-item">
                  <Link
                    href={`/${item.slug}`}
                    className={`sidebar-link ${isActive(item.slug) ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Supplementary collapsible */}
          <li className="sidebar-item appendix-group">
            <button
              className={`sidebar-link appendix-toggle`}
              onClick={() => setSupplementaryOpen(!supplementaryOpen)}
              aria-expanded={supplementaryOpen}
            >
              <span className={`chevron ${supplementaryOpen ? 'open' : ''}`} />
              Supplementary Material
            </button>
            <ul className={`appendix-list ${supplementaryOpen ? 'open' : ''}`}>
              {config.nav.supplementary.map((item) => (
                <li key={item.slug} className="sidebar-item">
                  <Link
                    href={`/${item.slug}`}
                    className={`sidebar-link ${isActive(item.slug) ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Interactive Visualizations */}
          {(config.nav as any).visualizations && (
            <li className="sidebar-item appendix-group">
              <div className="sidebar-link" style={{ color: 'var(--accent, #6366f1)', fontWeight: 600, fontSize: '0.85rem', padding: '0.5rem 0 0.25rem' }}>
                🔬 Interactive Demos
              </div>
              <ul className="appendix-list open">
                {(config.nav as any).visualizations.map((item: any) => (
                  <li key={item.slug} className="sidebar-item">
                    <a
                      href={`/${item.slug}`}
                      className="sidebar-link"
                      style={{ color: 'var(--accent, #6366f1)' }}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          )}

          {/* External links */}
          {config.nav.external.map(
            (item) =>
              item.url && (
                <li key={item.label} className="sidebar-item external-item">
                  <a
                    href={item.url}
                    className="sidebar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              )
          )}
        </ul>
      </nav>

      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 4rem;
          bottom: 0;
          left: var(--sidebar-offset);
          width: var(--sidebar-width);
          padding-top: 4rem;
          padding-right: 2rem;
          overflow-y: auto;
          font-family: var(--sidebar-font);
          font-size: var(--sidebar-font-size);
          line-height: var(--sidebar-line-height);
          scrollbar-width: thin;
          scrollbar-color: var(--neutral-300) transparent;
        }

        .sidebar-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .sidebar-item {
          margin: 0;
        }

        .sidebar-link {
          display: block;
          color: var(--neutral-600);
          text-decoration: none;
          transition: color 0.2s;
          padding: 0.2rem 0;
          cursor: pointer;
          border: none;
          background: none;
          font: inherit;
          text-align: left;
          width: 100%;
        }

        .sidebar-link:hover,
        .sidebar-link.active {
          color: var(--neutral-900);
        }

        .sidebar-link.active {
          font-weight: 500;
        }

        /* Subsections animation */
        .subsections {
          overflow: hidden;
          transition: opacity 0.2s ease-in-out, max-height 0.4s ease-in-out;
          opacity: 0;
          max-height: 0;
          position: relative;
        }

        .subsections.visible {
          opacity: 1;
          max-height: 500px;
          transition-delay: 0.15s;
        }

        .subsection-wrapper {
          transform-origin: center top;
          transition: transform 0.2s ease-in-out;
        }

        .subsection-wrapper.visible {
          position: relative;
          transform: translateY(0);
          transition-delay: 0.15s;
        }

        .subsection-wrapper.hidden {
          position: absolute;
          width: 100%;
          transform: translateY(-8px);
          transition-delay: 0s;
        }

        .toc {
          margin-top: 0.5rem;
          margin-left: 0.25rem;
          padding-left: 0.75rem;
          border-left: 1px solid var(--neutral-300);
          font-size: 0.875em;
        }

        .toc-link {
          display: block;
          padding: 0.25em 0;
          color: var(--neutral-600);
          text-decoration: none;
          line-height: 1.4;
          transition: color 0.15s;
        }

        .toc-link:hover {
          color: var(--neutral-900);
        }

        /* Appendix groups */
        .appendix-group {
          margin: 0;
        }

        .appendix-toggle {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
        }

        .chevron {
          display: inline-block;
          width: 0.45em;
          height: 0.45em;
          border-right: 1.5px solid currentColor;
          border-bottom: 1.5px solid currentColor;
          transform: rotate(-45deg);
          transition: transform 0.2s;
          flex-shrink: 0;
          position: relative;
          top: -0.05em;
        }

        .chevron.open {
          transform: rotate(45deg);
        }

        .appendix-list {
          list-style: none;
          padding: 0;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.3s ease-in-out, opacity 0.2s ease-in-out;
          border-left: 1px solid var(--neutral-300);
          margin: 0 0 0 0.25rem;
        }

        .appendix-list.open {
          max-height: 2000px;
          opacity: 1;
        }

        .appendix-list .sidebar-item {
          padding-left: 0.85rem;
        }

        /* Last 3 items (external links area) get special spacing */
        .sidebar-item:nth-last-child(-n+3) {
          padding-top: 0;
        }

        .sidebar-item:nth-last-child(3) {
          margin-top: 1.5rem;
        }

        .sidebar-item:last-child {
          margin-top: 1rem;
        }

        @media (max-width: 64.5rem) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
