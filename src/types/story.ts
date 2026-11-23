export type StoryPublicationType = 'digital_book' | 'storybook' | 'narrative';

export interface StoryPage {
  pageNumber: number;
  heading?: string | null;
  body: string;
  imageUrl?: string | null;
  imageAltText?: string | null;
}

export interface StoryPublication {
  id: string;
  assetId: string;
  assetCode: string;
  assetName: string;
  inventor?: string;
  year?: string;
  themeId?: string | null;
  type: StoryPublicationType;
  title: string;
  language: string;
  ageGroup: string;
  coverUrl?: string | null;
  downloadUrl?: string | null;
  pageCount: number;
  excerpt?: string;
  pages?: StoryPage[];
  updatedAt?: string | null;
}
