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
    <nav className="sidebar">
      <ul>
        {config.nav.main.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.home ? '/' : `/${item.slug}`}
              className={`sidebar-link ${isActive(item.slug, item.home) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
            {isActive(item.slug, item.home) && headings.length > 0 && (
              <ul className="subsections">
                {headings
                  .filter((h) => h.level <= 2)
                  .map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="subsection-link">
                        {h.text}
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}

        {/* Experiments collapsible */}
        <li className="nav-group">
          <button
            className="sidebar-link group-toggle"
            onClick={() => setExperimentsOpen(!experimentsOpen)}
            aria-expanded={experimentsOpen}
          >
            <span className={`chevron ${experimentsOpen ? 'open' : ''}`} />
            Experiments
          </button>
          {experimentsOpen && (
            <ul className="group-list">
              {config.nav.experiments.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className={`sidebar-link ${isActive(item.slug) ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Supplementary collapsible */}
        <li className="nav-group">
          <button
            className="sidebar-link group-toggle"
            onClick={() => setSupplementaryOpen(!supplementaryOpen)}
            aria-expanded={supplementaryOpen}
          >
            <span className={`chevron ${supplementaryOpen ? 'open' : ''}`} />
            Supplementary Material
          </button>
          {supplementaryOpen && (
            <ul className="group-list">
              {config.nav.supplementary.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className={`sidebar-link ${isActive(item.slug) ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* External links */}
        {config.nav.external.map(
          (item) =>
            item.url && (
              <li key={item.label}>
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

      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 5rem;
          bottom: 0;
          left: var(--sidebar-offset);
          width: var(--sidebar-width);
          padding-top: 1rem;
          overflow-y: auto;
          font-family: var(--heading-font);
          font-size: 0.9rem;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin: 0;
        }

        .sidebar-link {
          display: block;
          padding: 0.4em 0.8em;
          color: var(--neutral-500);
          text-decoration: none;
          border-radius: 4px;
          transition: color 0.15s, background 0.15s;
          cursor: pointer;
          border: none;
          background: none;
          font: inherit;
          text-align: left;
          width: 100%;
        }

        .sidebar-link:hover {
          color: var(--foreground);
        }

        .sidebar-link.active {
          color: var(--foreground);
          font-weight: 600;
        }

        .subsections {
          padding-left: 1em;
          margin: 0.2em 0 0.5em;
        }

        .subsection-link {
          display: block;
          padding: 0.2em 0.8em;
          color: var(--neutral-400);
          text-decoration: none;
          font-size: 0.85em;
          transition: color 0.15s;
        }

        .subsection-link:hover {
          color: var(--neutral-600);
        }

        .nav-group {
          margin-top: 0.5em;
        }

        .group-toggle {
          display: flex;
          align-items: center;
          gap: 0.4em;
        }

        .chevron {
          display: inline-block;
          width: 0;
          height: 0;
          border-left: 4px solid currentColor;
          border-top: 3px solid transparent;
          border-bottom: 3px solid transparent;
          transition: transform 0.2s;
        }

        .chevron.open {
          transform: rotate(90deg);
        }

        .group-list {
          padding-left: 1em;
        }

        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
