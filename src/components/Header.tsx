'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header
      style={{
        padding: '2.5rem 1rem 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--heading-font)',
              fontSize: '2.125rem',
              fontWeight: 400,
              color: 'var(--foreground)',
              textDecoration: 'none',
              lineHeight: 1.2,
              display: 'block',
            }}
          >
            {title}
          </Link>
          {subtitle && (
            <p
              style={{
                fontFamily: 'var(--heading-font)',
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: 'var(--foreground)',
                marginTop: '0.25rem',
                marginBottom: 0,
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
