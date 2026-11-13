import { HistoricalAsset, CategoryFilterType } from '@/types/asset';
import { VideoVignette, BlueprintMedia } from '@/types/media';

/** External 3D Virtual Tour Museum Website URL (configurable via .env.local) */
export const VIRTUAL_TOUR_MUSEUM_URL =
  process.env.NEXT_PUBLIC_VIRTUAL_TOUR_URL || 'https://your-external-website.com';

export interface CategoryMeta {
  key: CategoryFilterType;
  label: string;
  shortName: string;
  emoji: string;
  icon: string;
  era: string;
  desc: string;
  spotlightAssetId: string;
}

export const OFFICIAL_18_CATEGORIES: CategoryMeta[] = [
  {
    key: 'ENERGY',
    label: 'Energy & Power Generation',
    shortName: 'Energy',
    emoji: '⚡',
    icon: 'Zap',
    era: '1780 — 1920',
    desc: 'Electromagnetic dynamos, polyphase AC induction motors, and high-voltage transmission grids.',
    spotlightAssetId: 'HA-107',
  },
  {
    key: 'TELECOM',
    label: 'Telephony & Acoustic Telegraphy',
    shortName: 'Telecom',
    emoji: '📡',
    icon: 'Radio',
    era: '1837 — 1915',
    desc: 'Speaking transmitters, carbon microphones, and underwater harmonic telegraph networks.',
    spotlightAssetId: 'HA-101',
  },
  {
    key: 'DOMESTIC',
    label: 'Domestic Mechanics & Household',
    shortName: 'Household',
    emoji: '🧵',
    icon: 'Sparkles',
    era: '1850 — 1930',
    desc: 'Mechanical agitators, sewing mechanisms, and labor-saving appliances that transformed the home.',
    spotlightAssetId: 'HA-102',
  },
  {
    key: 'TIME',
    label: 'Horology & Precision Escapements',
    shortName: 'Horology',
    emoji: '🕐',
    icon: 'Clock',
    era: '1650 — 1900',
    desc: 'Chronometer balances, deadbeat escapements, and astronomical timekeeping reticles.',
    spotlightAssetId: 'HA-100',
  },
  {
    key: 'WIND',
    label: 'Wind & Rotary Kinetic Systems',
    shortName: 'Wind',
    emoji: '💨',
    icon: 'Wind',
    era: '1750 — 1910',
    desc: 'Self-governing centrifugal windmills, vane governors, and aerodynamic rotary dynamo power.',
    spotlightAssetId: 'HA-103',
  },
  {
    key: 'AERO',
    label: 'Aeronautics & Aerial Navigation',
    shortName: 'Aero',
    emoji: '✈️',
    icon: 'Plane',
    era: '1890 — 1940',
    desc: 'Wing-warping aerofoils, biplane gliders, and internal combustion airborne propulsion.',
    spotlightAssetId: 'HA-106',
  },
  {
    key: 'COMPUTING',
    label: 'Mechanical Computing Engines',
    shortName: 'Computing',
    emoji: '🧮',
    icon: 'Cpu',
    era: '1820 — 1945',
    desc: 'Difference calculating trains, punched-card analytical gears, and early algorithmic registers.',
    spotlightAssetId: 'HA-108',
  },
  {
    key: 'STEAM',
    label: 'Steam Dynamics & Pressure Vessels',
    shortName: 'Steam',
    emoji: '⚙️',
    icon: 'Flame',
    era: '1769 — 1920',
    desc: 'Centrifugal governor valves, compound cylinders, and superheated steam locomotion.',
    spotlightAssetId: 'HA-110',
  },
  {
    key: 'PRINTING',
    label: 'Printing Presses & Movable Types',
    shortName: 'Printing',
    emoji: '🖨️',
    icon: 'Printer',
    era: '1790 — 1925',
    desc: 'Rotary cylinder presses, automated line-casting matrices, and high-speed lithography.',
    spotlightAssetId: 'HA-111',
  },
  {
    key: 'OPTICS',
    label: 'Optics, Lenses & Microscopes',
    shortName: 'Optics',
    emoji: '🔬',
    icon: 'Search',
    era: '1700 — 1910',
    desc: 'Apochromatic lens geometry, oil-immersion condensers, and astronomical refractors.',
    spotlightAssetId: 'HA-112',
  },
  {
    key: 'CIVIL',
    label: 'Architectural & Truss Engineering',
    shortName: 'Civil',
    emoji: '🏗️',
    icon: 'Building2',
    era: '1820 — 1930',
    desc: 'Pioneering wire cable suspension, structural lattice girders, and monumental caissons.',
    spotlightAssetId: 'HA-113',
  },
  {
    key: 'AGRICULTURE',
    label: 'Agricultural Harvesters & Machinery',
    shortName: 'Agriculture',
    emoji: '🌾',
    icon: 'Tractor',
    era: '1830 — 1925',
    desc: 'Mechanical grain reapers, steam traction plows, and automated grain threshers.',
    spotlightAssetId: 'HA-114',
  },
  {
    key: 'MARITIME',
    label: 'Maritime Propulsion & Navigation',
    shortName: 'Maritime',
    emoji: '⚓',
    icon: 'Anchor',
    era: '1800 — 1920',
    desc: 'Submerged screw propellers, ironclad naval hulls, and gyrocompass stabilization.',
    spotlightAssetId: 'HA-115',
  },
  {
    key: 'LIGHTING',
    label: 'Incandescent & Arc Illumination',
    shortName: 'Lighting',
    emoji: '💡',
    icon: 'Lightbulb',
    era: '1870 — 1925',
    desc: 'High-vacuum carbon filament lamps, electric arc streetlights, and mercury vapor tubes.',
    spotlightAssetId: 'HA-105',
  },
  {
    key: 'METALLURGY',
    label: 'Metallurgy & Blast Furnace Tech',
    shortName: 'Metallurgy',
    emoji: '🧪',
    icon: 'Hammer',
    era: '1850 — 1935',
    desc: 'Pneumatic air-blast converters, electrolytic aluminum reduction, and industrial alloys.',
    spotlightAssetId: 'HA-116',
  },
  {
    key: 'TRANSIT',
    label: 'Rail Kinematics & Locomotives',
    shortName: 'Transit',
    emoji: '🚂',
    icon: 'Train',
    era: '1825 — 1930',
    desc: 'Pneumatic triple-valve air brakes, articulated steam chassis, and electric urban trolleys.',
    spotlightAssetId: 'HA-117',
  },
  {
    key: 'MEDICAL',
    label: 'Surgical & Diagnostic Instruments',
    shortName: 'Medical',
    emoji: '🩺',
    icon: 'Activity',
    era: '1810 — 1920',
    desc: 'Acoustic stethoscopes, cold-cathode Roentgen X-ray tubes, and antiseptic steam autoclaves.',
    spotlightAssetId: 'HA-118',
  },
  {
    key: 'PHOTOGRAPHY',
    label: 'Photography & Cinematography',
    shortName: 'Photo',
    emoji: '📷',
    icon: 'Camera',
    era: '1839 — 1915',
    desc: 'Wet collodion glass plates, flexible celluloid film reels, and intermittent motion projectors.',
    spotlightAssetId: 'HA-119',
  },
];

