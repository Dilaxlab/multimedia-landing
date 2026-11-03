export interface HistoricalAsset {
  id: string;
  title: string;
  officialTitle?: string;
  inventor: string;
  patent: string;
  patentDate: string;
  location: string;
  category: 'TELECOM' | 'DOMESTIC' | 'WIND' | 'AERO' | 'TIME' | 'COMPUTING' | 'ELECTRICAL' | 'PRINTING';
  categoryLabel: string;
  badge: string;
  image: string;
  desc: string;
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
  curatorQuote?: string;
  curatorAuthor?: string;
  blueprintLedger?: { item: string; spec: string }[];
  hotspots?: { id: number; title: string; desc: string; pos: [number, number] }[];
}

export type CategoryFilterType = 'ALL' | 'TELECOM' | 'DOMESTIC' | 'WIND' | 'AERO' | 'TIME' | 'COMPUTING';
