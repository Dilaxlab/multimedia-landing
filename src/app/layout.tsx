import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { AuthProvider } from '@/context/AuthContext';
import { CategoryProvider } from '@/context/CategoryContext';
import PublicChrome from '@/components/common/PublicChrome';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0c0d12',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Heritage Archive | 1,000 Historical Patent Models & Artifacts',
  description:
    'Explore 1,000 target historical patent models and artifacts across 10 theme families, 50 categories, and 150 promotional taglines. Interactive 3D models, 2D plates, narrated stories, films, and illustrated books.',
  keywords: [
    'Historical Patent Models',
    'Digital Museum',
    'IAMIS Heritage Archive',
    'Linkay Technologies',
    '3D Patent Reconstructions',
    'Thematic Inventions',
    'Archival Plates',
    'STEM History',
  ],
  authors: [{ name: 'Linkay Technologies Inc. | Linkay Ventures Inc.' }],
  openGraph: {
    title: 'Heritage Archive | 1,000 Historical Patent Models & Artifacts',
    description:
      'One collection, many stories, four channels. Explore historical patent models in 3D, video, illustrated books, 2D plates, and narrated stories.',
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
        {/* Anti-flicker theme initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('heritage-theme');
                  var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-surface text-on-surface antialiased flex flex-col selection:bg-primary selection:text-surface-container-lowest transition-colors duration-300"
      >
        <ThemeProvider>
          <AuthProvider>
            <CategoryProvider>
              <PublicChrome>{children}</PublicChrome>
            </CategoryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
