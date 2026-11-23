import type { Metadata } from 'next';
import StoriesCatalogClient from './StoriesCatalogClient';

export const metadata: Metadata = {
  title: 'Stories & Digital Books | Heritage Archive',
  description:
    'Read illustrated invention storybooks, digital folios, and historical narratives linked directly to curated patent models.',
};

export default function StoriesPage() {
  return <StoriesCatalogClient />;
}
