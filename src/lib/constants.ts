import { HistoricalAsset } from '@/types/asset';
import { VideoVignette, BlueprintMedia } from '@/types/media';

export const TAXONOMY_MASTER_LIST: string[] = [
  "Test Taxonomy 01", "Test Taxonomy 02", "Test Taxonomy 03",
  "Test Taxonomy 04", "Test Taxonomy 05", "Test Taxonomy 06",
  "Test Taxonomy 07", "Test Taxonomy 08", "Test Taxonomy 09",
  "Test Taxonomy 10", "Test Taxonomy 11", "Test Taxonomy 12",
  "Test Taxonomy 13", "Test Taxonomy 14", "Test Taxonomy 15",
  "Test Taxonomy 16", "Test Taxonomy 17", "Test Taxonomy 18",
  "Test Taxonomy 19", "Test Taxonomy 20", "Test Taxonomy 21",
  "Test Taxonomy 22", "Test Taxonomy 23", "Test Taxonomy 24",
  "Test Taxonomy 25", "Test Taxonomy 26", "Test Taxonomy 27",
  "Test Taxonomy 28", "Test Taxonomy 29", "Test Taxonomy 30",
  "Test Taxonomy 31", "Test Taxonomy 32", "Test Taxonomy 33",
  "Test Taxonomy 34", "Test Taxonomy 35", "Test Taxonomy 36",
  "Test Taxonomy 37", "Test Taxonomy 38", "Test Taxonomy 39",
  "Test Taxonomy 40", "Test Taxonomy 41", "Test Taxonomy 42",
  "Test Taxonomy 43", "Test Taxonomy 44", "Test Taxonomy 45",
  "Test Taxonomy 46", "Test Taxonomy 47", "Test Taxonomy 48",
  "Test Taxonomy 49", "Test Taxonomy 50", "Test Taxonomy 51",
  "Test Taxonomy 52", "Test Taxonomy 53", "Test Taxonomy 54",
  "Test Taxonomy 55", "Test Taxonomy 56", "Test Taxonomy 57",
  "Test Taxonomy 58", "Test Taxonomy 59", "Test Taxonomy 60",
  "Test Taxonomy 61", "Test Taxonomy 62", "Test Taxonomy 63", "Test Taxonomy 64"
];

