import React from 'react';
import { notFound } from 'next/navigation';
import { MOCK_HISTORICAL_ASSETS } from '@/lib/constants';
import { assetService } from '@/services/assetService';
import InventionDetailView from './InventionDetailView';

interface InventionPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return MOCK_HISTORICAL_ASSETS.map((asset) => ({
    id: asset.id,
  }));
}

export async function generateMetadata({ params }: InventionPageProps) {
  const { id } = await params;
  const asset = await assetService.getAssetById(id);
  if (!asset) {
    return { title: 'Invention Not Found – Heritage Archive' };
  }
  return {
    title: `${asset.officialTitle || asset.title} (${asset.inventor}) – Heritage Archive`,
    description: `${asset.title}: ${asset.desc}. Verified patent ${asset.patent} under USPTO standards.`,
    openGraph: {
      title: `${asset.title} – Digital Museum Dossier`,
      description: asset.desc,
      images: [
        {
          url: asset.image,
          width: 1200,
          height: 630,
          alt: asset.title,
        },
      ],
    },
  };
}

export default async function InventionPage({ params }: InventionPageProps) {
  const { id } = await params;
  const asset = await assetService.getAssetById(id);

  if (!asset) {
    notFound();
  }

  return <InventionDetailView asset={asset} />;
}
