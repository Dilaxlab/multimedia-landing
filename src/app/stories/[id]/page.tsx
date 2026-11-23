import type { Metadata } from 'next';
import StoryReaderClient from './StoryReaderClient';

export const metadata: Metadata = {
  title: 'Interactive Folio Reader | Heritage Archive',
  description:
    'Read page-by-page illustrated stories and historical invention folios in the Heritage Archive Reading Room.',
};

interface StoryDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { id } = await params;
  return <StoryReaderClient storyId={decodeURIComponent(id)} />;
}
