export type CategoryFilterType =
  | 'ALL'
  | 'ENERGY'
  | 'TELECOM'
  | 'DOMESTIC'
  | 'TIME'
  | 'WIND'
  | 'AERO'
  | 'COMPUTING'
  | 'STEAM'
  | 'PRINTING'
  | 'OPTICS'
  | 'CIVIL'
  | 'AGRICULTURE'
  | 'MARITIME'
  | 'LIGHTING'
  | 'METALLURGY'
  | 'TRANSIT'
  | 'MEDICAL'
  | 'PHOTOGRAPHY';

export interface HistoricalAsset {
  id: string;
  title: string;
  officialTitle?: string;
  inventor: string;
  creator?: string;
  patent: string;
  patentNumber?: string;
  patentDate: string;
  year?: string;
  location: string;
  category: CategoryFilterType;
  categoryLabel: string;
  badge: string;
  image: string;
  thumbnail?: string;
  desc: string;
  description?: string;
  polyCount: string;
  medium: string;
  resonance: string;
  era: string;
  story: string;
  mechanics: string;
  legacy: string;
  modelType: 'antigravity' | 'bell' | 'fleming' | 'beville' | 'tesla' | 'astrolabe' | 'babbage' | 'wright' | string;
  schematicImage?: string;
  videoDuration?: string;
  model3dUrl?: string;
  videoUrl?: string;
  tags?: string[];
  curatorQuote?: string;
  curatorAuthor?: string;
  blueprintLedger?: { item: string; spec: string }[];
  hotspots?: { id: number; title: string; desc: string; pos: [number, number] }[];
}
