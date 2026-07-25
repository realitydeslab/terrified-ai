import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import localFont from 'next/font/local';
import { getSiteConfig } from '@/lib/content';
import { Header } from '@/components/Header';
import '@/styles/globals.css';

const garamond = EB_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-garamond',
  display: 'swap',
});

const config = getSiteConfig();

export const metadata: Metadata = {
  title: `${config.subtitle} — ${config.title}`,
  description: config.description,
  keywords: config.keywords,
  authors: config.authors.map((a: { name: string }) => ({ name: a.name })),
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.domain,
    siteName: config.title,
    type: 'article',
    images: [`${config.domain}/og.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.title,
    description: config.description,
    images: [`${config.domain}/og.png`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={garamond.variable} data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.setAttribute("data-theme","dark")}else{document.documentElement.setAttribute("data-theme","light")}}catch(e){document.documentElement.setAttribute("data-theme","light")}})()`,
          }}
        />
        <meta name="citation_title" content="Should Human Terror Shape Machine Behavior? Designing Appropriate Faith for AI Alignment" />
        <meta name="citation_pdf_url" content={`${config.domain}/papers/should-human-terror-shape-machine-behavior.pdf`} />
        {config.authors.map((a: { name: string }, i: number) => (
          <meta key={i} name="citation_author" content={a.name} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ScholarlyArticle',
              headline: 'Should Human Terror Shape Machine Behavior? Designing Appropriate Faith for AI Alignment',
              description: config.description,
              author: config.authors.map((author: { name: string }) => ({
                '@type': 'Person',
                name: author.name,
              })),
              url: config.domain,
              encoding: {
                '@type': 'MediaObject',
                contentUrl: `${config.domain}/papers/should-human-terror-shape-machine-behavior.pdf`,
                encodingFormat: 'application/pdf',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased" style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 1rem' }}>
        <div className="min-h-screen">
          <Header title={config.title} config={config} />
          <div style={{ display: 'flex', flex: 1 }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
