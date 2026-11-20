import React from 'react';
import type { Metadata } from 'next';
import InventionDetailView from './InventionDetailView';

export const dynamic = 'force-dynamic';

interface InventionPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: InventionPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `${decodeURIComponent(id)} – Digital Museum Dossier | Heritage Archive`,
  };
}

export default async function InventionPage({ params }: InventionPageProps) {
  const { id } = await params;
  return <InventionDetailView assetId={decodeURIComponent(id)} />;
}
