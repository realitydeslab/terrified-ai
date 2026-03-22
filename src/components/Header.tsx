'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header({ title }: { title: string }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: '8px 0',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--content-width)',
          margin: '0 auto',
          padding: '24px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--heading-font)',
            fontSize: '2.25rem',
            fontWeight: 600,
            color: 'var(--neutral-800)',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            marginTop: '8px',
          }}
        >
          {title}
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
