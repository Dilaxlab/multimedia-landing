import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ALL_50_CATEGORIES,
  getCategoryBySlug,
  getAssetsForCategory,
} from '@/data/taxonomy';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import CategorySlugViewClient from './CategorySlugViewClient';

interface CategorySlugPageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateStaticParams() {
  return ALL_50_CATEGORIES.map((cat) => ({
    categorySlug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategorySlugPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const match = getCategoryBySlug(categorySlug);
  if (!match) {
    return { title: 'Category Not Found | Heritage Archive' };
  }
  return {
    title: `${match.category.number}. ${match.category.title} | Heritage Archive`,
    description: `${match.category.quote} — ${match.category.tagline}`,
  };
}

export default async function CategorySlugPage({ params }: CategorySlugPageProps) {
  const { categorySlug } = await params;
  const match = getCategoryBySlug(categorySlug);

  if (!match) {
    notFound();
  }

  const categoryAssets = getAssetsForCategory(match.category, MOCK_HISTORICAL_ASSETS);

  return (
    <CategorySlugViewClient
      theme={match.theme}
      category={match.category}
      categoryAssets={categoryAssets}
    />
  );
}
