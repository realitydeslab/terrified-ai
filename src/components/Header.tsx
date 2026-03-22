'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        background: 'var(--background)',
        borderBottom: '1px solid var(--neutral-200)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '4rem',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--heading-font)',
            fontSize: '1.5rem',
            fontWeight: 400,
            color: 'var(--foreground)',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            lineHeight: 1.2,
          }}
        >
          {title}{subtitle ? ': ' : ''}{subtitle && (
            <span style={{ fontStyle: 'italic' }}>{subtitle}</span>
          )}
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
