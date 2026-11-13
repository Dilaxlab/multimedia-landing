'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCategory } from '@/context/CategoryContext';

export default function InventionsIndexPage() {
  const router = useRouter();
  const { activeCategory } = useCategory();

  useEffect(() => {
    if (activeCategory) {
      router.replace(`/category/${activeCategory}`);
    } else {
      router.replace('/#disciplines');
    }
  }, [activeCategory, router]);

  return null;
}
