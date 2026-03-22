import Link from 'next/link';

interface NavItem {
  slug: string;
  label: string;
  home?: boolean;
}

export function PageNav({ prev, next }: { prev?: NavItem | null; next?: NavItem | null }) {
  return (
    <div className="page-nav">
      <div>
        {prev && (
          <Link href={prev.home ? '/' : `/${prev.slug}`}>
            ← {prev.label}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link href={next.home ? '/' : `/${next.slug}`}>
            {next.label} →
          </Link>
        )}
      </div>
    </div>
  );
}
