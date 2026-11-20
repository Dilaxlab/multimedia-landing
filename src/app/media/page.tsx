import React from 'react';
import type { Metadata } from 'next';
import MediaLibraryClient from './MediaLibraryClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Media Library · Heritage Archive',
  description:
    'Explore restored 2D patent plates, interactive 3D models, short motion films, illustrated books, and narrated stories across 50 thematic categories.',
};

export default function MediaLibraryPage() {
  return <MediaLibraryClient />;
}
