export interface VideoVignette {
  id: string;
  assetId: string;
  title: string;
  inventor: string;
  shortDesc: string;
  duration: string;
  totalSeconds: number;
  narrator: string;
  narratorInstitution: string;
  thumbnailUrl: string;
  scenes: [
    { title: string; timeRange: string; description: string },
    { title: string; timeRange: string; description: string },
    { title: string; timeRange: string; description: string }
  ];
}

export interface BlueprintMedia {
  id: string;
  title: string;
  type: '3D' | 'BLUEPRINT' | 'PLATE' | 'POSTER';
  typeLabel: string;
  format: string;
  imageUrl: string;
  accessionRef: string;
  date: string;
}
