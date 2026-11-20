import React from 'react';
import type { Metadata } from 'next';
import ThemeViewClient from './ThemeViewClient';

export const dynamic = 'force-dynamic';

interface ThemePageProps {
  params: Promise<{ themeSlug: string }>;
}

export async function generateMetadata({ params }: ThemePageProps): Promise<Metadata> {
  const { themeSlug } = await params;
  return {
    title: `${decodeURIComponent(themeSlug)} | Heritage Archive`,
  };
}

export default async function ThemePage({ params }: ThemePageProps) {
  const { themeSlug } = await params;
  return <ThemeViewClient themeSlug={decodeURIComponent(themeSlug)} />;
}
