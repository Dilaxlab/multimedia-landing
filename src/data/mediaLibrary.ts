import { AssetMediaRecord, AssetMediaType } from '@/types/media';

export type MediaKind = AssetMediaType;
export type MediaLibraryItem = AssetMediaRecord;

export const MEDIA_FILTER_TABS: {
  id: 'all' | AssetMediaType;
  label: string;
}[] = [
  { id: 'all', label: 'All Media' },
  { id: 'image', label: 'Images' },
  { id: 'plate_2d', label: '2D Plates & Blueprints' },
  { id: '3d_model', label: '3D Models' },
  { id: 'video_30s', label: '30-Second Videos' },
  { id: 'video_edu', label: 'Educational Videos' },
  { id: 'audio_narration', label: 'Audio' },
  { id: 'book', label: 'Archival Books' },
];
