import { CategoryFilterType, HistoricalAsset } from '@/types/asset';

export interface CategoryClassification {
  number: string; // "01" to "50"
  slug: string;
  title: string;
  quote: string;
  tagline: string;
  themeSlug: string;
  emoji: string;
  legacyCategoryKeys: CategoryFilterType[];
}

export interface ThemeFamily {
  number: string; // "01" to "10"
  slug: string;
  title: string;
  categoryRange: string; // e.g., "Categories 1 – 5"
  description: string;
  emoji: string;
  accentColor: string;
  categories: CategoryClassification[];
}

export const THEME_FAMILIES: ThemeFamily[] = [
  {
    number: '01',
    slug: 'industrial-innovation-manufacturing',
    title: 'Industrial Innovation & Manufacturing',
    categoryRange: 'Categories 1 – 5',
    description:
      'From mechanical workshops and precision tooling to mass production, textiles, and metallurgy that forged modern industry.',
    emoji: '⚙️',
    accentColor: 'from-amber-500/20 to-orange-600/10',
    categories: [
      {
        number: '01',
        slug: 'industrial-machinery',
        title: 'Industrial Machinery',
        quote: 'The Machines That Built America',
        tagline: 'Powering the Industrial Revolution • Where Mechanical Genius Began',
        themeSlug: 'industrial-innovation-manufacturing',
        emoji: '🏭',
        legacyCategoryKeys: ['STEAM', 'METALLURGY', 'ENERGY'],
      },
      {
        number: '02',
        slug: 'tools-workshop-innovations',
        title: 'Tools & Workshop Innovations',
        quote: 'Tools That Changed the World',
        tagline: 'The Art of Making Things • Precision Through Invention',
        themeSlug: 'industrial-innovation-manufacturing',
        emoji: '🛠️',
        legacyCategoryKeys: ['METALLURGY', 'CIVIL', 'STEAM'],
      },
      {
        number: '03',
        slug: 'manufacturing-production',
        title: 'Manufacturing & Production',
        quote: 'From Handcraft to Mass Production',
        tagline: 'The Birth of Modern Manufacturing • Inventing Industrial Efficiency',
        themeSlug: 'industrial-innovation-manufacturing',
        emoji: '🔩',
        legacyCategoryKeys: ['STEAM', 'PRINTING', 'METALLURGY'],
      },
      {
        number: '04',
        slug: 'textiles-sewing',
        title: 'Textiles & Sewing',
        quote: 'Threads of Innovation',
        tagline: 'From Needle to Industry • The Inventions Behind What We Wear',
        themeSlug: 'industrial-innovation-manufacturing',
        emoji: '🧵',
        legacyCategoryKeys: ['DOMESTIC', 'STEAM', 'PRINTING'],
      },
      {
        number: '05',
        slug: 'mining-metallurgy',
        title: 'Mining & Metallurgy',
        quote: 'Unearthing Human Ingenuity',
        tagline: 'The Power Beneath the Earth • Forging Progress from Natural Resources',
        themeSlug: 'industrial-innovation-manufacturing',
        emoji: '⛏️',
        legacyCategoryKeys: ['METALLURGY', 'ENERGY', 'CIVIL'],
      },
    ],
  },
  {
    number: '02',
    slug: 'transportation-mobility',
    title: 'Transportation & Mobility',
    categoryRange: 'Categories 6 – 10',
    description:
      'Locomotives, automobiles, maritime engineering, aviation pioneers, and personal two-wheeled mobility that shrank the globe.',
    emoji: '🚂',
    accentColor: 'from-sky-500/20 to-blue-600/10',
    categories: [
      {
        number: '06',
        slug: 'railways-locomotives',
        title: 'Railways & Locomotives',
        quote: 'Connecting a Nation by Rail',
        tagline: 'Tracks of Innovation • The Machines That Moved America',
        themeSlug: 'transportation-mobility',
        emoji: '🚂',
        legacyCategoryKeys: ['STEAM', 'TRANSIT', 'CIVIL'],
      },
      {
        number: '07',
        slug: 'automobiles-road-transportation',
        title: 'Automobiles & Road Transportation',
        quote: 'Driving the Future Since Yesterday',
        tagline: 'From Horsepower to Highways • Wheels That Changed the World',
        themeSlug: 'transportation-mobility',
        emoji: '🚗',
        legacyCategoryKeys: ['TRANSIT', 'ENERGY', 'STEAM'],
      },
      {
        number: '08',
        slug: 'ships-marine-engineering',
        title: 'Ships & Marine Engineering',
        quote: 'Engineering the Seven Seas',
        tagline: 'Navigating Through Innovation • From Sail to Steam and Beyond',
        themeSlug: 'transportation-mobility',
        emoji: '⚓',
        legacyCategoryKeys: ['MARITIME', 'STEAM', 'TIME'],
      },
      {
        number: '09',
        slug: 'aviation-flight',
        title: 'Aviation & Flight',
        quote: 'Dreams That Learned to Fly',
        tagline: 'Wings of Innovation • Conquering the Skies',
        themeSlug: 'transportation-mobility',
        emoji: '✈️',
        legacyCategoryKeys: ['AERO', 'WIND', 'TRANSIT'],
      },
      {
        number: '10',
        slug: 'bicycles-personal-mobility',
        title: 'Bicycles & Personal Mobility',
        quote: 'Freedom on Two Wheels',
        tagline: 'The Evolution of Personal Motion • Small Wheels, Big Ideas',
        themeSlug: 'transportation-mobility',
        emoji: '🚲',
        legacyCategoryKeys: ['TRANSIT', 'AERO', 'METALLURGY'],
      },
    ],
  },
  {
    number: '03',
    slug: 'electricity-energy-communication',
    title: 'Electricity, Energy & Communication',
    categoryRange: 'Categories 11 – 15',
    description:
      'The sparks, wires, signals, generators, and illumination breakthroughs that electrified civilization and connected humanity.',
    emoji: '⚡',
    accentColor: 'from-yellow-500/20 to-amber-600/10',
    categories: [
      {
        number: '11',
        slug: 'electrical-inventions',
        title: 'Electrical Inventions',
        quote: 'The Sparks That Changed Civilization',
        tagline: 'Illuminating Human Progress • The Dawn of the Electric Age',
        themeSlug: 'electricity-energy-communication',
        emoji: '⚡',
        legacyCategoryKeys: ['ENERGY', 'LIGHTING', 'TELECOM'],
      },
      {
        number: '12',
        slug: 'telephones-telecommunications',
        title: 'Telephones & Telecommunications',
        quote: 'The Inventions That Connected Humanity',
        tagline: 'From Wires to Wireless • When the World Began to Talk',
        themeSlug: 'electricity-energy-communication',
        emoji: '📞',
        legacyCategoryKeys: ['TELECOM', 'ENERGY', 'COMPUTING'],
      },
      {
        number: '13',
        slug: 'telegraph-signaling',
        title: 'Telegraph & Signaling',
        quote: 'Messages That Transformed the World',
        tagline: 'Before the Internet • The First Connected World',
        themeSlug: 'electricity-energy-communication',
        emoji: '📡',
        legacyCategoryKeys: ['TELECOM', 'MARITIME', 'LIGHTING'],
      },
      {
        number: '14',
        slug: 'energy-power-generation',
        title: 'Energy & Power Generation',
        quote: 'Powering Human Progress',
        tagline: "The Engines of Energy • Inventing Tomorrow's Power",
        themeSlug: 'electricity-energy-communication',
        emoji: '🔋',
        legacyCategoryKeys: ['ENERGY', 'WIND', 'STEAM'],
      },
      {
        number: '15',
        slug: 'lighting-illumination',
        title: 'Lighting & Illumination',
        quote: 'From Darkness to Discovery',
        tagline: 'Lighting the Way Forward • Bright Ideas That Changed Lives',
        themeSlug: 'electricity-energy-communication',
        emoji: '💡',
        legacyCategoryKeys: ['LIGHTING', 'ENERGY', 'OPTICS'],
      },
    ],
  },
  {
    number: '04',
    slug: 'home-family-everyday-life',
    title: 'Home, Family & Everyday Life',
    categoryRange: 'Categories 16 – 20',
    description:
      'Ingenious domestic appliances, culinary inventions, furnishings, cleaning machines, and everyday conveniences that transformed daily living.',
    emoji: '🏠',
    accentColor: 'from-rose-500/20 to-amber-500/10',
    categories: [
      {
        number: '16',
        slug: 'kitchen-cooking-innovations',
        title: 'Kitchen & Cooking Innovations',
        quote: 'The Kitchen Through the Ages',
        tagline: 'Inventing the Modern Home • Where Innovation Meets Every Meal',
        themeSlug: 'home-family-everyday-life',
        emoji: '🍳',
        legacyCategoryKeys: ['DOMESTIC', 'AGRICULTURE', 'ENERGY'],
      },
      {
        number: '17',
        slug: 'household-appliances',
        title: 'Household Appliances',
        quote: 'Everyday Genius',
        tagline: 'Small Inventions, Better Living • The Machines Behind Modern Comfort',
        themeSlug: 'home-family-everyday-life',
        emoji: '🔌',
        legacyCategoryKeys: ['DOMESTIC', 'ENERGY', 'LIGHTING'],
      },
      {
        number: '18',
        slug: 'furniture-domestic-living',
        title: 'Furniture & Domestic Living',
        quote: 'Designing Comfort Through Time',
        tagline: 'Inventing Better Living Spaces • Where Function Meets Imagination',
        themeSlug: 'home-family-everyday-life',
        emoji: '🪑',
        legacyCategoryKeys: ['DOMESTIC', 'CIVIL', 'METALLURGY'],
      },
      {
        number: '19',
        slug: 'cleaning-washing-machines',
        title: 'Cleaning & Washing Machines',
        quote: 'The Evolution of Clean',
        tagline: 'Making Everyday Work Easier • A Cleaner World Through Innovation',
        themeSlug: 'home-family-everyday-life',
        emoji: '🧺',
        legacyCategoryKeys: ['DOMESTIC', 'STEAM', 'MEDICAL'],
      },
      {
        number: '20',
        slug: 'personal-accessories-convenience',
        title: 'Personal Accessories & Convenience',
        quote: 'Little Inventions, Big Impact',
        tagline: 'Genius in Everyday Objects • The Details That Changed Daily Life',
        themeSlug: 'home-family-everyday-life',
        emoji: '⌚',
        legacyCategoryKeys: ['TIME', 'DOMESTIC', 'OPTICS'],
      },
    ],
  },
  {
    number: '05',
    slug: 'health-medicine-human-safety',
    title: 'Health, Medicine & Human Safety',
    categoryRange: 'Categories 21 – 25',
    description:
      'Life-saving medical instruments, surgical precision, assistive prosthetics, fire rescue gear, and public sanitation systems.',
    emoji: '🩺',
    accentColor: 'from-emerald-500/20 to-teal-600/10',
    categories: [
      {
        number: '21',
        slug: 'medical-equipment',
        title: 'Medical Equipment',
        quote: 'Inventions That Save Lives',
        tagline: 'Engineering for Humanity • The Science of Better Care',
        themeSlug: 'health-medicine-human-safety',
        emoji: '🏥',
        legacyCategoryKeys: ['MEDICAL', 'OPTICS', 'ENERGY'],
      },
      {
        number: '22',
        slug: 'surgical-diagnostic-instruments',
        title: 'Surgical & Diagnostic Instruments',
        quote: 'Precision for Human Health',
        tagline: 'The Evolution of Medical Discovery • Tools of Healing',
        themeSlug: 'health-medicine-human-safety',
        emoji: '🔬',
        legacyCategoryKeys: ['MEDICAL', 'OPTICS', 'METALLURGY'],
      },
      {
        number: '23',
        slug: 'assistive-devices-prosthetics',
        title: 'Assistive Devices & Prosthetics',
        quote: 'Innovation Without Limits',
        tagline: 'Restoring Movement and Independence • Engineering Human Possibilities',
        themeSlug: 'health-medicine-human-safety',
        emoji: '🦾',
        legacyCategoryKeys: ['MEDICAL', 'METALLURGY', 'TIME'],
      },
      {
        number: '24',
        slug: 'fire-safety-rescue-equipment',
        title: 'Fire Safety & Rescue Equipment',
        quote: 'Inventing Safety',
        tagline: 'Heroes of Engineering • Protection Through Innovation',
        themeSlug: 'health-medicine-human-safety',
        emoji: '🚒',
        legacyCategoryKeys: ['CIVIL', 'STEAM', 'MEDICAL'],
      },
      {
        number: '25',
        slug: 'public-health-sanitation',
        title: 'Public Health & Sanitation',
        quote: 'Building a Healthier World',
        tagline: 'Clean Water, Healthy Communities • The Inventions Behind Public Health',
        themeSlug: 'health-medicine-human-safety',
        emoji: '💧',
        legacyCategoryKeys: ['MEDICAL', 'CIVIL', 'AGRICULTURE'],
      },
    ],
  },
  {
    number: '06',
    slug: 'agriculture-food-environment',
    title: 'Agriculture, Food & Environment',
    categoryRange: 'Categories 26 – 30',
    description:
      'Harvesting machinery, food preservation, irrigation engineering, windmills, and sustainable environmental inventions.',
    emoji: '🌾',
    accentColor: 'from-lime-500/20 to-green-600/10',
    categories: [
      {
        number: '26',
        slug: 'farming-machinery',
        title: 'Farming Machinery',
        quote: 'The Machines That Fed the World',
        tagline: 'Harvesting Innovation • From Fields to the Future',
        themeSlug: 'agriculture-food-environment',
        emoji: '🚜',
        legacyCategoryKeys: ['AGRICULTURE', 'STEAM', 'TRANSIT'],
      },
      {
        number: '27',
        slug: 'food-processing-preservation',
        title: 'Food Processing & Preservation',
        quote: 'Preserving Progress',
        tagline: 'From Farm to Table Through Invention • Engineering Food Security',
        themeSlug: 'agriculture-food-environment',
        emoji: '🥫',
        legacyCategoryKeys: ['AGRICULTURE', 'DOMESTIC', 'STEAM'],
      },
      {
        number: '28',
        slug: 'water-management-irrigation',
        title: 'Water Management & Irrigation',
        quote: 'Water for Life',
        tagline: "Directing Every Drop • Engineering Nature's Most Valuable Resource",
        themeSlug: 'agriculture-food-environment',
        emoji: '🌊',
        legacyCategoryKeys: ['AGRICULTURE', 'CIVIL', 'WIND'],
      },
      {
        number: '29',
        slug: 'windmills-renewable-energy',
        title: 'Windmills & Renewable Energy',
        quote: "Harnessing Nature's Power",
        tagline: 'The Original Clean Energy Innovators • Where Wind Meets Engineering',
        themeSlug: 'agriculture-food-environment',
        emoji: '🌬️',
        legacyCategoryKeys: ['WIND', 'ENERGY', 'AGRICULTURE'],
      },
      {
        number: '30',
        slug: 'environmental-conservation-inventions',
        title: 'Environmental & Conservation Inventions',
        quote: 'Innovation Inspired by Nature',
        tagline: 'Engineering a Sustainable Future • Protecting the Planet Through Ingenuity',
        themeSlug: 'agriculture-food-environment',
        emoji: '🌿',
        legacyCategoryKeys: ['WIND', 'AGRICULTURE', 'ENERGY'],
      },
    ],
  },
  {
    number: '07',
    slug: 'science-engineering-technology',
    title: 'Science, Engineering & Technology',
    categoryRange: 'Categories 31 – 35',
    description:
      'Scientific instruments, precision chronometry, optics and photography, mechanical computing, and early automation.',
    emoji: '🔭',
    accentColor: 'from-violet-500/20 to-indigo-600/10',
    categories: [
      {
        number: '31',
        slug: 'scientific-instruments',
        title: 'Scientific Instruments',
        quote: 'Unlocking the Secrets of Science',
        tagline: 'Tools That Expanded Knowledge • Measuring the Unknown',
        themeSlug: 'science-engineering-technology',
        emoji: '🔭',
        legacyCategoryKeys: ['OPTICS', 'TIME', 'MEDICAL'],
      },
      {
        number: '32',
        slug: 'measurement-precision-devices',
        title: 'Measurement & Precision Devices',
        quote: 'The Science of Accuracy',
        tagline: 'Precision Changed Everything • Engineering the Perfect Measurement',
        themeSlug: 'science-engineering-technology',
        emoji: '🧭',
        legacyCategoryKeys: ['TIME', 'MARITIME', 'OPTICS'],
      },
      {
        number: '33',
        slug: 'optics-photography-cameras',
        title: 'Optics, Photography & Cameras',
        quote: 'Capturing History Through Innovation',
        tagline: 'The Inventions That Made Images Possible • Seeing the World Differently',
        themeSlug: 'science-engineering-technology',
        emoji: '📷',
        legacyCategoryKeys: ['PHOTOGRAPHY', 'OPTICS', 'LIGHTING'],
      },
      {
        number: '34',
        slug: 'computing-information-processing',
        title: 'Computing & Information Processing',
        quote: 'Before the Digital Revolution',
        tagline: 'The Machines That Made Computing Possible • From Mechanical Logic to AI',
        themeSlug: 'science-engineering-technology',
        emoji: '🧮',
        legacyCategoryKeys: ['COMPUTING', 'TELECOM', 'TIME'],
      },
      {
        number: '35',
        slug: 'robotics-automation-mechanical-control',
        title: 'Robotics, Automation & Mechanical Control',
        quote: 'The Origins of Intelligent Machines',
        tagline: 'Automation Before Artificial Intelligence • Mechanical Minds',
        themeSlug: 'science-engineering-technology',
        emoji: '🤖',
        legacyCategoryKeys: ['COMPUTING', 'STEAM', 'ENERGY'],
      },
    ],
  },
  {
    number: '08',
    slug: 'culture-education-entertainment',
    title: 'Culture, Education & Entertainment',
    categoryRange: 'Categories 36 – 40',
    description:
      'Musical instruments, printing presses, educational tools, toys, games, and recreational inventions that enriched human culture.',
    emoji: '🎼',
    accentColor: 'from-pink-500/20 to-fuchsia-600/10',
    categories: [
      {
        number: '36',
        slug: 'musical-instruments',
        title: 'Musical Instruments',
        quote: 'The Engineering of Music',
        tagline: 'Where Invention Meets Melody • Sounds of Innovation',
        themeSlug: 'culture-education-entertainment',
        emoji: '🎻',
        legacyCategoryKeys: ['PRINTING', 'TELECOM', 'DOMESTIC'],
      },
      {
        number: '37',
        slug: 'printing-writing-publishing',
        title: 'Printing, Writing & Publishing',
        quote: 'The Machines That Spread Knowledge',
        tagline: 'From Pen to Printed Page • Ideas That Reached the World',
        themeSlug: 'culture-education-entertainment',
        emoji: '🖨️',
        legacyCategoryKeys: ['PRINTING', 'COMPUTING', 'PHOTOGRAPHY'],
      },
      {
        number: '38',
        slug: 'educational-devices-learning-tools',
        title: 'Educational Devices & Learning Tools',
        quote: 'Learning Through Invention',
        tagline: 'Curiosity Builds the Future • The Tools of Discovery',
        themeSlug: 'culture-education-entertainment',
        emoji: '📚',
        legacyCategoryKeys: ['OPTICS', 'PRINTING', 'COMPUTING'],
      },
      {
        number: '39',
        slug: 'toys-games-recreation',
        title: 'Toys, Games & Recreation',
        quote: 'The Inventions Behind Play',
        tagline: 'Playing with Genius • Where Imagination Meets Engineering',
        themeSlug: 'culture-education-entertainment',
        emoji: '🎲',
        legacyCategoryKeys: ['DOMESTIC', 'TIME', 'PHOTOGRAPHY'],
      },
      {
        number: '40',
        slug: 'sports-leisure-innovations',
        title: 'Sports & Leisure Innovations',
        quote: 'Engineering the Joy of Play',
        tagline: 'Inventions That Keep Us Moving • The Evolution of Recreation',
        themeSlug: 'culture-education-entertainment',
        emoji: '🏅',
        legacyCategoryKeys: ['TRANSIT', 'AERO', 'DOMESTIC'],
      },
    ],
  },
  {
    number: '09',
    slug: 'infrastructure-construction-cities',
    title: 'Infrastructure, Construction & Cities',
    categoryRange: 'Categories 41 – 45',
    description:
      'Civil engineering foundations, bridges, urban utilities, building climate systems, and global logistics infrastructure.',
    emoji: '🌉',
    accentColor: 'from-cyan-500/20 to-slate-600/10',
    categories: [
      {
        number: '41',
        slug: 'civil-engineering-construction',
        title: 'Civil Engineering & Construction',
        quote: 'Building the Modern World',
        tagline: 'Engineering Civilization • The Foundations of Progress',
        themeSlug: 'infrastructure-construction-cities',
        emoji: '🏗️',
        legacyCategoryKeys: ['CIVIL', 'METALLURGY', 'STEAM'],
      },
      {
        number: '42',
        slug: 'bridges-roads-structural-systems',
        title: 'Bridges, Roads & Structural Systems',
        quote: 'Connecting Places, Transforming Lives',
        tagline: 'Engineering the Impossible • Structures That Shaped Society',
        themeSlug: 'infrastructure-construction-cities',
        emoji: '🌉',
        legacyCategoryKeys: ['CIVIL', 'TRANSIT', 'METALLURGY'],
      },
      {
        number: '43',
        slug: 'urban-infrastructure-utilities',
        title: 'Urban Infrastructure & Utilities',
        quote: 'The Invisible Inventions Behind Cities',
        tagline: 'Cities Built on Ingenuity • Engineering Everyday Infrastructure',
        themeSlug: 'infrastructure-construction-cities',
        emoji: '🏙️',
        legacyCategoryKeys: ['CIVIL', 'ENERGY', 'LIGHTING'],
      },
      {
        number: '44',
        slug: 'building-equipment-heating',
        title: 'Building Equipment & Heating',
        quote: 'Comfort Through Engineering',
        tagline: 'The Evolution of Smart Buildings • Inventing the Modern Interior',
        themeSlug: 'infrastructure-construction-cities',
        emoji: '🔥',
        legacyCategoryKeys: ['ENERGY', 'DOMESTIC', 'CIVIL'],
      },
      {
        number: '45',
        slug: 'industrial-infrastructure-logistics',
        title: 'Industrial Infrastructure & Logistics',
        quote: 'The Systems That Keep the World Moving',
        tagline: 'Engineering Global Commerce • From Factories to Front Doors',
        themeSlug: 'infrastructure-construction-cities',
        emoji: '📦',
        legacyCategoryKeys: ['TRANSIT', 'MARITIME', 'STEAM'],
      },
    ],
  },
  {
    number: '10',
    slug: 'heritage-special-collections-future-vision',
    title: 'Heritage, Special Collections & Future Vision',
    categoryRange: 'Categories 46 – 50',
    description:
      'Landmark American patents, overlooked pioneering inventors, rare patent models, cultural artifacts, and visionary breakthroughs.',
    emoji: '🏛️',
    accentColor: 'from-amber-400/25 to-yellow-600/10',
    categories: [
      {
        number: '46',
        slug: 'historic-american-inventions',
        title: 'Historic American Inventions',
        quote: "America's Inventive Spirit",
        tagline: 'Patents That Built a Nation • Celebrating American Ingenuity',
        themeSlug: 'heritage-special-collections-future-vision',
        emoji: '🦅',
        legacyCategoryKeys: ['TELECOM', 'LIGHTING', 'AERO'],
      },
      {
        number: '47',
        slug: 'women-pioneering-inventors',
        title: 'Women & Pioneering Inventors',
        quote: 'Breaking Barriers Through Invention',
        tagline: 'Innovators Who Changed History • Celebrating Overlooked Genius',
        themeSlug: 'heritage-special-collections-future-vision',
        emoji: '🌟',
        legacyCategoryKeys: ['COMPUTING', 'DOMESTIC', 'MEDICAL'],
      },
      {
        number: '48',
        slug: 'rare-patent-models-collectibles',
        title: 'Rare Patent Models & Collectibles',
        quote: 'Treasures of Human Ingenuity',
        tagline: "One-of-a-Kind Inventions • Discovering the World's Hidden Innovations",
        themeSlug: 'heritage-special-collections-future-vision',
        emoji: '🏺',
        legacyCategoryKeys: ['TIME', 'PRINTING', 'PHOTOGRAPHY'],
      },
      {
        number: '49',
        slug: 'historic-artifacts-cultural-heritage',
        title: 'Historic Artifacts & Cultural Heritage',
        quote: 'Objects That Tell Our Story',
        tagline: 'Preserving Yesterday, Inspiring Tomorrow • History in Our Hands',
        themeSlug: 'heritage-special-collections-future-vision',
        emoji: '📜',
        legacyCategoryKeys: ['PRINTING', 'MARITIME', 'OPTICS'],
      },
      {
        number: '50',
        slug: 'breakthrough-futuristic-inventions',
        title: 'Breakthrough & Futuristic Inventions',
        quote: 'Ideas Ahead of Their Time',
        tagline: "Yesterday's Vision, Tomorrow's Reality • The Future Began Long Ago",
        themeSlug: 'heritage-special-collections-future-vision',
        emoji: '🚀',
        legacyCategoryKeys: ['AERO', 'COMPUTING', 'ENERGY'],
      },
    ],
  },
];

