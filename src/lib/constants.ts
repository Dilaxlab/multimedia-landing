import { HistoricalAsset } from '@/types/asset';
import { VideoVignette, BlueprintMedia } from '@/types/media';

export const TAXONOMY_MASTER_LIST: string[] = [
  "Acoustic Telephony & Liquid Transmitters", "Mechanical Washing-Machines & Agitators", "Self-Governing Wind Mills",
  "Incandescent Carbon Filament Lamps", "Polyphase AC Induction Motors", "Three-Axis Aerodynamic Gliders",
  "Mechanical Difference Engines", "Movable Type Metal Printing Presses", "Electromagnetic Telegraphs",
  "Marine Chronometers for Longitude", "Archimedean Screw Pumps", "Compound Optical Microscopes",
  "High-Pressure Steam Locomotives", "Bessemer Steel Converters", "Radio Frequency & Spark Gap",
  "Early Phonographs & Cylinders", "Lockstitch Sewing Machines", "Refrigeration Compressors",
  "Vacuum Cleaners & Suction", "Reaping & Grain Harvesters", "Steam Tractor Ploughs",
  "Cotton Gins & Extractors", "Direct Current Dynamos", "Transformer Power Distribution",
  "Biplane Flying Machines", "Rigid Dirigible Airships", "Early Rotary Aero Engines",
  "Analytical Engine Punch Cards", "Arithmometers & Gear Calculators", "Typewriter Keyboards",
  "Steam Rotary Cylinder Presses", "Camera Obscura & Daguerreotypes", "Cinematographe Motion Projectors",
  "Condensing Steam Engines", "Compound Marine Steam Turbines", "Pneumatic Railway Brakes",
  "Deadbeat Escapement Clocks", "Astronomical Astrolabes", "Achromatic Refracting Telescopes",
  "Vulcanized Rubber Processing", "Aluminum Electrolytic Smelting", "Lost-Wax Bronze Casting",
  "Prismatic Spectroscopes", "Fresnel Lighthouse Lenses", "Interferometer Wave Analyzers",
  "Centrifugal Water Turbines", "Hydraulic Press Intensifiers", "Pneumatic Despatch Systems",
  "Hand-Cranked Submersible Vessels", "Screw Propeller Ship Drives", "Gyroscopic Compasses",
  "Standardized Diving Helmets", "Continuous Ammonia Synthesis", "Petroleum Distillation Stills",
  "Synthetic Alizarin Dye Stills", "Gunpowder Nitrate Milling", "Acoustic Stethoscopes",
  "Diagnostic X-Ray Tubes", "Hypodermic Injection Needles", "Inhalation Anesthesia Vaporizers",
  "Pneumatic Caisson Foundations", "Wrought Iron Lattice Bridges", "Hydraulic Canal Locks", "Portland Cement Kilns"
];