export const TAXONOMY_MASTER_LIST: string[] = OFFICIAL_18_CATEGORIES.map(
  (c) => `${c.emoji} ${c.label}`
);

export { MOCK_HISTORICAL_ASSETS } from "@/data/historicalAssets";

export const MOCK_VIDEO_VIGNETTES: VideoVignette[] = [
  {
    "id": "VID-01",
    "assetId": "HA-101",
    "categoryId": "TELECOM",
    "title": "The Undulatory Wave Transmitter",
    "inventor": "Alexander Graham Bell",
    "shortDesc": "The laboratory breakthrough that transmitted continuous variable current speech waves across copper telegraph wire.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Dr. Alistair Vance",
    "narratorInstitution": "Smithsonian Acoustic Technology Division",
    "thumbnailUrl": "/images/character_bell.jpg",
    "scenes": [
      {
        "title": "01: The Harmonic Dilemma",
        "timeRange": "00:00 - 00:10",
        "description": "Telegraph cables restricted to staccato Morse pulses cannot convey human vocal inflections."
      },
      {
        "title": "02: The Liquid Breakthrough",
        "timeRange": "00:10 - 00:20",
        "description": "Acidulated water diaphragm needle modulates continuous current resistance synchronously."
      },
      {
        "title": "03: The Global Exchange",
        "timeRange": "00:20 - 00:30",
        "description": "Transcontinental copper lines birth worldwide acoustic communication grids."
      }
    ]
  },
  {
    "id": "VID-02",
    "assetId": "HA-102",
    "categoryId": "DOMESTIC",
    "title": "Mechanics of the Domestic Hearth",
    "inventor": "Caroline Fleming",
    "shortDesc": "How planetary agitator gearing emancipated households from exhausting manual laundry labor.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Elena Rostova",
    "narratorInstitution": "Institute of Social Technology & Household History",
    "thumbnailUrl": "/images/character_fleming.jpg",
    "scenes": [
      {
        "title": "01: The Domestic Burden",
        "timeRange": "00:00 - 00:10",
        "description": "Washboard friction demanded 14 hours of weekly physical strain per household."
      },
      {
        "title": "02: The Rotary Agitator",
        "timeRange": "00:10 - 00:20",
        "description": "Double-acting wooden agitator fingers force pressurized soapy water through fibers."
      },
      {
        "title": "03: The Modern Home",
        "timeRange": "00:20 - 00:30",
        "description": "Mechanical domestic tools liberate human energy for civic, scientific, and educational pursuit."
      }
    ]
  },
  {
    "id": "VID-03",
    "assetId": "HA-103",
    "categoryId": "WIND",
    "title": "Harvesting the Prairie Gales",
    "inventor": "Charles F. Brush",
    "shortDesc": "Automatic cedar windmill dynamos charging early subterranean battery banks in Cleveland.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Dr. Marcus Thorne",
    "narratorInstitution": "Renewable Kinetic Archive, Cleveland",
    "thumbnailUrl": "/images/windmill_isolated.png",
    "scenes": [
      {
        "title": "01: The Cleveland Gale",
        "timeRange": "00:00 - 00:10",
        "description": "Lake Erie breezes buffet the eighty-thousand-pound white cedar tower rotor."
      },
      {
        "title": "02: The Stepped Gearing",
        "timeRange": "00:10 - 00:20",
        "description": "Internal 50-to-1 pulley systems step rotor torque up to dynamo rotational velocity."
      },
      {
        "title": "03: Subterranean Power",
        "timeRange": "00:20 - 00:30",
        "description": "Four hundred lead-acid storage cells absorb uninterrupted clean kinetic current."
      }
    ]
  },
  {
    "id": "VID-04",
    "assetId": "HA-105",
    "categoryId": "LIGHTING",
    "title": "The Incandescent Carbonized Thread",
    "inventor": "Thomas Alva Edison",
    "shortDesc": "Inside Menlo Park: testing thousands of plant fibers until carbonized Japanese bamboo shone continuous light.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Lucia Moretti",
    "narratorInstitution": "Edison Historical Laboratories Foundation",
    "thumbnailUrl": "/images/character_edison.jpg",
    "scenes": [
      {
        "title": "01: The Search for Filament",
        "timeRange": "00:00 - 00:10",
        "description": "Six thousand botanical specimens tested inside high-vacuum Sprengel pump glass globes."
      },
      {
        "title": "02: The Bamboo Breakthrough",
        "timeRange": "00:10 - 00:20",
        "description": "Carbonized Japanese bamboo thread endures 1,200 continuous hours of golden incandescence."
      },
      {
        "title": "03: Night Transformed",
        "timeRange": "00:20 - 00:30",
        "description": "Central station distribution banishes darkness from cities across the industrialized world."
      }
    ]
  },
  {
    "id": "VID-05",
    "assetId": "HA-107",
    "categoryId": "ENERGY",
    "title": "The Rotating Magnetic Field",
    "inventor": "Nikola Tesla",
    "shortDesc": "Visualizing polyphase alternating current and the commutator-free brushless induction motor.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Prof. Henrik Lindqvist",
    "narratorInstitution": "International Electrotechnical Commission",
    "thumbnailUrl": "/images/character_tesla.jpg",
    "scenes": [
      {
        "title": "01: The Commutator Dilemma",
        "timeRange": "00:00 - 00:10",
        "description": "Direct current dynamos spark and waste voltage, limited to short urban radiuses."
      },
      {
        "title": "02: The Geometric Epiphany",
        "timeRange": "00:10 - 00:20",
        "description": "Two out-of-phase sinusoidal waves generate a frictionless revolving stator magnetic field."
      },
      {
        "title": "03: Niagara Power Transmission",
        "timeRange": "00:20 - 00:30",
        "description": "High-voltage alternating current transmits power across continents to drive modern industry."
      }
    ]
  },
  {
    "id": "VID-06",
    "assetId": "HA-106",
    "categoryId": "AERO",
    "title": "Equilibrium in Three Dimensions",
    "inventor": "Orville & Wilbur Wright",
    "shortDesc": "How wing-warping cables and synchronized rudder controls conquered the unstable ocean of air.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Captain James Sterling",
    "narratorInstitution": "Royal Aeronautical Society",
    "thumbnailUrl": "/images/character_wright.jpg",
    "scenes": [
      {
        "title": "01: The Atlantic Squalls",
        "timeRange": "00:00 - 00:10",
        "description": "Kill Devil Hills sand dunes provide sustained headwinds for glider test flights."
      },
      {
        "title": "02: Dynamic Wing-Warping",
        "timeRange": "00:10 - 00:20",
        "description": "Helical twisting of biplane wingtips produces coordinated aerodynamic banking roll."
      },
      {
        "title": "03: Powered Sustained Flight",
        "timeRange": "00:20 - 00:30",
        "description": "On December 17, 1903, humanity takes controlled heavier-than-air flight into history."
      }
    ]
  },
  {
    "id": "VID-07",
    "assetId": "HA-108",
    "categoryId": "COMPUTING",
    "title": "Weaving Algebraic Patterns",
    "inventor": "Charles Babbage & Ada Lovelace",
    "shortDesc": "Ada Lovelace documentations of the Analytical Engine Mill, Store, and Jacquard punch cards.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Dr. Beatrice Montgomery",
    "narratorInstitution": "Babbage Archive for Computation",
    "thumbnailUrl": "/images/character_babbage.jpg",
    "scenes": [
      {
        "title": "01: The Human Computer Flaw",
        "timeRange": "00:00 - 00:10",
        "description": "Navigational and astronomical logarithm tables riddle hand calculations with fatal errors."
      },
      {
        "title": "02: Mill, Store, and Jacquard Cards",
        "timeRange": "00:10 - 00:20",
        "description": "Toothed brass wheels calculate arithmetic operations directed by punched textile cards."
      },
      {
        "title": "03: The First Computer Algorithm",
        "timeRange": "00:20 - 00:30",
        "description": "Lovelace conceives software, predicting machines could compose music and process symbols."
      }
    ]
  },
  {
    "id": "VID-08",
    "assetId": "HA-110",
    "categoryId": "STEAM",
    "title": "The Separate Condenser Breakthrough",
    "inventor": "James Watt",
    "shortDesc": "Keeping the working cylinder continuously hot while condensing steam in an auxiliary vacuum chamber.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Malcolm MacIntyre",
    "narratorInstitution": "Scottish Industrial Heritage Trust",
    "thumbnailUrl": "/images/thumb_steam_engine.jpg",
    "scenes": [
      {
        "title": "01: The Newcomen Inefficiency",
        "timeRange": "00:00 - 00:10",
        "description": "Repeated chilling and heating of cast iron cylinders consumes four-fifths of fuel energy."
      },
      {
        "title": "02: The Auxiliary Cold Vessel",
        "timeRange": "00:10 - 00:20",
        "description": "Steam vents into an isolated water-cooled chamber, condensing into vacuum instantly."
      },
      {
        "title": "03: The Rotary Factory Drive",
        "timeRange": "00:20 - 00:30",
        "description": "Sun-and-planet gear linkages convert reciprocating motion to continuous industrial factory power."
      }
    ]
  },
  {
    "id": "VID-09",
    "assetId": "HA-100",
    "categoryId": "TIME",
    "title": "The Geometry of Celestial Time",
    "inventor": "Henry Beville",
    "shortDesc": "Reconciling astronomical astrolabe projections with deadbeat balance escapement mechanisms.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Dr. Julian Vance",
    "narratorInstitution": "Royal Horological Society",
    "thumbnailUrl": "/images/character_beville.jpg",
    "scenes": [
      {
        "title": "01: Celestial Coordinates",
        "timeRange": "00:00 - 00:10",
        "description": "Navigators sight stellar altitudes across fluctuating latitudes using brass tympan plates."
      },
      {
        "title": "02: The Isochronous Escapement",
        "timeRange": "00:10 - 00:20",
        "description": "Jeweled pallets impulse the balance wheel without recoil, maintaining steady seconds."
      },
      {
        "title": "03: The Precision Chronometer",
        "timeRange": "00:20 - 00:30",
        "description": "Mechanical timekeeping synchronizes transoceanic exploration and railway networks."
      }
    ]
  },
  {
    "id": "VID-10",
    "assetId": "HA-111",
    "categoryId": "PRINTING",
    "title": "The Gutenberg Movable Typographic Matrix",
    "inventor": "Johannes Gutenberg",
    "shortDesc": "Hand-molded alloy movable type and screw platen presses that sparked the spread of human knowledge.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Prof. Klaus Becker",
    "narratorInstitution": "Mainz Gutenberg Museum",
    "thumbnailUrl": "/images/character_babbage.jpg",
    "scenes": [
      {
        "title": "01: The Scribes Bottleneck",
        "timeRange": "00:00 - 00:10",
        "description": "Hand-copying manuscripts required years of labor per volume, restricting knowledge."
      },
      {
        "title": "02: The Lead-Tin Adjustable Mold",
        "timeRange": "00:10 - 00:20",
        "description": "Interchangeable durable metal letters cast by the thousands fit into composing sticks."
      },
      {
        "title": "03: The Printing Revolution",
        "timeRange": "00:20 - 00:30",
        "description": "Oil-based lampblack inks and wooden screw platens mass-produce identical texts worldwide."
      }
    ]
  },
  {
    "id": "VID-11",
    "assetId": "HA-112",
    "categoryId": "OPTICS",
    "title": "The Microcosm: Single-Sphere High-Magnification",
    "inventor": "Antonie van Leeuwenhoek",
    "shortDesc": "Discovering microbial animalcules and blood capillary circulation through hand-ground glass sphere lenses.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Dr. Sarah Jenkins",
    "narratorInstitution": "Delft Historical Society for Microbiology",
    "thumbnailUrl": "/images/raw_card_4_astrolabe.jpg",
    "scenes": [
      {
        "title": "01: Grinding the Sphere",
        "timeRange": "00:00 - 00:10",
        "description": "Flame-polishing pinhead-sized glass beads to achieve flawless spherical optical curvature."
      },
      {
        "title": "02: The Living Drop",
        "timeRange": "00:10 - 00:20",
        "description": "At 275x magnification, unseen teeming protozoa and bacteria swim into human sight."
      },
      {
        "title": "03: The Dawn of Cellular Biology",
        "timeRange": "00:20 - 00:30",
        "description": "Letters to the Royal Society prove an invisible living world surrounds all creation."
      }
    ]
  },
  {
    "id": "VID-12",
    "assetId": "HA-113",
    "categoryId": "CIVIL",
    "title": "Puddle-Iron Lattice & Cantilever Statics",
    "inventor": "Gustave Eiffel",
    "shortDesc": "How aerodynamic open-work puddle iron trusses withstood gale shears 300 meters above Paris.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Claire Delacroix",
    "narratorInstitution": "Centre d'Histoire des M\u00e9tiers et des Ponts",
    "thumbnailUrl": "/images/cards_row.jpg",
    "scenes": [
      {
        "title": "01: Defying Wind Shear",
        "timeRange": "00:00 - 00:10",
        "description": "Mathematical calculation of parabolic truss tangents channels wind loads directly to caissons."
      },
      {
        "title": "02: Two Million Hot Rivets",
        "timeRange": "00:10 - 00:20",
        "description": "Prefabricated puddle iron beams assembled with millimeter precision without scaffolding accidents."
      },
      {
        "title": "03: The Monument of Modernity",
        "timeRange": "00:20 - 00:30",
        "description": "Rising 300 meters, Eiffel proves metal frameworks will define the modern urban skyline."
      }
    ]
  },
  {
    "id": "VID-13",
    "assetId": "HA-114",
    "categoryId": "AGRICULTURE",
    "title": "The Mechanical Harvester & The Endless Furrow",
    "inventor": "Cyrus Hall McCormick",
    "shortDesc": "Mechanizing grain harvesting with reciprocating sickle blades and divider boards.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Dr. Arthur Pendelton",
    "narratorInstitution": "Smithsonian Agricultural Machinery Archive",
    "thumbnailUrl": "/images/character_edison_stage.png",
    "scenes": [
      {
        "title": "01: The Summer Scythe Crisis",
        "timeRange": "00:00 - 00:10",
        "description": "Wheat rots in fields when hand sickle harvesters cannot cut ripening grain in time."
      },
      {
        "title": "02: The Serrated Knife Motion",
        "timeRange": "00:10 - 00:20",
        "description": "Ground wheels drive a pitman arm reciprocating high-speed blades through stationary guards."
      },
      {
        "title": "03: Feeding the Nations",
        "timeRange": "00:20 - 00:30",
        "description": "One machine reaps ten men's harvest, preventing famine and releasing workforce for cities."
      }
    ]
  },
  {
    "id": "VID-14",
    "assetId": "HA-115",
    "categoryId": "MARITIME",
    "title": "The Steam Paddlewheel & Naval Propulsion",
    "inventor": "Robert Fulton",
    "shortDesc": "The Clermont steaming against the Hudson River tide, inaugurating scheduled commercial steam navigation.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Commander Donald Ross",
    "narratorInstitution": "Hudson River Maritime Society",
    "thumbnailUrl": "/images/character_wright.jpg",
    "scenes": [
      {
        "title": "01: Hostile Tides and Currents",
        "timeRange": "00:00 - 00:10",
        "description": "Sailing sloops spend days becalmed or battling contrary river currents."
      },
      {
        "title": "02: The Boulton & Watt Engine Drive",
        "timeRange": "00:10 - 00:20",
        "description": "Steam cylinders drive 15-foot radial wooden paddlewheels churn water continuously."
      },
      {
        "title": "03: River Transit Unbound",
        "timeRange": "00:20 - 00:30",
        "description": "150 miles steamed in 32 hours; steamships conquer global rivers, bays, and open seas."
      }
    ]
  },
  {
    "id": "VID-15",
    "assetId": "HA-116",
    "categoryId": "METALLURGY",
    "title": "The Decarburizing Blast: Mass Steel Unleashed",
    "inventor": "Sir Henry Bessemer",
    "shortDesc": "Blasting cold air through molten pig iron to burn impurities without extra fuel.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Dr. Geoffrey Thornton",
    "narratorInstitution": "Kelham Island Metallurgy Archive",
    "thumbnailUrl": "/images/cards_row.jpg",
    "scenes": [
      {
        "title": "01: The Expensive Crucible Steel",
        "timeRange": "00:00 - 00:10",
        "description": "Steel melted in tiny clay pots costs hundreds of pounds per ton, limiting use."
      },
      {
        "title": "02: The Exothermic Firestorm",
        "timeRange": "00:10 - 00:20",
        "description": "Air blasts through tuy\u00e8res; burning carbon raises temperatures to boiling white heat."
      },
      {
        "title": "03: The Age of Steel",
        "timeRange": "00:20 - 00:30",
        "description": "Thirty tons of steel produced in twenty minutes, forging global rails and skyscrapers."
      }
    ]
  },
  {
    "id": "VID-16",
    "assetId": "HA-117",
    "categoryId": "TRANSIT",
    "title": "Locomotion No. 1 & The Flanged Rail Grid",
    "inventor": "George Stephenson",
    "shortDesc": "Direct-coupled connecting rods and flanged wheels conquering rolling friction on public tracks.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "William H. Campbell",
    "narratorInstitution": "National Railway Museum, York",
    "thumbnailUrl": "/images/hero_stage_bg.jpg",
    "scenes": [
      {
        "title": "01: Mud Turnpikes & Horse Carts",
        "timeRange": "00:00 - 00:10",
        "description": "Heavy coal wagons destroy rutted roads, limiting regional inland trade."
      },
      {
        "title": "02: The Flanged Steel Interface",
        "timeRange": "00:10 - 00:20",
        "description": "Flanged iron wheels on cast rails slash friction by ninety percent, synchronizing four axles."
      },
      {
        "title": "03: Stockton & Darlington 1825",
        "timeRange": "00:20 - 00:30",
        "description": "Four hundred passengers travel at 15 mph, launching the worldwide railway revolution."
      }
    ]
  },
  {
    "id": "VID-17",
    "assetId": "HA-118",
    "categoryId": "MEDICAL",
    "title": "Acoustic Auscultation: Listening Inside the Chest",
    "inventor": "Ren\u00e9 Laennec",
    "shortDesc": "The hollow wooden cylinder that allowed physicians to diagnose heart and lung pathologies in living patients.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Dr. Monique Laurent",
    "narratorInstitution": "Necker Hospital Historical Foundation, Paris",
    "thumbnailUrl": "/images/character_fleming_stage.png",
    "scenes": [
      {
        "title": "01: The Silent Malady",
        "timeRange": "00:00 - 00:10",
        "description": "Physicians could only identify heart diseases and tuberculosis lesions post-mortem."
      },
      {
        "title": "02: The Rolled Paper Cylinder",
        "timeRange": "00:10 - 00:20",
        "description": "Acoustic waveguide conduction amplifies cardiac valve clicks and pulmonary murmurs."
      },
      {
        "title": "03: The Foundation of Clinical Cardiology",
        "timeRange": "00:20 - 00:30",
        "description": "The stethoscope becomes the universal emblem of scientific internal diagnosis."
      }
    ]
  },
  {
    "id": "VID-18",
    "assetId": "HA-119",
    "categoryId": "PHOTOGRAPHY",
    "title": "The Daguerreotype: Fixing the Sun's Shadow",
    "inventor": "Louis Jacques Mand\u00e9 Daguerre",
    "shortDesc": "Capturing mirror-sharp reality on iodized silver-plated copper sheets developed in mercury vapors.",
    "duration": "0:30",
    "totalSeconds": 30,
    "narrator": "Giselle Marchand",
    "narratorInstitution": "Soci\u00e9t\u00e9 Fran\u00e7aise de Photographie",
    "thumbnailUrl": "/images/character_bell.jpg",
    "scenes": [
      {
        "title": "01: The Fading Camera Obscura",
        "timeRange": "00:00 - 00:10",
        "description": "Optical lens projections fade the instant the light source shifts."
      },
      {
        "title": "02: The Heated Mercury Fumes",
        "timeRange": "00:10 - 00:20",
        "description": "Invisible latent images on silver halide plates develop into miraculous mirror-like fidelity."
      },
      {
        "title": "03: Free to the World",
        "timeRange": "00:20 - 00:30",
        "description": "In 1839 France gifts photography to humanity, forever preserving human history."
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