export const ALL_50_CATEGORIES: CategoryClassification[] = THEME_FAMILIES.flatMap(
  (theme) => theme.categories
);

export function getThemeBySlug(slug: string): ThemeFamily | undefined {
  return THEME_FAMILIES.find((t) => t.slug === slug);
}

export function getCategoryBySlug(
  slug: string
): { theme: ThemeFamily; category: CategoryClassification } | undefined {
  for (const theme of THEME_FAMILIES) {
    const category = theme.categories.find((c) => c.slug === slug);
    if (category) return { theme, category };
  }
  return undefined;
}

export function getAssetsForCategory(
  category: CategoryClassification,
  allAssets: HistoricalAsset[]
): HistoricalAsset[] {
  const primaryKey = category.legacyCategoryKeys[0];
  const primaryMatches = allAssets.filter((a) => a.category === primaryKey);
  if (primaryMatches.length >= 5) {
    return primaryMatches;
  }
  const seen = new Set(primaryMatches.map((a) => a.id));
  const combined = [...primaryMatches];
  for (const key of category.legacyCategoryKeys.slice(1)) {
    for (const asset of allAssets) {
      if (asset.category === key && !seen.has(asset.id)) {
        seen.add(asset.id);
        combined.push(asset);
        if (combined.length >= 6) return combined;
      }
    }
  }
  return combined.length > 0 ? combined : allAssets.slice(0, 5);
}

export function getAssetsForTheme(
  theme: ThemeFamily,
  allAssets: HistoricalAsset[]
): HistoricalAsset[] {
  const seen = new Set<string>();
  const results: HistoricalAsset[] = [];
  for (const cat of theme.categories) {
    for (const asset of getAssetsForCategory(cat, allAssets)) {
      if (!seen.has(asset.id)) {
        seen.add(asset.id);
        results.push(asset);
      }
    }
  }
  return results;
}
