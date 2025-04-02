import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from './constants';
import { Header } from '../components/Header';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Plausible.io Analytics - Uncomment when ready */}
        {/* <script defer data-domain="zennic.app" src="https://plausible.io/js/script.js"></script> */}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="f01d620b-febd-4734-91cb-869fe066ebae"></script>
      </head>
      <body className="min-h-screen font-sans bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
