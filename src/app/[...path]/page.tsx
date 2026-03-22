import { getPage, getPageSlugs, getSiteConfig } from '@/lib/content';
import { Sidebar } from '@/components/Sidebar';
import { PageNav } from '@/components/PageNav';
import { notFound } from 'next/navigation';

interface Params {
  path: string[];
}

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = getPageSlugs().filter((s) => s !== 'introduction');
  return slugs.map((slug) => ({ path: [slug] }));
}

export default async function ContentPage({ params }: { params: Promise<Params> }) {
  const { path } = await params;
  const slug = path.join('/');
  const page = await getPage(slug);

  if (!page) notFound();

  const config = getSiteConfig();

  // Find prev/next in combined nav
  const allNav = [
    ...config.nav.main,
    ...config.nav.experiments,
    ...config.nav.supplementary,
  ];
  const idx = allNav.findIndex((item: { slug: string }) => item.slug === slug);
  const prev = idx > 0 ? allNav[idx - 1] : null;
  const next = idx < allNav.length - 1 ? allNav[idx + 1] : null;

  return (
    <>
      <Sidebar config={config} headings={page.headings} />
      <main className="content-main">
        <article className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
        <PageNav prev={prev} next={next} />
      </main>
    </>
  );
}