export const MOCK_HISTORICAL_ASSETS: HistoricalAsset[] = [
  {
    id: "HA-100",
    title: "Asset-1",
    officialTitle: "Asset-1 Official Title",
    inventor: "Inventor A",
    patent: "Pat. #249,002 • 1881",
    patentDate: "November 1, 2026",
    location: "Location A",
    category: "TIME",
    categoryLabel: "Category Label A",
    badge: "ABC Vault",
    image: "/images/character_beville.jpg",
    desc: "Test description for Asset-1.",
    polyCount: "142,000 Quads",
    medium: "Material A • Material B • Material C",
    resonance: "Test Resonance A",
    era: "Golden Age (1871-1910)",
    modelType: "ABC",
    schematicImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    videoDuration: "0:30",
    story: "Test story text for Asset-1.",
    mechanics: "Test mechanics text for Asset-1.",
    legacy: "Test legacy text for Asset-1.",
    curatorQuote: "Test curator quote for Asset-1.",
    curatorAuthor: "Test Curator A, Test Institution A",
    blueprintLedger: [
      { item: "Test Blueprint Item 1", spec: "Test spec 1" },
      { item: "Test Blueprint Item 2", spec: "Test spec 2" },
      { item: "Test Blueprint Item 3", spec: "Test spec 3" },
      { item: "Test Blueprint Item 4", spec: "Test spec 4" },
    ],
    hotspots: [
      { id: 1, title: "Hotspot 1", desc: "Test hotspot description 1.", pos: [35, 42] },
      { id: 2, title: "Hotspot 2", desc: "Test hotspot description 2.", pos: [62, 58] },
    ]
  },
  {
    id: "HA-101",
    title: "Asset-2",
    officialTitle: "Asset-2 Official Title",
    inventor: "Inventor B",
    patent: "Pat. #174,465 • 1876",
    patentDate: "Test Date B",
    location: "Location B",
    category: "TELECOM",
    categoryLabel: "Category Label B",
    badge: "3D Vault",
    image: "/images/character_bell.jpg",
    desc: "Test description for Asset-2.",
    polyCount: "84,000 Quads",
    medium: "Material D • Material E",
    resonance: "Test Resonance B",
    era: "Golden Age (1871-1910)",
    modelType: "bell",
    schematicImage: "/images/character_bell.jpg",
    videoDuration: "0:30",
    story: "Test story text for Asset-2.",
    mechanics: "Test mechanics text for Asset-2.",
    legacy: "Test legacy text for Asset-2.",
    curatorQuote: "Test curator quote for Asset-2.",
    curatorAuthor: "Test Curator B, Test Institution B",
    blueprintLedger: [
      { item: "Test Blueprint Item A", spec: "Test spec A" },
      { item: "Test Blueprint Item B", spec: "Test spec B" },
      { item: "Test Blueprint Item C", spec: "Test spec C" },
      { item: "Test Blueprint Item D", spec: "Test spec D" },
    ],
    hotspots: [
      { id: 1, title: "Hotspot A", desc: "Test hotspot description A.", pos: [45, 32] },
      { id: 2, title: "Hotspot B", desc: "Test hotspot description B.", pos: [55, 68] },
    ]
  },
  {
    id: "HA-102",
    title: "Asset-3",
    inventor: "Inventor C",
    patent: "Pat. #231,554 • 1880",
    patentDate: "Test Date C",
    location: "Location C",
    category: "DOMESTIC",
    categoryLabel: "Category Label C",
    badge: "Kinetic Model",
    image: "/images/character_fleming.jpg",
    desc: "Test description for Asset-3.",
    polyCount: "76,000 Quads",
    medium: "Material F • Material G",
    resonance: "Test Resonance C",
    era: "Golden Age (1871-1910)",
    modelType: "fleming",
    schematicImage: "/images/character_fleming.jpg",
    videoDuration: "0:30",
    story: "Test story text for Asset-3.",
    mechanics: "Test mechanics text for Asset-3.",
    legacy: "Test legacy text for Asset-3."
  },
  {
    id: "HA-103",
    title: "Asset-4",
    inventor: "Inventor D",
    patent: "Pat. #262,912 • 1882",
    patentDate: "Test Date D",
    location: "Location D",
    category: "WIND",
    categoryLabel: "Category Label D",
    badge: "Aero Twin",
    image: "/images/character_beville.jpg",
    desc: "Test description for Asset-4.",
    polyCount: "92,000 Quads",
    medium: "Material H • Material I",
    resonance: "Test Resonance D",
    era: "Golden Age (1871-1910)",
    modelType: "beville",
    schematicImage: "/images/character_beville.jpg",
    videoDuration: "0:30",
    story: "Test story text for Asset-4.",
    mechanics: "Test mechanics text for Asset-4.",
    legacy: "Test legacy text for Asset-4."
  },
  {
    id: "HA-104",
    title: "Asset-5",
    inventor: "Inventor E",
    patent: "Circa 1843 • Rare Artifact",
    patentDate: "c. 1843",
    location: "Location E",
    category: "TIME",
    categoryLabel: "Category Label E",
    badge: "Cosmic Vault",
    image: "/images/character_ada.jpg",
    desc: "Test description for Asset-5.",
    polyCount: "110,000 Quads",
    medium: "Material J • Material K",
    resonance: "Test Resonance E",
    era: "Pre-Industrial Enlightenment",
    modelType: "astrolabe",
    schematicImage: "/images/character_ada.jpg",
    videoDuration: "0:30",
    story: "Test story text for Asset-5.",
    mechanics: "Test mechanics text for Asset-5.",
    legacy: "Test legacy text for Asset-5."
  },
  {
    id: "HA-105",
    title: "Asset-6",
    inventor: "Inventor F",
    patent: "Pat. #223,898 • 1880",
    patentDate: "Test Date F",
    location: "Location F",
    category: "DOMESTIC",
    categoryLabel: "Category Label F",
    badge: "Filament Model",
    image: "/images/character_edison.jpg",
    desc: "Test description for Asset-6.",
    polyCount: "62,000 Quads",
    medium: "Material L • Material M",
    resonance: "Test Resonance F",
    era: "Golden Age (1871-1910)",
    modelType: "bell",
    schematicImage: "/images/character_edison.jpg",
    videoDuration: "0:30",
    story: "Test story text for Asset-6.",
    mechanics: "Test mechanics text for Asset-6.",
    legacy: "Test legacy text for Asset-6."
  },
  {
    id: "HA-106",
    title: "Asset-7",
    inventor: "Inventor G",
    patent: "Pat. #821,393 • 1906",
    patentDate: "Test Date G",
    location: "Location G",
    category: "AERO",
    categoryLabel: "Category Label G",
    badge: "Aero Kinematics",
    image: "/images/character_wright.jpg",
    desc: "Test description for Asset-7.",
    polyCount: "115,000 Quads",
    medium: "Material N • Material O",
    resonance: "Test Resonance G",
    era: "Early Modern (1911-1950)",
    modelType: "wright",
    schematicImage: "/images/character_wright.jpg",
    videoDuration: "0:30",
    story: "Test story text for Asset-7.",
    mechanics: "Test mechanics text for Asset-7.",
    legacy: "Test legacy text for Asset-7."
  },
  {
    id: "HA-107",
    title: "Asset-8",
    inventor: "Inventor H",
    patent: "Pat. #381,968 • 1888",
    patentDate: "Test Date H",
    location: "Location H",
    category: "TELECOM",
    categoryLabel: "Category Label H",
    badge: "Rotational Core",
    image: "/images/character_tesla.jpg",
    desc: "Test description for Asset-8.",
    polyCount: "88,000 Quads",
    medium: "Material P • Material Q",
    resonance: "Test Resonance H",
    era: "Golden Age (1871-1910)",
    modelType: "tesla",
    schematicImage: "/images/character_tesla.jpg",
    videoDuration: "0:30",
    story: "Test story text for Asset-8.",
    mechanics: "Test mechanics text for Asset-8.",
    legacy: "Test legacy text for Asset-8."
  },
  {
    id: "HA-108",
    title: "Asset-9",
    inventor: "Inventor I",
    patent: "Archival Registry #1849",
    patentDate: "Circa 1849",
    location: "Location I",
    category: "COMPUTING",
    categoryLabel: "Category Label I",
    badge: "Gear Core",
    image: "/images/character_babbage.jpg",
    desc: "Test description for Asset-9.",
    polyCount: "140,000 Quads",
    medium: "Material R • Material S",
    resonance: "Test Resonance I",
    era: "Industrial Era (1760-1870)",
    modelType: "babbage",
    schematicImage: "/images/character_babbage.jpg",
    videoDuration: "0:30",
    story: "Test story text for Asset-9.",
    mechanics: "Test mechanics text for Asset-9.",
    legacy: "Test legacy text for Asset-9."
  },
  {
    id: "HA-109",
    title: "Asset-10",
    officialTitle: "Asset-10 Official Title",
    inventor: "Inventor J",
    patent: "Pat. #174,465 • 1876",
    patentDate: "Test Date J",
    location: "Location J",
    category: "TELECOM",
    categoryLabel: "Category Label J",
    badge: "Centennial Gold",
    image: "/images/character_bell.jpg",
    desc: "Test description for Asset-10.",
    polyCount: "98,000 Quads",
    medium: "Material T • Material U • Material V",
    resonance: "Test Resonance J",
    era: "Golden Age (1871-1910)",
    modelType: "telephone",
    schematicImage: "/images/character_bell.jpg",
    videoDuration: "0:30",
    curatorQuote: "Test curator quote for Asset-10.",
    curatorAuthor: "Test Curator J, Test Institution J",
    story: "Test story text for Asset-10.",
    mechanics: "Test mechanics text for Asset-10.",
    legacy: "Test legacy text for Asset-10.",
    blueprintLedger: [
      { item: "Test Blueprint Item X", spec: "Test spec X" },
      { item: "Test Blueprint Item Y", spec: "Test spec Y" },
      { item: "Test Blueprint Item Z", spec: "Test spec Z" },
      { item: "Test Blueprint Item W", spec: "Test spec W" }
    ],
    hotspots: [
      { id: 1, title: "Hotspot X", desc: "Test hotspot description X.", pos: [35, 45] },
      { id: 2, title: "Hotspot Y", desc: "Test hotspot description Y.", pos: [65, 52] },
      { id: 3, title: "Hotspot Z", desc: "Test hotspot description Z.", pos: [50, 80] }
    ]
  }
];

