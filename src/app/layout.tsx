import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import MobileBottomNav from '@/components/common/MobileBottomNav';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0c0d12',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Heritage Archive – Interactive Multimedia Gallery',
  description:
    'Discover historical inventions through immersive 3D models, cinematic stories, and interactive digital experiences. A premium digital museum combining historical storytelling with modern interactive technology.',
  keywords: [
    'Digital Museum',
    'Historical Inventions',
    'Alexander Graham Bell',
    'Caroline Fleming',
    'Henry Beville',
    'Three.js 3D Models',
    'Historical Documentaries',
    'Patents',
  ],
  authors: [{ name: 'Heritage Archive Consortium' }],
  openGraph: {
    title: 'Heritage Archive – Interactive Multimedia Gallery',
    description: 'Explore History Beyond the Museum through 3D models and cinematic narration documentaries.',
    siteName: 'Heritage Archive',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxsDzs26cgOvA4MgTdnYlSo5-7ob4PjTi8KszBd3IwlMjmsceTgL2yhGLbQ48k8QBkfuML365jbWfi0sgiKBqcbThdgS1HpdubeR7gp1OL3TFeaxA5URpiNNkZYsFwViZBMd-9Zywx1EghJLcy7rQAi2jdf7ltva6FBN-jJvNqK-5rH0CNOz-wahe_6sJutjA0-tG6h_3BdgN-pDeDE_8Jh9_yj9u04m-dgzpE8Tg',
        width: 1200,
        height: 630,
        alt: 'Early Telephone 3D Reconstructed Model',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-surface text-on-surface antialiased flex flex-col selection:bg-primary selection:text-surface-container-lowest pb-24 md:pb-0"
      >
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Mobile Multimedia App Bottom Navigation Bar */}
        <MobileBottomNav />

        {/* Museum Footer */}
        <Footer />
      </body>
    </html>
  );
}
