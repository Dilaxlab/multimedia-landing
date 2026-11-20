import React from 'react';
import type { Metadata } from 'next';
import CategorySlugViewClient from './CategorySlugViewClient';

export const dynamic = 'force-dynamic';

interface CategorySlugPageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateMetadata({
  params,
}: CategorySlugPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  return {
    title: `${decodeURIComponent(categorySlug)} | Heritage Archive`,
  };
}

export default async function CategorySlugPage({ params }: CategorySlugPageProps) {
  const { categorySlug } = await params;
  return <CategorySlugViewClient categorySlug={decodeURIComponent(categorySlug)} />;
}