export const MOCK_VIDEO_VIGNETTES: VideoVignette[] = [
  {
    id: "VID-01",
    assetId: "HA-101",
    title: "Test Vignette 1",
    inventor: "Inventor B",
    shortDesc: "Test short description for vignette 1.",
    duration: "0:30",
    totalSeconds: 30,
    narrator: "Test Narrator A",
    narratorInstitution: "Test Institution A",
    thumbnailUrl: "/images/character_bell.jpg",
    scenes: [
      {
        title: "01: Test Scene One",
        timeRange: "00:00 - 00:10",
        description: "Test scene description one."
      },
      {
        title: "02: Test Scene Two",
        timeRange: "00:10 - 00:20",
        description: "Test scene description two."
      },
      {
        title: "03: Test Scene Three",
        timeRange: "00:20 - 00:30",
        description: "Test scene description three."
      }
    ]
  },
  {
    id: "VID-02",
    assetId: "HA-102",
    title: "Test Vignette 2",
    inventor: "Inventor C",
    shortDesc: "Test short description for vignette 2.",
    duration: "0:30",
    totalSeconds: 30,
    narrator: "Test Narrator B",
    narratorInstitution: "Test Institution B",
    thumbnailUrl: "/images/character_fleming.jpg",
    scenes: [
      {
        title: "01: Test Scene A",
        timeRange: "00:00 - 00:10",
        description: "Test scene description A."
      },
      {
        title: "02: Test Scene B",
        timeRange: "00:10 - 00:20",
        description: "Test scene description B."
      },
      {
        title: "03: Test Scene C",
        timeRange: "00:20 - 00:30",
        description: "Test scene description C."
      }
    ]
  },
  {
    id: "VID-03",
    assetId: "HA-103",
    title: "Test Vignette 3",
    inventor: "Inventor D",
    shortDesc: "Test short description for vignette 3.",
    duration: "0:30",
    totalSeconds: 30,
    narrator: "Test Narrator C",
    narratorInstitution: "Test Institution C",
    thumbnailUrl: "/images/character_beville.jpg",
    scenes: [
      {
        title: "01: Test Scene D",
        timeRange: "00:00 - 00:10",
        description: "Test scene description D."
      },
      {
        title: "02: Test Scene E",
        timeRange: "00:10 - 00:20",
        description: "Test scene description E."
      },
      {
        title: "03: Test Scene F",
        timeRange: "00:20 - 00:30",
        description: "Test scene description F."
      }
    ]
  },
  {
    id: "VID-04",
    assetId: "HA-105",
    title: "Test Vignette 4",
    inventor: "Inventor F",
    shortDesc: "Test short description for vignette 4.",
    duration: "0:30",
    totalSeconds: 30,
    narrator: "Test Narrator D",
    narratorInstitution: "Test Institution D",
    thumbnailUrl: "/images/character_edison.jpg",
    scenes: [
      {
        title: "01: Test Scene G",
        timeRange: "00:00 - 00:10",
        description: "Test scene description G."
      },
      {
        title: "02: Test Scene H",
        timeRange: "00:10 - 00:20",
        description: "Test scene description H."
      },
      {
        title: "03: Test Scene I",
        timeRange: "00:20 - 00:30",
        description: "Test scene description I."
      }
    ]
  }
];

