import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import { getSiteConfig } from '@/lib/content';
import { Header } from '@/components/Header';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif' });

const config = getSiteConfig();

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  authors: config.authors.map((a: { name: string }) => ({ name: a.name })),
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.domain,
    siteName: config.title,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.title,
    description: config.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`} data-theme="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.setAttribute("data-theme","dark")}else{document.documentElement.setAttribute("data-theme","light")}}catch(e){document.documentElement.setAttribute("data-theme","light")}})()`,
          }}
        />
        {config.arxiv && (
          <>
            <meta name="citation_title" content={`${config.title}: ${config.subtitle}`} />
            <meta name="citation_arxiv_id" content={config.arxiv} />
            <meta name="citation_pdf_url" content={`https://arxiv.org/pdf/${config.arxiv}`} />
            {config.authors.map((a: { name: string }, i: number) => (
              <meta key={i} name="citation_author" content={a.name} />
            ))}
          </>
        )}
      </head>
      <body className="antialiased">
        <div className="min-h-screen">
          <Header title={config.title} />
          <div style={{ display: 'flex', flex: 1 }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