export const MOCK_HISTORICAL_ASSETS: HistoricalAsset[] = [
  {
    id: "HA-100",
    title: "The Antigravity Chronometer",
    officialTitle: "The Tri-Axial Antigravity Isochronal Chronometer Assembly (1881)",
    inventor: "Henry H. Beville",
    patent: "Pat. #249,002 • 1881",
    patentDate: "November 1, 1881",
    location: "Indianapolis Laboratory",
    category: "TIME",
    categoryLabel: "Horology & Mechanics",
    badge: "Antigravity Vault",
    image: "/images/character_beville.jpg",
    desc: "Suspended tri-axial counterpoised chronometer utilizing opposing magnetic fields to isolate escapement mechanisms from terrestrial gravitational torque.",
    polyCount: "142,000 Quads",
    medium: "Polished Brass • Ruby Jewel • Glass Dome",
    resonance: "Tri-Axial Floating 4 Hz Balance",
    era: "Golden Age (1871-1910)",
    modelType: "antigravity",
    schematicImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    videoDuration: "0:30",
    story: "In 1881, amidst his pioneering work on mechanical governors, Henry H. Beville devised an extraordinary suspended horological apparatus. Seeking absolute isochronism free from seismic and gravitational disturbances, Beville suspended concentric brass gimbal rings and a counter-rotating balance escapement inside an evacuated bell jar.",
    mechanics: "The apparatus employs a magnetic counterpoise and floating planetary gear train. As the escapement wheel oscillates, concentric gimbal rings maintain zero-gravity equilibrium, neutralizing gravitational drag and isolating the chronometer's balance spring from external orientation forces.",
    legacy: "Beville's suspended chronometer anticipated contemporary spaceborne gyroscopic stabilization and inertial navigation systems used in aerospace guidance today.",
    curatorQuote: "Beville's counterpoised chronometer proved that mechanical timekeeping could transcend terrestrial gravitational torque, prefiguring modern spaceborne gyroscopes and zero-g instrumentation.",
    curatorAuthor: "Dr. Evelyn Vance, Senior Fellow of Horological Physics",
    blueprintLedger: [
      { item: "Concentric Brass Gimbal Rings", spec: "Dual-axis balanced tolerance ±0.015mm" },
      { item: "Counter-Rotating Sun & Planet Escapement", spec: "16-tooth phosphor bronze with ruby pallet jewels" },
      { item: "Magnetic Counterpoise Array", spec: "Permanent magnetic field isolating gravitational vibration" },
      { item: "Hermetic Vacuum Envelope", spec: "Annealed silicate glass dome maintaining 10^-3 Torr" },
    ],
    hotspots: [
      { id: 1, title: "Floating Escapement Wheel", desc: "Phosphor-bronze 16-tooth escape wheel floating on ruby jeweled balance.", pos: [35, 42] },
      { id: 2, title: "Dual-Axis Gimbal Ring", desc: "Concentrically milled armillary gimbal ring maintaining zero-g horizon.", pos: [62, 58] },
    ]
  },
  {
    id: "HA-101",
    title: "Early Telephone",
    officialTitle: "The Variable Acid Resistance Acoustic Vocal Transmitter (1876)",
    inventor: "Alexander Graham Bell",
    patent: "Pat. #174,465 • 1876",
    patentDate: "March 7, 1876",
    location: "Boston Laboratory",
    category: "TELECOM",
    categoryLabel: "Telecommunications",
    badge: "3D Vault",
    image: "/images/character_bell.jpg",
    desc: "Variable acid acoustic voice transmitter reproducing intelligible vocal harmonics.",
    polyCount: "84,000 Quads",
    medium: "Brass • Acid Cup • Parchment",
    resonance: "300 - 3400 Hz Voice Band",
    era: "Golden Age (1871-1910)",
    modelType: "bell",
    schematicImage: "/images/character_bell.jpg",
    videoDuration: "0:30",
    story: "In 1875, Alexander Graham Bell was conducting experiments with a harmonic telegraph designed to send multiple messages simultaneously over a single wire. While working alongside Thomas Watson in their Boston workshop, an accidental vibration of a reed spring transmitted an audible tone. Realizing that undulating currents could replicate the complex acoustic waveform of human vocal cords, Bell filed his landmark patent in February 1876, mere hours before competitor Elisha Gray.",
    mechanics: "The apparatus functions by modulating electric resistance in accordance with acoustic vibrations. When a speaker speaks into the conical cone, the acoustic sound waves flex a parchment diaphragm. Attached to the center of the diaphragm is a light platinum wire submerged into an acid-electrolyte reservoir. As the diaphragm moves back and forth, the wire's depth in the fluid fluctuates, altering the electrical resistance of the circuit and inducing a corresponding undulating electrical wave transmitted to an electromagnetic receiver.",
    legacy: "Patent #174,465 is universally regarded as the single most financially and culturally impactful patent in human history. It catalyzed the founding of American Telephone and Telegraph (AT&T), transformed commerce and emergency services, and demolished geographic barriers. Today's global cellular, fiber-optic, and digital satellite infrastructure rests upon the mathematical and physical foundations pioneered by this early apparatus.",
    curatorQuote: "Patent #174,465 was not merely an instrument; it was the technological birth certificate of global instantaneous human connection.",
    curatorAuthor: "Sir Alistair Thorne, Keeper of Telecommunication Antiquities",
    blueprintLedger: [
      { item: "Parchment Acoustic Diaphragm", spec: "Goldbeater's skin membrane 0.08mm gauge" },
      { item: "Platinum Wire Electrode Needle", spec: "Submerged 3.2mm in diluted sulfuric electrolyte" },
      { item: "Brass Acoustic Funnel Conical Horn", spec: "Spun bronze acoustic flare, 45° dispersal angle" },
      { item: "Electrolyte Cup Reservoir", spec: "Acid-resistant porcelain cup with copper electrode ground" },
    ],
    hotspots: [
      { id: 1, title: "Acoustic Diaphragm", desc: "Goldbeater's skin membrane vibrating to sound pressure.", pos: [45, 32] },
      { id: 2, title: "Liquid Acid Reservoir", desc: "Diluted sulfuric acid cup modifying electrical resistance dynamically.", pos: [55, 68] },
    ]
  },
  {
    id: "HA-102",
    title: "Improved Washing-Machine",
    inventor: "Caroline F. Fleming",
    patent: "Pat. #231,554 • 1880",
    patentDate: "August 24, 1880",
    location: "Texas Homestead",
    category: "DOMESTIC",
    categoryLabel: "Domestic Mechanics",
    badge: "Kinetic Model",
    image: "/images/character_fleming.jpg",
    desc: "Reciprocating agitator mechanism reducing manual laundering wear through fluid currents.",
    polyCount: "76,000 Quads",
    medium: "Cedar Wood • Cast Iron Crank",
    resonance: "Manual 60 RPM Agitation",
    era: "Golden Age (1871-1910)",
    modelType: "fleming",
    schematicImage: "/images/character_fleming.jpg",
    videoDuration: "0:30",
    story: "In late 19th-century America, laundry was among the most grueling, caustic, and hazardous household chores, requiring hours of boiling lye water and abrasive scrubbing over corrugated washboards. Caroline F. Fleming of Texas patented an ingeniously balanced mechanical agitator that dramatically reduced physical exertion and wear on garments, representing an essential triumph in female-led engineering.",
    mechanics: "Fleming's machine utilizes a sealed wooden drum fitted with an interior radial paddle agitator driven by a geared hand-crank. Instead of merely spinning the water, the mechanism creates opposing turbulent currents that force soapy water through textile fibers without tearing delicate seams.",
    legacy: "Fleming's patent laid the direct mechanical groundwork for modern horizontal-axis and top-loading washing machines. Her innovation freed millions of households from hours of exhausting manual labor, creating a social and economic shift towards domestic automation."
  },
  {
    id: "HA-103",
    title: "Iron Duke Wind Mill",
    inventor: "Henry H. Beville",
    patent: "Pat. #262,912 • 1882",
    patentDate: "August 15, 1882",
    location: "Indianapolis, IN",
    category: "WIND",
    categoryLabel: "Wind & Agriculture",
    badge: "Aero Twin",
    image: "/images/character_beville.jpg",
    desc: "Self-governing radial hydrological vane system pumping subterranean water through prairie storms.",
    polyCount: "92,000 Quads",
    medium: "Galvanized Steel • Cast Gears",
    resonance: "Self-Governing 15-45 MPH",
    era: "Golden Age (1871-1910)",
    modelType: "beville",
    schematicImage: "/images/character_beville.jpg",
    videoDuration: "0:30",
    story: "Settlers advancing onto the arid Great Plains faced severe droughts, where deep groundwater was inaccessible without constant mechanical pumping. Henry H. Beville engineered the 'Iron Duke' windmill with back-geared reduction and an automated governing vane, ensuring the mill could turn gently in light breezes yet automatically feather away from dangerous tornadic prairie winds.",
    mechanics: "The Iron Duke combines a multi-blade steel rotor wheel with a weighted rocker counterpoise and eccentric gear linkage. When wind velocities exceed safe operating thresholds, the lateral pressure against an auxiliary vane overcomes the counterweight, swinging the wheel edge-on to the wind to prevent structural destruction.",
    legacy: "The Iron Duke and its descendants enabled the agrarian settlement of the Western United States and Australia. By converting free atmospheric wind energy into continuous pressurized water for livestock, steam locomotives, and farms, it made arid continental interiors habitable."
  },
  {
    id: "HA-104",
    title: "Celestial Astrolabe",
    inventor: "Ada Lovelace",
    patent: "Circa 1843 • Rare Artifact",
    patentDate: "c. 1843",
    location: "London Mathematical Society",
    category: "TIME",
    categoryLabel: "Timekeeping & Precision",
    badge: "Cosmic Vault",
    image: "/images/character_ada.jpg",
    desc: "Horological celestial algorithm computing stellar azimuths, navigational angles, and celestial latitude.",
    polyCount: "110,000 Quads",
    medium: "Cast Brass • Star Calculations",
    resonance: "Celestial Equatorial Coordinate",
    era: "Pre-Industrial Enlightenment",
    modelType: "astrolabe",
    schematicImage: "/images/character_ada.jpg",
    videoDuration: "0:30",
    story: "Centuries before satellite-based GPS, navigators and astronomers computed their exact geographic location and local solar time using astrolabes and astronomical algorithms.",
    mechanics: "The device consists of a base plate (mater), interchangeable plates (tympans) calibrated to specific latitudes, and an openwork star pointer (rete). An alidade sighting rule on the reverse measures the altitude of celestial bodies.",
    legacy: "The astrolabe is the historical parent of both the modern analog clock and navigational computers, embodying the convergence of astronomy and spherical trigonometry."
  },
  {
    id: "HA-105",
    title: "Incandescent Electric Lamp",
    inventor: "Thomas Alva Edison",
    patent: "Pat. #223,898 • 1880",
    patentDate: "January 27, 1880",
    location: "Menlo Park, NJ",
    category: "DOMESTIC",
    categoryLabel: "Domestic Mechanics",
    badge: "Filament Model",
    image: "/images/character_edison.jpg",
    desc: "High-vacuum carbonized bamboo filament producing sustained 1200-hour nocturnal luminescence.",
    polyCount: "62,000 Quads",
    medium: "Blown Glass • Carbon Filament",
    resonance: "110V Direct Current Circuit",
    era: "Golden Age (1871-1910)",
    modelType: "bell",
    schematicImage: "/images/character_edison.jpg",
    videoDuration: "0:30",
    story: "Before electric light, cities relied on dangerous, flickering gas lamps that blackened ceilings and posed constant fire hazards. In Menlo Park, New Jersey, Edison and his laboratory team tested over 6,000 carbonaceous materials before discovering that carbonized Japanese bamboo in a Sprengel vacuum pump could glow steadily for over 1,200 hours.",
    mechanics: "An electric current passes through a high-resistance filament of carbonized cellulose. Because the glass bulb has been evacuated to one-millionth of an atmosphere, the filament heats to intense white-hot incandescence without burning or oxidizing.",
    legacy: "Edison did not merely invent a bulb; he created the world's first complete electrical power grid, including central dynamos, insulated underground conduits, meters, and switches, unleashing round-the-clock productivity and industrial growth."
  },
  {
    id: "HA-106",
    title: "The Wright Flyer",
    inventor: "Orville & Wilbur Wright",
    patent: "Pat. #821,393 • 1906",
    patentDate: "May 22, 1906",
    location: "Kitty Hawk, NC",
    category: "AERO",
    categoryLabel: "Aeronautics",
    badge: "Aero Kinematics",
    image: "/images/character_wright.jpg",
    desc: "Three-axis aerodynamic flight control coordinating wing-warping with a steerable vertical rudder.",
    polyCount: "115,000 Quads",
    medium: "Spruce Wood • Muslin Fabric",
    resonance: "12 HP Inline Aluminum Engine",
    era: "Early Modern (1911-1950)",
    modelType: "wright",
    schematicImage: "/images/character_wright.jpg",
    videoDuration: "0:30",
    story: "While contemporary aviators built fragile gliders or overpowered engines that crashed into rivers, bicycle makers Orville and Wilbur Wright understood that aerodynamic equilibrium in three dimensions was the true secret to human flight. After testing miniature wing airfoils inside a custom wind tunnel, they achieved sustained controlled powered flight at Kitty Hawk in December 1903.",
    mechanics: "The Wright patent focuses not merely on propulsion, but on 'wing warping'—helical twisting of the flexible spruce wingtips via cable controls synchronized with a vertical rudder to maintain roll and yaw stability simultaneously.",
    legacy: "The Wright Brothers transformed aviation from suicidal speculation into a definitive scientific discipline, inaugurating the modern era of global travel, air commerce, and aerospace exploration."
  },
  {
    id: "HA-107",
    title: "AC Induction Motor",
    inventor: "Nikola Tesla",
    patent: "Pat. #381,968 • 1888",
    patentDate: "May 1, 1888",
    location: "New York City",
    category: "TELECOM",
    categoryLabel: "Electrical Power",
    badge: "Rotational Core",
    image: "/images/character_tesla.jpg",
    desc: "Brushless polyphase motor revolving on rotating magnetic field induction without commutators.",
    polyCount: "88,000 Quads",
    medium: "Copper Windings • Laminated Iron",
    resonance: "60 Hz Polyphase 220V",
    era: "Golden Age (1871-1910)",
    modelType: "tesla",
    schematicImage: "/images/character_tesla.jpg",
    videoDuration: "0:30",
    story: "Frustrated by the sparking, friction, and maintenance breakdowns of Edison's direct current motors, Nikola Tesla envisioned a motor driven by a mathematically pure rotating magnetic field produced by polyphase alternating currents.",
    mechanics: "Stator coils energized by alternating currents out of phase with one another create a smoothly revolving magnetic field. This shifting field induces secondary eddy currents in the rotor, generating a torque that drives the rotor without any electrical contact rings or brushes.",
    legacy: "Tesla's AC induction motor remains the primary workhorse of global civilization today, driving everything from industrial pumps, manufacturing assembly lines, electric vehicles, and refrigeration units across the planet."
  },
  {
    id: "HA-108",
    title: "Difference Engine No. 2",
    inventor: "Charles Babbage",
    patent: "Archival Registry #1849",
    patentDate: "Circa 1849",
    location: "London Science Museum",
    category: "COMPUTING",
    categoryLabel: "Mechanical Computing",
    badge: "Gear Core",
    image: "/images/character_babbage.jpg",
    desc: "Precision gear-driven mechanical calculating computer computing polynomial tables to 31 decimals.",
    polyCount: "140,000 Quads",
    medium: "Bronze Gears • Cast Iron Framework",
    resonance: "Hand-Cranked Finite Difference Cycle",
    era: "Industrial Era (1760-1870)",
    modelType: "babbage",
    schematicImage: "/images/character_babbage.jpg",
    videoDuration: "0:30",
    story: "Alarmed by the frequent typographical and mathematical errors in astronomical and navigation tables calculated by human 'computers', English polymath Charles Babbage designed a massive brass apparatus capable of calculating and stereotyping mathematical tables without human intervention.",
    mechanics: "Eight thousand interlocking bronze gears, racks, and cams calculate second, third, and fourth order finite differences through sequential carry-propagation levers, automatically pressing the calculated numbers into papier-mâché molds for direct printing.",
    legacy: "Babbage's Difference and Analytical Engines established the foundational concepts of modern computing: separation of storage (memory) and mill (CPU), programmed operations, and error-free automated computation."
  },
  {
    id: "HA-109",
    title: "Bell's Telephone",
    officialTitle: "The Electromagnetic Acoustic Telegraph & Speaking Telephone Apparatus (1876)",
    inventor: "Alexander Graham Bell",
    patent: "Pat. #174,465 • 1876",
    patentDate: "March 7, 1876",
    location: "Smithsonian National Museum of American History",
    category: "TELECOM",
    categoryLabel: "Acoustic Telephony & Liquid Transmitters",
    badge: "Centennial Gold",
    image: "/images/character_bell.jpg",
    desc: "Historical electromagnetic speaking telephone converting vocal acoustic vibrations into continuous undulating electrical currents over telegraph wire.",
    polyCount: "98,000 Quads",
    medium: "Turned Mahogany Base • Cast Brass Horn • Copper Induction Coil",
    resonance: "Acoustic Diaphragm 300–3,400 Hz",
    era: "Golden Age (1871-1910)",
    modelType: "telephone",
    schematicImage: "/images/character_bell.jpg",
    videoDuration: "0:30",
    curatorQuote: "Mr. Watson, come here — I want to see you: the foundational moment vocal pressure waves were first transmuted into continuous electrical currents.",
    curatorAuthor: "Dr. Marcus Vance, Curator of Telecommunications, IAIMS",
    story: "In 1876, Scottish-born inventor Alexander Graham Bell revolutionized communication by demonstrating that complex undulating sound waves of human speech could be converted into proportional undulating electrical currents, transmitting the human voice across telegraph wires for the first time in human history.",
    mechanics: "A flexible metallic diaphragm vibrates sympathetically with spoken acoustic waves in front of an electromagnet pole. These vibrations induce an undulating electric current through a copper coil, which travels down the wire to an identical receiving electromagnet that vibrates a receiver diaphragm to recreate audible human speech.",
    legacy: "US Patent #174,465 is widely recognized as the single most valuable patent ever issued. It compressed global geography, spawned the global telecommunications grid, and laid the direct architectural foundation for the modern internet and telephony.",
    blueprintLedger: [
      { item: "Acoustic Speaking Horn", spec: "Spun Brass Horn • 62mm Vocal Intake Aperture" },
      { item: "Vibrating Iron Diaphragm", spec: "0.25mm Cold-Rolled Iron • Tuned Resonance" },
      { item: "Electromagnetic Core", spec: "Soft Iron Bar surrounded by Silk-Insulated Copper Coil" },
      { item: "Mahogany Bedplate Assembly", spec: "Hand-Carved Seasoned Hardwood with Brass Binding Posts" }
    ],
    hotspots: [
      { id: 1, title: "Acoustic Brass Funnel", desc: "Collects voice vibrations and focuses sound pressure onto the iron diaphragm.", pos: [35, 45] },
      { id: 2, title: "Induction Magnet Coil", desc: "Converts micro-movements of the diaphragm into undulating electrical current.", pos: [65, 52] },
      { id: 3, title: "Turned Mahogany Bedplate", desc: "Isolates mechanical vibrations and houses terminal wiring binding posts.", pos: [50, 80] }
    ]
  }
];