export const MOCK_BLUEPRINTS: BlueprintMedia[] = [
  {
    id: "BP-01",
    title: "Test Blueprint 1",
    type: "BLUEPRINT",
    typeLabel: "Test Type Label 1",
    format: "Test format 1",
    imageUrl: "/images/thumb_steam_hq.jpg",
    accessionRef: "TEST-REF-01",
    date: "1884"
  },
  {
    id: "BP-02",
    title: "Test Blueprint 2",
    type: "3D",
    typeLabel: "Test Type Label 2",
    format: "Test format 2",
    imageUrl: "/images/raw_card_4_astrolabe.jpg",
    accessionRef: "TEST-REF-02",
    date: "c. 1780"
  },
  {
    id: "BP-03",
    title: "Test Blueprint 3",
    type: "BLUEPRINT",
    typeLabel: "Test Type Label 3",
    format: "Test format 3",
    imageUrl: "/images/raw_card_1_bell.jpg",
    accessionRef: "TEST-REF-03",
    date: "March 7, 1876"
  },
  {
    id: "BP-04",
    title: "Test Blueprint 4",
    type: "PLATE",
    typeLabel: "Test Type Label 4",
    format: "Test format 4",
    imageUrl: "/images/raw_card_5_edison.jpg",
    accessionRef: "TEST-REF-04",
    date: "1881"
  },
  {
    id: "BP-05",
    title: "Test Blueprint 5",
    type: "POSTER",
    typeLabel: "Test Type Label 5",
    format: "Test format 5",
    imageUrl: "/images/raw_card_2_washing.jpg",
    accessionRef: "TEST-REF-05",
    date: "1880 Reconstructed"
  },
  {
    id: "BP-06",
    title: "Test Blueprint 6",
    type: "3D",
    typeLabel: "Test Type Label 6",
    format: "Test format 6",
    imageUrl: "/images/raw_card_3_windmill.jpg",
    accessionRef: "TEST-REF-06",
    date: "1888 Reconstructed"
  },
  {
    id: "BP-07",
    title: "Test Blueprint 7",
    type: "POSTER",
    typeLabel: "Test Type Label 7",
    format: "Test format 7",
    imageUrl: "/images/raw_card_7_tesla.jpg",
    accessionRef: "TEST-REF-07",
    date: "1888"
  },
  {
    id: "BP-08",
    title: "Test Blueprint 8",
    type: "PLATE",
    typeLabel: "Test Type Label 8",
    format: "Test format 8",
    imageUrl: "/images/raw_card_6_wright.jpg",
    accessionRef: "TEST-REF-08",
    date: "1903"
  }
];
