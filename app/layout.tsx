import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tabularasacoaching.com'),
  title: 'Tabula Rasa Coaching | Where the Technical and Adaptive Come Together',
  description: 'Professional 1:1 coaching with Karen Florence, CPC, CPRWC. Executive coaching, career coaching, and life coaching focused on sustainable change through integration of technical and adaptive approaches.',
  keywords: 'executive coaching, career coaching, life coaching, professional development, Karen Florence, CPC, CPRWC, recovery wellness coaching',
  authors: [{ name: 'Karen Florence' }],
  creator: 'Tabula Rasa Coaching',
  publisher: 'Tabula Rasa Coaching',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Tabula Rasa Coaching | Sustainable Change Through Professional Coaching',
    description: 'Where the Technical and the Adaptive Come Together to Create Sustainable Change. Expert 1:1 coaching with Karen Florence.',
    url: 'https://tabularasacoaching.com',
    type: 'website',
    locale: 'en_US',
    siteName: 'Tabula Rasa Coaching',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Tabula Rasa Coaching - Karen Florence',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico', type: 'image/x-icon' },
      { url: '/images/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/images/site.webmanifest',
  appleWebApp: {
    title: 'TR Coaching',
    statusBarStyle: 'default',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4f46e5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