export const MOCK_VIDEO_VIGNETTES: VideoVignette[] = [
  {
    id: "VID-01",
    assetId: "HA-101",
    title: "Voice Across the Void",
    inventor: "Alexander Graham Bell",
    shortDesc: "How an accidental tuning fork resonance revolutionized human voice communication across continents.",
    duration: "0:30",
    totalSeconds: 30,
    narrator: "Dr. Elena Vance",
    narratorInstitution: "Royal Institution Archival Audio Master",
    thumbnailUrl: "/images/character_bell.jpg",
    scenes: [
      {
        title: "01: The Acoustic Limit",
        timeRange: "00:00 - 00:10",
        description: "Telegraph wires clicked in Morse code, but human emotional speech remained confined by physical distance."
      },
      {
        title: "02: The Liquid Breakthrough",
        timeRange: "00:10 - 00:20",
        description: "A platinum needle dipped in acidified electrolyte converts vocal vibrations into undulating electrical waves."
      },
      {
        title: "03: The Global Grid",
        timeRange: "00:20 - 00:30",
        description: "Copper networks cross oceans, establishing the nervous system for global telecommunications."
      }
    ]
  },
  {
    id: "VID-02",
    assetId: "HA-102",
    title: "Liberating Domestic Labor",
    inventor: "Caroline F. Fleming",
    shortDesc: "How Caroline F. Fleming engineered bidirectional crank agitation to transform harsh manual washboards into efficient domestic mechanics.",
    duration: "0:30",
    totalSeconds: 30,
    narrator: "Prof. Arthur Pendelton",
    narratorInstitution: "Smithsonian Folkways Archives",
    thumbnailUrl: "/images/character_fleming.jpg",
    scenes: [
      {
        title: "01: The Hand Scour",
        timeRange: "00:00 - 00:10",
        description: "Laundry demanded brutal manual exertion over steaming cauldrons of boiling caustic lye."
      },
      {
        title: "02: The Counterpoise Crank",
        timeRange: "00:10 - 00:20",
        description: "An internal paddle agitator drives dual turbulent water currents through fabrics without tearing."
      },
      {
        title: "03: The Modern Household",
        timeRange: "00:20 - 00:30",
        description: "Paved the mechanical foundation for automated domestic appliances across the 20th century."
      }
    ]
  },
  {
    id: "VID-03",
    assetId: "HA-103",
    title: "Harnessing Prairie Gales",
    inventor: "Henry H. Beville",
    shortDesc: "Self-governing back-geared wind engines that unlocked deep subterranean aquifers across the arid frontier.",
    duration: "0:30",
    totalSeconds: 30,
    narrator: "Dr. Marcus Thorne",
    narratorInstitution: "Western Agrarian Historical Society",
    thumbnailUrl: "/images/character_beville.jpg",
    scenes: [
      {
        title: "01: The Parched Frontier",
        timeRange: "00:00 - 00:10",
        description: "Great Plains homesteads languished under drought while deep subterranean aquifers lay out of reach."
      },
      {
        title: "02: The Weighted Governor",
        timeRange: "00:10 - 00:20",
        description: "Beville's counterweighted vane automatically feathers the rotor away from destructive tornadic gales."
      },
      {
        title: "03: Agrarian Continuity",
        timeRange: "00:20 - 00:30",
        description: "Uninterrupted freshwater supported cattle herds, transcontinental locomotives, and frontier cities."
      }
    ]
  },
  {
    id: "VID-04",
    assetId: "HA-105",
    title: "Conquering the Night",
    inventor: "Thomas Alva Edison",
    shortDesc: "Edison's 1,200-hour incandescent carbon filament and the birth of central station electrical illumination.",
    duration: "0:30",
    totalSeconds: 30,
    narrator: "Clara Barton Fellow",
    narratorInstitution: "Edison Electric Historical Institute",
    thumbnailUrl: "/images/character_edison.jpg",
    scenes: [
      {
        title: "01: Flickering Gaslights",
        timeRange: "00:00 - 00:10",
        description: "Nocturnal society risked fire and soot from open gas flames and candles."
      },
      {
        title: "02: Sprengel Vacuum & Bamboo",
        timeRange: "00:10 - 00:20",
        description: "Over 6,000 tested filaments culminated in carbonized Japanese bamboo in a millionth-atmosphere vacuum."
      },
      {
        title: "03: The 24-Hour Civilization",
        timeRange: "00:20 - 00:30",
        description: "Pearl Street central station illuminated lower Manhattan, inaugurating the electrified modern age."
      }
    ]
  }
];

