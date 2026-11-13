import React from 'react';
import { notFound } from 'next/navigation';
import { OFFICIAL_18_CATEGORIES, MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { CategoryFilterType } from '@/types/asset';
import CategoryViewClient from './CategoryViewClient';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return OFFICIAL_18_CATEGORIES.map((c) => ({
    category: c.key,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const catKey = category.toUpperCase() as CategoryFilterType;
  const meta = OFFICIAL_18_CATEGORIES.find((c) => c.key === catKey);

  if (!meta) {
    return { title: 'Category Not Found – Heritage Archive' };
  }

  return {
    title: `${meta.emoji} ${meta.label} (${meta.era}) – Heritage Archive`,
    description: meta.desc,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const catKey = category.toUpperCase() as CategoryFilterType;
  const catMeta = OFFICIAL_18_CATEGORIES.find((c) => c.key === catKey);

  if (!catMeta) {
    notFound();
  }

  const categoryAssets = MOCK_HISTORICAL_ASSETS.filter((a) => a.category === catMeta.key);

  return (
    <CategoryViewClient
      catMeta={catMeta}
      categoryAssets={categoryAssets}
    />
  );
}
