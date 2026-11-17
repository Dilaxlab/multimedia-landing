import React from 'react';
import type { Metadata } from 'next';
import MediaLibraryClient from './MediaLibraryClient';

export const metadata: Metadata = {
  title: 'Media Library · Heritage Archive',
  description:
    'Browse 35 curated archival images, 3D models, 30-second videos, educational films, and narrated audio across landmark inventions.',
};

export default function MediaLibraryPage() {
  return <MediaLibraryClient />;
}
