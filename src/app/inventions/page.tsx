'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ALL_50_CATEGORIES } from '@/data/taxonomy';
import { useCategory } from '@/context/CategoryContext';

export default function InventionsIndexPage() {
  const router = useRouter();
  const { activeCategory } = useCategory();

  useEffect(() => {
    const matched = activeCategory
      ? ALL_50_CATEGORIES.find((c) => c.legacyCategoryKeys?.includes(activeCategory))
      : undefined;
    router.replace(matched ? `/categories/${matched.slug}` : '/#themes');
  }, [activeCategory, router]);

  return null;
}
