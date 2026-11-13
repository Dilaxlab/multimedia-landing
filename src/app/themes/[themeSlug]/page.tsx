import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { THEME_FAMILIES, getThemeBySlug } from '@/data/taxonomy';
import ThemeViewClient from './ThemeViewClient';

interface ThemePageProps {
  params: Promise<{ themeSlug: string }>;
}

export async function generateStaticParams() {
  return THEME_FAMILIES.map((theme) => ({
    themeSlug: theme.slug,
  }));
}

export async function generateMetadata({ params }: ThemePageProps): Promise<Metadata> {
  const { themeSlug } = await params;
  const theme = getThemeBySlug(themeSlug);
  if (!theme) {
    return { title: 'Theme Not Found | Heritage Archive' };
  }
  return {
    title: `${theme.number}. ${theme.title} | Heritage Archive`,
    description: `${theme.categoryRange} — ${theme.description}`,
  };
}

export default async function ThemePage({ params }: ThemePageProps) {
  const { themeSlug } = await params;
  const theme = getThemeBySlug(themeSlug);

  if (!theme) {
    notFound();
  }

  return <ThemeViewClient theme={theme} />;
}
