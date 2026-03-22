'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header({ title }: { title: string }) {
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
          <Link
            href="/"
            style={{
              fontFamily: 'var(--content-font)',
              fontSize: '2.25rem',
              fontWeight: 600,
              color: 'var(--neutral-800)',
              textDecoration: 'none',
              marginTop: '0.5rem',
              transition: 'all 0.2s',
            }}
          >
            {title}
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <ThemeToggle />
          </div>
        </div>
      </header>

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
    </>
  );
}
