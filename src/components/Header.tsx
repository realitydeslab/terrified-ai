'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

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

export function Header({ title, config }: { title: string; config?: SiteConfig }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (slug: string, home?: boolean) => {
    if (home) return pathname === '/';
    return pathname === `/${slug}` || pathname === `/${slug}/`;
  };

  return (
    <>
      <header
        className="sticky left-0 right-0 top-0 z-50"
        style={{
          background: 'color-mix(in srgb, var(--background) 80%, transparent)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          padding: '0.5rem 0',
          transition: 'all 0.2s',
        }}
      >
        <div className="header-inner">
          <Link href="/" className="header-title">
            {title}
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ThemeToggle />
            {config && (
              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
              >
                {menuOpen ? '✕' : '≡'}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      {config && menuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-list">
              {config.nav.main.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.home ? '/' : `/${item.slug}`}
                    className={`mobile-nav-link ${isActive(item.slug, item.home) ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mobile-nav-divider" />
              <li className="mobile-nav-section">Experiments</li>
              {config.nav.experiments.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className={`mobile-nav-link sub ${isActive(item.slug) ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mobile-nav-section">Supplementary</li>
              {config.nav.supplementary.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.slug}`}
                    className={`mobile-nav-link sub ${isActive(item.slug) ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {(config.nav as any).visualizations && (
                <>
                  <li className="mobile-nav-divider" />
                  <li className="mobile-nav-section" style={{color: '#6366f1'}}>🔬 Interactive Demos</li>
                  {(config.nav as any).visualizations.map((item: any) => (
                    <li key={item.slug}>
                      <a
                        href={`/${item.slug}`}
                        className="mobile-nav-link sub"
                        style={{color: '#6366f1'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </nav>
        </div>
      )}

      <style jsx>{`
        .header-inner {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 1.5rem 1rem;
          display: flex;
          height: 4rem;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>

      <style jsx global>{`
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--neutral-700);
          cursor: pointer;
          padding: 0.25rem;
          line-height: 1;
        }

        @media (max-width: 64.5rem) {
          .mobile-menu-btn {
            display: block;
          }
        }

        .header-title {
          font-family: var(--content-font);
          font-size: 2.25rem;
          font-weight: 600;
          color: var(--neutral-800);
          text-decoration: none;
          transition: all 0.2s;
        }

        @media (max-width: 64.5rem) {
          .header-title {
            font-size: 1.5rem;
          }
        }

        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          top: 5rem;
          z-index: 40;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(2px);
        }

        .mobile-nav {
          background: var(--background);
          border-bottom: 1px solid var(--neutral-200);
          max-height: calc(100vh - 5rem);
          overflow-y: auto;
          padding: 1rem 1.5rem 2rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .mobile-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.5rem 0;
          color: var(--neutral-600);
          text-decoration: none;
          font-family: var(--sidebar-font);
          font-size: 1rem;
          transition: color 0.15s;
        }

        .mobile-nav-link.sub {
          padding-left: 1rem;
          font-size: 0.9rem;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--neutral-900);
        }

        .mobile-nav-link.active {
          font-weight: 500;
        }

        .mobile-nav-divider {
          height: 1px;
          background: var(--neutral-200);
          margin: 0.5rem 0;
        }

        .mobile-nav-section {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--neutral-400);
          padding: 0.5rem 0 0.25rem;
        }
      `}</style>
    </>
  );
}
