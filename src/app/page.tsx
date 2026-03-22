import { getPage, getSiteConfig } from '@/lib/content';
import { Sidebar } from '@/components/Sidebar';
import { PageNav } from '@/components/PageNav';

export default async function HomePage() {
  const config = getSiteConfig();
  const page = await getPage('introduction');

  if (!page) {
    return (
      <>
        <Sidebar config={config} />
        <main className="content-main">
          <article className="prose">
            <p style={{ fontStyle: 'italic', fontSize: '1.5rem', lineHeight: 1.2, margin: '0 0 0.5em' }}>
              {config.subtitle}
            </p>
            <div style={{ fontStyle: 'italic' }}>
              {config.authors.map((a: { name: string; corresponding?: boolean }, i: number) => (
                <span key={i}>
                  {i > 0 && ', '}
                  {a.name}
                  {a.corresponding && <sup>*</sup>}
                </span>
              ))}
            </div>
            <p style={{ marginTop: '2em', color: 'var(--neutral-500)' }}>
              Content coming soon. Add <code>content/md/introduction.md</code> to get started.
            </p>
          </article>
        </main>
      </>
    );
  }

  const navItems = config.nav.main;
  const nextItem = navItems.length > 1 ? navItems[1] : null;

  return (
    <>
      <Sidebar config={config} headings={page.headings} />
      <main className="content-main">
        <article className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
        <PageNav next={nextItem} />
      </main>
    </>
  );
}