export const MOCK_BLUEPRINTS: BlueprintMedia[] = [
  {
    id: "BP-01",
    title: "Steam Governor Valve",
    type: "BLUEPRINT",
    typeLabel: "Cyanotype Plate",
    format: "US Patent 1884 • High Resolution Scan",
    imageUrl: "/images/thumb_steam_hq.jpg",
    accessionRef: "USPTO Cyanotype #84-GV",
    date: "1884"
  },
  {
    id: "BP-02",
    title: "Astrolabe Reticle Plate",
    type: "3D",
    typeLabel: "3D Photogrammetry",
    format: "Nuremberg Guild • 0.2mm Precision Coordinate Scan",
    imageUrl: "/images/raw_card_4_astrolabe.jpg",
    accessionRef: "Nuremberg Mater #1780-ZOD",
    date: "c. 1780"
  },
  {
    id: "BP-03",
    title: "Bell Telephony Fig. 7",
    type: "BLUEPRINT",
    typeLabel: "Original Patent Draft",
    format: "Washington USPTO Vault • March 1876 Original Filing",
    imageUrl: "/images/raw_card_1_bell.jpg",
    accessionRef: "USPTO Patent Drawing Sheet 1",
    date: "March 7, 1876"
  },
  {
    id: "BP-04",
    title: "Menlo Park Wet Lab",
    type: "PLATE",
    typeLabel: "Collodion Plate",
    format: "Silver Gelatin Print • 1881 Edison Electric Institute",
    imageUrl: "/images/raw_card_5_edison.jpg",
    accessionRef: "Menlo Park Glass Negative #81",
    date: "1881"
  },
  {
    id: "BP-05",
    title: "Caroline Fleming Agitator Mechanics",
    type: "POSTER",
    typeLabel: "Storytelling Poster",
    format: "Curatorial Exhibition Monograph • High Definition Poster",
    imageUrl: "/images/raw_card_2_washing.jpg",
    accessionRef: "IAMS Exhibition Poster Series #04",
    date: "1880 Reconstructed"
  },
  {
    id: "BP-06",
    title: "Iron Duke Prairie Rotor Assembly",
    type: "3D",
    typeLabel: "Reconstructed 3D Visual",
    format: "Aerodynamic Simulation Surface Map",
    imageUrl: "/images/raw_card_3_windmill.jpg",
    accessionRef: "Aero Kinematic Plate #88-B",
    date: "1888 Reconstructed"
  },
  {
    id: "BP-07",
    title: "Nikola Tesla Induction Wavefronts",
    type: "POSTER",
    typeLabel: "Educational Diagram",
    format: "Polyphase Vector Harmonic Map • Technical Archive",
    imageUrl: "/images/raw_card_7_tesla.jpg",
    accessionRef: "Tesla Memorial Archive #381",
    date: "1888"
  },
  {
    id: "BP-08",
    title: "Wright Brothers Aerofoil Aerodynamics",
    type: "PLATE",
    typeLabel: "Archival Illustration",
    format: "Original Wind Tunnel Pressure Balance Schematic",
    imageUrl: "/images/raw_card_6_wright.jpg",
    accessionRef: "Smithsonian Aeronautical Monograph #06",
    date: "1903"
  }
];
