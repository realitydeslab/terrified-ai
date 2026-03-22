'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header({ title }: { title: string }) {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="site-title">
          {title}
        </Link>
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: color-mix(in srgb, var(--background) 80%, transparent);
          backdrop-filter: blur(8px);
          padding: 0.5rem 0;
        }

        .header-inner {
          max-width: var(--content-width);
          margin: 0 auto;
          padding: 1.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 4rem;
        }

        .site-title {
          font-family: var(--heading-font);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--neutral-800);
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .site-title:hover {
          opacity: 0.7;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
      `}</style>
    </header>
  );
}
