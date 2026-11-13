// =============================================================================
// IAIMS HERITAGE ARCHIVE - 90 AUTHENTIC HISTORICAL ASSETS DATASET
// Exactly 5 Curated & Verified Assets per Archival Discipline (18 Disciplines x 5 = 90 Total)
// =============================================================================
import { HistoricalAsset } from '@/types/asset';

export const MOCK_HISTORICAL_ASSETS: HistoricalAsset[] = [
  {
    "id": "HA-107",
    "title": "AC Induction Motor",
    "officialTitle": "Tesla Polyphase Alternating Current Dynamo & Induction Motor",
    "inventor": "Nikola Tesla",
    "creator": "Nikola Tesla",
    "patent": "Pat. #381,968 \u2022 1888",
    "patentNumber": "US381968A",
    "patentDate": "May 1, 1888",
    "year": "1888",
    "location": "New York, NY",
    "category": "ENERGY",
    "categoryLabel": "Energy & Power Generation",
    "badge": "Tesla Polyphase Vault",
    "image": "/images/character_tesla.jpg",
    "thumbnail": "/images/character_tesla.jpg",
    "desc": "Tesla's foundational alternating current motor that utilized a rotating magnetic field to eliminate mechanical commutators. This revolutionary design made high-voltage long-distance electrical power distribution feasible across the globe.",
    "description": "Tesla's foundational alternating current motor that utilized a rotating magnetic field to eliminate mechanical commutators. This revolutionary design made high-voltage long-distance electrical power distribution feasible across the globe.",
    "polyCount": "194,000 Quads",
    "medium": "Electrolytic Copper \u2022 Laminated Soft Iron",
    "resonance": "60 Hz Polyphase Resonance",
    "era": "1888 \u2014 Electrification Era",
    "story": "In 1888 Nikola Tesla patented the polyphase induction motor, solving the fatal distance limitations of direct current and sparking the War of the Currents.",
    "mechanics": "Two out-of-phase alternating currents create a rotating stator magnetic field that induces rotor currents to generate torque without brushes.",
    "legacy": "Powers over 90 percent of modern industrial machinery and electric vehicles worldwide.",
    "modelType": "tesla",
    "model3dUrl": "/models/cad_energy_ha_107.glb",
    "videoUrl": "/videos/reel_energy_ha_107.mp4",
    "tags": [
      "AC Motor",
      "Polyphase",
      "Electromagnetic",
      "Power Grid",
      "Tesla"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The AC Induction Motor fundamentally altered energy & power generation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-ENG-02",
    "title": "Pearl Street Jumbo Dynamo",
    "officialTitle": "Edison Direct Current Multi-Polar Central Station Dynamo",
    "inventor": "Thomas Alva Edison",
    "creator": "Thomas Alva Edison",
    "patent": "Pat. #263,142 \u2022 1882",
    "patentNumber": "US263142A",
    "patentDate": "August 22, 1882",
    "year": "1882",
    "location": "Menlo Park, NJ",
    "category": "ENERGY",
    "categoryLabel": "Energy & Power Generation",
    "badge": "Central Station Vault",
    "image": "/images/character_edison.jpg",
    "thumbnail": "/images/character_edison.jpg",
    "desc": "The colossal 27-ton Pearl Street Jumbo Dynamo was the cornerstone of the world's first commercial central electric power station in lower Manhattan. It combined a high-efficiency armature with direct steam engine coupling to supply constant 110-volt current to hundreds of incandescent bulbs.",
    "description": "The colossal 27-ton Pearl Street Jumbo Dynamo was the cornerstone of the world's first commercial central electric power station in lower Manhattan. It combined a high-efficiency armature with direct steam engine coupling to supply constant 110-volt current to hundreds of incandescent bulbs.",
    "polyCount": "168,000 Quads",
    "medium": "Forged Wrought Iron \u2022 Heavy Castings",
    "resonance": "110V Direct Current Dynamo",
    "era": "1882 \u2014 Central Grid Genesis",
    "story": "Edison built massive multi-dynamo central stations that supplied underground copper mains throughout Wall Street.",
    "mechanics": "Directly coupled high-speed steam engines spun multi-pole wound armatures inside massive horizontal field electromagnets, generating steady DC power.",
    "legacy": "Inaugurated the modern utility power company business model.",
    "modelType": "edison",
    "model3dUrl": "/models/cad_energy_ha_eng_02.glb",
    "videoUrl": "/videos/reel_energy_ha_eng_02.mp4",
    "tags": [
      "Dynamo",
      "Edison",
      "Pearl Street",
      "Direct Current",
      "Power Station"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Pearl Street Jumbo Dynamo fundamentally altered energy & power generation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-ENG-03",
    "title": "Homopolar Disk Generator",
    "officialTitle": "Faraday Continuous Unipolar Electromagnetic Generator",
    "inventor": "Michael Faraday",
    "creator": "Michael Faraday",
    "patent": "Pat. #1831-GB01 \u2022 1831",
    "patentNumber": "GB1831001A",
    "patentDate": "November 24, 1831",
    "year": "1831",
    "location": "London, UK",
    "category": "ENERGY",
    "categoryLabel": "Energy & Power Generation",
    "badge": "Royal Institution Archive",
    "image": "/images/raw_card_7_tesla.jpg",
    "thumbnail": "/images/raw_card_7_tesla.jpg",
    "desc": "Faraday's historic copper disc generator represented humanity's very first conversion of mechanical rotational motion into continuous electrical energy. By rotating a copper disc between the poles of a permanent horseshoe magnet, Faraday proved the law of electromagnetic induction.",
    "description": "Faraday's historic copper disc generator represented humanity's very first conversion of mechanical rotational motion into continuous electrical energy. By rotating a copper disc between the poles of a permanent horseshoe magnet, Faraday proved the law of electromagnetic induction.",
    "polyCount": "145,000 Quads",
    "medium": "Hand-Turned Copper Disc \u2022 Permanent Horseshoe Magnet",
    "resonance": "Continuous DC Homopolar Current",
    "era": "1831 \u2014 Classical Induction",
    "story": "In 1831 at the Royal Institution, Faraday spun a 12-inch copper plate through magnetic field lines, detecting continuous current.",
    "mechanics": "Lorentz forces act on free conduction electrons in the moving copper disk, creating a radial voltage difference between shaft and rim.",
    "legacy": "Discovered the fundamental scientific principle that underlies all modern electrical power generation.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_energy_ha_eng_03.glb",
    "videoUrl": "/videos/reel_energy_ha_eng_03.mp4",
    "tags": [
      "Electromagnetism",
      "Faraday",
      "Induction",
      "Generator",
      "Unipolar"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Homopolar Disk Generator fundamentally altered energy & power generation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-ENG-04",
    "title": "Multi-Stage Steam Turbine Dynamo",
    "officialTitle": "Parsons Axial Compound Steam Turbine Generator",
    "inventor": "Charles Algernon Parsons",
    "creator": "Charles Algernon Parsons",
    "patent": "Pat. #421,999 \u2022 1884",
    "patentNumber": "US421999A",
    "patentDate": "February 25, 1890",
    "year": "1884",
    "location": "Newcastle upon Tyne, UK",
    "category": "ENERGY",
    "categoryLabel": "Energy & Power Generation",
    "badge": "Turbine Pioneer Ledger",
    "image": "/images/thumb_steam_hq.jpg",
    "thumbnail": "/images/thumb_steam_hq.jpg",
    "desc": "Charles Parsons revolutionized power generation by inventing the multi-stage axial steam turbine directly coupled to an electrical dynamo. The smooth, ultra-high-speed expansion of steam across sequential rotor blades yielded unprecedented thermal and electrical efficiency.",
    "description": "Charles Parsons revolutionized power generation by inventing the multi-stage axial steam turbine directly coupled to an electrical dynamo. The smooth, ultra-high-speed expansion of steam across sequential rotor blades yielded unprecedented thermal and electrical efficiency.",
    "polyCount": "210,000 Quads",
    "medium": "Cast Steel Casing \u2022 Phosphor Bronze Blades",
    "resonance": "18,000 RPM Rotational Velocity",
    "era": "1884 \u2014 Industrial Steam Turbo-Era",
    "story": "Parsons devised progressive pressure-drop stages that allowed tiny steam jets to extract nearly all thermal enthalpy without pistons.",
    "mechanics": "High-pressure boiler steam expands sequentially through fixed nozzle rings and spinning bladed wheels, converting thermal pressure into rotary kinetic drive.",
    "legacy": "Steam turbines still generate over 75 percent of the world's electricity in thermal and nuclear stations today.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_energy_ha_eng_04.glb",
    "videoUrl": "/videos/reel_energy_ha_eng_04.mp4",
    "tags": [
      "Turbine",
      "Steam Power",
      "Parsons",
      "Dynamo",
      "Rotational"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Multi-Stage Steam Turbine Dynamo fundamentally altered energy & power generation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-ENG-05",
    "title": "Stanley AC Induction Transformer",
    "officialTitle": "William Stanley Closed-Core High-Voltage Step-Down Transformer",
    "inventor": "William Stanley Jr.",
    "creator": "William Stanley Jr.",
    "patent": "Pat. #349,611 \u2022 1886",
    "patentNumber": "US349611A",
    "patentDate": "September 21, 1886",
    "year": "1886",
    "location": "Great Barrington, MA",
    "category": "ENERGY",
    "categoryLabel": "Energy & Power Generation",
    "badge": "Westinghouse Grid Vault",
    "image": "/images/character_bell_stage.png",
    "thumbnail": "/images/character_bell_stage.png",
    "desc": "William Stanley designed the first practical commercial AC transformer utilizing easily manufactured E-shaped and I-shaped laminated silicon steel plates. In 1886 in Great Barrington, Massachusetts, he demonstrated transmitting electricity at 500 volts and stepping it down to safely illuminate village shops.",
    "description": "William Stanley designed the first practical commercial AC transformer utilizing easily manufactured E-shaped and I-shaped laminated silicon steel plates. In 1886 in Great Barrington, Massachusetts, he demonstrated transmitting electricity at 500 volts and stepping it down to safely illuminate village shops.",
    "polyCount": "152,000 Quads",
    "medium": "Laminated E-I Silicon Steel \u2022 Varnished Copper Coils",
    "resonance": "500V to 100V Transformation Ratio",
    "era": "1886 \u2014 AC Transmission Revolution",
    "story": "Stanley proved alternating current could travel miles at high voltage and be stepped down safely at customers' doors.",
    "mechanics": "Interleaved E and I core sheets minimize eddy current losses while magnetic flux coupling between primary and secondary windings transforms alternating voltage.",
    "legacy": "Established the universal transformer standard that made national high-voltage electric transmission grids viable.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_energy_ha_eng_05.glb",
    "videoUrl": "/videos/reel_energy_ha_eng_05.mp4",
    "tags": [
      "Transformer",
      "High Voltage",
      "AC Grid",
      "Stanley",
      "Induction"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Stanley AC Induction Transformer fundamentally altered energy & power generation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-101",
    "title": "Early Speaking Telephone",
    "officialTitle": "Improvement in Telegraphy (Acoustic Speaking Telephone)",
    "inventor": "Alexander Graham Bell",
    "creator": "Alexander Graham Bell",
    "patent": "Pat. #174,465 \u2022 1876",
    "patentNumber": "US174465A",
    "patentDate": "March 7, 1876",
    "year": "1876",
    "location": "Boston, MA",
    "category": "TELECOM",
    "categoryLabel": "Telephony & Acoustic Telegraphy",
    "badge": "Smithsonian National Vault",
    "image": "/images/bells_telephone_clean.png",
    "thumbnail": "/images/bells_telephone_clean.png",
    "desc": "Patented in March 1876, this historic apparatus captured the first intelligible electric transmission of the human voice. Bell demonstrated that variable electrical undulations could faithfully reproduce sound vibrations across long copper telegraph wires.",
    "description": "Patented in March 1876, this historic apparatus captured the first intelligible electric transmission of the human voice. Bell demonstrated that variable electrical undulations could faithfully reproduce sound vibrations across long copper telegraph wires.",
    "polyCount": "180,000 Quads",
    "medium": "Turned Walnut \u2022 Cast Phosphor Bronze \u2022 Platinum Rod",
    "resonance": "432 Hz Acoustic Center",
    "era": "1876 \u2014 Centennial Exposition",
    "story": "In an attic workshop in Boston, Alexander Graham Bell synthesized acoustic physics and electromagnetic telegraphy into the speaking telephone.",
    "mechanics": "Sound waves impinging upon a taut diaphragm vibrate an iron armature, continuously varying circuit resistance and reproducing speech in an electromagnetic receiver.",
    "legacy": "Laid the structural and intellectual groundwork for modern telecommunications networks.",
    "modelType": "bell",
    "model3dUrl": "/models/cad_telecom_ha_101.glb",
    "videoUrl": "/videos/reel_telecom_ha_101.mp4",
    "tags": [
      "Acoustic",
      "Telephone",
      "Telegraphy",
      "Bell",
      "Voice Transmission"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Early Speaking Telephone fundamentally altered telephony & acoustic telegraphy, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-109",
    "title": "Carbon Button Transmitter",
    "officialTitle": "Edison Variable-Resistance Inert Carbon Audio Transmitter",
    "inventor": "Thomas Alva Edison",
    "creator": "Thomas Alva Edison",
    "patent": "Pat. #474,230 \u2022 1877",
    "patentNumber": "US474230A",
    "patentDate": "May 3, 1892",
    "year": "1877",
    "location": "Menlo Park, NJ",
    "category": "TELECOM",
    "categoryLabel": "Telephony & Acoustic Telegraphy",
    "badge": "Edison Acoustic Vault",
    "image": "/images/character_edison.jpg",
    "thumbnail": "/images/character_edison.jpg",
    "desc": "Edison's carbon button transmitter transformed telephony from a faint, localized novelty into a robust, continent-spanning commercial system. By utilizing compressed lampblack carbon granules that varied resistance with sound wave pressure, it delivered vastly superior audio signal strength.",
    "description": "Edison's carbon button transmitter transformed telephony from a faint, localized novelty into a robust, continent-spanning commercial system. By utilizing compressed lampblack carbon granules that varied resistance with sound wave pressure, it delivered vastly superior audio signal strength.",
    "polyCount": "138,000 Quads",
    "medium": "Compressed Lampblack Carbon \u2022 Spun Brass Chamber",
    "resonance": "High-Gain Variable Resistance",
    "era": "1877 \u2014 Acoustic Clarity Era",
    "story": "Edison discovered that compressed carbon particles changed electrical conductivity under minuscule pressure changes, multiplying telephonic range.",
    "mechanics": "Voice waves deflect a diaphragm against compressed carbon grains, varying circuit current proportionally to speech frequency and amplitude.",
    "legacy": "Served as the core telephone microphone design in telephone handsets worldwide for nearly a century.",
    "modelType": "edison",
    "model3dUrl": "/models/cad_telecom_ha_109.glb",
    "videoUrl": "/videos/reel_telecom_ha_109.mp4",
    "tags": [
      "Carbon Microphone",
      "Edison",
      "Audio Transmitter",
      "Telephony",
      "Acoustics"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Carbon Button Transmitter fundamentally altered telephony & acoustic telegraphy, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TEL-03",
    "title": "Electromagnetic Recording Telegraph",
    "officialTitle": "Morse Dot-and-Dash Magnetic Register and Key",
    "inventor": "Samuel F.B. Morse",
    "creator": "Samuel F.B. Morse",
    "patent": "Pat. #1,647 \u2022 1840",
    "patentNumber": "US1647A",
    "patentDate": "June 20, 1840",
    "year": "1840",
    "location": "New York, NY",
    "category": "TELECOM",
    "categoryLabel": "Telephony & Acoustic Telegraphy",
    "badge": "Morse Pioneer Vault",
    "image": "/images/raw_card_1_bell.jpg",
    "thumbnail": "/images/raw_card_1_bell.jpg",
    "desc": "Samuel Morse's electromagnetic recording telegraph inaugurated the age of near-instantaneous global telecommunication. Using an electromagnet to actuate a steel stylus onto a moving paper tape, it encoded complex messages into rhythmic binary electrical impulses.",
    "description": "Samuel Morse's electromagnetic recording telegraph inaugurated the age of near-instantaneous global telecommunication. Using an electromagnet to actuate a steel stylus onto a moving paper tape, it encoded complex messages into rhythmic binary electrical impulses.",
    "polyCount": "128,000 Quads",
    "medium": "Clockwork Escapement \u2022 Cast Brass Electromagnet",
    "resonance": "Binary Pulse Signal Code",
    "era": "1840 \u2014 Telegraphic Genesis",
    "story": "Morse tapped 'What hath God wrought' between Washington and Baltimore, shrinking transmission times from weeks to fractions of a second.",
    "mechanics": "A hand key closes an electric battery circuit energizing a remote electromagnet, pulling down an armature stylus that embosses dots and dashes onto a paper strip.",
    "legacy": "Created the world's first global information network, paving the way for teleprinters and the internet.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_telecom_ha_tel_03.glb",
    "videoUrl": "/videos/reel_telecom_ha_tel_03.mp4",
    "tags": [
      "Telegraph",
      "Morse Code",
      "Electromagnet",
      "Binary Signal",
      "Telecommunication"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Electromagnetic Recording Telegraph fundamentally altered telephony & acoustic telegraphy, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TEL-04",
    "title": "Liquid Variable Resistance Transmitter",
    "officialTitle": "Gray Hydro-Electric Acoustic Telegraph",
    "inventor": "Elisha Gray",
    "creator": "Elisha Gray",
    "patent": "Pat. #166,095 \u2022 1875",
    "patentNumber": "US166095A",
    "patentDate": "July 27, 1875",
    "year": "1875",
    "location": "Chicago, IL",
    "category": "TELECOM",
    "categoryLabel": "Telephony & Acoustic Telegraphy",
    "badge": "Historic Patent Caveat",
    "image": "/images/character_bell.jpg",
    "thumbnail": "/images/character_bell.jpg",
    "desc": "Elisha Gray's liquid transmitter demonstrated variable electric resistance through an acidulated liquid bath. Filed as a legendary caveat on the exact same morning as Bell's patent, it demonstrated that acoustic vibrations can directly modulate electrical current.",
    "description": "Elisha Gray's liquid transmitter demonstrated variable electric resistance through an acidulated liquid bath. Filed as a legendary caveat on the exact same morning as Bell's patent, it demonstrated that acoustic vibrations can directly modulate electrical current.",
    "polyCount": "142,000 Quads",
    "medium": "Blown Glass Vessel \u2022 Acidulated Water Bath",
    "resonance": "Liquid Rheostatic Modulation",
    "era": "1876 \u2014 Telephonic Contest",
    "story": "Gray and Bell simultaneously submitted documentation on February 14, 1876, creating one of the most famous priority disputes in patent history.",
    "mechanics": "Vibrations from a speaking trumpet move a submerged wire in conductive fluid, altering resistance inversely with depth of immersion to modulate currents.",
    "legacy": "Advanced the fundamental science of variable resistance audio transducers.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_telecom_ha_tel_04.glb",
    "videoUrl": "/videos/reel_telecom_ha_tel_04.mp4",
    "tags": [
      "Liquid Transmitter",
      "Gray",
      "Variable Resistance",
      "Acoustics",
      "Telephony"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Liquid Variable Resistance Transmitter fundamentally altered telephony & acoustic telegraphy, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TEL-05",
    "title": "Automatic Telephone Strowger Switch",
    "officialTitle": "Strowger Two-Motion Step-by-Step Electromechanical Dial Switch",
    "inventor": "Almon Brown Strowger",
    "creator": "Almon Brown Strowger",
    "patent": "Pat. #447,918 \u2022 1891",
    "patentNumber": "US447918A",
    "patentDate": "March 10, 1891",
    "year": "1891",
    "location": "Kansas City, MO",
    "category": "TELECOM",
    "categoryLabel": "Telephony & Acoustic Telegraphy",
    "badge": "Strowger Exchange Archive",
    "image": "/images/raw_card_8_babbage.jpg",
    "thumbnail": "/images/raw_card_8_babbage.jpg",
    "desc": "Almon Strowger invented the automatic telephone exchange, eliminating manual switchboard operators. Suspecting human switchboard operators were diverting funeral calls to a competitor, he created a ratchet-driven electromechanical switch driven directly by user dial pulses.",
    "description": "Almon Strowger invented the automatic telephone exchange, eliminating manual switchboard operators. Suspecting human switchboard operators were diverting funeral calls to a competitor, he created a ratchet-driven electromechanical switch driven directly by user dial pulses.",
    "polyCount": "176,000 Quads",
    "medium": "Step-by-Step Ratchet Relays \u2022 Brass Wiper Contacts",
    "resonance": "Electromechanical Pulse Stepping",
    "era": "1891 \u2014 Automated Exchange",
    "story": "Strowger built his initial rotary switch prototype out of a round collar box and straight sewing pins before filing his landmark patent.",
    "mechanics": "Telephone rotary dial pulses energize vertical and rotary stepping electromagnets, causing contact wipers to step up and rotate to engage the called line.",
    "legacy": "The backbone of international telephone networks for over eighty years until digital computerized switches.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_telecom_ha_tel_05.glb",
    "videoUrl": "/videos/reel_telecom_ha_tel_05.mp4",
    "tags": [
      "Strowger Switch",
      "Automatic Dial",
      "Electromechanical",
      "Telephony",
      "Switching"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Automatic Telephone Strowger Switch fundamentally altered telephony & acoustic telegraphy, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-102",
    "title": "Rotary Agitator Clothes Washer",
    "officialTitle": "Machine for Washing Clothes with Mechanical Agitator",
    "inventor": "Caroline J. Fleming",
    "creator": "Caroline J. Fleming",
    "patent": "Pat. #249,002 \u2022 1881",
    "patentNumber": "US249002A",
    "patentDate": "November 1, 1881",
    "year": "1881",
    "location": "Columbia, MO",
    "category": "DOMESTIC",
    "categoryLabel": "Domestic Mechanics & Household",
    "badge": "Domestic Labor Liberation",
    "image": "/images/washing_machine_isolated.png",
    "thumbnail": "/images/washing_machine_isolated.png",
    "desc": "Caroline Fleming's patented 1881 design introduced the internal oscillating wooden agitator that lifted and forced suds through heavy cotton fibers. This ergonomic mechanical innovation reduced arduous washday labor from twelve backbreaking hours to under sixty minutes.",
    "description": "Caroline Fleming's patented 1881 design introduced the internal oscillating wooden agitator that lifted and forced suds through heavy cotton fibers. This ergonomic mechanical innovation reduced arduous washday labor from twelve backbreaking hours to under sixty minutes.",
    "polyCount": "154,000 Quads",
    "medium": "Coopered Virgin Cedar Staves \u2022 Wrought Iron Hand Crank",
    "resonance": "Oscillating Hydrodynamic Flow",
    "era": "1881 \u2014 Reconstruction Era",
    "story": "Caroline Fleming re-engineered domestic laundry from boiling lye tubs into an efficient enclosed mechanical system.",
    "mechanics": "Turning the crank activates an internal gear train that converts continuous rotation into an alternating 180-degree oscillating agitator sweep.",
    "legacy": "Direct ancestor of modern top-loading automatic domestic washing machines.",
    "modelType": "fleming",
    "model3dUrl": "/models/cad_domestic_ha_102.glb",
    "videoUrl": "/videos/reel_domestic_ha_102.mp4",
    "tags": [
      "Agitator",
      "Washing Machine",
      "Domestic Mechanics",
      "Ergonomics",
      "Appliance"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Rotary Agitator Clothes Washer fundamentally altered domestic mechanics & household, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-DOM-02",
    "title": "Continuous Lockstitch Sewing Machine",
    "officialTitle": "Singer Traverse Shuttle Lockstitch Sewing Mechanism",
    "inventor": "Isaac Merritt Singer",
    "creator": "Isaac Merritt Singer",
    "patent": "Pat. #8,294 \u2022 1851",
    "patentNumber": "US8294A",
    "patentDate": "August 12, 1851",
    "year": "1851",
    "location": "New York, NY",
    "category": "DOMESTIC",
    "categoryLabel": "Domestic Mechanics & Household",
    "badge": "Singer Mechanical Archive",
    "image": "/images/raw_card_2_washing.jpg",
    "thumbnail": "/images/raw_card_2_washing.jpg",
    "desc": "Isaac Singer transformed textile manufacturing and domestic life with the first practical continuous-feed sewing machine. Featuring a straight reciprocating needle, a presser foot to hold fabric flat, and a foot treadle, it unlocked rapid domestic garment assembly.",
    "description": "Isaac Singer transformed textile manufacturing and domestic life with the first practical continuous-feed sewing machine. Featuring a straight reciprocating needle, a presser foot to hold fabric flat, and a foot treadle, it unlocked rapid domestic garment assembly.",
    "polyCount": "162,000 Quads",
    "medium": "Japanned Cast Iron \u2022 Gilded Filigree \u2022 Carbon Steel Shuttle",
    "resonance": "Treadle Kinematic Feed",
    "era": "1851 \u2014 Sewing Revolution",
    "story": "Singer redesigned crude prototypes into a sturdy machine that could sew 900 stitches per minute compared to 40 by hand.",
    "mechanics": "A foot treadle drives an overhead flywheel; a vertical needle pierces fabric to form a thread loop, through which a shuttle carries a bobbin thread to lock the stitch.",
    "legacy": "Emancipated household seamstresses and built one of the world's first global consumer companies.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_domestic_ha_dom_02.glb",
    "videoUrl": "/videos/reel_domestic_ha_dom_02.mp4",
    "tags": [
      "Sewing Machine",
      "Singer",
      "Lockstitch",
      "Domestic",
      "Textiles"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Continuous Lockstitch Sewing Machine fundamentally altered domestic mechanics & household, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-DOM-03",
    "title": "Mechanical Centrifugal Dishwasher",
    "officialTitle": "Cochrane High-Pressure Water-Jet Dish Washing Machine",
    "inventor": "Josephine Cochrane",
    "creator": "Josephine Cochrane",
    "patent": "Pat. #355,139 \u2022 1886",
    "patentNumber": "US355139A",
    "patentDate": "December 28, 1886",
    "year": "1886",
    "location": "Shelbyville, IL",
    "category": "DOMESTIC",
    "categoryLabel": "Domestic Mechanics & Household",
    "badge": "Columbian Exposition Gold Medal",
    "image": "/images/character_fleming.jpg",
    "thumbnail": "/images/character_fleming.jpg",
    "desc": "Frustrated that fine heirloom china was constantly chipped during hand washing, Josephine Cochrane declared: 'If nobody else is going to invent a dishwashing machine, I'll do it myself.' Her patented machine held dishes securely in wire racks while blasting them with pressurized hot soapy water.",
    "description": "Frustrated that fine heirloom china was constantly chipped during hand washing, Josephine Cochrane declared: 'If nobody else is going to invent a dishwashing machine, I'll do it myself.' Her patented machine held dishes securely in wire racks while blasting them with pressurized hot soapy water.",
    "polyCount": "148,000 Quads",
    "medium": "Galvanized Copper Boiler \u2022 Wire Compartment Wheel",
    "resonance": "Centrifugal Hydraulic Spray",
    "era": "1886 \u2014 Domestic Engineering",
    "story": "Cochrane built her initial prototype in a shed behind her house, later winning first prize at the 1893 World's Columbian Exposition.",
    "mechanics": "Dishes sit in wire compartments inside a copper boiler wheel while pumps squirt boiling soapy water directly against surfaces.",
    "legacy": "Direct forerunner of commercial kitchen sanitizers and modern residential dishwashers.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_domestic_ha_dom_03.glb",
    "videoUrl": "/videos/reel_domestic_ha_dom_03.mp4",
    "tags": [
      "Dishwasher",
      "Cochrane",
      "Hydraulic",
      "Domestic",
      "Culinary"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Mechanical Centrifugal Dishwasher fundamentally altered domestic mechanics & household, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-DOM-04",
    "title": "Portable Electric Suction Sweeper",
    "officialTitle": "Spangler Lightweight Upright Vacuum Cleaner with Revolving Brush",
    "inventor": "James Murray Spangler",
    "creator": "James Murray Spangler",
    "patent": "Pat. #889,823 \u2022 1908",
    "patentNumber": "US889823A",
    "patentDate": "June 2, 1908",
    "year": "1908",
    "location": "Canton, OH",
    "category": "DOMESTIC",
    "categoryLabel": "Domestic Mechanics & Household",
    "badge": "Hoover Heritage Archive",
    "image": "/images/character_fleming_stage.png",
    "thumbnail": "/images/character_fleming_stage.png",
    "desc": "James Murray Spangler, an asthmatic department store janitor, assembled the world's first portable upright vacuum cleaner using an electric fan motor, a tin soap box, a broom handle, and his wife's satin pillowcase. His rotating brush loosened embedded rug dirt while suction drew it into the bag.",
    "description": "James Murray Spangler, an asthmatic department store janitor, assembled the world's first portable upright vacuum cleaner using an electric fan motor, a tin soap box, a broom handle, and his wife's satin pillowcase. His rotating brush loosened embedded rug dirt while suction drew it into the bag.",
    "polyCount": "136,000 Quads",
    "medium": "Cast Aluminum Fan Housing \u2022 Wooden Brush Roll",
    "resonance": "High-Velocity Pneumatic Suction",
    "era": "1908 \u2014 Sanitary Home Era",
    "story": "Spangler sold his patent to William H. Hoover, creating the household appliance brand that defined 20th-century home sanitation.",
    "mechanics": "A high-speed centrifugal impeller creates negative atmospheric pressure, pulling airborne dirt dislodged by a bristled roller into a collection sack.",
    "legacy": "Established the universal architecture of modern household upright and canister vacuum cleaners.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_domestic_ha_dom_04.glb",
    "videoUrl": "/videos/reel_domestic_ha_dom_04.mp4",
    "tags": [
      "Vacuum Cleaner",
      "Spangler",
      "Suction",
      "Sanitary",
      "Domestic Appliance"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Portable Electric Suction Sweeper fundamentally altered domestic mechanics & household, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-DOM-05",
    "title": "DOMELRE Domestic Refrigerator",
    "officialTitle": "Wolf Self-Contained Domestic Electric Refrigerating Machine",
    "inventor": "Fred W. Wolf Jr.",
    "creator": "Fred W. Wolf Jr.",
    "patent": "Pat. #1,282,248 \u2022 1916",
    "patentNumber": "US1282248A",
    "patentDate": "October 22, 1918",
    "year": "1916",
    "location": "Chicago, IL",
    "category": "DOMESTIC",
    "categoryLabel": "Domestic Mechanics & Household",
    "badge": "Cold Chain Heritage",
    "image": "/images/thumb_3d_cube.jpg",
    "thumbnail": "/images/thumb_3d_cube.jpg",
    "desc": "The DOMELRE (Domestic Electric Refrigerator) was the first self-contained, electrically powered domestic refrigeration unit designed to sit atop existing iceboxes. It replaced dangerous commercial ammonia ice delivery with an automated sulfur dioxide vapor compression cycle.",
    "description": "The DOMELRE (Domestic Electric Refrigerator) was the first self-contained, electrically powered domestic refrigeration unit designed to sit atop existing iceboxes. It replaced dangerous commercial ammonia ice delivery with an automated sulfur dioxide vapor compression cycle.",
    "polyCount": "170,000 Quads",
    "medium": "Vapor Compression Compressor \u2022 Copper Condenser Coils",
    "resonance": "Thermostatic Vapor Expansion",
    "era": "1916 \u2014 Cold Storage Revolution",
    "story": "Wolf packaged the compressor, motor, condenser, and cooling coil into a single compact drop-in unit that eliminated messy melting blocks of delivery ice.",
    "mechanics": "An electric motor drives a sealed compressor that condenses refrigerant gas; as it expands through an evaporator coil inside the food chest, it absorbs latent heat.",
    "legacy": "Transformed food preservation, reducing foodborne illnesses and eliminating daily reliance on ice wagons.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_domestic_ha_dom_05.glb",
    "videoUrl": "/videos/reel_domestic_ha_dom_05.mp4",
    "tags": [
      "Refrigerator",
      "Refrigeration",
      "Cold Storage",
      "DOMELRE",
      "Preservation"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The DOMELRE Domestic Refrigerator fundamentally altered domestic mechanics & household, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-100",
    "title": "Astronomical Astrolabe & Balance Escapement",
    "officialTitle": "Horological Astrolabe with Planispheric Projection Plates",
    "inventor": "Henry Beville",
    "creator": "Henry Beville",
    "patent": "Pat. #249,002 \u2022 1881",
    "patentNumber": "US249002B",
    "patentDate": "November 1, 1881",
    "year": "1881",
    "location": "Richmond, VA",
    "category": "TIME",
    "categoryLabel": "Horology & Precision Escapements",
    "badge": "Smithsonian National Vault",
    "image": "/images/character_beville.jpg",
    "thumbnail": "/images/character_beville.jpg",
    "desc": "An intricately engraved brass astronomical astrolabe fitted with a precision balance escapement mechanism. Designed to compute celestial positions, solar declination, and localized sidereal time across varied latitudes.",
    "description": "An intricately engraved brass astronomical astrolabe fitted with a precision balance escapement mechanism. Designed to compute celestial positions, solar declination, and localized sidereal time across varied latitudes.",
    "polyCount": "142,000 Quads",
    "medium": "Cast & Hand-Turned High-Lead Brass \u2022 Blued Crucible Steel Pinion",
    "resonance": "4.00 Hz Escapement Resonance",
    "era": "1881 \u2014 Post-Reconstruction Horology",
    "story": "Beville constructed this portable chronometric instrument to reconcile field navigators' sightings with astronomical tables.",
    "mechanics": "Features planispheric stereographic projections cut into rotating tympans driven by a geared escapement to mirror the diurnal celestial rotation.",
    "legacy": "Exemplifies the transition from classical mathematical instruments to modern precision horology.",
    "modelType": "beville",
    "model3dUrl": "/models/cad_time_ha_100.glb",
    "videoUrl": "/videos/reel_time_ha_100.mp4",
    "tags": [
      "Astrolabe",
      "Balance Wheel",
      "Precision Horology",
      "Sidereal Time",
      "Escapement"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Astronomical Astrolabe & Balance Escapement fundamentally altered horology & precision escapements, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-104",
    "title": "Isochronous Pendulum Clock",
    "officialTitle": "Huygens Cycloidal Cheeks Restoring Force Clockwork",
    "inventor": "Christiaan Huygens",
    "creator": "Christiaan Huygens",
    "patent": "Pat. #1657-NL01 \u2022 1657",
    "patentNumber": "NL1657001A",
    "patentDate": "June 16, 1657",
    "year": "1657",
    "location": "The Hague, Netherlands",
    "category": "TIME",
    "categoryLabel": "Horology & Precision Escapements",
    "badge": "Rijksmuseum Horological Vault",
    "image": "/images/raw_card_4_astrolabe.jpg",
    "thumbnail": "/images/raw_card_4_astrolabe.jpg",
    "desc": "Christiaan Huygens increased the accuracy of time measurement by a factor of sixty by introducing the pendulum regulator with curved cycloidal cheeks. This mathematical breakthrough made the period of swing completely independent of the amplitude of vibration.",
    "description": "Christiaan Huygens increased the accuracy of time measurement by a factor of sixty by introducing the pendulum regulator with curved cycloidal cheeks. This mathematical breakthrough made the period of swing completely independent of the amplitude of vibration.",
    "polyCount": "132,000 Quads",
    "medium": "Cast Bell-Bronze Wheels \u2022 Forged Iron Frame",
    "resonance": "1.000 Hz Royal Pendulum Period",
    "era": "1657 \u2014 Scientific Revolution",
    "story": "Galileo noted small pendulum arcs, but Huygens proved mathematically that true circular arcs vary; he added curved metal cheeks to force the suspension ribbon into a taut cycloid.",
    "mechanics": "A crown wheel impulses a verge escapement connected to a suspended bob, whose flexible suspension ribbon wraps against cycloidal cheeks to guarantee constant cycle duration.",
    "legacy": "Transformed astronomy, navigation, and human civilization by making reliable, minute-accurate clocks possible.",
    "modelType": "astrolabe",
    "model3dUrl": "/models/cad_time_ha_104.glb",
    "videoUrl": "/videos/reel_time_ha_104.mp4",
    "tags": [
      "Pendulum",
      "Huygens",
      "Cycloid",
      "Escapement",
      "Horology"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Isochronous Pendulum Clock fundamentally altered horology & precision escapements, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TIM-03",
    "title": "Marine Chronometer H4",
    "officialTitle": "Harrison Temperature-Compensated Marine Timekeeper",
    "inventor": "John Harrison",
    "creator": "John Harrison",
    "patent": "Pat. #1761-GB04 \u2022 1761",
    "patentNumber": "GB1761004A",
    "patentDate": "March 20, 1761",
    "year": "1761",
    "location": "Barrow upon Humber, UK",
    "category": "TIME",
    "categoryLabel": "Horology & Precision Escapements",
    "badge": "Royal Observatory Greenwich",
    "image": "/images/character_beville_stage.png",
    "thumbnail": "/images/character_beville_stage.png",
    "desc": "John Harrison solved the deadly Longitude Problem with his pocket-watch-sized marine timekeeper H4. On an 81-day voyage to Jamaica in stormy seas, it lost just 5.1 seconds, enabling captains to pinpoint their exact East-West location on Earth.",
    "description": "John Harrison solved the deadly Longitude Problem with his pocket-watch-sized marine timekeeper H4. On an 81-day voyage to Jamaica in stormy seas, it lost just 5.1 seconds, enabling captains to pinpoint their exact East-West location on Earth.",
    "polyCount": "185,000 Quads",
    "medium": "Solid Silver Double Case \u2022 Diamond Pallet Jewels",
    "resonance": "5.00 Hz High-Frequency Balance",
    "era": "1761 \u2014 Longitude Conquest",
    "story": "Parliament offered the \u00a320,000 Longitude Prize in 1714. Self-taught carpenter Harrison perfected friction-free clock mechanisms on rolling ships.",
    "mechanics": "A fast-beating balance wheel is regulated by a bimetallic strip of brass and steel that automatically shortens or lengthens the hairspring as temperatures fluctuate.",
    "legacy": "Saved thousands of sailors' lives and opened reliable global maritime exploration and trade.",
    "modelType": "beville",
    "model3dUrl": "/models/cad_time_ha_tim_03.glb",
    "videoUrl": "/videos/reel_time_ha_tim_03.mp4",
    "tags": [
      "Marine Chronometer",
      "Harrison",
      "Longitude",
      "Bimetallic",
      "Horology"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Marine Chronometer H4 fundamentally altered horology & precision escapements, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TIM-04",
    "title": "Deadbeat Escapement Regulator",
    "officialTitle": "Graham Frictional Impulse Precision Astronomical Escapement",
    "inventor": "George Graham",
    "creator": "George Graham",
    "patent": "Pat. #1715-GB02 \u2022 1715",
    "patentNumber": "GB1715002A",
    "patentDate": "October 14, 1715",
    "year": "1715",
    "location": "London, UK",
    "category": "TIME",
    "categoryLabel": "Horology & Precision Escapements",
    "badge": "Royal Astronomical Society",
    "image": "/images/cards_row.jpg",
    "thumbnail": "/images/cards_row.jpg",
    "desc": "George Graham eliminated the backward recoil of existing anchor clock escapements by inventing the deadbeat escapement. By restricting pallet motion during the drop phase to concentric resting faces, Graham gave astronomical observatories their first truly steady seconds-beating standard.",
    "description": "George Graham eliminated the backward recoil of existing anchor clock escapements by inventing the deadbeat escapement. By restricting pallet motion during the drop phase to concentric resting faces, Graham gave astronomical observatories their first truly steady seconds-beating standard.",
    "polyCount": "124,000 Quads",
    "medium": "Ground Tool Steel Pallets \u2022 Cast Brass Escape Wheel",
    "resonance": "Zero-Recoil Deadbeat Impulse",
    "era": "1715 \u2014 Enlightenment Accuracy",
    "story": "The old anchor escapement pushed the escape wheel backwards with every tick, causing gear wear. Graham contoured dead surfaces so escape teeth remain frozen until release.",
    "mechanics": "Escape wheel teeth drop onto curved dead faces of anchor pallets, resting without recoil until the pendulum swings the impulse bevel across the tooth tip.",
    "legacy": "The undisputed global standard for precision observatory regulator clocks for over two hundred years.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_time_ha_tim_04.glb",
    "videoUrl": "/videos/reel_time_ha_tim_04.mp4",
    "tags": [
      "Deadbeat",
      "Graham",
      "Regulator",
      "Escapement",
      "Astronomy"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Deadbeat Escapement Regulator fundamentally altered horology & precision escapements, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TIM-05",
    "title": "Tourbillon Escapement Carriage",
    "officialTitle": "Breguet Gravity-Neutralizing Rotating Balance Carriage",
    "inventor": "Abraham-Louis Breguet",
    "creator": "Abraham-Louis Breguet",
    "patent": "Pat. #1801-FR03 \u2022 1801",
    "patentNumber": "FR1801003A",
    "patentDate": "June 26, 1801",
    "year": "1801",
    "location": "Paris, France",
    "category": "TIME",
    "categoryLabel": "Horology & Precision Escapements",
    "badge": "Breguet Haute Horlogerie Vault",
    "image": "/images/test_strip2.jpg",
    "thumbnail": "/images/test_strip2.jpg",
    "desc": "Abraham-Louis Breguet solved positional errors caused by Earth's gravity in pocket watches by mounting the entire escapement, balance wheel, and hairspring inside a revolving cage that rotates 360 degrees every 60 seconds, averaging out all positional gravitational disturbances.",
    "description": "Abraham-Louis Breguet solved positional errors caused by Earth's gravity in pocket watches by mounting the entire escapement, balance wheel, and hairspring inside a revolving cage that rotates 360 degrees every 60 seconds, averaging out all positional gravitational disturbances.",
    "polyCount": "225,000 Quads",
    "medium": "Polished Titanium & Steel Cage \u2022 Overcoil Hairspring",
    "resonance": "1-Minute Revolving Cage Rotation",
    "era": "1801 \u2014 Napoleonic Horology",
    "story": "Gentlemen kept pocket watches vertically in waistcoat pockets, causing the hairspring to sag. Breguet realized constant rotation would cancel out gravity's pull.",
    "mechanics": "The balance, hairspring, lever, and escape wheel are assembled within a mobile cage. The cage pinion engages a fixed fourth wheel, revolving the escapement assembly continuously.",
    "legacy": "Remains the ultimate mechanical tour-de-force in high-end horological engineering.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_time_ha_tim_05.glb",
    "videoUrl": "/videos/reel_time_ha_tim_05.mp4",
    "tags": [
      "Tourbillon",
      "Breguet",
      "Gravity Neutralization",
      "Overcoil",
      "Haute Horlogerie"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Tourbillon Escapement Carriage fundamentally altered horology & precision escapements, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-103",
    "title": "Brush Wind Electric Turbine",
    "officialTitle": "Automatic Dynamo-Charging Multi-Vane Windmill Turbine",
    "inventor": "Charles F. Brush",
    "creator": "Charles F. Brush",
    "patent": "Pat. #433,651 \u2022 1888",
    "patentNumber": "US433651A",
    "patentDate": "August 5, 1890",
    "year": "1888",
    "location": "Cleveland, OH",
    "category": "WIND",
    "categoryLabel": "Wind & Rotary Kinetic Systems",
    "badge": "Historic Renewable Energy Archive",
    "image": "/images/windmill_isolated.png",
    "thumbnail": "/images/windmill_isolated.png",
    "desc": "In 1888, Charles Brush built the world's first automated wind turbine for electricity generation in his Cleveland backyard. Featuring an enormous 56-foot cedar rotor with 144 blades, it continuously charged 408 storage batteries that powered his mansion for twenty years.",
    "description": "In 1888, Charles Brush built the world's first automated wind turbine for electricity generation in his Cleveland backyard. Featuring an enormous 56-foot cedar rotor with 144 blades, it continuously charged 408 storage batteries that powered his mansion for twenty years.",
    "polyCount": "165,000 Quads",
    "medium": "Virgin White Cedar Slats \u2022 12kW Brush Dynamo",
    "resonance": "500 RPM Stepped Rotor Drive",
    "era": "1888 \u2014 Kinetic Electric Era",
    "story": "Charles Brush recognized wind's untapped potential, constructing an eighty-thousand-pound timber tower with a giant counterweighted tail vane to orient into shifting gusts.",
    "mechanics": "A 56-foot rotor turns a horizontal shaft; stepped belts and pulleys step rotational speed up 50-fold to spin an automatic DC dynamo connected to a battery bank.",
    "legacy": "Proved that kinetic atmospheric winds could reliably generate domestic electrical power.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_wind_ha_103.glb",
    "videoUrl": "/videos/reel_wind_ha_103.mp4",
    "tags": [
      "Wind Turbine",
      "Brush",
      "Renewable Energy",
      "Dynamo",
      "Kinetic Power"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Brush Wind Electric Turbine fundamentally altered wind & rotary kinetic systems, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-WND-02",
    "title": "Self-Regulating Farm Windmill",
    "officialTitle": "Halladay Centrifugal Governed Sectional Windmill Wheel",
    "inventor": "Daniel Halladay",
    "creator": "Daniel Halladay",
    "patent": "Pat. #11,617 \u2022 1854",
    "patentNumber": "US11617A",
    "patentDate": "August 29, 1854",
    "year": "1854",
    "location": "Ellington, CT",
    "category": "WIND",
    "categoryLabel": "Wind & Rotary Kinetic Systems",
    "badge": "Great Plains Water Heritage",
    "image": "/images/raw_card_3_windmill.jpg",
    "thumbnail": "/images/raw_card_3_windmill.jpg",
    "desc": "Daniel Halladay invented the self-regulating farm windmill that conquered the American West. By utilizing centrifugal weights to automatically pivot its sails in high gale winds, it pumped water from deep underground aquifers without human supervision or destroying itself in tornadoes.",
    "description": "Daniel Halladay invented the self-regulating farm windmill that conquered the American West. By utilizing centrifugal weights to automatically pivot its sails in high gale winds, it pumped water from deep underground aquifers without human supervision or destroying itself in tornadoes.",
    "polyCount": "140,000 Quads",
    "medium": "Ponderosa Pine Blades \u2022 Cast Iron Swivel Head",
    "resonance": "Centrifugal Pitch Governing",
    "era": "1854 \u2014 Great Plains Expansion",
    "story": "Halladay designed hinged rotor sails that automatically flattened in excessive wind to protect the structure.",
    "mechanics": "Centrifugal weights attached to wheel segments pull against a central sliding collar; as wind velocity rises, segments feather open parallel to airflow to self-brake.",
    "legacy": "Provided the freshwater infrastructure that made railroads, cattle ranching, and prairie farming viable across North America.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_wind_ha_wnd_02.glb",
    "videoUrl": "/videos/reel_wind_ha_wnd_02.mp4",
    "tags": [
      "Halladay",
      "Windmill",
      "Centrifugal Governor",
      "Pumping",
      "Great Plains"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Self-Regulating Farm Windmill fundamentally altered wind & rotary kinetic systems, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-WND-03",
    "title": "Aerodynamic Lift Wind Power Plant",
    "officialTitle": "La Cour Multi-Blade Aerodynamic Wind Electricity Generator",
    "inventor": "Poul la Cour",
    "creator": "Poul la Cour",
    "patent": "Pat. #1891-DK01 \u2022 1891",
    "patentNumber": "DK1891001A",
    "patentDate": "October 12, 1891",
    "year": "1891",
    "location": "Askov, Denmark",
    "category": "WIND",
    "categoryLabel": "Wind & Rotary Kinetic Systems",
    "badge": "Danish Wind Energy Vault",
    "image": "/images/asset_windmill_stage.png",
    "thumbnail": "/images/asset_windmill_stage.png",
    "desc": "Danish physicist Poul la Cour established the world's first wind turbine research wind tunnel, discovering that fewer, aerodynamic lift-producing blades generate vastly more kinetic power than dozens of drag-based sails. He used his turbines to electrolyze water for hydrogen lighting.",
    "description": "Danish physicist Poul la Cour established the world's first wind turbine research wind tunnel, discovering that fewer, aerodynamic lift-producing blades generate vastly more kinetic power than dozens of drag-based sails. He used his turbines to electrolyze water for hydrogen lighting.",
    "polyCount": "158,000 Quads",
    "medium": "Cambered Wooden Airfoils \u2022 Differential Gearbox",
    "resonance": "Aerodynamic Lift Velocity",
    "era": "1891 \u2014 Aerodynamic Revolution",
    "story": "La Cour tested scale models in artificial wind tunnels at Askov Folk High School, laying theoretical foundations for modern wind power.",
    "mechanics": "Air flowing over cambered blade airfoils creates lift forces that pull the rotor in its rotational plane, generating high tip-speed ratios to drive dynamos.",
    "legacy": "Direct father of modern Scandinavian aerodynamic wind turbines.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_wind_ha_wnd_03.glb",
    "videoUrl": "/videos/reel_wind_ha_wnd_03.mp4",
    "tags": [
      "Poul la Cour",
      "Aerodynamic Lift",
      "Danish Wind",
      "Turbine",
      "Renewable"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Aerodynamic Lift Wind Power Plant fundamentally altered wind & rotary kinetic systems, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-WND-04",
    "title": "Automatic Yaw Smock Windmill",
    "officialTitle": "De Groot Rotating Cap and Fantail Windmill Carriage",
    "inventor": "Jan de Groot",
    "creator": "Jan de Groot",
    "patent": "Pat. #1782-NL01 \u2022 1782",
    "patentNumber": "NL1782001A",
    "patentDate": "May 8, 1782",
    "year": "1782",
    "location": "Zaandam, Netherlands",
    "category": "WIND",
    "categoryLabel": "Wind & Rotary Kinetic Systems",
    "badge": "Zaanse Schans Heritage",
    "image": "/images/hero_stage_bg.jpg",
    "thumbnail": "/images/hero_stage_bg.jpg",
    "desc": "Dutch millwrights engineered the octagonal smock mill with a rotating cap and automatic fantail. Instead of rotating the entire massive timber mill body, only the small turret cap rotates on greased hornbeam rollers, continually tracking changing maritime wind directions.",
    "description": "Dutch millwrights engineered the octagonal smock mill with a rotating cap and automatic fantail. Instead of rotating the entire massive timber mill body, only the small turret cap rotates on greased hornbeam rollers, continually tracking changing maritime wind directions.",
    "polyCount": "172,000 Quads",
    "medium": "Thatch & Oak Smock Frame \u2022 Cast Iron Curb Track",
    "resonance": "Autonomous Yaw Tracking",
    "era": "1782 \u2014 Golden Age Drainage",
    "story": "Drainage of vast polders below sea level required continuous, unattended wind pumping. The fantail catches crosswinds to crank the cap automatically.",
    "mechanics": "When wind shifts off-axis, it strikes the fantail at right angles, spinning a worm gear that cranks the main windcap back directly into the prevailing wind.",
    "legacy": "Reclaimed hundreds of thousands of acres of land from the North Sea and powered early Dutch manufacturing.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_wind_ha_wnd_04.glb",
    "videoUrl": "/videos/reel_wind_ha_wnd_04.mp4",
    "tags": [
      "Smock Mill",
      "Fantail",
      "Yaw Mechanism",
      "Polder Drainage",
      "Wind Power"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Automatic Yaw Smock Windmill fundamentally altered wind & rotary kinetic systems, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-WND-05",
    "title": "Kinetic Limit Impeller Rotor",
    "officialTitle": "Betz Optimal Momentum Extraction Kinetic Wind Rotor",
    "inventor": "Albert Betz",
    "creator": "Albert Betz",
    "patent": "Pat. #1920-DE04 \u2022 1920",
    "patentNumber": "DE1920004A",
    "patentDate": "April 26, 1920",
    "year": "1920",
    "location": "G\u00f6ttingen, Germany",
    "category": "WIND",
    "categoryLabel": "Wind & Rotary Kinetic Systems",
    "badge": "G\u00f6ttingen Aerodynamics Institute",
    "image": "/images/bg_gear_large.png",
    "thumbnail": "/images/bg_gear_large.png",
    "desc": "German aerodynamicist Albert Betz formulated the universal physical law (the Betz Limit) proving that no wind turbine can extract more than 59.3 percent of the kinetic energy in wind. His optimized tapered, twisted blade profiles translated this fluid dynamic limit into tangible hardware.",
    "description": "German aerodynamicist Albert Betz formulated the universal physical law (the Betz Limit) proving that no wind turbine can extract more than 59.3 percent of the kinetic energy in wind. His optimized tapered, twisted blade profiles translated this fluid dynamic limit into tangible hardware.",
    "polyCount": "188,000 Quads",
    "medium": "Twisted Laminated Mahogany Airfoil \u2022 Wind Tunnel Hub",
    "resonance": "59.3% Betz Limit Boundary",
    "era": "1920 \u2014 Fluid Dynamic Modernism",
    "story": "Working alongside Ludwig Prandtl at G\u00f6ttingen, Betz applied actuator disk momentum theory to model wind energy conversion.",
    "mechanics": "Blades engineered with progressive aerodynamic twist compensate for differing linear velocities from hub to tip, keeping angle of attack optimal across the disc area.",
    "legacy": "The fundamental theoretical blueprint followed by every modern three-bladed megawatt wind turbine worldwide.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_wind_ha_wnd_05.glb",
    "videoUrl": "/videos/reel_wind_ha_wnd_05.mp4",
    "tags": [
      "Betz Limit",
      "Fluid Dynamics",
      "Kinetic Energy",
      "Aerodynamics",
      "Rotor"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Kinetic Limit Impeller Rotor fundamentally altered wind & rotary kinetic systems, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-106",
    "title": "1903 Wright Flyer Airframe",
    "officialTitle": "Wright Flying Machine with Three-Axis Wing-Warping System",
    "inventor": "Orville & Wilbur Wright",
    "creator": "Orville & Wilbur Wright",
    "patent": "Pat. #821,393 \u2022 1906",
    "patentNumber": "US821393A",
    "patentDate": "May 22, 1906",
    "year": "1903",
    "location": "Kitty Hawk, NC",
    "category": "AERO",
    "categoryLabel": "Aeronautics & Aerial Navigation",
    "badge": "Smithsonian National Air Vault",
    "image": "/images/character_wright.jpg",
    "thumbnail": "/images/character_wright.jpg",
    "desc": "On December 17, 1903, at Kill Devil Hills, North Carolina, the Wright brothers achieved the world's first sustained, powered, heavier-than-air piloted flight. Their patented three-axis aerodynamic control system combined wing warping with a steerable rear rudder to conquer atmospheric equilibrium.",
    "description": "On December 17, 1903, at Kill Devil Hills, North Carolina, the Wright brothers achieved the world's first sustained, powered, heavier-than-air piloted flight. Their patented three-axis aerodynamic control system combined wing warping with a steerable rear rudder to conquer atmospheric equilibrium.",
    "polyCount": "185,000 Quads",
    "medium": "Spruce & Ash Framework \u2022 Unbleached Pride of the West Muslin \u2022 Cast Aluminum Crankcase Engine",
    "resonance": "12-Horsepower Aerodynamic Thrust",
    "era": "1903 \u2014 Kitty Hawk Genesis",
    "story": "Bicycle mechanics Wilbur and Orville recognized that flight required three-axis pilot control rather than inherent passive stability.",
    "mechanics": "Cables connected to a pilot hip cradle physically twist the flexible biplane wingtips in opposite directions to impart aerodynamic roll, coordinated with a linked rear rudder.",
    "legacy": "Established the foundational aerodynamics and flight-control principles employed in modern aviation.",
    "modelType": "wright",
    "model3dUrl": "/models/cad_aero_ha_106.glb",
    "videoUrl": "/videos/reel_aero_ha_106.mp4",
    "tags": [
      "Flight",
      "Aviation",
      "Wright Brothers",
      "Aerodynamics",
      "Wing Warping"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The 1903 Wright Flyer Airframe fundamentally altered aeronautics & aerial navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-AER-02",
    "title": "Cambered Hang Glider Apparatus",
    "officialTitle": "Lilienthal Curved Wing Monoplane Controlled Gliding Apparatus",
    "inventor": "Otto Lilienthal",
    "creator": "Otto Lilienthal",
    "patent": "Pat. #77,916 \u2022 1893",
    "patentNumber": "DE77916A",
    "patentDate": "September 3, 1893",
    "year": "1893",
    "location": "Berlin, Germany",
    "category": "AERO",
    "categoryLabel": "Aeronautics & Aerial Navigation",
    "badge": "Lilienthal Glider Archive",
    "image": "/images/raw_card_6_wright.jpg",
    "thumbnail": "/images/raw_card_6_wright.jpg",
    "desc": "Otto Lilienthal, the 'Glider King', was the first human to make well-documented, repeated, successful gliding flights. Over two thousand flights from an artificial hill near Berlin proved that arched, cambered wing cross-sections generate far superior aerodynamic lift compared to flat surfaces.",
    "description": "Otto Lilienthal, the 'Glider King', was the first human to make well-documented, repeated, successful gliding flights. Over two thousand flights from an artificial hill near Berlin proved that arched, cambered wing cross-sections generate far superior aerodynamic lift compared to flat surfaces.",
    "polyCount": "142,000 Quads",
    "medium": "Peeled Willow Wands \u2022 Waxed Cotton Sailcloth \u2022 Shifting Arm Frame",
    "resonance": "Cambered Airfoil Lift",
    "era": "1893 \u2014 Aerial Pioneer Era",
    "story": "Lilienthal systematically measured lift and drag coefficients on curved plates, publishing 'Birdflight as the Basis of Aviation'.",
    "mechanics": "The pilot hangs suspended by the arms beneath a broad arched bat-like wing, controlling pitch and roll by dynamically shifting body weight in flight.",
    "legacy": "Directly inspired the Wright brothers, Percy Pilcher, and Octave Chanute to pursue controlled human flight.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_aero_ha_aer_02.glb",
    "videoUrl": "/videos/reel_aero_ha_aer_02.mp4",
    "tags": [
      "Lilienthal",
      "Glider",
      "Camber",
      "Airfoil",
      "Flight Pioneers"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Cambered Hang Glider Apparatus fundamentally altered aeronautics & aerial navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-AER-03",
    "title": "Aerodrome Steam Model V",
    "officialTitle": "Langley Tandem Wing Steam-Powered Aerodrome",
    "inventor": "Samuel Pierpont Langley",
    "creator": "Samuel Pierpont Langley",
    "patent": "Pat. #547,125 \u2022 1896",
    "patentNumber": "US547125A",
    "patentDate": "October 8, 1895",
    "year": "1896",
    "location": "Washington, DC",
    "category": "AERO",
    "categoryLabel": "Aeronautics & Aerial Navigation",
    "badge": "Smithsonian Aeronautical Ledger",
    "image": "/images/bg_flare_left.png",
    "thumbnail": "/images/bg_flare_left.png",
    "desc": "Smithsonian Secretary Samuel Pierpont Langley constructed the Aerodrome No. 5, a miniature tandem-wing unmanned aircraft powered by a miniature 1-horsepower flash-steam engine. Launched from a houseboat catapult over the Potomac River, it flew over 3,300 feet, proving heavier-than-air flight was mechanically achievable.",
    "description": "Smithsonian Secretary Samuel Pierpont Langley constructed the Aerodrome No. 5, a miniature tandem-wing unmanned aircraft powered by a miniature 1-horsepower flash-steam engine. Launched from a houseboat catapult over the Potomac River, it flew over 3,300 feet, proving heavier-than-air flight was mechanically achievable.",
    "polyCount": "155,000 Quads",
    "medium": "Drawn Steel Tubing \u2022 Japanese Silk Wings \u2022 Miniature Flash Steam Engine",
    "resonance": "Tandem Monoplane Stability",
    "era": "1896 \u2014 Pre-Kitty Hawk Era",
    "story": "Langley conducted exhaustive aerodynamical experiments using a 60-foot whirling arm apparatus to measure wing lift at high speed.",
    "mechanics": "A miniature hydrocarbon-fired steam boiler and copper cylinders spin twin counter-rotating pusher propellers mounted between tandem wings.",
    "legacy": "Provided the global scientific community with definitive proof that engine-driven heavier-than-air aircraft could fly.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_aero_ha_aer_03.glb",
    "videoUrl": "/videos/reel_aero_ha_aer_03.mp4",
    "tags": [
      "Langley",
      "Aerodrome",
      "Steam Aircraft",
      "Aviation",
      "Tandem Wing"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Aerodrome Steam Model V fundamentally altered aeronautics & aerial navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-AER-04",
    "title": "Bl\u00e9riot XI Cross-Channel Monoplane",
    "officialTitle": "Bl\u00e9riot Tractor Monoplane with Elastic Shock Absorbers",
    "inventor": "Louis Bl\u00e9riot",
    "creator": "Louis Bl\u00e9riot",
    "patent": "Pat. #398,824 \u2022 1908",
    "patentNumber": "FR398824A",
    "patentDate": "January 23, 1909",
    "year": "1909",
    "location": "Cambrai, France",
    "category": "AERO",
    "categoryLabel": "Aeronautics & Aerial Navigation",
    "badge": "Mus\u00e9e des Arts et M\u00e9tiers",
    "image": "/images/test_strip.jpg",
    "thumbnail": "/images/test_strip.jpg",
    "desc": "On July 25, 1909, Louis Bl\u00e9riot stunned the world by piloting his Bl\u00e9riot XI monoplane across the treacherous English Channel in 36 minutes. Powered by a 25-horsepower three-cylinder Anzani semi-radial engine, it established the single-wing tractor layout as the dominant aircraft architecture.",
    "description": "On July 25, 1909, Louis Bl\u00e9riot stunned the world by piloting his Bl\u00e9riot XI monoplane across the treacherous English Channel in 36 minutes. Powered by a 25-horsepower three-cylinder Anzani semi-radial engine, it established the single-wing tractor layout as the dominant aircraft architecture.",
    "polyCount": "174,000 Quads",
    "medium": "Ash & Poplar Fuselage \u2022 Rubber Bungee Suspension \u2022 3-Cylinder Anzani Engine",
    "resonance": "Tractor Airscrew Propulsion",
    "era": "1909 \u2014 Channel Crossing Triumph",
    "story": "Bl\u00e9riot conquered fog, wind, and engine overheating across 22 miles of open ocean, landing safely in Dover Castle meadow.",
    "mechanics": "A forward tractor propeller pulls the aircraft through the air while a hand control stick operates wing warping and elevator controls through overhead wire cabanes.",
    "legacy": "Convinced European military leaders and governments that aviation had transformed global borders and warfare forever.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_aero_ha_aer_04.glb",
    "videoUrl": "/videos/reel_aero_ha_aer_04.mp4",
    "tags": [
      "Bl\u00e9riot",
      "Monoplane",
      "Cross Channel",
      "Aviation",
      "Anzani"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Bl\u00e9riot XI Cross-Channel Monoplane fundamentally altered aeronautics & aerial navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-AER-05",
    "title": "Rigid Dirigible Airship LZ-1",
    "officialTitle": "Zeppelin Aluminum Framework Multi-Cell Rigid Dirigible",
    "inventor": "Count Ferdinand von Zeppelin",
    "creator": "Count Ferdinand von Zeppelin",
    "patent": "Pat. #621,195 \u2022 1899",
    "patentNumber": "US621195A",
    "patentDate": "March 14, 1899",
    "year": "1900",
    "location": "Friedrichshafen, Germany",
    "category": "AERO",
    "categoryLabel": "Aeronautics & Aerial Navigation",
    "badge": "Zeppelin Museum Friedrichshafen",
    "image": "/images/card1_test.png",
    "thumbnail": "/images/card1_test.png",
    "desc": "Count Ferdinand von Zeppelin designed the LZ-1, the world's first giant rigid dirigible airship. Measuring 420 feet in length, its revolutionary internal framework of longitudinal aluminum girders contained seventeen separate rubberized cotton hydrogen gas cells, making massive aerial transport viable.",
    "description": "Count Ferdinand von Zeppelin designed the LZ-1, the world's first giant rigid dirigible airship. Measuring 420 feet in length, its revolutionary internal framework of longitudinal aluminum girders contained seventeen separate rubberized cotton hydrogen gas cells, making massive aerial transport viable.",
    "polyCount": "215,000 Quads",
    "medium": "Lattice Aluminum Rings \u2022 Rubberized Cotton Gas Bags \u2022 Twin Daimler Engines",
    "resonance": "Multi-Cell Aerostatic Buoyancy",
    "era": "1900 \u2014 Rigid Dirigible Dawn",
    "story": "Zeppelin recognized that non-rigid blimps collapsed in turbulent weather; he engineered a rigid structural skeleton that held its aerodynamic form.",
    "mechanics": "Twin 14-horsepower Daimler internal combustion engines turned steerable aluminum propellers, while internal hydrogen cells provided aerostatic buoyancy.",
    "legacy": "Pioneered commercial intercontinental passenger aviation decades before commercial airliner routes existed.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_aero_ha_aer_05.glb",
    "videoUrl": "/videos/reel_aero_ha_aer_05.mp4",
    "tags": [
      "Zeppelin",
      "Dirigible",
      "Airship",
      "Rigid Frame",
      "Hydrogen"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Rigid Dirigible Airship LZ-1 fundamentally altered aeronautics & aerial navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-108",
    "title": "Babbage Mechanical Analytical Engine",
    "officialTitle": "General-Purpose Mechanical Stepped Gear Analytical Calculating Engine",
    "inventor": "Charles Babbage & Ada Lovelace",
    "creator": "Charles Babbage & Ada Lovelace",
    "patent": "Pat. #1837-GB01 \u2022 1837",
    "patentNumber": "GB1837001A",
    "patentDate": "December 12, 1837",
    "year": "1837",
    "location": "London, UK",
    "category": "COMPUTING",
    "categoryLabel": "Mechanical Computing Engines",
    "badge": "Babbage Computation Archive",
    "image": "/images/character_babbage.jpg",
    "thumbnail": "/images/character_babbage.jpg",
    "desc": "Conceived by mathematician Charles Babbage and documented by computing visionary Ada Lovelace, the Analytical Engine was the world's first design for a general-purpose, Turing-complete mechanical computer. It featured an arithmetic 'Mill', a memory 'Store', and Jacquard punched card control.",
    "description": "Conceived by mathematician Charles Babbage and documented by computing visionary Ada Lovelace, the Analytical Engine was the world's first design for a general-purpose, Turing-complete mechanical computer. It featured an arithmetic 'Mill', a memory 'Store', and Jacquard punched card control.",
    "polyCount": "230,000 Quads",
    "medium": "Cast Bell-Brass Toothed Cylinders \u2022 Hardened Steel Levers \u2022 Punched Card Reader",
    "resonance": "Decimal Mill & Store Architecture",
    "era": "1837 \u2014 Pre-Electronic Computation",
    "story": "Lovelace wrote the first computer algorithm for the Engine to calculate Bernoulli numbers, anticipating algorithmic software.",
    "mechanics": "Punched cards feed instructions to barrel controllers that coordinate thousands of vertical gear columns to perform addition, conditional branching, and memory caching.",
    "legacy": "Conceptual grandfather of modern digital computing architecture (CPU, RAM, and programming).",
    "modelType": "babbage",
    "model3dUrl": "/models/cad_computing_ha_108.glb",
    "videoUrl": "/videos/reel_computing_ha_108.mp4",
    "tags": [
      "Analytical Engine",
      "Babbage",
      "Ada Lovelace",
      "Mechanical Computer",
      "Punched Cards"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Babbage Mechanical Analytical Engine fundamentally altered mechanical computing engines, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-CMP-02",
    "title": "Pascaline Mechanical Adding Machine",
    "officialTitle": "Pascal Rotating Dial Carry-Wheel Arithmetical Machine",
    "inventor": "Blaise Pascal",
    "creator": "Blaise Pascal",
    "patent": "Pat. #1642-FR01 \u2022 1642",
    "patentNumber": "FR1642001A",
    "patentDate": "May 22, 1649",
    "year": "1642",
    "location": "Rouen, France",
    "category": "COMPUTING",
    "categoryLabel": "Mechanical Computing Engines",
    "badge": "Acad\u00e9mie des Sciences Archive",
    "image": "/images/character_ada.jpg",
    "thumbnail": "/images/character_ada.jpg",
    "desc": "Nineteen-year-old Blaise Pascal invented the Pascaline to assist his father, a royal tax collector in Rouen. It was the world's first operational mechanical calculator, featuring a ingenious gravity-assisted 'sautoir' carry mechanism that automatically transferred tens between adjacent dials.",
    "description": "Nineteen-year-old Blaise Pascal invented the Pascaline to assist his father, a royal tax collector in Rouen. It was the world's first operational mechanical calculator, featuring a ingenious gravity-assisted 'sautoir' carry mechanism that automatically transferred tens between adjacent dials.",
    "polyCount": "140,000 Quads",
    "medium": "Polished Brass Top Plate \u2022 Hand-Cut Crown Pinions \u2022 Weighted Sautoir Levers",
    "resonance": "Gravity Sautoir Tens Carry",
    "era": "1642 \u2014 Early Modern Calculation",
    "story": "Pascal built over fifty brass and copper prototypes to overcome friction and tolerance defects in early metallurgy.",
    "mechanics": "Users turn spoked circular input wheels with a stylus; each full revolution lifts a spring-loaded sautoir arm that drops under gravity to advance the next wheel by one digit.",
    "legacy": "Proved that arithmetic operations could be performed reliably by unthinking mechanical machinery.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_computing_ha_cmp_02.glb",
    "videoUrl": "/videos/reel_computing_ha_cmp_02.mp4",
    "tags": [
      "Pascaline",
      "Blaise Pascal",
      "Calculator",
      "Adding Machine",
      "Mechanical Carry"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Pascaline Mechanical Adding Machine fundamentally altered mechanical computing engines, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-CMP-03",
    "title": "Stepped Reckoner Calculating Machine",
    "officialTitle": "Leibniz Stepped Drum Mechanical Four-Function Multiplier",
    "inventor": "Gottfried Wilhelm Leibniz",
    "creator": "Gottfried Wilhelm Leibniz",
    "patent": "Pat. #1673-DE01 \u2022 1673",
    "patentNumber": "DE1673001A",
    "patentDate": "February 1, 1673",
    "year": "1673",
    "location": "Hannover, Germany",
    "category": "COMPUTING",
    "categoryLabel": "Mechanical Computing Engines",
    "badge": "Leibniz Computation Vault",
    "image": "/images/raw_card_8_babbage.jpg",
    "thumbnail": "/images/raw_card_8_babbage.jpg",
    "desc": "Gottfried Wilhelm Leibniz declared: 'It is unworthy of excellent men to lose hours like slaves in the labor of calculation.' His Stepped Reckoner introduced the stepped gear drum (Leibniz wheel), the first mechanism capable of performing all four basic arithmetic functions: addition, subtraction, multiplication, and division.",
    "description": "Gottfried Wilhelm Leibniz declared: 'It is unworthy of excellent men to lose hours like slaves in the labor of calculation.' His Stepped Reckoner introduced the stepped gear drum (Leibniz wheel), the first mechanism capable of performing all four basic arithmetic functions: addition, subtraction, multiplication, and division.",
    "polyCount": "158,000 Quads",
    "medium": "Hand-Chiseled Brass Stepped Drums \u2022 Sliding Carriage \u2022 Iron Pinion Shafts",
    "resonance": "Stepped Gear Multi-Tooth Kinematics",
    "era": "1673 \u2014 Baroque Mechanical Algebra",
    "story": "Leibniz demonstrated his two-tier wooden and brass calculating machine before the Royal Society of London in 1673.",
    "mechanics": "Cylinders machined with nine teeth of progressively increasing length engage a movable gear; shifting the gear position along the cylinder multiplies numbers through repeated addition.",
    "legacy": "The stepped drum mechanism served as the mechanical calculation engine in calculators like the Curta until the 1970s.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_computing_ha_cmp_03.glb",
    "videoUrl": "/videos/reel_computing_ha_cmp_03.mp4",
    "tags": [
      "Leibniz",
      "Stepped Reckoner",
      "Multiplication",
      "Calculator",
      "Mechanical Math"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Stepped Reckoner Calculating Machine fundamentally altered mechanical computing engines, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-CMP-04",
    "title": "Electric Punched Card Tabulator",
    "officialTitle": "Hollerith Electromechanical Census Tabulating and Sorting System",
    "inventor": "Herman Hollerith",
    "creator": "Herman Hollerith",
    "patent": "Pat. #395,781 \u2022 1889",
    "patentNumber": "US395781A",
    "patentDate": "January 8, 1889",
    "year": "1889",
    "location": "Washington, DC",
    "category": "COMPUTING",
    "categoryLabel": "Mechanical Computing Engines",
    "badge": "US Census Bureau Archive",
    "image": "/images/card2_test.png",
    "thumbnail": "/images/card2_test.png",
    "desc": "Herman Hollerith designed the electric punched card tabulating system that processed the 1890 US Census in just six weeks, saving five million dollars. By pressing spring-loaded metal pins through card holes into mercury cups, it completed electrical circuits that advanced mechanical counters.",
    "description": "Herman Hollerith designed the electric punched card tabulating system that processed the 1890 US Census in just six weeks, saving five million dollars. By pressing spring-loaded metal pins through card holes into mercury cups, it completed electrical circuits that advanced mechanical counters.",
    "polyCount": "165,000 Quads",
    "medium": "Hardwood Tabulating Desk \u2022 Mercury Contact Wells \u2022 Spring-Loaded Brass Sensing Pins",
    "resonance": "Electromechanical Circuit Matrix",
    "era": "1889 \u2014 Data Processing Genesis",
    "story": "The US Census was facing a crisis: manual processing took nearly eight years, making census data obsolete before publication.",
    "mechanics": "Punched cards placed on a press allow conductive pins to pass through punched holes into mercury cups, completing circuits that ring bells and step clockwork registers.",
    "legacy": "Hollerith's Tabulating Machine Company merged with three others in 1911 to form the foundation of IBM.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_computing_ha_cmp_04.glb",
    "videoUrl": "/videos/reel_computing_ha_cmp_04.mp4",
    "tags": [
      "Hollerith",
      "Punched Card",
      "Census",
      "IBM",
      "Electromechanical"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Electric Punched Card Tabulator fundamentally altered mechanical computing engines, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-CMP-05",
    "title": "Burroughs Registering Adding Machine",
    "officialTitle": "Burroughs Key-Set Rotary Printing Mechanical Calculator",
    "inventor": "William Seward Burroughs",
    "creator": "William Seward Burroughs",
    "patent": "Pat. #388,850 \u2022 1888",
    "patentNumber": "US388850A",
    "patentDate": "August 21, 1888",
    "year": "1888",
    "location": "St. Louis, MO",
    "category": "COMPUTING",
    "categoryLabel": "Mechanical Computing Engines",
    "badge": "Burroughs Adding Machine Ledger",
    "image": "/images/card3_test.png",
    "thumbnail": "/images/card3_test.png",
    "desc": "William Seward Burroughs, a former bank clerk afflicted with tuberculosis from long ledger bookkeeping hours, invented the first practical key-set printing adding machine. Featuring a dashpot oil governor, it ensured identical mechanical strokes regardless of operator speed or force.",
    "description": "William Seward Burroughs, a former bank clerk afflicted with tuberculosis from long ledger bookkeeping hours, invented the first practical key-set printing adding machine. Featuring a dashpot oil governor, it ensured identical mechanical strokes regardless of operator speed or force.",
    "polyCount": "172,000 Quads",
    "medium": "Beveled Glass Side Panels \u2022 Cast Iron Frame \u2022 High-Speed Ink Ribbon Printing Hammer",
    "resonance": "Dashpot Governed Stroke",
    "era": "1888 \u2014 Commercial Banking Dawn",
    "story": "Burroughs understood that bank tellers needed printed audit paper tapes to verify transactions, eliminating human bookkeeping errors.",
    "mechanics": "Pressing number keys sets internal stop pins; pulling the hand lever sweeps sector racks forward until arrested, simultaneously transferring values to totalizers and striking paper tape.",
    "legacy": "Modernized commercial accounting and banking operations across the financial world.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_computing_ha_cmp_05.glb",
    "videoUrl": "/videos/reel_computing_ha_cmp_05.mp4",
    "tags": [
      "Burroughs",
      "Adding Machine",
      "Bookkeeping",
      "Printing Calculator",
      "Banking"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Burroughs Registering Adding Machine fundamentally altered mechanical computing engines, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-110",
    "title": "Separate Condenser Steam Engine",
    "officialTitle": "Watt Atmospheric Engine with External Cooling Condenser Vessel",
    "inventor": "James Watt",
    "creator": "James Watt",
    "patent": "Pat. #913 \u2022 1769",
    "patentNumber": "GB913A",
    "patentDate": "January 5, 1769",
    "year": "1769",
    "location": "Glasgow, Scotland",
    "category": "STEAM",
    "categoryLabel": "Steam Dynamics & Pressure Vessels",
    "badge": "Soho Foundry Historic Archive",
    "image": "/images/thumb_steam_engine.jpg",
    "thumbnail": "/images/thumb_steam_engine.jpg",
    "desc": "James Watt transformed the inefficient Newcomen engine into a dynamic industrial powerhouse by introducing the separate condenser. By keeping the main working cylinder continuously boiling hot while condensing exhausted steam in an external cold chamber, he slashed coal fuel consumption by 75 percent.",
    "description": "James Watt transformed the inefficient Newcomen engine into a dynamic industrial powerhouse by introducing the separate condenser. By keeping the main working cylinder continuously boiling hot while condensing exhausted steam in an external cold chamber, he slashed coal fuel consumption by 75 percent.",
    "polyCount": "198,000 Quads",
    "medium": "Bored Cast Iron Cylinder \u2022 Sun-and-Planet Gearing \u2022 Centrifugal Ball Governor",
    "resonance": "Thermal Efficiency Condensation",
    "era": "1769 \u2014 First Industrial Revolution",
    "story": "While repairing a model of the Newcomen engine at the University of Glasgow, Watt realized repeated heating and chilling of the cylinder wasted vast heat.",
    "mechanics": "Steam entering the cylinder drives the piston upward; opening a valve vents steam into an adjacent cold, evacuated chamber where a cold water jet collapses it into a vacuum.",
    "legacy": "Unleashed the Industrial Revolution, enabling factories to operate anywhere away from rivers.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_steam_ha_110.glb",
    "videoUrl": "/videos/reel_steam_ha_110.mp4",
    "tags": [
      "Steam Engine",
      "James Watt",
      "Condenser",
      "Centrifugal Governor",
      "Industrial Revolution"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Separate Condenser Steam Engine fundamentally altered steam dynamics & pressure vessels, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-STM-02",
    "title": "Atmospheric Beam Pumping Engine",
    "officialTitle": "Newcomen Atmospheric Condensing Steam Mine Drainage Engine",
    "inventor": "Thomas Newcomen",
    "creator": "Thomas Newcomen",
    "patent": "Pat. #1712-GB01 \u2022 1712",
    "patentNumber": "GB1712001A",
    "patentDate": "August 10, 1712",
    "year": "1712",
    "location": "Dudley, UK",
    "category": "STEAM",
    "categoryLabel": "Steam Dynamics & Pressure Vessels",
    "badge": "Black Country Museum Archive",
    "image": "/images/thumb_steam_hq.jpg",
    "thumbnail": "/images/thumb_steam_hq.jpg",
    "desc": "Thomas Newcomen erected the world's first commercially successful fuel-powered heat engine at the Coneygree Coal Works near Dudley Castle. Utilizing atmospheric air pressure against a piston beneath which steam was condensed by a cold water spray, it pumped water from flooded coal mines.",
    "description": "Thomas Newcomen erected the world's first commercially successful fuel-powered heat engine at the Coneygree Coal Works near Dudley Castle. Utilizing atmospheric air pressure against a piston beneath which steam was condensed by a cold water spray, it pumped water from flooded coal mines.",
    "polyCount": "162,000 Quads",
    "medium": "Heavy Oak Walking Beam \u2022 Brass Cylinder \u2022 Riveted Haycock Copper Boiler",
    "resonance": "Atmospheric Pressure Vacuum Stroke",
    "era": "1712 \u2014 Age of Steam Dawn",
    "story": "Flooded coal mines threatened Britain's economy. Newcomen synthesized boiler steam physics with Papin's cylinder vacuum concepts to build a gigantic pumping engine.",
    "mechanics": "Low-pressure steam fills the cylinder under the piston; injecting cold water collapses the steam into water droplets, creating a partial vacuum so atmospheric air pushes the piston down.",
    "legacy": "Drained otherwise inaccessible coal and tin mines, supplying the fuel that propelled Great Britain's industrialization.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_steam_ha_stm_02.glb",
    "videoUrl": "/videos/reel_steam_ha_stm_02.mp4",
    "tags": [
      "Newcomen",
      "Atmospheric Engine",
      "Mine Drainage",
      "Steam Pumping",
      "Coal Age"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Atmospheric Beam Pumping Engine fundamentally altered steam dynamics & pressure vessels, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-STM-03",
    "title": "Puffing Devil High-Pressure Carriage",
    "officialTitle": "Trevithick High-Pressure Non-Condensing Steam Carriage",
    "inventor": "Richard Trevithick",
    "creator": "Richard Trevithick",
    "patent": "Pat. #2,599 \u2022 1802",
    "patentNumber": "GB2599A",
    "patentDate": "March 24, 1802",
    "year": "1801",
    "location": "Camborne, Cornwall, UK",
    "category": "STEAM",
    "categoryLabel": "Steam Dynamics & Pressure Vessels",
    "badge": "Cornish Steam Heritage",
    "image": "/images/bg_gear_hq.jpg",
    "thumbnail": "/images/bg_gear_hq.jpg",
    "desc": "Cornish engineer Richard Trevithick pioneered high-pressure steam that bypassed Watt's bulky external condenser entirely. On Christmas Eve 1801, his 'Puffing Devil' locomotive climbed Camborne Hill carrying seven passengers, proving steam vehicles could transport people on land.",
    "description": "Cornish engineer Richard Trevithick pioneered high-pressure steam that bypassed Watt's bulky external condenser entirely. On Christmas Eve 1801, his 'Puffing Devil' locomotive climbed Camborne Hill carrying seven passengers, proving steam vehicles could transport people on land.",
    "polyCount": "175,000 Quads",
    "medium": "Cast Iron High-Pressure Cylindrical Boiler \u2022 Return Flue \u2022 Blast Pipe Exhaust",
    "resonance": "50 PSI High-Pressure Expansion",
    "era": "1801 \u2014 High-Pressure Locomotive",
    "story": "Watt considered high-pressure boilers dangerous bombs, but Trevithick proved strong cylindrical boilers could safely contain high-pressure steam.",
    "mechanics": "Steam at 50 pounds per square inch pushes the piston directly; exhausted steam shoots up the chimney via a blast pipe, inducing draught through the firebox.",
    "legacy": "Invented the high-pressure non-condensing steam engine that made railway locomotives and steam wagons possible.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_steam_ha_stm_03.glb",
    "videoUrl": "/videos/reel_steam_ha_stm_03.mp4",
    "tags": [
      "Trevithick",
      "High Pressure",
      "Puffing Devil",
      "Locomotive",
      "Cornish Steam"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Puffing Devil High-Pressure Carriage fundamentally altered steam dynamics & pressure vessels, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-STM-04",
    "title": "Stephensons Rocket Locomotive Engine",
    "officialTitle": "Stephenson Multi-Tubular Boiler Fast Steam Locomotive",
    "inventor": "George & Robert Stephenson",
    "creator": "George & Robert Stephenson",
    "patent": "Pat. #1829-GB01 \u2022 1829",
    "patentNumber": "GB1829001A",
    "patentDate": "October 6, 1829",
    "year": "1829",
    "location": "Newcastle upon Tyne, UK",
    "category": "STEAM",
    "categoryLabel": "Steam Dynamics & Pressure Vessels",
    "badge": "Rainhill Trials Laureate",
    "image": "/images/raw_card_5_edison.jpg",
    "thumbnail": "/images/raw_card_5_edison.jpg",
    "desc": "The Stephensons' 'Rocket' won the legendary 1829 Rainhill Trials on the Liverpool and Manchester Railway. By integrating a multi-tubular copper firebox boiler with blast-pipe exhaust draft and angled direct-drive connecting rods, it achieved speeds of 29 mph.",
    "description": "The Stephensons' 'Rocket' won the legendary 1829 Rainhill Trials on the Liverpool and Manchester Railway. By integrating a multi-tubular copper firebox boiler with blast-pipe exhaust draft and angled direct-drive connecting rods, it achieved speeds of 29 mph.",
    "polyCount": "182,000 Quads",
    "medium": "Copper Firebox Tubes \u2022 Forged Connecting Rods \u2022 Cast Iron Wheel Rims",
    "resonance": "29 MPH Multi-Tubular Steaming",
    "era": "1829 \u2014 Rainhill Triumph",
    "story": "The directors of the Liverpool and Manchester Railway held a contest to determine whether stationary cables or moving steam engines should power the line.",
    "mechanics": "25 copper fire-tubes pass through the water barrel, increasing heating surface area fourfold to rapidly boil water into steam for directly connected driving pistons.",
    "legacy": "Established the universal mechanical anatomy of steam locomotives for the next century.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_steam_ha_stm_04.glb",
    "videoUrl": "/videos/reel_steam_ha_stm_04.mp4",
    "tags": [
      "Rocket",
      "Stephenson",
      "Rainhill Trials",
      "Steam Locomotive",
      "Railway"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Stephensons Rocket Locomotive Engine fundamentally altered steam dynamics & pressure vessels, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-STM-05",
    "title": "Compound High-Pressure Beam Engine",
    "officialTitle": "Woolf Two-Cylinder High and Low Pressure Steam Expansion Engine",
    "inventor": "Arthur Woolf",
    "creator": "Arthur Woolf",
    "patent": "Pat. #2,772 \u2022 1804",
    "patentNumber": "GB2772A",
    "patentDate": "June 7, 1804",
    "year": "1804",
    "location": "Cornwall, UK",
    "category": "STEAM",
    "categoryLabel": "Steam Dynamics & Pressure Vessels",
    "badge": "Cornish Pumping Archive",
    "image": "/images/hero_exhibit_stage.jpg",
    "thumbnail": "/images/hero_exhibit_stage.jpg",
    "desc": "Arthur Woolf designed the compound steam engine, in which high-pressure steam expands sequentially through two cylinders: first through a small high-pressure cylinder, and then expanding again through a larger low-pressure cylinder to extract maximum mechanical thermodynamic energy.",
    "description": "Arthur Woolf designed the compound steam engine, in which high-pressure steam expands sequentially through two cylinders: first through a small high-pressure cylinder, and then expanding again through a larger low-pressure cylinder to extract maximum mechanical thermodynamic energy.",
    "polyCount": "168,000 Quads",
    "medium": "Twin Bored Cylinders \u2022 Cornish Valve Gear \u2022 Massive Cast Balance Beam",
    "resonance": "Compound Expansion Thermodynamics",
    "era": "1804 \u2014 Thermodynamic Efficiency",
    "story": "Woolf applied thermodynamic expansion principles to Cornish mine pumping, dramatically increasing duty ratings per bushel of coal.",
    "mechanics": "Steam enters the smaller high-pressure cylinder; exhaust steam passes into a cylinder four times larger, expanding further against a second piston before entering the condenser.",
    "legacy": "Formed the engineering basis for compound and triple-expansion marine steam engines that drove world merchant fleets.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_steam_ha_stm_05.glb",
    "videoUrl": "/videos/reel_steam_ha_stm_05.mp4",
    "tags": [
      "Compound Engine",
      "Woolf",
      "Thermodynamics",
      "Cornish Beam",
      "Efficiency"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Compound High-Pressure Beam Engine fundamentally altered steam dynamics & pressure vessels, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-111",
    "title": "Movable Metal Type Screw Press",
    "officialTitle": "Adjustable Alloy Type Hand Mold and Wooden Screw Printing Press",
    "inventor": "Johannes Gutenberg",
    "creator": "Johannes Gutenberg",
    "patent": "Pat. #1440-DE01 \u2022 1440",
    "patentNumber": "DE1440001A",
    "patentDate": "April 14, 1450",
    "year": "1440",
    "location": "Mainz, Germany",
    "category": "PRINTING",
    "categoryLabel": "Printing Presses & Movable Types",
    "badge": "Gutenberg Printing Archive",
    "image": "/images/character_babbage.jpg",
    "thumbnail": "/images/character_babbage.jpg",
    "desc": "Johannes Gutenberg revolutionized human civilization by inventing the adjustable hand mold for casting interchangeable lead-tin-antimony alloy movable type, formulated oil-based printing ink, and adapted an agricultural screw press to mass-produce identical texts.",
    "description": "Johannes Gutenberg revolutionized human civilization by inventing the adjustable hand mold for casting interchangeable lead-tin-antimony alloy movable type, formulated oil-based printing ink, and adapted an agricultural screw press to mass-produce identical texts.",
    "polyCount": "152,000 Quads",
    "medium": "Mainz Walnut & Oak Wood \u2022 Hand-Cast Antimony-Lead Type \u2022 Oil-Based Lampblack Ink",
    "resonance": "Mechanical Movable Typographic Matrix",
    "era": "1440 \u2014 Typographic Renaissance",
    "story": "Hand-copying manuscripts took years. Gutenberg combined punch-cutting goldsmithing, metallurgic casting, and grape press mechanics into movable type typography.",
    "mechanics": "Interchangeable metal characters set line-by-line in a composing stick are inked with leather balls, covered by paper in a tympan, and pressed under a wooden screw platen.",
    "legacy": "Democratized literacy, spread the Protestant Reformation, and launched the scientific revolution.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_printing_ha_111.glb",
    "videoUrl": "/videos/reel_printing_ha_111.mp4",
    "tags": [
      "Gutenberg",
      "Movable Type",
      "Printing Press",
      "Incunabula",
      "Typography"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Movable Metal Type Screw Press fundamentally altered printing presses & movable types, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-PRT-02",
    "title": "Linotype Composing Machine",
    "officialTitle": "Mergenthaler Hot-Metal Slotted Matrix Line-Casting Machine",
    "inventor": "Ottmar Mergenthaler",
    "creator": "Ottmar Mergenthaler",
    "patent": "Pat. #317,828 \u2022 1885",
    "patentNumber": "US317828A",
    "patentDate": "May 12, 1885",
    "year": "1885",
    "location": "Baltimore, MD",
    "category": "PRINTING",
    "categoryLabel": "Printing Presses & Movable Types",
    "badge": "Eighth Wonder of the World",
    "image": "/images/raw_card_8_babbage.jpg",
    "thumbnail": "/images/raw_card_8_babbage.jpg",
    "desc": "Thomas Edison hailed the Linotype as the 'Eighth Wonder of the World'. Ottmar Mergenthaler automated typesetting by allowing an operator using a 90-key keyboard to compose complete lines of text from brass letter matrices, cast them in molten lead into a solid 'line-o'-type' slug, and redistribute matrices automatically.",
    "description": "Thomas Edison hailed the Linotype as the 'Eighth Wonder of the World'. Ottmar Mergenthaler automated typesetting by allowing an operator using a 90-key keyboard to compose complete lines of text from brass letter matrices, cast them in molten lead into a solid 'line-o'-type' slug, and redistribute matrices automatically.",
    "polyCount": "210,000 Quads",
    "medium": "Molten Type-Metal Crucible \u2022 Slotted Brass Matrices \u2022 Escapement Magazine",
    "resonance": "Hot-Metal Keyboard Slug Casting",
    "era": "1885 \u2014 Newspaper Speed Era",
    "story": "Typesetting daily newspapers by hand letter-by-letter severely constrained newspaper size to 8 pages.",
    "mechanics": "Keyboard keys trip escapements dropping brass matrices into a line; a lever pumps molten type metal against the matrices, casting a line slug that drops into a galley.",
    "legacy": "Expanded daily newspapers from small sheets into massive multi-section daily editions worldwide.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_printing_ha_prt_02.glb",
    "videoUrl": "/videos/reel_printing_ha_prt_02.mp4",
    "tags": [
      "Linotype",
      "Mergenthaler",
      "Typesetting",
      "Hot Metal",
      "Newspaper"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Linotype Composing Machine fundamentally altered printing presses & movable types, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-PRT-03",
    "title": "Type Revolving Lightning Press",
    "officialTitle": "Hoe Rotary Type-Revolving Multi-Feeder Cylinder Press",
    "inventor": "Richard March Hoe",
    "creator": "Richard March Hoe",
    "patent": "Pat. #5,199 \u2022 1847",
    "patentNumber": "US5199A",
    "patentDate": "July 24, 1847",
    "year": "1847",
    "location": "New York, NY",
    "category": "PRINTING",
    "categoryLabel": "Printing Presses & Movable Types",
    "badge": "Rotary Typography Ledger",
    "image": "/images/cards_row.jpg",
    "thumbnail": "/images/cards_row.jpg",
    "desc": "Richard March Hoe discarded the reciprocating flat bed press by fastening movable type directly to the curved surface of a massive central revolving cylinder. Attended by up to ten human paper feeders around its circumference, the 'Lightning Press' produced over 20,000 impressions per hour.",
    "description": "Richard March Hoe discarded the reciprocating flat bed press by fastening movable type directly to the curved surface of a massive central revolving cylinder. Attended by up to ten human paper feeders around its circumference, the 'Lightning Press' produced over 20,000 impressions per hour.",
    "polyCount": "190,000 Quads",
    "medium": "Curved Brass Wedge Chases \u2022 Ten Peripheral Impression Rollers \u2022 Steel Spur Gearing",
    "resonance": "Rotary High-Speed Typographic Impression",
    "era": "1847 \u2014 Mass Media Explosion",
    "story": "Flatbed presses stopped and reversed after each sheet, capping output at 2,000 pages per hour. Hoe locked tapered column rules onto a revolving cylinder.",
    "mechanics": "A central type cylinder spins continuously; paper fed into impression cylinders around its perimeter receives sharp impressions on the fly.",
    "legacy": "Made penny press newspapers accessible to millions of everyday citizens across America and Europe.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_printing_ha_prt_03.glb",
    "videoUrl": "/videos/reel_printing_ha_prt_03.mp4",
    "tags": [
      "Hoe",
      "Rotary Press",
      "Lightning Press",
      "Newspaper",
      "Mass Media"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Type Revolving Lightning Press fundamentally altered printing presses & movable types, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-PRT-04",
    "title": "Iron Frame Lever Hand Press",
    "officialTitle": "Stanhope Cast-Iron Compound Toggle-Lever Book Press",
    "inventor": "Charles Stanhope (3rd Earl Stanhope)",
    "creator": "Charles Stanhope",
    "patent": "Pat. #1800-GB01 \u2022 1800",
    "patentNumber": "GB1800001A",
    "patentDate": "March 2, 1800",
    "year": "1800",
    "location": "London, UK",
    "category": "PRINTING",
    "categoryLabel": "Printing Presses & Movable Types",
    "badge": "Stanhope Press Legacy",
    "image": "/images/thumb_cube_hq.jpg",
    "thumbnail": "/images/thumb_cube_hq.jpg",
    "desc": "Lord Charles Stanhope built the world's first all-iron printing press. Replacing flexible wooden frames with a rigid single-piece cast iron frame and adding compound toggle-joint levers, it exerted massive uniform pressure across a double-sized bed with half the manual physical effort.",
    "description": "Lord Charles Stanhope built the world's first all-iron printing press. Replacing flexible wooden frames with a rigid single-piece cast iron frame and adding compound toggle-joint levers, it exerted massive uniform pressure across a double-sized bed with half the manual physical effort.",
    "polyCount": "144,000 Quads",
    "medium": "Single-Piece Cast Iron Stanchion \u2022 Compound Toggle-Joint \u2022 Polished Platen",
    "resonance": "Compound Toggle-Joint Mechanical Advantage",
    "era": "1800 \u2014 Industrial Hand Press",
    "story": "Wooden presses cracked under high impression pressure, forcing printers to press large sheets twice. Stanhope's rigid iron frame printed large sheets in one stroke.",
    "mechanics": "Pulling the press bar activates compound toggle levers that increase mechanical advantage exponentially at the bottom of the stroke, pressing the platen down flat.",
    "legacy": "Standardized book manufacturing and doubled printer production rates in 19th-century publishing houses.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_printing_ha_prt_04.glb",
    "videoUrl": "/videos/reel_printing_ha_prt_04.mp4",
    "tags": [
      "Stanhope",
      "Iron Press",
      "Toggle Lever",
      "Publishing",
      "Bookbinding"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Iron Frame Lever Hand Press fundamentally altered printing presses & movable types, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-PRT-05",
    "title": "Continuous Web Rotary Press",
    "officialTitle": "Bullock Continuous Paper Roll Auto-Cutting Perfecting Rotary Press",
    "inventor": "William Bullock",
    "creator": "William Bullock",
    "patent": "Pat. #38,200 \u2022 1863",
    "patentNumber": "US38200A",
    "patentDate": "April 14, 1863",
    "year": "1863",
    "location": "Philadelphia, PA",
    "category": "PRINTING",
    "categoryLabel": "Printing Presses & Movable Types",
    "badge": "Philadelphia Inquirer Archive",
    "image": "/images/test_strip.jpg",
    "thumbnail": "/images/test_strip.jpg",
    "desc": "William Bullock revolutionized commercial printing by feeding continuous rolls of paper up to five miles long directly through rotary curved stereotype plate cylinders. His press printed both sides of the sheet simultaneously (perfecting), cut sheets with rotary knives, and folded them automatically.",
    "description": "William Bullock revolutionized commercial printing by feeding continuous rolls of paper up to five miles long directly through rotary curved stereotype plate cylinders. His press printed both sides of the sheet simultaneously (perfecting), cut sheets with rotary knives, and folded them automatically.",
    "polyCount": "186,000 Quads",
    "medium": "Continuous Paper Roll Spindles \u2022 Curved Stereotype Plates \u2022 High-Speed Rotary Shears",
    "resonance": "Continuous Web Perfecting Duplex Impression",
    "era": "1863 \u2014 Web Press Revolution",
    "story": "Manual single-sheet hand-feeding was the biggest bottleneck in printing. Bullock mechanized continuous reel feeding and automatic folding.",
    "mechanics": "A continuous web of roll paper feeds through impression cylinders, receives ink on both sides, passes through flying rotary knives that slice sheets, and drops folded papers.",
    "legacy": "The direct ancestor of modern high-speed newspaper and commercial web offset printing presses.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_printing_ha_prt_05.glb",
    "videoUrl": "/videos/reel_printing_ha_prt_05.mp4",
    "tags": [
      "Bullock",
      "Web Press",
      "Rotary Printing",
      "Stereotype",
      "Newspaper"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Continuous Web Rotary Press fundamentally altered printing presses & movable types, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-112",
    "title": "Single-Sphere Lens Microscope",
    "officialTitle": "Leeuwenhoek Handheld Ground Spherical Lens Microscopic System",
    "inventor": "Antonie van Leeuwenhoek",
    "creator": "Antonie van Leeuwenhoek",
    "patent": "Pat. #1673-NL01 \u2022 1673",
    "patentNumber": "NL1673001A",
    "patentDate": "May 19, 1673",
    "year": "1673",
    "location": "Delft, Netherlands",
    "category": "OPTICS",
    "categoryLabel": "Optics, Lenses & Microscopes",
    "badge": "Royal Society Biological Archive",
    "image": "/images/raw_card_4_astrolabe.jpg",
    "thumbnail": "/images/raw_card_4_astrolabe.jpg",
    "desc": "Dutch draper Antonie van Leeuwenhoek hand-ground tiny high-curvature glass spheres no larger than a pinhead, mounting them between riveted brass plates. Providing over 275x magnification, this instrument allowed him to discover bacteria, spermatozoa, and single-celled protozoa ('animalcules').",
    "description": "Dutch draper Antonie van Leeuwenhoek hand-ground tiny high-curvature glass spheres no larger than a pinhead, mounting them between riveted brass plates. Providing over 275x magnification, this instrument allowed him to discover bacteria, spermatozoa, and single-celled protozoa ('animalcules').",
    "polyCount": "125,000 Quads",
    "medium": "Hand-Beaten Sheet Brass \u2022 Flame-Polished Soda-Lime Glass Sphere \u2022 Fine Screw Stage",
    "resonance": "275x Optical Resolving Magnification",
    "era": "1673 \u2014 Discovery of the Microscopic Realm",
    "story": "Leeuwenhoek kept his lens-making methods secret, using intense artisanal grinding to avoid chromatic aberration found in early multi-lens compound microscopes.",
    "mechanics": "A minute glass bead lens held close to the eye refracts light at sharp angles, focusing on a specimen mounted on an adjustable needle point positioned by thumbscrews.",
    "legacy": "Opened the invisible microscopic biological universe to human knowledge, founding microbiology.",
    "modelType": "astrolabe",
    "model3dUrl": "/models/cad_optics_ha_112.glb",
    "videoUrl": "/videos/reel_optics_ha_112.mp4",
    "tags": [
      "Leeuwenhoek",
      "Microscope",
      "Microbiology",
      "Lens",
      "Single Sphere"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Single-Sphere Lens Microscope fundamentally altered optics, lenses & microscopes, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-OPT-02",
    "title": "Sidereus Refracting Telescope",
    "officialTitle": "Galilei Dual Convex-Concave Terrestrial Refracting Spyglass",
    "inventor": "Galileo Galilei",
    "creator": "Galileo Galilei",
    "patent": "Pat. #1609-IT01 \u2022 1609",
    "patentNumber": "IT1609001A",
    "patentDate": "August 25, 1609",
    "year": "1609",
    "location": "Padua, Italy",
    "category": "OPTICS",
    "categoryLabel": "Optics, Lenses & Microscopes",
    "badge": "Museo Galileo Florence",
    "image": "/images/character_beville.jpg",
    "thumbnail": "/images/character_beville.jpg",
    "desc": "In 1609, Galileo Galilei ground his own high-quality lenses, constructing a 30-power refracting spyglass. Turning it toward the night sky, he discovered lunar craters, the four largest moons of Jupiter, sunspots, and the phases of Venus, overthrowing geocentric cosmology.",
    "description": "In 1609, Galileo Galilei ground his own high-quality lenses, constructing a 30-power refracting spyglass. Turning it toward the night sky, he discovered lunar craters, the four largest moons of Jupiter, sunspots, and the phases of Venus, overthrowing geocentric cosmology.",
    "polyCount": "135,000 Quads",
    "medium": "Leather-Covered Wood Tube \u2022 Plano-Convex Objective \u2022 Plano-Concave Eyepiece",
    "resonance": "30x Angular Astronomical Magnification",
    "era": "1609 \u2014 Copernican Confirmation",
    "story": "Galileo demonstrated his spyglass atop St. Mark's campanile in Venice, proving ships could be spotted two hours before naked-eye sighting.",
    "mechanics": "A weak convex objective lens converges incoming parallel starlight; before crossing, a strong concave ocular diverges rays into the pupil, producing an upright magnified image.",
    "legacy": "Overturned Aristotelian astronomy and confirmed the heliocentric Copernican solar system.",
    "modelType": "beville",
    "model3dUrl": "/models/cad_optics_ha_opt_02.glb",
    "videoUrl": "/videos/reel_optics_ha_opt_02.mp4",
    "tags": [
      "Galileo",
      "Telescope",
      "Refractor",
      "Astronomy",
      "Copernicus"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Sidereus Refracting Telescope fundamentally altered optics, lenses & microscopes, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-OPT-03",
    "title": "Speculum Reflecting Telescope",
    "officialTitle": "Newton Parabolic Concave Metal Mirror Reflecting Telescope",
    "inventor": "Sir Isaac Newton",
    "creator": "Sir Isaac Newton",
    "patent": "Pat. #1668-GB01 \u2022 1668",
    "patentNumber": "GB1668001A",
    "patentDate": "January 11, 1672",
    "year": "1668",
    "location": "Cambridge, UK",
    "category": "OPTICS",
    "categoryLabel": "Optics, Lenses & Microscopes",
    "badge": "Royal Society Newton Vault",
    "image": "/images/character_ada.jpg",
    "thumbnail": "/images/character_ada.jpg",
    "desc": "Sir Isaac Newton proved white sunlight is a mixture of spectral colors, realizing glass lenses bend colors unevenly (chromatic aberration). To eliminate this flaw, he replaced glass objective lenses with a ground concave speculum metal mirror, inventing the reflecting telescope.",
    "description": "Sir Isaac Newton proved white sunlight is a mixture of spectral colors, realizing glass lenses bend colors unevenly (chromatic aberration). To eliminate this flaw, he replaced glass objective lenses with a ground concave speculum metal mirror, inventing the reflecting telescope.",
    "polyCount": "142,000 Quads",
    "medium": "Polished Speculum Metal (Copper-Tin) Mirror \u2022 45-Degree Flat Diagonal Mirror \u2022 Cardboard Tube",
    "resonance": "Achromatic Parabolic Reflection",
    "era": "1668 \u2014 Newtonian Optics",
    "story": "Presented to the Royal Society in 1671, Newton's 6-inch telescope provided magnification equal to refracting tubes six feet long.",
    "mechanics": "Light enters the tube and reflects off a concave primary mirror onto a 45-degree flat secondary mirror, bouncing rays sideways through an eyepiece on the tube's side.",
    "legacy": "Became the universal architecture for all major modern astronomical telescopes and space observatories (Hubble, James Webb).",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_optics_ha_opt_03.glb",
    "videoUrl": "/videos/reel_optics_ha_opt_03.mp4",
    "tags": [
      "Newton",
      "Reflecting Telescope",
      "Speculum Mirror",
      "Optics",
      "Astronomy"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Speculum Reflecting Telescope fundamentally altered optics, lenses & microscopes, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-OPT-04",
    "title": "Apochromatic Abbe Condenser Microscope",
    "officialTitle": "Abbe-Zeiss Wave Diffraction Theory Apochromatic Microscope",
    "inventor": "Ernst Abbe & Carl Zeiss",
    "creator": "Ernst Abbe & Carl Zeiss",
    "patent": "Pat. #48,153 \u2022 1886",
    "patentNumber": "DE48153A",
    "patentDate": "July 9, 1886",
    "year": "1886",
    "location": "Jena, Germany",
    "category": "OPTICS",
    "categoryLabel": "Optics, Lenses & Microscopes",
    "badge": "Zeiss Optical Museum Jena",
    "image": "/images/raw_card_7_tesla.jpg",
    "thumbnail": "/images/raw_card_7_tesla.jpg",
    "desc": "Ernst Abbe applied wave diffraction theory to optical microscopy, discovering the fundamental diffraction limit equation (d = lambda / 2NA). Partnering with glass chemist Otto Schott and Carl Zeiss, he fabricated apochromatic fluorite lenses and substage condensers that eliminated spherical and chromatic color fringing.",
    "description": "Ernst Abbe applied wave diffraction theory to optical microscopy, discovering the fundamental diffraction limit equation (d = lambda / 2NA). Partnering with glass chemist Otto Schott and Carl Zeiss, he fabricated apochromatic fluorite lenses and substage condensers that eliminated spherical and chromatic color fringing.",
    "polyCount": "178,000 Quads",
    "medium": "Heavy Bronzed Brass Stand \u2022 Natural Fluorite Triplets \u2022 Iris Diaphragm Condenser",
    "resonance": "Numerical Aperture 1.40 Oil Immersion",
    "era": "1886 \u2014 Modern Optical Physics",
    "story": "Before Abbe, lens makers guessed lens curves through trial and error. Abbe replaced trial with rigorous wave optical mathematics.",
    "mechanics": "An adjustable substage condenser focuses light at high angles through the specimen; fluorite lens groupings correct optical paths for three distinct wavelengths of light.",
    "legacy": "Empowered Robert Koch and Louis Pasteur to identify tuberculosis and cholera bacilli, sparking modern immunology.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_optics_ha_opt_04.glb",
    "videoUrl": "/videos/reel_optics_ha_opt_04.mp4",
    "tags": [
      "Abbe",
      "Zeiss",
      "Apochromatic",
      "Microscopy",
      "Optics"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Apochromatic Abbe Condenser Microscope fundamentally altered optics, lenses & microscopes, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-OPT-05",
    "title": "Stepped Dioptric Lighthouse Lens",
    "officialTitle": "Fresnel Concentric Annular Ring Stepped Lighthouse Lens Array",
    "inventor": "Augustin-Jean Fresnel",
    "creator": "Augustin-Jean Fresnel",
    "patent": "Pat. #1822-FR01 \u2022 1822",
    "patentNumber": "FR1822001A",
    "patentDate": "August 20, 1822",
    "year": "1822",
    "location": "Paris, France",
    "category": "OPTICS",
    "categoryLabel": "Optics, Lenses & Microscopes",
    "badge": "Cordouan Lighthouse Registry",
    "image": "/images/hero_showcase_composite.jpg",
    "thumbnail": "/images/hero_showcase_composite.jpg",
    "desc": "Augustin-Jean Fresnel revolutionized maritime coastal safety by designing the stepped annular lens. By breaking a thick, heavy convex lens into concentric ring prisms, he reduced lens weight by ninety percent while concentrating eighty percent of a lamp's light into a narrow parallel beam visible 20 miles out to sea.",
    "description": "Augustin-Jean Fresnel revolutionized maritime coastal safety by designing the stepped annular lens. By breaking a thick, heavy convex lens into concentric ring prisms, he reduced lens weight by ninety percent while concentrating eighty percent of a lamp's light into a narrow parallel beam visible 20 miles out to sea.",
    "polyCount": "220,000 Quads",
    "medium": "Polished Crown Glass Prisms \u2022 Brass Bullseye Bezel Frame \u2022 Rotating Clockwork Pedestal",
    "resonance": "Collimated Catadioptric Light Beam",
    "era": "1822 \u2014 Maritime Illumination",
    "story": "First installed at the Cordouan lighthouse in 1823, Fresnel's lens turned dim coastal beacons into piercing navigational lighthouses.",
    "mechanics": "Central bullseye lens elements refract direct light while outer concentric ring prisms reflect and bend divergent rays via total internal reflection into a parallel beam.",
    "legacy": "Saved countless ships and mariners from shipwrecks and established the modern theory of wave optics.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_optics_ha_opt_05.glb",
    "videoUrl": "/videos/reel_optics_ha_opt_05.mp4",
    "tags": [
      "Fresnel",
      "Lighthouse Lens",
      "Stepped Lens",
      "Maritime Safety",
      "Wave Optics"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Stepped Dioptric Lighthouse Lens fundamentally altered optics, lenses & microscopes, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-113",
    "title": "Wrought-Iron Puddle Truss Tower",
    "officialTitle": "Eiffel Aerodynamic Cantilever Puddle-Iron Lattice Structure",
    "inventor": "Gustave Eiffel",
    "creator": "Gustave Eiffel",
    "patent": "Pat. #164,364 \u2022 1884",
    "patentNumber": "FR164364A",
    "patentDate": "September 18, 1884",
    "year": "1889",
    "location": "Paris, France",
    "category": "CIVIL",
    "categoryLabel": "Architectural & Truss Engineering",
    "badge": "Exposition Universelle Monument",
    "image": "/images/cards_row.jpg",
    "thumbnail": "/images/cards_row.jpg",
    "desc": "Built for the 1889 Exposition Universelle in Paris, Gustave Eiffel's 300-meter puddle-iron lattice tower demonstrated that open-work truss engineering could withstand wind shear forces at heights never before achieved. Its 18,038 prefabricated pieces were assembled with 2.5 million hot-driven rivets.",
    "description": "Built for the 1889 Exposition Universelle in Paris, Gustave Eiffel's 300-meter puddle-iron lattice tower demonstrated that open-work truss engineering could withstand wind shear forces at heights never before achieved. Its 18,038 prefabricated pieces were assembled with 2.5 million hot-driven rivets.",
    "polyCount": "240,000 Quads",
    "medium": "Refined Puddle Wrought Iron \u2022 2.5 Million Rivets \u2022 Concrete Foundation Caissons",
    "resonance": "Aerodynamic Wind-Force Lattice Equilibrium",
    "era": "1889 \u2014 Universal Exposition Triumph",
    "story": "Critics predicted the tower would collapse in high winds. Eiffel engineered the four sweeping parabolic legs to channel wind loads down to the foundations.",
    "mechanics": "Open structural lattice trusses allow atmospheric winds to blow through without building dynamic air pressure, while tensioned struts maintain structural rigidity.",
    "legacy": "Demonstrated the structural supremacy of metal frameworks, ushering in the era of steel skyscrapers and long-span bridges.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_civil_ha_113.glb",
    "videoUrl": "/videos/reel_civil_ha_113.mp4",
    "tags": [
      "Eiffel Tower",
      "Puddle Iron",
      "Truss Engineering",
      "Structural Steel",
      "Civil Architecture"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Wrought-Iron Puddle Truss Tower fundamentally altered architectural & truss engineering, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-CIV-02",
    "title": "Spun Wire Suspension Bridge Cable",
    "officialTitle": "Roebling Galvanized Aerial Wire Rope Suspension Bridge System",
    "inventor": "John Augustus Roebling",
    "creator": "John Augustus Roebling",
    "patent": "Pat. #4,710 \u2022 1846",
    "patentNumber": "US4710A",
    "patentDate": "August 26, 1846",
    "year": "1869",
    "location": "Brooklyn, NY",
    "category": "CIVIL",
    "categoryLabel": "Architectural & Truss Engineering",
    "badge": "Brooklyn Bridge Historic Archive",
    "image": "/images/hero_stage_bg.jpg",
    "thumbnail": "/images/hero_stage_bg.jpg",
    "desc": "John Roebling pioneered the technique of spinning continuous galvanized steel wires aerially from shore to shore across rivers to form suspension bridge cables. Culminating in the Brooklyn Bridge, his stiffened hybrid truss and stay-cable design withstood Atlantic gales that tore other bridges apart.",
    "description": "John Roebling pioneered the technique of spinning continuous galvanized steel wires aerially from shore to shore across rivers to form suspension bridge cables. Culminating in the Brooklyn Bridge, his stiffened hybrid truss and stay-cable design withstood Atlantic gales that tore other bridges apart.",
    "polyCount": "210,000 Quads",
    "medium": "Spun Galvanized Carbon Steel Wire \u2022 Granite Gothic Towers \u2022 Timber Decking",
    "resonance": "Tensile Wire Rope Suspension Equilibrium",
    "era": "1869 \u2014 Civil Engineering Epoch",
    "story": "Roebling developed wire rope in Saxonburg, PA, replacing fragile hemp ropes on railway inclines before applying them to bridge spans.",
    "mechanics": "Traveling wheels carry continuous loops of zinc-coated steel wire across river anchorages; bundled and compacted into cylindrical cables, they suspend the stiffened truss deck.",
    "legacy": "Formed the foundational structural paradigm for every major modern suspension bridge across the globe.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_civil_ha_civ_02.glb",
    "videoUrl": "/videos/reel_civil_ha_civ_02.mp4",
    "tags": [
      "Roebling",
      "Brooklyn Bridge",
      "Suspension Bridge",
      "Wire Rope",
      "Civil Engineering"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Spun Wire Suspension Bridge Cable fundamentally altered architectural & truss engineering, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-CIV-03",
    "title": "Home Insurance Skyscraper Frame",
    "officialTitle": "Jenney Fireproof Structural Steel and Cast-Iron Skeleton Frame",
    "inventor": "William Le Baron Jenney",
    "creator": "William Le Baron Jenney",
    "patent": "Pat. #1884-US01 \u2022 1884",
    "patentNumber": "US1884001A",
    "patentDate": "May 1, 1884",
    "year": "1884",
    "location": "Chicago, IL",
    "category": "CIVIL",
    "categoryLabel": "Architectural & Truss Engineering",
    "badge": "Chicago School of Architecture",
    "image": "/images/card1_test.png",
    "thumbnail": "/images/card1_test.png",
    "desc": "William Le Baron Jenney designed the 10-story Home Insurance Building in Chicago, widely recognized as the world's first modern skyscraper. By supporting the building's entire weight on a skeleton frame of cast iron columns and Bessemer rolled steel beams, he eliminated the need for massive masonry load-bearing walls.",
    "description": "William Le Baron Jenney designed the 10-story Home Insurance Building in Chicago, widely recognized as the world's first modern skyscraper. By supporting the building's entire weight on a skeleton frame of cast iron columns and Bessemer rolled steel beams, he eliminated the need for massive masonry load-bearing walls.",
    "polyCount": "195,000 Quads",
    "medium": "Rolled Structural Steel I-Beams \u2022 Cast Iron Columns \u2022 Terra-Cotta Fireproof Encasement",
    "resonance": "Internal Load-Bearing Skeleton Frame",
    "era": "1884 \u2014 Skyscraper Genesis",
    "story": "Following the Great Chicago Fire, land values surged; thick masonry walls could not build upward without consuming entire ground-floor spaces.",
    "mechanics": "A rigid metal cage of vertical columns and horizontal girders carries all floor and roof weights directly down to bedrock, allowing exterior walls to serve as light curtain cladding.",
    "legacy": "Created the modern urban skyline and the discipline of skyscraper structural engineering.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_civil_ha_civ_03.glb",
    "videoUrl": "/videos/reel_civil_ha_civ_03.mp4",
    "tags": [
      "Skyscraper",
      "Jenney",
      "Skeleton Frame",
      "Chicago School",
      "Structural Steel"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Home Insurance Skyscraper Frame fundamentally altered architectural & truss engineering, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-CIV-04",
    "title": "Bowstring Iron Truss Bridge",
    "officialTitle": "Whipple Trapezoidal Bowstring Cast and Wrought Iron Bridge Truss",
    "inventor": "Squire Whipple",
    "creator": "Squire Whipple",
    "patent": "Pat. #2,064 \u2022 1841",
    "patentNumber": "US2064A",
    "patentDate": "April 24, 1841",
    "year": "1841",
    "location": "Albany, NY",
    "category": "CIVIL",
    "categoryLabel": "Architectural & Truss Engineering",
    "badge": "Erie Canal Infrastructure Archive",
    "image": "/images/test_strip2.jpg",
    "thumbnail": "/images/test_strip2.jpg",
    "desc": "Squire Whipple, the 'Father of American Bridge Building', published the world's first correct mathematical stress analysis of bridge trusses. His patented bowstring truss combined cast iron for compression arch members with wrought iron eyebars for tensile ties, enabling reliable spans across canals and rail lines.",
    "description": "Squire Whipple, the 'Father of American Bridge Building', published the world's first correct mathematical stress analysis of bridge trusses. His patented bowstring truss combined cast iron for compression arch members with wrought iron eyebars for tensile ties, enabling reliable spans across canals and rail lines.",
    "polyCount": "160,000 Quads",
    "medium": "Hollow Cast Iron Top Arch \u2022 Wrought Iron Diagonal Tension Ties \u2022 Timber Planking Deck",
    "resonance": "Mathematically Determinable Truss Mechanics",
    "era": "1841 \u2014 Scientific Structural Analysis",
    "story": "Before Whipple, bridges were designed by rule of thumb and frequently collapsed under passing trains. Whipple applied trigonometry to calculate exact member forces.",
    "mechanics": "A curved cast-iron upper chord bears compressive thrusts while diagonal wrought-iron link bars absorb tensile stresses, equalizing loads across the span.",
    "legacy": "Transformed bridge building from an empirical trade into an exact mathematical engineering science.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_civil_ha_civ_04.glb",
    "videoUrl": "/videos/reel_civil_ha_civ_04.mp4",
    "tags": [
      "Whipple",
      "Truss Bridge",
      "Bowstring",
      "Civil Engineering",
      "Erie Canal"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Bowstring Iron Truss Bridge fundamentally altered architectural & truss engineering, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-CIV-05",
    "title": "Modular Crystal Palace Architecture",
    "officialTitle": "Paxton Prefabricated Modular Cast-Iron and Plate-Glass Exhibition Hall",
    "inventor": "Sir Joseph Paxton",
    "creator": "Sir Joseph Paxton",
    "patent": "Pat. #1850-GB01 \u2022 1850",
    "patentNumber": "GB1850001A",
    "patentDate": "November 14, 1850",
    "year": "1851",
    "location": "London, UK",
    "category": "CIVIL",
    "categoryLabel": "Architectural & Truss Engineering",
    "badge": "Great Exhibition 1851 Archive",
    "image": "/images/hero_full_mockup.jpg",
    "thumbnail": "/images/hero_full_mockup.jpg",
    "desc": "Sir Joseph Paxton engineered the Crystal Palace for the 1851 Great Exhibition in London's Hyde Park. Spanning over 990,000 square feet, this colossal building was assembled in just five months from modular, prefabricated cast-iron columns, timber gutters, and 300,000 sheets of uniform plate glass.",
    "description": "Sir Joseph Paxton engineered the Crystal Palace for the 1851 Great Exhibition in London's Hyde Park. Spanning over 990,000 square feet, this colossal building was assembled in just five months from modular, prefabricated cast-iron columns, timber gutters, and 300,000 sheets of uniform plate glass.",
    "polyCount": "205,000 Quads",
    "medium": "Interchangeable Cast Iron Columns \u2022 Hollow Truss Gutters \u2022 Sheet Plate Glass",
    "resonance": "Modular Prefabricated Skeleton Assembly",
    "era": "1851 \u2014 Prefabricated Modernism",
    "story": "Paxton, a gardener who built giant greenhouses for Amazon water lilies, based the palace's truss ribs on the structural veins of the Victoria regia lily pad.",
    "mechanics": "Hollow cast-iron pillars doubled as drainage downspouts and structural columns, supporting interchangeable timber roof trusses bolted together by unskilled laborers.",
    "legacy": "The seminal historical precursor to modern prefabricated modular building design and glass curtain-wall architecture.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_civil_ha_civ_05.glb",
    "videoUrl": "/videos/reel_civil_ha_civ_05.mp4",
    "tags": [
      "Crystal Palace",
      "Paxton",
      "Prefabricated",
      "Glass Architecture",
      "Modular Truss"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Modular Crystal Palace Architecture fundamentally altered architectural & truss engineering, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-114",
    "title": "Mechanical Grain Reaper",
    "officialTitle": "McCormick Horse-Drawn Grain Harvester with Reel and Divider",
    "inventor": "Cyrus Hall McCormick",
    "creator": "Cyrus Hall McCormick",
    "patent": "Pat. #X8,277 \u2022 1834",
    "patentNumber": "USX8277A",
    "patentDate": "June 21, 1834",
    "year": "1831",
    "location": "Rockbridge County, VA",
    "category": "AGRICULTURE",
    "categoryLabel": "Agricultural Harvesters & Machinery",
    "badge": "McCormick Agricultural Registry",
    "image": "/images/character_edison_stage.png",
    "thumbnail": "/images/character_edison_stage.png",
    "desc": "Cyrus McCormick's horse-drawn grain reaper mechanized wheat harvesting, replacing slow hand sickles and scythes. Integrating a divider, a rotating reel, a reciprocating serrated sickle knife, and a grain-receiving platform, it harvested as much grain in one day as ten men.",
    "description": "Cyrus McCormick's horse-drawn grain reaper mechanized wheat harvesting, replacing slow hand sickles and scythes. Integrating a divider, a rotating reel, a reciprocating serrated sickle knife, and a grain-receiving platform, it harvested as much grain in one day as ten men.",
    "polyCount": "168,000 Quads",
    "medium": "Forged Carbon Steel Sickle \u2022 Ash Grain Platform \u2022 Cast Iron Ground Traction Wheel",
    "resonance": "Reciprocating Serrated Knife Dynamics",
    "era": "1831 \u2014 Agricultural Mechanization",
    "story": "In the Shenandoah Valley in 1831, McCormick demonstrated his horse-pulled machine, enabling farmers to cut harvest times before wheat spoiled in summer rains.",
    "mechanics": "A large cast-iron main wheel grips the earth to drive a pitman arm that reciprocates a serrated cutter bar through stationary fingers, cleanly severing grain stalks.",
    "legacy": "Prevented global famine and freed agricultural labor to fuel the expanding industrial workforce.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_agriculture_ha_114.glb",
    "videoUrl": "/videos/reel_agriculture_ha_114.mp4",
    "tags": [
      "McCormick",
      "Reaper",
      "Harvesting",
      "Agriculture",
      "Sickle Knife"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Mechanical Grain Reaper fundamentally altered agricultural harvesters & machinery, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-AGR-02",
    "title": "Self-Scouring Steel Plow",
    "officialTitle": "Deere Polished Moldboard Rolled-Steel Sod-Breaking Plow",
    "inventor": "John Deere",
    "creator": "John Deere",
    "patent": "Pat. #1837-US02 \u2022 1837",
    "patentNumber": "US1837002A",
    "patentDate": "February 4, 1837",
    "year": "1837",
    "location": "Grand Detour, IL",
    "category": "AGRICULTURE",
    "categoryLabel": "Agricultural Harvesters & Machinery",
    "badge": "Deere Historic Archives",
    "image": "/images/raw_card_2_washing.jpg",
    "thumbnail": "/images/raw_card_2_washing.jpg",
    "desc": "Blacksmith John Deere solved the crisis of midwestern farming: rich, sticky prairie loam adhered like glue to conventional cast iron plows, forcing farmers to stop every few steps to scrape them. Deere fashioned a plow from a broken steel sawmill blade, creating a self-scouring plow that sliced cleanly through thick prairie grass roots.",
    "description": "Blacksmith John Deere solved the crisis of midwestern farming: rich, sticky prairie loam adhered like glue to conventional cast iron plows, forcing farmers to stop every few steps to scrape them. Deere fashioned a plow from a broken steel sawmill blade, creating a self-scouring plow that sliced cleanly through thick prairie grass roots.",
    "polyCount": "132,000 Quads",
    "medium": "Polished High-Carbon Saw Blade Steel \u2022 White Oak Beam & Handles",
    "resonance": "Self-Scouring Parabolic Moldboard Slip",
    "era": "1837 \u2014 Prairie Conquest",
    "story": "Pioneers were abandoning fertile Illinois farms because their cast-iron plows couldn't cut prairie sod. Deere polished a scrap steel saw blade smooth as glass.",
    "mechanics": "The sharp steel share slices the sod horizontally while the parabolic moldboard curvature lifts and inverts the soil furrow slice without sticking.",
    "legacy": "Transformed the American Midwest into the breadbasket of the world.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_agriculture_ha_agr_02.glb",
    "videoUrl": "/videos/reel_agriculture_ha_agr_02.mp4",
    "tags": [
      "John Deere",
      "Steel Plow",
      "Self-Scouring",
      "Prairie Farming",
      "Agriculture"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Self-Scouring Steel Plow fundamentally altered agricultural harvesters & machinery, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-AGR-03",
    "title": "Metered Seed Drill",
    "officialTitle": "Tull Horse-Drawn Mechanical Funnel Seed Planter and Hoe",
    "inventor": "Jethro Tull",
    "creator": "Jethro Tull",
    "patent": "Pat. #1701-GB01 \u2022 1701",
    "patentNumber": "GB1701001A",
    "patentDate": "March 15, 1701",
    "year": "1701",
    "location": "Berkshire, UK",
    "category": "AGRICULTURE",
    "categoryLabel": "Agricultural Harvesters & Machinery",
    "badge": "British Agricultural Revolution",
    "image": "/images/raw_card_3_windmill.jpg",
    "thumbnail": "/images/raw_card_3_windmill.jpg",
    "desc": "Agricultural pioneer Jethro Tull invented the mechanical seed drill, ending centuries of wasteful hand-broadcasting where birds ate half the seed. His horse-drawn drill carved furrow trenches, dropped seeds at precise depths through notched rotating cylinders, and covered them with soil in straight, weedable rows.",
    "description": "Agricultural pioneer Jethro Tull invented the mechanical seed drill, ending centuries of wasteful hand-broadcasting where birds ate half the seed. His horse-drawn drill carved furrow trenches, dropped seeds at precise depths through notched rotating cylinders, and covered them with soil in straight, weedable rows.",
    "polyCount": "146,000 Quads",
    "medium": "Hand-Turned Beechwood Seed Hopper \u2022 Cast Brass Grooved Flute \u2022 Wrought Harrow Teeth",
    "resonance": "Rotary Grooved Seed Metering",
    "era": "1701 \u2014 Agricultural Revolution",
    "story": "Tull was frustrated by laborers' imprecise hand-scattering. Inspired by church organ pipe mechanics, he devised a rotating grooved cylinder to drop seeds uniformly.",
    "mechanics": "Wheels turn a grooved cylinder beneath the hopper; as the grooves pass, they collect and drop seeds into delivery tubes, followed by a trailing harrow that covers the trench.",
    "legacy": "Multiplied crop yields per acre and established modern row-crop farming methods.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_agriculture_ha_agr_03.glb",
    "videoUrl": "/videos/reel_agriculture_ha_agr_03.mp4",
    "tags": [
      "Jethro Tull",
      "Seed Drill",
      "Agronomy",
      "Crop Yield",
      "Precision Planting"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Metered Seed Drill fundamentally altered agricultural harvesters & machinery, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-AGR-04",
    "title": "Combined Thresher and Cleaner",
    "officialTitle": "Pitts Horse-Powered Separating Threshing and Winnowing Machine",
    "inventor": "Hiram & John Pitts",
    "creator": "Hiram & John Pitts",
    "patent": "Pat. #542 \u2022 1837",
    "patentNumber": "US542A",
    "patentDate": "December 29, 1837",
    "year": "1837",
    "location": "Winthrop, ME",
    "category": "AGRICULTURE",
    "categoryLabel": "Agricultural Harvesters & Machinery",
    "badge": "Pitts Agricultural Heritage",
    "image": "/images/thumb_3d_cube.jpg",
    "thumbnail": "/images/thumb_3d_cube.jpg",
    "desc": "Brothers Hiram and John Pitts combined two separate backbreaking post-harvest chores\u2014threshing grain from stalks and winnowing chaff with wind\u2014into a single continuous mobile machine. It separated grain seeds, blew away dusty chaff with an internal fan, and delivered bagged clean wheat.",
    "description": "Brothers Hiram and John Pitts combined two separate backbreaking post-harvest chores\u2014threshing grain from stalks and winnowing chaff with wind\u2014into a single continuous mobile machine. It separated grain seeds, blew away dusty chaff with an internal fan, and delivered bagged clean wheat.",
    "polyCount": "164,000 Quads",
    "medium": "Hard Maple Frame \u2022 Spiked Cast Iron Threshing Cylinder \u2022 Rotary Fanning Mill",
    "resonance": "Rotary Spike Threshing & Pneumatic Separation",
    "era": "1837 \u2014 Mechanized Threshing",
    "story": "Previously, farmers beat harvested grain with wooden flails on barn floors for weeks during winter. The Pitts machine threshed hundreds of bushels a day.",
    "mechanics": "An endless apron feeds wheat sheaves into a fast-spinning spiked cylinder; straw walkers sift stalks out the rear while a fanning blower winnows grain through oscillating riddles.",
    "legacy": "The direct mechanical prototype for modern self-propelled combine harvesters.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_agriculture_ha_agr_04.glb",
    "videoUrl": "/videos/reel_agriculture_ha_agr_04.mp4",
    "tags": [
      "Pitts",
      "Thresher",
      "Winnowing",
      "Combine",
      "Grain Separation"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Combined Thresher and Cleaner fundamentally altered agricultural harvesters & machinery, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-AGR-05",
    "title": "Continuous Caterpillar Tractor Track",
    "officialTitle": "Holt Steam Traction Engine Continuous Articulated Crawler Track",
    "inventor": "Benjamin Holt",
    "creator": "Benjamin Holt",
    "patent": "Pat. #874,008 \u2022 1907",
    "patentNumber": "US874008A",
    "patentDate": "December 17, 1907",
    "year": "1904",
    "location": "Stockton, CA",
    "category": "AGRICULTURE",
    "categoryLabel": "Agricultural Harvesters & Machinery",
    "badge": "Holt Caterpillar Heritage",
    "image": "/images/raw_card_5_edison.jpg",
    "thumbnail": "/images/raw_card_5_edison.jpg",
    "desc": "In the soft peat soils of the Sacramento Delta, heavy 40-ton steam traction engines sank to their axles. Benjamin Holt replaced round wheels with an endless belt of wooden and steel track slats that laid its own railway as it rolled, distributing weight across large surface areas.",
    "description": "In the soft peat soils of the Sacramento Delta, heavy 40-ton steam traction engines sank to their axles. Benjamin Holt replaced round wheels with an endless belt of wooden and steel track slats that laid its own railway as it rolled, distributing weight across large surface areas.",
    "polyCount": "192,000 Quads",
    "medium": "Cast Manganese Steel Track Links \u2022 Heavy Steam Engine Boiler \u2022 Double Sprocket Drive",
    "resonance": "Continuous Surface Weight Distribution",
    "era": "1904 \u2014 Crawler Track Epoch",
    "story": "Watching a conventional steam tractor sink in mud, Holt exclaimed: 'I'll make it walk!' An observer noted the undulating tracks looked like a caterpillar crawling.",
    "mechanics": "An endless chain of linked track shoes rolls around drive sprockets and guide rollers, spreading ground pressure to just 5 pounds per square inch.",
    "legacy": "Revolutionized heavy earthmoving, agriculture, and directly inspired the invention of the military tank during WWI.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_agriculture_ha_agr_05.glb",
    "videoUrl": "/videos/reel_agriculture_ha_agr_05.mp4",
    "tags": [
      "Holt",
      "Caterpillar",
      "Crawler Track",
      "Traction Engine",
      "Earthmoving"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Continuous Caterpillar Tractor Track fundamentally altered agricultural harvesters & machinery, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-115",
    "title": "Clermont Steamboat Paddlewheel",
    "officialTitle": "Fulton North River Steamboat Steam Paddle Propulsion Engine",
    "inventor": "Robert Fulton",
    "creator": "Robert Fulton",
    "patent": "Pat. #1809-US01 \u2022 1809",
    "patentNumber": "US1809001A",
    "patentDate": "February 11, 1809",
    "year": "1807",
    "location": "New York, NY",
    "category": "MARITIME",
    "categoryLabel": "Maritime Propulsion & Navigation",
    "badge": "Hudson River Maritime Museum",
    "image": "/images/character_wright.jpg",
    "thumbnail": "/images/character_wright.jpg",
    "desc": "Robert Fulton proved commercial steam navigation viable on August 17, 1807, when his 'North River Steamboat' (later known as the Clermont) steamed up the Hudson River from New York City to Albany\u2014150 miles against the current in 32 hours, shattering sailing sloop records.",
    "description": "Robert Fulton proved commercial steam navigation viable on August 17, 1807, when his 'North River Steamboat' (later known as the Clermont) steamed up the Hudson River from New York City to Albany\u2014150 miles against the current in 32 hours, shattering sailing sloop records.",
    "polyCount": "172,000 Quads",
    "medium": "White Pine Hull \u2022 Boulton & Watt Single-Cylinder Steam Engine \u2022 15-Foot Radial Paddlewheels",
    "resonance": "Radial Hydrodynamic Paddle Thrust",
    "era": "1807 \u2014 Steam Navigation Genesis",
    "story": "Critics dubbed Fulton's project 'Fulton's Folly', expecting the steam engine to sink the ship. Fulton proved steam could run reliable river transit schedules.",
    "mechanics": "A low-pressure condensing steam engine drives a horizontal crankshaft with geared side lever rods, turning two 15-foot radial wooden paddlewheels in the water.",
    "legacy": "Inaugurated commercial steamboat travel on rivers and inland waterways across the globe.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_maritime_ha_115.glb",
    "videoUrl": "/videos/reel_maritime_ha_115.mp4",
    "tags": [
      "Clermont",
      "Fulton",
      "Steamboat",
      "Paddlewheel",
      "Maritime Navigation"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Clermont Steamboat Paddlewheel fundamentally altered maritime propulsion & navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MAR-02",
    "title": "Contra-Rotating Screw Propeller",
    "officialTitle": "Ericsson Submerged Twin Contra-Rotating Screw Marine Propeller",
    "inventor": "John Ericsson",
    "creator": "John Ericsson",
    "patent": "Pat. #588 \u2022 1838",
    "patentNumber": "US588A",
    "patentDate": "February 1, 1838",
    "year": "1836",
    "location": "New York, NY",
    "category": "MARITIME",
    "categoryLabel": "Maritime Propulsion & Navigation",
    "badge": "Naval Engineering Archive",
    "image": "/images/bells_telephone_clean.png",
    "thumbnail": "/images/bells_telephone_clean.png",
    "desc": "Swedish engineer John Ericsson replaced vulnerable side paddlewheels on warships with fully submerged screw propellers mounted below the waterline. His contra-rotating twin screws cancelled rotational torque, protected propulsion machinery from enemy cannon fire, and increased maritime efficiency in rough seas.",
    "description": "Swedish engineer John Ericsson replaced vulnerable side paddlewheels on warships with fully submerged screw propellers mounted below the waterline. His contra-rotating twin screws cancelled rotational torque, protected propulsion machinery from enemy cannon fire, and increased maritime efficiency in rough seas.",
    "polyCount": "186,000 Quads",
    "medium": "Cast Bronze Helical Blades \u2022 Wrought Iron Propeller Shaft \u2022 Lignum Vitae Bearings",
    "resonance": "Submerged Axial Hydrodynamic Thrust",
    "era": "1836 \u2014 Screw Propeller Revolution",
    "story": "Naval admirals rejected paddlewheels because one direct cannon hit disabled the vessel. Ericsson positioned engines safely beneath the waterline.",
    "mechanics": "Steam pistons turn concentric drive shafts that spin two counter-rotating multi-bladed helical screws, driving water axially backward to push the hull forward.",
    "legacy": "Became the universal propulsion method for commercial merchant vessels and modern naval fleets.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_maritime_ha_mar_02.glb",
    "videoUrl": "/videos/reel_maritime_ha_mar_02.mp4",
    "tags": [
      "Ericsson",
      "Screw Propeller",
      "Maritime",
      "Naval Propulsion",
      "Submerged Drive"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Contra-Rotating Screw Propeller fundamentally altered maritime propulsion & navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MAR-03",
    "title": "Turtle Submersible Vessel",
    "officialTitle": "Bushnell One-Man Hand-Cranked Submersible Navigation Vessel",
    "inventor": "David Bushnell",
    "creator": "David Bushnell",
    "patent": "Pat. #1775-US01 \u2022 1775",
    "patentNumber": "US1775001A",
    "patentDate": "November 1, 1775",
    "year": "1775",
    "location": "Saybrook, CT",
    "category": "MARITIME",
    "categoryLabel": "Maritime Propulsion & Navigation",
    "badge": "Submarine Force Library & Museum",
    "image": "/images/asset_telephone_stage.png",
    "thumbnail": "/images/asset_telephone_stage.png",
    "desc": "David Bushnell designed the 'Turtle', the world's first submarine used in combat. Resembling a large wooden walnut shell, it was operated by a single colonial patriot who submerged by admitting water into a foot-pumped bilge ballast tank, navigating underwater using hand-cranked horizontal and vertical propellers.",
    "description": "David Bushnell designed the 'Turtle', the world's first submarine used in combat. Resembling a large wooden walnut shell, it was operated by a single colonial patriot who submerged by admitting water into a foot-pumped bilge ballast tank, navigating underwater using hand-cranked horizontal and vertical propellers.",
    "polyCount": "145,000 Quads",
    "medium": "Heavily Tarred Oak Halves \u2022 Brass Depth Gauge \u2022 Phosphorescent Foxfire Compass",
    "resonance": "Manual Hydrostatic Buoyancy Ballast",
    "era": "1775 \u2014 Revolutionary Naval Subterfuge",
    "story": "During the British blockade of New York Harbor in 1776, Ezra Lee piloted the Turtle beneath HMS Eagle to attach a clockwork gunpowder mine.",
    "mechanics": "The operator hand-cranks twin wooden Archimedes screws for propulsion and depth changes, monitoring depth via a mercury manometer illuminated by bioluminescent fungi.",
    "legacy": "Established the foundational operating principles for military submarines and submersibles.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_maritime_ha_mar_03.glb",
    "videoUrl": "/videos/reel_maritime_ha_mar_03.mp4",
    "tags": [
      "Turtle",
      "Bushnell",
      "Submarine",
      "Undersea Navigation",
      "Ballast Tank"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Turtle Submersible Vessel fundamentally altered maritime propulsion & navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MAR-04",
    "title": "Archimedean Screw Steamer",
    "officialTitle": "Smith Helical Wood-Screw Marine Propeller System",
    "inventor": "Francis Pettit Smith",
    "creator": "Francis Pettit Smith",
    "patent": "Pat. #7,104 \u2022 1836",
    "patentNumber": "GB7104A",
    "patentDate": "May 31, 1836",
    "year": "1836",
    "location": "London, UK",
    "category": "MARITIME",
    "categoryLabel": "Maritime Propulsion & Navigation",
    "badge": "SS Archimedes Heritage",
    "image": "/images/bg_gear.jpg",
    "thumbnail": "/images/bg_gear.jpg",
    "desc": "Farmer Francis Pettit Smith patented a two-turn wooden Archimedean screw propeller. During trials on the Paddington Canal in 1837, half the wooden screw struck a submerged rock and broke off; to everyone's astonishment, the boat immediately surged forward twice as fast, discovering optimal short-blade propeller pitch.",
    "description": "Farmer Francis Pettit Smith patented a two-turn wooden Archimedean screw propeller. During trials on the Paddington Canal in 1837, half the wooden screw struck a submerged rock and broke off; to everyone's astonishment, the boat immediately surged forward twice as fast, discovering optimal short-blade propeller pitch.",
    "polyCount": "162,000 Quads",
    "medium": "Forged Iron Helix \u2022 Steam Engine Shaft Collar \u2022 Water-Lubricated Stern Tube",
    "resonance": "Accidental Optimal Pitch Discovery",
    "era": "1836 \u2014 Screw Propulsion Vanguard",
    "story": "Smith's accidental clipping of his long screw proved that short, multi-bladed propellers deliver maximum hydraulic thrust.",
    "mechanics": "Steam engine torque rotates an Archimedean helical thread mounted along the vessel's sternpost, slicing through water to generate forward momentum.",
    "legacy": "Demonstrated on the experimental steamship 'SS Archimedes', convincing Isambard Kingdom Brunel to use screw propulsion on the SS Great Britain.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_maritime_ha_mar_04.glb",
    "videoUrl": "/videos/reel_maritime_ha_mar_04.mp4",
    "tags": [
      "Smith",
      "Archimedean Screw",
      "Propeller",
      "Maritime",
      "SS Archimedes"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Archimedean Screw Steamer fundamentally altered maritime propulsion & navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MAR-05",
    "title": "Hydrodynamic Model Towing Tank",
    "officialTitle": "Froude Scale Model Resistance Towing Basin and Dynamometer",
    "inventor": "William Froude",
    "creator": "William Froude",
    "patent": "Pat. #1871-GB01 \u2022 1871",
    "patentNumber": "GB1871001A",
    "patentDate": "April 12, 1871",
    "year": "1871",
    "location": "Torquay, Devon, UK",
    "category": "MARITIME",
    "categoryLabel": "Maritime Propulsion & Navigation",
    "badge": "Admiralty Hydrodynamic Basin",
    "image": "/images/hero_showcase_hq.jpg",
    "thumbnail": "/images/hero_showcase_hq.jpg",
    "desc": "Naval architect William Froude ended trial-and-error ship design by constructing the world's first scientific ship model towing tank. Formulating the dimensionless Froude Number (Fr = v / sqrt(gL)), he demonstrated that wave-making resistance of full-sized ocean liners could be accurately predicted from paraffin wax hull models.",
    "description": "Naval architect William Froude ended trial-and-error ship design by constructing the world's first scientific ship model towing tank. Formulating the dimensionless Froude Number (Fr = v / sqrt(gL)), he demonstrated that wave-making resistance of full-sized ocean liners could be accurately predicted from paraffin wax hull models.",
    "polyCount": "155,000 Quads",
    "medium": "Paraffin Wax Test Hull Models \u2022 Spring Dynamometer Pen Recorder \u2022 250-Foot Water Basin",
    "resonance": "Froude Hydrodynamic Scaling Law",
    "era": "1871 \u2014 Scientific Naval Architecture",
    "story": "The British Admiralty built Froude a test tank at Torquay where miniature models were towed along a calm water flume to measure drag forces.",
    "mechanics": "Carriages running on precision rails tow scale wax hulls while sensitive spring dynamometers trace friction and wave drag curves on revolving paper drums.",
    "legacy": "Standardized naval architecture and hydrodynamic hull engineering for commercial shipping and naval vessels worldwide.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_maritime_ha_mar_05.glb",
    "videoUrl": "/videos/reel_maritime_ha_mar_05.mp4",
    "tags": [
      "Froude",
      "Towing Tank",
      "Hydrodynamics",
      "Naval Architecture",
      "Fluid Resistance"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Hydrodynamic Model Towing Tank fundamentally altered maritime propulsion & navigation, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-105",
    "title": "Bamboo Filament Incandescent Lamp",
    "officialTitle": "Edison High-Vacuum Carbonized Bamboo Filament Electric Lamp",
    "inventor": "Thomas Alva Edison",
    "creator": "Thomas Alva Edison",
    "patent": "Pat. #223,898 \u2022 1880",
    "patentNumber": "US223898A",
    "patentDate": "January 27, 1880",
    "year": "1879",
    "location": "Menlo Park, NJ",
    "category": "LIGHTING",
    "categoryLabel": "Incandescent & Arc Illumination",
    "badge": "Menlo Park Illumination Vault",
    "image": "/images/character_edison.jpg",
    "thumbnail": "/images/character_edison.jpg",
    "desc": "On New Year's Eve 1879, Thomas Edison revealed the first commercially viable incandescent electric lamp at his Menlo Park laboratory. By sealing a high-resistance carbonized Japanese bamboo filament inside a mercury-evacuated glass globe, his bulb burned continuously for over 1,200 hours.",
    "description": "On New Year's Eve 1879, Thomas Edison revealed the first commercially viable incandescent electric lamp at his Menlo Park laboratory. By sealing a high-resistance carbonized Japanese bamboo filament inside a mercury-evacuated glass globe, his bulb burned continuously for over 1,200 hours.",
    "polyCount": "145,000 Quads",
    "medium": "Blown Lead Glass Globe \u2022 Carbonized Japanese Bamboo Filament \u2022 Platinum Lead Wires",
    "resonance": "High-Resistance High-Vacuum Incandescence",
    "era": "1879 \u2014 Electric Lighting Revolution",
    "story": "While competitors tested thick low-resistance carbons requiring heavy copper cables, Edison proved high-resistance thin filaments made city power distribution economical.",
    "mechanics": "Electric current heats a carbonized bamboo fiber to white incandescence; having no oxygen inside the Sprengel mercury-pump vacuum bulb, the carbon glows without combusting.",
    "legacy": "Banished darkness from modern human civilization, extending work, study, and social life into nighttime hours.",
    "modelType": "edison",
    "model3dUrl": "/models/cad_lighting_ha_105.glb",
    "videoUrl": "/videos/reel_lighting_ha_105.mp4",
    "tags": [
      "Edison",
      "Lightbulb",
      "Incandescent",
      "Bamboo Filament",
      "Electric Light"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Bamboo Filament Incandescent Lamp fundamentally altered incandescent & arc illumination, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-LGT-02",
    "title": "High-Current Carbon Arc Lamp",
    "officialTitle": "Davy Continuous Voltaic Electric Carbon Point Arc Light",
    "inventor": "Sir Humphry Davy",
    "creator": "Sir Humphry Davy",
    "patent": "Pat. #1808-GB01 \u2022 1808",
    "patentNumber": "GB1808001A",
    "patentDate": "November 16, 1808",
    "year": "1808",
    "location": "London, UK",
    "category": "LIGHTING",
    "categoryLabel": "Incandescent & Arc Illumination",
    "badge": "Royal Institution Vault",
    "image": "/images/raw_card_7_tesla.jpg",
    "thumbnail": "/images/raw_card_7_tesla.jpg",
    "desc": "At the Royal Institution in 1808, Sir Humphry Davy connected a massive 2,000-cell chemical voltaic battery to two charcoal rods. Touching them together and drawing them apart struck an intense four-inch luminous arch of blinding electric light\u2014the world's first artificial electric arc.",
    "description": "At the Royal Institution in 1808, Sir Humphry Davy connected a massive 2,000-cell chemical voltaic battery to two charcoal rods. Touching them together and drawing them apart struck an intense four-inch luminous arch of blinding electric light\u2014the world's first artificial electric arc.",
    "polyCount": "138,000 Quads",
    "medium": "Turned Charcoal Electrodes \u2022 2,000-Cell Voltaic Battery \u2022 Brass Adjusting Tongs",
    "resonance": "4,000 Kelvin Plasma Arc Discharge",
    "era": "1808 \u2014 Dawn of Electric Light",
    "story": "Davy's brilliant demonstration astonished London audiences, producing light bright as the sun from chemical electricity.",
    "mechanics": "High electric current ionizes air between two carbon electrode tips, creating a self-sustaining electric plasma column that glows at blinding white-hot temperatures.",
    "legacy": "Led to street arc lighting systems and illuminated 19th-century lighthouses, theaters, and grand boulevards.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_lighting_ha_lgt_02.glb",
    "videoUrl": "/videos/reel_lighting_ha_lgt_02.mp4",
    "tags": [
      "Davy",
      "Arc Lamp",
      "Voltaic Arc",
      "Carbon Electrodes",
      "Plasma Light"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The High-Current Carbon Arc Lamp fundamentally altered incandescent & arc illumination, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-LGT-03",
    "title": "Parchmentized Thread Glow Lamp",
    "officialTitle": "Swan Evacuated Carbonized Cotton Thread Incandescent Lamp",
    "inventor": "Sir Joseph Wilson Swan",
    "creator": "Sir Joseph Wilson Swan",
    "patent": "Pat. #4,933 \u2022 1880",
    "patentNumber": "GB4933A",
    "patentDate": "November 27, 1880",
    "year": "1878",
    "location": "Newcastle upon Tyne, UK",
    "category": "LIGHTING",
    "categoryLabel": "Incandescent & Arc Illumination",
    "badge": "Swan Electric Lighting Archive",
    "image": "/images/character_fleming.jpg",
    "thumbnail": "/images/character_fleming.jpg",
    "desc": "English chemist Sir Joseph Swan demonstrated an evacuated carbon filament incandescent lamp in Newcastle months before Edison. Swan treated cotton embroidery thread with sulfuric acid to 'parchmentize' the cellulose before carbonizing, eliminating filament breakage.",
    "description": "English chemist Sir Joseph Swan demonstrated an evacuated carbon filament incandescent lamp in Newcastle months before Edison. Swan treated cotton embroidery thread with sulfuric acid to 'parchmentize' the cellulose before carbonizing, eliminating filament breakage.",
    "polyCount": "140,000 Quads",
    "medium": "Blown Clear Glass Envelope \u2022 Parchmentized Carbon Thread \u2022 Copper Wire Mounts",
    "resonance": "Parchmentized Cellulose Glow",
    "era": "1878 \u2014 British Electric Light Dawn",
    "story": "In 1881 Swan installed over a thousand of his glow lamps throughout London's Savoy Theatre, the world's first public building lit entirely by electricity.",
    "mechanics": "Electric current through uniform carbonized cellulose fibers produces warm, steady incandescent radiation in a vacuum without open flames or poisonous gas fumes.",
    "legacy": "Swan and Edison merged their UK operations in 1883 to form the renowned 'Ediswan' lighting enterprise.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_lighting_ha_lgt_03.glb",
    "videoUrl": "/videos/reel_lighting_ha_lgt_03.mp4",
    "tags": [
      "Swan",
      "Incandescent",
      "Ediswan",
      "Parchmentized Carbon",
      "Lighting"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Parchmentized Thread Glow Lamp fundamentally altered incandescent & arc illumination, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-LGT-04",
    "title": "Self-Regulating Electric Candle",
    "officialTitle": "Yablochkov Parallel Carbon Arc Candle with Kaolin Insulator",
    "inventor": "Pavel Yablochkov",
    "creator": "Pavel Yablochkov",
    "patent": "Pat. #112,024 \u2022 1876",
    "patentNumber": "FR112024A",
    "patentDate": "March 23, 1876",
    "year": "1876",
    "location": "Paris, France",
    "category": "LIGHTING",
    "categoryLabel": "Incandescent & Arc Illumination",
    "badge": "Avenue de l'Op\u00e9ra Illumination",
    "image": "/images/card4_test.png",
    "thumbnail": "/images/card4_test.png",
    "desc": "Russian engineer Pavel Yablochkov eliminated complex clockwork mechanisms used to keep arc lamp carbons together by placing two carbon rods side-by-side separated by an insulating layer of plaster of Paris (kaolin). As the carbons burned down like a wax candle, the arc stayed at the tip.",
    "description": "Russian engineer Pavel Yablochkov eliminated complex clockwork mechanisms used to keep arc lamp carbons together by placing two carbon rods side-by-side separated by an insulating layer of plaster of Paris (kaolin). As the carbons burned down like a wax candle, the arc stayed at the tip.",
    "polyCount": "150,000 Quads",
    "medium": "Parallel Carbon Rods \u2022 Kaolin (Gypsum) Separator \u2022 Opaline Glass Globe",
    "resonance": "Self-Regulating Parallel Burn Arc",
    "era": "1876 \u2014 Paris Streetlight Epoch",
    "story": "In 1878 Paris illuminated the Avenue de l'Op\u00e9ra and Place du Th\u00e9\u00e2tre Fran\u00e7ais with Yablochkov candles, turning Paris into the 'City of Light'.",
    "mechanics": "Alternating current powers two parallel carbons equally; the arc burns across the tips while the kaolin clay insulator between them vaporizes at the exact same rate.",
    "legacy": "Proved that centralized electrical illumination was practical for grand boulevards, department stores, and public plazas.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_lighting_ha_lgt_04.glb",
    "videoUrl": "/videos/reel_lighting_ha_lgt_04.mp4",
    "tags": [
      "Yablochkov",
      "Electric Candle",
      "Arc Light",
      "City of Light",
      "Streetlighting"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Self-Regulating Electric Candle fundamentally altered incandescent & arc illumination, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-LGT-05",
    "title": "Ductile Tungsten Filament Bulb",
    "officialTitle": "Coolidge Ductile Sintered Drawn Tungsten Filament Vacuum Lamp",
    "inventor": "William David Coolidge",
    "creator": "William David Coolidge",
    "patent": "Pat. #1,082,933 \u2022 1913",
    "patentNumber": "US1082933A",
    "patentDate": "December 30, 1913",
    "year": "1910",
    "location": "Schenectady, NY",
    "category": "LIGHTING",
    "categoryLabel": "Incandescent & Arc Illumination",
    "badge": "GE Research Laboratory Vault",
    "image": "/images/raw_card_5_edison.jpg",
    "thumbnail": "/images/raw_card_5_edison.jpg",
    "desc": "Tungsten had the highest melting point of any metal (3,422\u00b0C) but was impossibly brittle and unworkable. At the General Electric research laboratory, William Coolidge developed a swaging and hot-drawing process that turned powdered tungsten into pliable, ductile wire thinner than human hair.",
    "description": "Tungsten had the highest melting point of any metal (3,422\u00b0C) but was impossibly brittle and unworkable. At the General Electric research laboratory, William Coolidge developed a swaging and hot-drawing process that turned powdered tungsten into pliable, ductile wire thinner than human hair.",
    "polyCount": "165,000 Quads",
    "medium": "Drawn Tungsten Wire Filament \u2022 Argon-Nitrogen Gas Filled Bulb \u2022 Brass Screw Base",
    "resonance": "3,400K High-Temperature Incandescence",
    "era": "1910 \u2014 Tungsten Modernity",
    "story": "Carbon filaments were fragile and blackened bulbs over time. Coolidge's ductile tungsten produced three times more light per watt without shattering from vibrations.",
    "mechanics": "Ductile tungsten wire coiled tightly into double-helix coils withstands extreme temperatures, yielding warm, luminous white light with minimal thermal dissipation.",
    "legacy": "Remains the universal filament material used in incandescent, halogen, and high-intensity illumination across the world.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_lighting_ha_lgt_05.glb",
    "videoUrl": "/videos/reel_lighting_ha_lgt_05.mp4",
    "tags": [
      "Coolidge",
      "Tungsten",
      "General Electric",
      "Ductile Wire",
      "Incandescent"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Ductile Tungsten Filament Bulb fundamentally altered incandescent & arc illumination, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-116",
    "title": "Pneumatic Steel Converter",
    "officialTitle": "Bessemer Tilting Blast Converter for Decarburizing Molten Iron",
    "inventor": "Sir Henry Bessemer",
    "creator": "Sir Henry Bessemer",
    "patent": "Pat. #16,082 \u2022 1856",
    "patentNumber": "US16082A",
    "patentDate": "November 11, 1856",
    "year": "1856",
    "location": "Sheffield, UK",
    "category": "METALLURGY",
    "categoryLabel": "Metallurgy & Blast Furnace Tech",
    "badge": "Kelham Island Industrial Archive",
    "image": "/images/cards_row.jpg",
    "thumbnail": "/images/cards_row.jpg",
    "desc": "Henry Bessemer invented the pneumatic converter, transforming steel from an expensive luxury metal made by the pound into an affordable structural material produced by the ton. Blasting cold air through molten pig iron burned out excess carbon through spontaneous exothermic reaction without using extra fuel.",
    "description": "Henry Bessemer invented the pneumatic converter, transforming steel from an expensive luxury metal made by the pound into an affordable structural material produced by the ton. Blasting cold air through molten pig iron burned out excess carbon through spontaneous exothermic reaction without using extra fuel.",
    "polyCount": "215,000 Quads",
    "medium": "Riveted Boiler Plate Vessel \u2022 Refractory Ganister Lining \u2022 Hydraulic Tilting Rack",
    "resonance": "Exothermic Air-Blast Decarburization",
    "era": "1856 \u2014 Mass Steel Age Dawn",
    "story": "Bessemer sought stronger cannon barrels during the Crimean War, discovering that air bubbles blown through molten iron generated intense heat.",
    "mechanics": "Air injected through bottom tuy\u00e8res oxidizes silicon and carbon in liquid pig iron; the burning carbon creates its own violent heat storm, producing 30 tons of steel in twenty minutes.",
    "legacy": "Enabled the mass construction of world railways, steel-framed skyscrapers, ocean liners, and modern suspension bridges.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_metallurgy_ha_116.glb",
    "videoUrl": "/videos/reel_metallurgy_ha_116.mp4",
    "tags": [
      "Bessemer",
      "Steel Converter",
      "Metallurgy",
      "Blast Furnace",
      "Industrial Steel"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Pneumatic Steel Converter fundamentally altered metallurgy & blast furnace tech, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MET-02",
    "title": "Coke-Smelted Blast Furnace",
    "officialTitle": "Darby Coal Coke-Fired Continuous Smelting Iron Blast Furnace",
    "inventor": "Abraham Darby I",
    "creator": "Abraham Darby I",
    "patent": "Pat. #1709-GB01 \u2022 1709",
    "patentNumber": "GB1709001A",
    "patentDate": "January 4, 1709",
    "year": "1709",
    "location": "Coalbrookdale, Shropshire, UK",
    "category": "METALLURGY",
    "categoryLabel": "Metallurgy & Blast Furnace Tech",
    "badge": "Ironbridge Gorge UNESCO Site",
    "image": "/images/thumb_steam_engine.jpg",
    "thumbnail": "/images/thumb_steam_engine.jpg",
    "desc": "Abraham Darby I leased an old furnace at Coalbrookdale, substituting baked coal (coke) for scarce wood charcoal to smelt iron ore. This technological breakthrough freed ironmaking from depleting forests and allowed blast furnaces to burn vastly hotter, producing thin-walled cast iron kettles and boilers.",
    "description": "Abraham Darby I leased an old furnace at Coalbrookdale, substituting baked coal (coke) for scarce wood charcoal to smelt iron ore. This technological breakthrough freed ironmaking from depleting forests and allowed blast furnaces to burn vastly hotter, producing thin-walled cast iron kettles and boilers.",
    "polyCount": "180,000 Quads",
    "medium": "Local Sandstone Masonry Stack \u2022 Waterwheel-Driven Bellows \u2022 Refractory Hearth",
    "resonance": "Continuous Coke Carbon Reduction",
    "era": "1709 \u2014 Ironbridge Genesis",
    "story": "Britain's timber shortage had crippled iron production. Darby discovered that coking coal drove out sulfur impurities, preventing iron from becoming brittle.",
    "mechanics": "Heaped layers of iron ore, limestone flux, and coke are blasted with air from waterwheel-driven bellows; carbon monoxide gas strips oxygen from iron ore, tapping liquid iron.",
    "legacy": "Sparked the Industrial Revolution and culminated in the world's first iron bridge spanning the Severn Gorge.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_metallurgy_ha_met_02.glb",
    "videoUrl": "/videos/reel_metallurgy_ha_met_02.mp4",
    "tags": [
      "Darby",
      "Coke Smelting",
      "Blast Furnace",
      "Coalbrookdale",
      "Iron Age"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Coke-Smelted Blast Furnace fundamentally altered metallurgy & blast furnace tech, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MET-03",
    "title": "Pneumatic Air-Blast Converter",
    "officialTitle": "Kelly Air-Boiling Pneumatic Decarburizing Refining Vessel",
    "inventor": "William Kelly",
    "creator": "William Kelly",
    "patent": "Pat. #17,628 \u2022 1857",
    "patentNumber": "US17628A",
    "patentDate": "June 23, 1857",
    "year": "1847",
    "location": "Eddyville, KY",
    "category": "METALLURGY",
    "categoryLabel": "Metallurgy & Blast Furnace Tech",
    "badge": "Suhl Iron Works Ledger",
    "image": "/images/raw_card_7_tesla.jpg",
    "thumbnail": "/images/raw_card_7_tesla.jpg",
    "desc": "Kentucky ironmaster William Kelly noticed that a blast of cold air hitting molten iron inside a finery furnace made the iron burn whiter and hotter instead of chilling it. Calling his process 'air-boiling', he demonstrated air alone could burn away carbon impurities years before Bessemer's patent.",
    "description": "Kentucky ironmaster William Kelly noticed that a blast of cold air hitting molten iron inside a finery furnace made the iron burn whiter and hotter instead of chilling it. Calling his process 'air-boiling', he demonstrated air alone could burn away carbon impurities years before Bessemer's patent.",
    "polyCount": "165,000 Quads",
    "medium": "Clay-Lined Cast Iron Cupola \u2022 Steam Blast Nozzle \u2022 Ladle Carriage",
    "resonance": "Air-Boiling Exothermic Reaction",
    "era": "1847 \u2014 American Metallurgy",
    "story": "Local customers thought Kelly had lost his mind trying to heat molten iron with cold air until he showed them tough malleable wrought steel.",
    "mechanics": "Cold air forced into liquid pig iron oxidizes carbon; the exothermic energy of the combusting carbon heats the bath to over 1,600\u00b0C without wood or coal.",
    "legacy": "The US Patent Office ruled Kelly had priority over Bessemer in 1857, granting him foundational American rights to pneumatic steelmaking.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_metallurgy_ha_met_03.glb",
    "videoUrl": "/videos/reel_metallurgy_ha_met_03.mp4",
    "tags": [
      "Kelly",
      "Pneumatic Converter",
      "Air Boiling",
      "Steelmaking",
      "American Steel"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Pneumatic Air-Blast Converter fundamentally altered metallurgy & blast furnace tech, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MET-04",
    "title": "Regenerative Gas Open-Hearth Furnace",
    "officialTitle": "Siemens-Martin Thermal Regenerative Chamber Open-Hearth Steel Furnace",
    "inventor": "Sir Carl Wilhelm Siemens",
    "creator": "Sir Carl Wilhelm Siemens",
    "patent": "Pat. #41,788 \u2022 1864",
    "patentNumber": "US41788A",
    "patentDate": "March 1, 1864",
    "year": "1864",
    "location": "Birmingham, UK",
    "category": "METALLURGY",
    "categoryLabel": "Metallurgy & Blast Furnace Tech",
    "badge": "Open-Hearth Steel Archive",
    "image": "/images/thumb_steam_hq.jpg",
    "thumbnail": "/images/thumb_steam_hq.jpg",
    "desc": "Carl Wilhelm Siemens designed the regenerative gas furnace, capturing burning exhaust chimney gases in brick checkerwork chambers to preheat incoming fuel gas and air. Applied to open-hearth steelmaking by Pierre-\u00c9mile Martin, it generated intense temperatures of 1,700\u00b0C, melting scrap steel with extraordinary chemical purity.",
    "description": "Carl Wilhelm Siemens designed the regenerative gas furnace, capturing burning exhaust chimney gases in brick checkerwork chambers to preheat incoming fuel gas and air. Applied to open-hearth steelmaking by Pierre-\u00c9mile Martin, it generated intense temperatures of 1,700\u00b0C, melting scrap steel with extraordinary chemical purity.",
    "polyCount": "195,000 Quads",
    "medium": "Firebrick Checkerwork Chambers \u2022 Reversing Flue Valves \u2022 Shallow Refractory Hearth",
    "resonance": "Thermal Regenerative Gas Pre-Heating",
    "era": "1864 \u2014 Precision Alloy Era",
    "story": "The Bessemer process was too fast for chemical analysis; Siemens' open-hearth took eight hours per heat, allowing metallurgists to test samples and add alloys precisely.",
    "mechanics": "Hot combustion exhaust passes through brick checkerwork, heating it; reversing valves divert incoming cold air through the glowing bricks, recycling waste heat.",
    "legacy": "Produced over eighty percent of all global steel throughout the first half of the twentieth century.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_metallurgy_ha_met_04.glb",
    "videoUrl": "/videos/reel_metallurgy_ha_met_04.mp4",
    "tags": [
      "Siemens",
      "Open Hearth",
      "Regenerative Furnace",
      "Steel Alloys",
      "Metallurgy"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Regenerative Gas Open-Hearth Furnace fundamentally altered metallurgy & blast furnace tech, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MET-05",
    "title": "Electrolytic Aluminum Reduction Cell",
    "officialTitle": "Hall-H\u00e9roult Molten Cryolite Electrolytic Aluminum Reduction Bath",
    "inventor": "Charles Martin Hall & Paul H\u00e9roult",
    "creator": "Charles Martin Hall & Paul H\u00e9roult",
    "patent": "Pat. #400,665 \u2022 1889",
    "patentNumber": "US400665A",
    "patentDate": "April 2, 1889",
    "year": "1886",
    "location": "Oberlin, OH",
    "category": "METALLURGY",
    "categoryLabel": "Metallurgy & Blast Furnace Tech",
    "badge": "Alcoa Historical Vault",
    "image": "/images/thumb_3d_cube.jpg",
    "thumbnail": "/images/thumb_3d_cube.jpg",
    "desc": "In 1886, twenty-two-year-old American Charles Martin Hall and French engineer Paul H\u00e9roult independently invented the modern electrolytic process for extracting pure aluminum. By dissolving alumina powder into molten synthetic cryolite at 960\u00b0C and passing electric DC current, they transformed aluminum from a precious metal costlier than silver into an everyday industrial commodity.",
    "description": "In 1886, twenty-two-year-old American Charles Martin Hall and French engineer Paul H\u00e9roult independently invented the modern electrolytic process for extracting pure aluminum. By dissolving alumina powder into molten synthetic cryolite at 960\u00b0C and passing electric DC current, they transformed aluminum from a precious metal costlier than silver into an everyday industrial commodity.",
    "polyCount": "175,000 Quads",
    "medium": "Carbon-Lined Steel Bath \u2022 Suspended Carbon Anodes \u2022 Molten Cryolite Electrolyte",
    "resonance": "Electrolytic Dissociation of Alumina",
    "era": "1886 \u2014 Light Metal Age",
    "story": "The capstone of the Washington Monument was cast in aluminum in 1884 as a royal luxury. Hall synthesized cryolite in his woodshed with homemade batteries.",
    "mechanics": "Direct current passes from carbon anodes through molten cryolite bath to the carbon cathode lining, splitting aluminum oxide into oxygen gas and molten pure aluminum.",
    "legacy": "Created the global aluminum industry, enabling modern aerospace airframes, high-voltage power lines, and lightweight transport.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_metallurgy_ha_met_05.glb",
    "videoUrl": "/videos/reel_metallurgy_ha_met_05.mp4",
    "tags": [
      "Hall-H\u00e9roult",
      "Aluminum",
      "Electrolysis",
      "Cryolite",
      "Lightweight Metal"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Electrolytic Aluminum Reduction Cell fundamentally altered metallurgy & blast furnace tech, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-117",
    "title": "Locomotion No. 1 Locomotive",
    "officialTitle": "Stephenson Flanged-Wheel Heavy Freight and Passenger Steam Locomotive",
    "inventor": "George Stephenson",
    "creator": "George Stephenson",
    "patent": "Pat. #1814-GB01 \u2022 1814",
    "patentNumber": "GB1814001A",
    "patentDate": "July 27, 1814",
    "year": "1825",
    "location": "Darlington, UK",
    "category": "TRANSIT",
    "categoryLabel": "Rail Kinematics & Locomotives",
    "badge": "National Railway Museum York",
    "image": "/images/hero_stage_bg.jpg",
    "thumbnail": "/images/hero_stage_bg.jpg",
    "desc": "On September 27, 1825, George Stephenson drove 'Locomotion No. 1' along the Stockton and Darlington Railway, inaugurating the world's first public railway to use steam locomotives for passengers and freight. Coupled directly to four flanged cast wheels with side rods, it hauled 450 passengers at 15 miles per hour.",
    "description": "On September 27, 1825, George Stephenson drove 'Locomotion No. 1' along the Stockton and Darlington Railway, inaugurating the world's first public railway to use steam locomotives for passengers and freight. Coupled directly to four flanged cast wheels with side rods, it hauled 450 passengers at 15 miles per hour.",
    "polyCount": "178,000 Quads",
    "medium": "Wrought Iron Center Flue Boiler \u2022 Vertical Steam Cylinders \u2022 Outside Connecting Side Rods",
    "resonance": "Direct Coupled Side-Rod Wheel Kinematics",
    "era": "1825 \u2014 Public Railway Epoch",
    "story": "Stephenson understood that cast-iron edge rails and smooth flanged iron wheels reduced rolling friction by ninety percent compared to rutted mud turnpikes.",
    "mechanics": "Two vertical cylinders set into the boiler drive crossheads connected via external parallel rods to wheel pins, synchronizing all four driving wheels.",
    "legacy": "Triggered the global railway boom that interconnected continents and created modern transit networks.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_transit_ha_117.glb",
    "videoUrl": "/videos/reel_transit_ha_117.mp4",
    "tags": [
      "Stephenson",
      "Locomotion No 1",
      "Railway",
      "Steam Transit",
      "Flanged Wheels"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Locomotion No. 1 Locomotive fundamentally altered rail kinematics & locomotives, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TRN-02",
    "title": "Triple-Valve Train Air Brake",
    "officialTitle": "Westinghouse Automatic Fail-Safe Compressed Air Brake System",
    "inventor": "George Westinghouse",
    "creator": "George Westinghouse",
    "patent": "Pat. #124,404 \u2022 1872",
    "patentNumber": "US124404A",
    "patentDate": "March 5, 1872",
    "year": "1872",
    "location": "Pittsburgh, PA",
    "category": "TRANSIT",
    "categoryLabel": "Rail Kinematics & Locomotives",
    "badge": "Westinghouse Air Brake Archive",
    "image": "/images/card2_test.png",
    "thumbnail": "/images/card2_test.png",
    "desc": "Before George Westinghouse, stopping a train required brakemen to run across rolling car roofs in blizzards to turn manual handbrakes, leading to frequent catastrophic collisions. Westinghouse's automatic triple-valve air brake pressurized a continuous trainline; if a hose broke or train parted, the brakes applied automatically.",
    "description": "Before George Westinghouse, stopping a train required brakemen to run across rolling car roofs in blizzards to turn manual handbrakes, leading to frequent catastrophic collisions. Westinghouse's automatic triple-valve air brake pressurized a continuous trainline; if a hose broke or train parted, the brakes applied automatically.",
    "polyCount": "160,000 Quads",
    "medium": "Cast Iron Triple Valve Body \u2022 Auxiliary Air Reservoir \u2022 Cast Steel Brake Shoes",
    "resonance": "Pneumatic Fail-Safe Pressure Differential",
    "era": "1872 \u2014 Railway Safety Revolution",
    "story": "Witnessing a fatal collision between two trains unable to stop in time, Westinghouse applied compressed air stored under each car.",
    "mechanics": "A continuous trainline maintains air pressure; when the engineer vents pipe air (or a train breaks in two), the triple valve shifts, dumping auxiliary air into the brake cylinder.",
    "legacy": "Made high-speed, long-distance passenger and freight rail transportation safe worldwide.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_transit_ha_trn_02.glb",
    "videoUrl": "/videos/reel_transit_ha_trn_02.mp4",
    "tags": [
      "Westinghouse",
      "Air Brake",
      "Triple Valve",
      "Railway Safety",
      "Pneumatics"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Triple-Valve Train Air Brake fundamentally altered rail kinematics & locomotives, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TRN-03",
    "title": "Automatic Knuckle Railcar Coupler",
    "officialTitle": "Janney Automatic Master Car Builders Knuckle Coupler",
    "inventor": "Eli Hamilton Janney",
    "creator": "Eli Hamilton Janney",
    "patent": "Pat. #138,405 \u2022 1873",
    "patentNumber": "US138405A",
    "patentDate": "April 29, 1873",
    "year": "1873",
    "location": "Alexandria, VA",
    "category": "TRANSIT",
    "categoryLabel": "Rail Kinematics & Locomotives",
    "badge": "Smithsonian Transportation Vault",
    "image": "/images/bg_gear_large.png",
    "thumbnail": "/images/bg_gear_large.png",
    "desc": "Eli Janney, a Confederate veteran and dry goods clerk, whittled a wooden model of two clasping hands with his pocketknife to invent the automatic knuckle coupler. It eliminated deadly 'link-and-pin' couplers that crushed thousands of rail workers' hands every year, automatically locking on contact.",
    "description": "Eli Janney, a Confederate veteran and dry goods clerk, whittled a wooden model of two clasping hands with his pocketknife to invent the automatic knuckle coupler. It eliminated deadly 'link-and-pin' couplers that crushed thousands of rail workers' hands every year, automatically locking on contact.",
    "polyCount": "170,000 Quads",
    "medium": "Cast Manganese Steel Knuckle \u2022 Gravity Locking Pin \u2022 Drawbar Spring Pocket",
    "resonance": "Self-Locking Clasping Hand Geometry",
    "era": "1873 \u2014 Labor Safety Vanguard",
    "story": "Coupling train cars previously required a switchman to step between moving railcars to drop an iron pin into a link, costing thousands of fingers and lives annually.",
    "mechanics": "When two cars bump together, rotating knuckles pivot past each other; internal heavy steel locking pins drop under gravity, locking the knuckles securely shut.",
    "legacy": "Mandated by the 1893 US Railway Safety Appliance Act, saving thousands of rail workers' lives.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_transit_ha_trn_03.glb",
    "videoUrl": "/videos/reel_transit_ha_trn_03.mp4",
    "tags": [
      "Janney",
      "Knuckle Coupler",
      "Railcar",
      "Transit Safety",
      "Automatic Coupling"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Automatic Knuckle Railcar Coupler fundamentally altered rail kinematics & locomotives, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TRN-04",
    "title": "Multiple-Unit Electric Traction",
    "officialTitle": "Sprague Multiple-Unit Train Control and Wheelbarrow Traction Motor",
    "inventor": "Frank Julian Sprague",
    "creator": "Frank Julian Sprague",
    "patent": "Pat. #660,065 \u2022 1900",
    "patentNumber": "US660065A",
    "patentDate": "October 16, 1900",
    "year": "1897",
    "location": "Richmond, VA",
    "category": "TRANSIT",
    "categoryLabel": "Rail Kinematics & Locomotives",
    "badge": "Richmond Electric Railway Legacy",
    "image": "/images/character_tesla.jpg",
    "thumbnail": "/images/character_tesla.jpg",
    "desc": "Naval engineer Frank Sprague pioneered the electric streetcar in Richmond, Virginia, and invented Multiple-Unit (MU) train control. Instead of relying on a single locomotive pulling dead coaches, Sprague placed electric motors under every car, synchronizing them to act as a unified train from a single master controller.",
    "description": "Naval engineer Frank Sprague pioneered the electric streetcar in Richmond, Virginia, and invented Multiple-Unit (MU) train control. Instead of relying on a single locomotive pulling dead coaches, Sprague placed electric motors under every car, synchronizing them to act as a unified train from a single master controller.",
    "polyCount": "185,000 Quads",
    "medium": "Spring-Suspended Nose Traction Motors \u2022 Relay Master Controller \u2022 Overhead Trolley Pole",
    "resonance": "Distributed Synchronous Traction Motor Control",
    "era": "1897 \u2014 Urban Transit Modernity",
    "story": "Sprague overcame steep 10% Richmond hills with spring-mounted 'wheelbarrow' traction motor gearing that endured violent rail shocks.",
    "mechanics": "A low-voltage control wire running the train length signals relay switches on every motorized car, operating traction motors and brakes in perfect harmony.",
    "legacy": "The foundational engineering principle powering every modern subway, metro system, and high-speed bullet train on Earth.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_transit_ha_trn_04.glb",
    "videoUrl": "/videos/reel_transit_ha_trn_04.mp4",
    "tags": [
      "Sprague",
      "Multiple Unit",
      "Electric Transit",
      "Subway",
      "Traction Motor"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Multiple-Unit Electric Traction fundamentally altered rail kinematics & locomotives, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-TRN-05",
    "title": "American 4-4-0 Steam Passenger Locomotive",
    "officialTitle": "Baldwin American Type 4-4-0 Flexible Beam Passenger Locomotive",
    "inventor": "Matthias W. Baldwin",
    "creator": "Matthias W. Baldwin",
    "patent": "Pat. #2,752 \u2022 1842",
    "patentNumber": "US2752A",
    "patentDate": "August 25, 1842",
    "year": "1842",
    "location": "Philadelphia, PA",
    "category": "TRANSIT",
    "categoryLabel": "Rail Kinematics & Locomotives",
    "badge": "Baldwin Locomotive Works Archive",
    "image": "/images/hero_exhibit_stage.jpg",
    "thumbnail": "/images/hero_exhibit_stage.jpg",
    "desc": "The 'American' 4-4-0 was the quintessential locomotive that settled North America and met at Promontory Summit for the Golden Spike. Featuring a front four-wheel swiveling lead truck and four coupled driving wheels, it negotiated rough, unballasted prairie tracks without derailing.",
    "description": "The 'American' 4-4-0 was the quintessential locomotive that settled North America and met at Promontory Summit for the Golden Spike. Featuring a front four-wheel swiveling lead truck and four coupled driving wheels, it negotiated rough, unballasted prairie tracks without derailing.",
    "polyCount": "190,000 Quads",
    "medium": "Wrought Iron Locomotive Frame \u2022 Brass Fluted Domes \u2022 Cast Steel Equalizing Beams",
    "resonance": "Three-Point Equalized Suspension Kinematics",
    "era": "1842 \u2014 Transcontinental Era",
    "story": "European rigid locomotives derailed on uneven American tracks. Baldwin introduced flexible beam trucks and equalizing levers to absorb rail bumps.",
    "mechanics": "A swiveling front bogie guides the locomotive around sharp curve radiuses while equalizing beam levers distribute axle loads evenly across rough roadbeds.",
    "legacy": "Represented over eighty percent of all locomotives built in the United States during the 19th-century railroad expansion.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_transit_ha_trn_05.glb",
    "videoUrl": "/videos/reel_transit_ha_trn_05.mp4",
    "tags": [
      "Baldwin",
      "4-4-0 American",
      "Locomotive",
      "Golden Spike",
      "Transcontinental"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The American 4-4-0 Steam Passenger Locomotive fundamentally altered rail kinematics & locomotives, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-118",
    "title": "Mononeural Acoustic Stethoscope",
    "officialTitle": "Laennec Turned Wood Cylindrical Chest Auscultation Instrument",
    "inventor": "Ren\u00e9 Laennec",
    "creator": "Ren\u00e9 Laennec",
    "patent": "Pat. #1819-FR01 \u2022 1819",
    "patentNumber": "FR1819001A",
    "patentDate": "August 15, 1819",
    "year": "1816",
    "location": "Paris, France",
    "category": "MEDICAL",
    "categoryLabel": "Surgical & Diagnostic Instruments",
    "badge": "Mus\u00e9e d'Histoire de la M\u00e9decine",
    "image": "/images/character_fleming_stage.png",
    "thumbnail": "/images/character_fleming_stage.png",
    "desc": "French physician Ren\u00e9 Laennec invented the stethoscope at the Necker Hospital in Paris. Embarrassed to place his ear directly against a young woman's chest, he rolled a quire of paper into a tight cylinder, discovering acoustic bone conduction amplified cardiac and pulmonary sounds with pristine acoustic clarity.",
    "description": "French physician Ren\u00e9 Laennec invented the stethoscope at the Necker Hospital in Paris. Embarrassed to place his ear directly against a young woman's chest, he rolled a quire of paper into a tight cylinder, discovering acoustic bone conduction amplified cardiac and pulmonary sounds with pristine acoustic clarity.",
    "polyCount": "118,000 Quads",
    "medium": "Turned French Boxwood \u2022 Detachable Funnel Plug \u2022 Brass Slide Ferrule",
    "resonance": "Direct Acoustic Auscultation Conduction",
    "era": "1816 \u2014 Clinical Diagnosis Dawn",
    "story": "Before Laennec, internal heart and lung diseases could only be accurately diagnosed post-mortem during autopsy.",
    "mechanics": "A hollow wooden cylinder acts as an acoustic waveguide; sound waves vibrating the chest surface travel through the central bore directly into the physician's ear canal.",
    "legacy": "The universal physical symbol of the medical profession, revolutionizing internal diagnostics and cardiology.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_medical_ha_118.glb",
    "videoUrl": "/videos/reel_medical_ha_118.mp4",
    "tags": [
      "Laennec",
      "Stethoscope",
      "Auscultation",
      "Cardiology",
      "Diagnostics"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Mononeural Acoustic Stethoscope fundamentally altered surgical & diagnostic instruments, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MED-02",
    "title": "Diagnostic X-Radiation Crookes Tube",
    "officialTitle": "R\u00f6ntgen Evacuated Cathode Ray Diagnostic Radiographic Tube",
    "inventor": "Wilhelm Conrad R\u00f6ntgen",
    "creator": "Wilhelm Conrad R\u00f6ntgen",
    "patent": "Pat. #1895-DE01 \u2022 1895",
    "patentNumber": "DE1895001A",
    "patentDate": "December 28, 1895",
    "year": "1895",
    "location": "W\u00fcrzburg, Germany",
    "category": "MEDICAL",
    "categoryLabel": "Surgical & Diagnostic Instruments",
    "badge": "Nobel Prize in Physics Laureate",
    "image": "/images/raw_card_1_bell.jpg",
    "thumbnail": "/images/raw_card_1_bell.jpg",
    "desc": "On November 8, 1895, Wilhelm R\u00f6ntgen discovered penetrating electromagnetic rays that passed through cardboard and human flesh, casting the shadow of his wife's hand and wedding ring onto a barium platinocyanide fluorescent screen. Within weeks, doctors used X-rays to locate bullets and set broken bones without surgery.",
    "description": "On November 8, 1895, Wilhelm R\u00f6ntgen discovered penetrating electromagnetic rays that passed through cardboard and human flesh, casting the shadow of his wife's hand and wedding ring onto a barium platinocyanide fluorescent screen. Within weeks, doctors used X-rays to locate bullets and set broken bones without surgery.",
    "polyCount": "162,000 Quads",
    "medium": "Blown Heavy Lead-Free Glass Bulb \u2022 Platinum Target Anode \u2022 Aluminum Concave Cathode",
    "resonance": "High-Energy Electromagnetic Bremsstrahlung",
    "era": "1895 \u2014 Radiological Revolution",
    "story": "Working with darkened Crookes tubes, R\u00f6ntgen noticed a barium screen glowing across the room, realizing an unknown 'X' ray was penetrating solid matter.",
    "mechanics": "High-voltage induction coils fire electrons from a concave cathode into a heavy platinum anode; rapid deceleration produces penetrating X-ray photons that cast bone shadows on photographic plates.",
    "legacy": "Earned the first Nobel Prize in Physics (1901) and created modern medical diagnostic imaging (radiology, CT scans).",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_medical_ha_med_02.glb",
    "videoUrl": "/videos/reel_medical_ha_med_02.mp4",
    "tags": [
      "R\u00f6ntgen",
      "X-Ray",
      "Radiology",
      "Crookes Tube",
      "Diagnostics"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Diagnostic X-Radiation Crookes Tube fundamentally altered surgical & diagnostic instruments, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MED-03",
    "title": "Carbolic Antiseptic Steam Atomizer",
    "officialTitle": "Lister High-Pressure Carbolic Acid Surgical Vapor Atomizer",
    "inventor": "Joseph Lister",
    "creator": "Joseph Lister",
    "patent": "Pat. #1867-GB01 \u2022 1867",
    "patentNumber": "GB1867001A",
    "patentDate": "March 16, 1867",
    "year": "1867",
    "location": "Glasgow, Scotland",
    "category": "MEDICAL",
    "categoryLabel": "Surgical & Diagnostic Instruments",
    "badge": "Royal College of Surgeons",
    "image": "/images/test_strip.jpg",
    "thumbnail": "/images/test_strip.jpg",
    "desc": "Surgeon Joseph Lister revolutionized operative surgery by applying Louis Pasteur's germ theory to open wounds. Convinced airborne bacteria caused deadly gangrene and surgical ward fever, Lister engineered a brass steam atomizer that sprayed a continuous fine mist of antiseptic carbolic acid (phenol) over the operating field.",
    "description": "Surgeon Joseph Lister revolutionized operative surgery by applying Louis Pasteur's germ theory to open wounds. Convinced airborne bacteria caused deadly gangrene and surgical ward fever, Lister engineered a brass steam atomizer that sprayed a continuous fine mist of antiseptic carbolic acid (phenol) over the operating field.",
    "polyCount": "144,000 Quads",
    "medium": "Polished Spun Brass Boiler \u2022 Spirit Burner Lamp \u2022 Dual Syphon Atomizer Nozzle",
    "resonance": "Aerosolized Carbolic Germicidal Mist",
    "era": "1867 \u2014 Antiseptic Surgery Dawn",
    "story": "Hospital mortality rates from amputation infections exceeded fifty percent. Lister's antiseptic regime dropped surgical mortality to under nine percent.",
    "mechanics": "Steam from a small alcohol-heated brass boiler draws liquid phenol solution from an adjacent jar through a venturi nozzle, atomizing an antibacterial cloud over the wound.",
    "legacy": "Founded modern antiseptic surgery, sterile operative techniques, and modern surgical hygiene.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_medical_ha_med_03.glb",
    "videoUrl": "/videos/reel_medical_ha_med_03.mp4",
    "tags": [
      "Lister",
      "Antiseptic",
      "Carbolic Acid",
      "Surgical Hygiene",
      "Germ Theory"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Carbolic Antiseptic Steam Atomizer fundamentally altered surgical & diagnostic instruments, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MED-04",
    "title": "Precision Glass Hypodermic Syringe",
    "officialTitle": "Wood & Pravaz Fine-Bore Hollow Needle Hypodermic Syringe",
    "inventor": "Alexander Wood & Charles Pravaz",
    "creator": "Alexander Wood & Charles Pravaz",
    "patent": "Pat. #1853-GB01 \u2022 1853",
    "patentNumber": "GB1853001A",
    "patentDate": "April 18, 1853",
    "year": "1853",
    "location": "Edinburgh, Scotland",
    "category": "MEDICAL",
    "categoryLabel": "Surgical & Diagnostic Instruments",
    "badge": "Royal Infirmary of Edinburgh",
    "image": "/images/thumb_cube_hq.jpg",
    "thumbnail": "/images/thumb_cube_hq.jpg",
    "desc": "Scottish physician Alexander Wood and French surgeon Charles Pravaz integrated a fine-bore pointed hollow steel needle with a calibrated glass and silver piston syringe. For the first time, physicians could administer precise dosages of pain-relieving morphine and life-saving medications directly into bloodstream tissues.",
    "description": "Scottish physician Alexander Wood and French surgeon Charles Pravaz integrated a fine-bore pointed hollow steel needle with a calibrated glass and silver piston syringe. For the first time, physicians could administer precise dosages of pain-relieving morphine and life-saving medications directly into bloodstream tissues.",
    "polyCount": "122,000 Quads",
    "medium": "Graduated Annealed Glass Barrel \u2022 Electroplated Silver Piston \u2022 Beveled Steel Trocar Needle",
    "resonance": "Precision Volumetric Intravenous Dispensing",
    "era": "1853 \u2014 Pharmacology Milestone",
    "story": "Oral medicines were destroyed by digestive acids or took hours to absorb. Wood proved direct subcutaneous injection worked almost instantly.",
    "mechanics": "Turning a threaded piston screw or depressing a plunger forces exact volumetric fluid dosages out through a microscopic beveled trocar cannula directly into subcutaneous tissues.",
    "legacy": "The cornerstone instrument for administering anesthesia, vaccinations, insulin, and intravenous drugs worldwide.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_medical_ha_med_04.glb",
    "videoUrl": "/videos/reel_medical_ha_med_04.mp4",
    "tags": [
      "Wood",
      "Pravaz",
      "Hypodermic Syringe",
      "Needle",
      "Pharmacology"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Precision Glass Hypodermic Syringe fundamentally altered surgical & diagnostic instruments, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-MED-05",
    "title": "String Galvanometer Electrocardiograph",
    "officialTitle": "Einthoven Silvered Quartz String Electrocardiograph (ECG)",
    "inventor": "Willem Einthoven",
    "creator": "Willem Einthoven",
    "patent": "Pat. #1901-NL01 \u2022 1901",
    "patentNumber": "NL1901001A",
    "patentDate": "June 24, 1901",
    "year": "1901",
    "location": "Leiden, Netherlands",
    "category": "MEDICAL",
    "categoryLabel": "Surgical & Diagnostic Instruments",
    "badge": "Nobel Prize in Medicine Laureate",
    "image": "/images/card3_test.png",
    "thumbnail": "/images/card3_test.png",
    "desc": "Dutch physiologist Willem Einthoven invented the string galvanometer, the first practical instrument capable of recording the heart's tiny electrical currents. Suspending an ultra-fine silver-coated quartz string between powerful electromagnets, its minuscule deflections cast shadows onto moving photographic plates, creating the P-Q-R-S-T wave electrocardiogram (ECG).",
    "description": "Dutch physiologist Willem Einthoven invented the string galvanometer, the first practical instrument capable of recording the heart's tiny electrical currents. Suspending an ultra-fine silver-coated quartz string between powerful electromagnets, its minuscule deflections cast shadows onto moving photographic plates, creating the P-Q-R-S-T wave electrocardiogram (ECG).",
    "polyCount": "185,000 Quads",
    "medium": "Silver-Coated Quartz String (2 Microns) \u2022 5,000-Gauss Electromagnet \u2022 Carbon Arc Projector",
    "resonance": "Micro-Millivolt Galvanometric Deflection",
    "era": "1901 \u2014 Cardiology Revolution",
    "story": "Previous capillary electrometers were too sluggish to trace heartbeat cycles. Einthoven's 2-micron string reacted in fractions of a millisecond.",
    "mechanics": "Electrical currents conducted from limbs immersed in saline baths pass through a conductive quartz string inside a strong magnetic field, deflecting it proportionally to trace the heart's electrical rhythms.",
    "legacy": "Awarded the 1924 Nobel Prize in Physiology or Medicine, establishing modern clinical cardiology.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_medical_ha_med_05.glb",
    "videoUrl": "/videos/reel_medical_ha_med_05.mp4",
    "tags": [
      "Einthoven",
      "Electrocardiograph",
      "ECG",
      "String Galvanometer",
      "Cardiology"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The String Galvanometer Electrocardiograph fundamentally altered surgical & diagnostic instruments, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-119",
    "title": "Daguerreotype Photographic Camera",
    "officialTitle": "Daguerre Sensitized Silvered Copper Plate Photographic Apparatus",
    "inventor": "Louis Jacques Mand\u00e9 Daguerre",
    "creator": "Louis Jacques Mand\u00e9 Daguerre",
    "patent": "Pat. #1839-FR01 \u2022 1839",
    "patentNumber": "FR1839001A",
    "patentDate": "August 19, 1839",
    "year": "1839",
    "location": "Paris, France",
    "category": "PHOTOGRAPHY",
    "categoryLabel": "Photography & Cinematography",
    "badge": "Soci\u00e9t\u00e9 Fran\u00e7aise de Photographie",
    "image": "/images/character_bell.jpg",
    "thumbnail": "/images/character_bell.jpg",
    "desc": "On August 19, 1839, the French government presented the Daguerreotype to the world as a 'free gift to humanity'. Using an achromatic Chevalier lens and iodized silver-plated copper sheets developed over heated mercury vapor, it captured mirror-like photographic images with breathtaking fidelity.",
    "description": "On August 19, 1839, the French government presented the Daguerreotype to the world as a 'free gift to humanity'. Using an achromatic Chevalier lens and iodized silver-plated copper sheets developed over heated mercury vapor, it captured mirror-like photographic images with breathtaking fidelity.",
    "polyCount": "155,000 Quads",
    "medium": "Walnut Sliding Box Body \u2022 Achromatic Brass Lens \u2022 Iodized Silver-Plated Copper Plate",
    "resonance": "Silver Halide Photochemical Latency",
    "era": "1839 \u2014 Birth of Photography",
    "story": "Partnering with Nic\u00e9phore Ni\u00e9pce, Daguerre discovered that brief light exposures created an invisible latent image that mercury vapor miraculously developed.",
    "mechanics": "Light focused onto an iodine-fumed silver plate alters silver halide crystals; exposed plates placed over a dish of heated mercury form silver-mercury amalgam highlights.",
    "legacy": "Gave birth to the global medium of photography, forever transforming visual history, portraiture, and human memory.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_photography_ha_119.glb",
    "videoUrl": "/videos/reel_photography_ha_119.mp4",
    "tags": [
      "Daguerre",
      "Daguerreotype",
      "Photography",
      "Mercury Vapor",
      "Chevalier Lens"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Daguerreotype Photographic Camera fundamentally altered photography & cinematography, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-PHO-02",
    "title": "Calotype Negative-Positive Process",
    "officialTitle": "Talbot Silver Iodide Paper Negative-to-Positive Photographic Process",
    "inventor": "William Henry Fox Talbot",
    "creator": "William Henry Fox Talbot",
    "patent": "Pat. #8,842 \u2022 1841",
    "patentNumber": "GB8842A",
    "patentDate": "February 8, 1841",
    "year": "1841",
    "location": "Lacock Abbey, Wiltshire, UK",
    "category": "PHOTOGRAPHY",
    "categoryLabel": "Photography & Cinematography",
    "badge": "National Science and Media Museum",
    "image": "/images/raw_card_1_bell.jpg",
    "thumbnail": "/images/raw_card_1_bell.jpg",
    "desc": "While Daguerre produced unique, uncopyable metal plates, William Henry Fox Talbot invented the negative-to-positive photographic process on paper. His 'Calotype' used gallic acid to develop latent images on silver iodide paper negatives, from which unlimited identical positive prints could be made.",
    "description": "While Daguerre produced unique, uncopyable metal plates, William Henry Fox Talbot invented the negative-to-positive photographic process on paper. His 'Calotype' used gallic acid to develop latent images on silver iodide paper negatives, from which unlimited identical positive prints could be made.",
    "polyCount": "142,000 Quads",
    "medium": "Mahogany Mousetrap Camera \u2022 Salted Whatman Paper \u2022 Ground Glass Focusing Screen",
    "resonance": "Negative-to-Positive Photochemical Reproduction",
    "era": "1841 \u2014 Modern Photographic Paradigm",
    "story": "Frustrated by his poor sketching skills along Lake Como, Talbot wished nature could imprint herself upon paper chemically.",
    "mechanics": "Silver nitrate and potassium iodide soak into high-grade paper; after exposure in a camera, gallic acid brings out the negative image, which is contact-printed in sunlight onto salted paper.",
    "legacy": "Established the foundational negative-positive photographic paradigm that ruled photography until digital sensors.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_photography_ha_pho_02.glb",
    "videoUrl": "/videos/reel_photography_ha_pho_02.mp4",
    "tags": [
      "Talbot",
      "Calotype",
      "Negative Positive",
      "Paper Photography",
      "Lacock Abbey"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Calotype Negative-Positive Process fundamentally altered photography & cinematography, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-PHO-03",
    "title": "Zoopraxiscope Motion Projector",
    "officialTitle": "Muybridge Multi-Camera Rapid Shutter Animal Locomotion Projector",
    "inventor": "Eadweard Muybridge",
    "creator": "Eadweard Muybridge",
    "patent": "Pat. #212,865 \u2022 1879",
    "patentNumber": "US212865A",
    "patentDate": "March 4, 1879",
    "year": "1878",
    "location": "Palo Alto, CA",
    "category": "PHOTOGRAPHY",
    "categoryLabel": "Photography & Cinematography",
    "badge": "Kingston upon Thames Heritage",
    "image": "/images/raw_card_6_wright.jpg",
    "thumbnail": "/images/raw_card_6_wright.jpg",
    "desc": "To settle California Governor Leland Stanford's $25,000 bet on whether all four hooves of a galloping horse leave the ground simultaneously, Eadweard Muybridge lined a track with 24 cameras triggered by tripwires. Proving all four hooves do leave the ground, he invented the Zoopraxiscope to project these moving images onto a screen.",
    "description": "To settle California Governor Leland Stanford's $25,000 bet on whether all four hooves of a galloping horse leave the ground simultaneously, Eadweard Muybridge lined a track with 24 cameras triggered by tripwires. Proving all four hooves do leave the ground, he invented the Zoopraxiscope to project these moving images onto a screen.",
    "polyCount": "182,000 Quads",
    "medium": "Revolving Glass Silhouette Disc \u2022 Slotted Counter-Rotating Metal Shutter \u2022 Oxy-Hydrogen Limelight",
    "resonance": "Persistence of Vision Locomotion Synthesis",
    "era": "1878 \u2014 Cinema Genesis",
    "story": "Human retinas cannot track rapid animal motion. Muybridge's high-speed 1/1,000th-second electro-magnetic shutter captured motion never before seen.",
    "mechanics": "Sequential photographs painted onto the rim of a circular glass disc spin past a counter-rotating slotted shutter disk in front of a projection lantern.",
    "legacy": "Direct father of cinematography, stop-motion analysis, and motion picture projection.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_photography_ha_pho_03.glb",
    "videoUrl": "/videos/reel_photography_ha_pho_03.mp4",
    "tags": [
      "Muybridge",
      "Zoopraxiscope",
      "Motion Picture",
      "Locomotion",
      "High Speed Shutter"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Zoopraxiscope Motion Projector fundamentally altered photography & cinematography, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-PHO-04",
    "title": "Kinetoscope Peep-Show Viewer",
    "officialTitle": "Edison & Dickson Continuous Perforated Film Strip Motion Picture Viewer",
    "inventor": "Thomas Edison & W.K.L. Dickson",
    "creator": "Thomas Edison & W.K.L. Dickson",
    "patent": "Pat. #493,426 \u2022 1893",
    "patentNumber": "US493426A",
    "patentDate": "March 14, 1893",
    "year": "1891",
    "location": "West Orange, NJ",
    "category": "PHOTOGRAPHY",
    "categoryLabel": "Photography & Cinematography",
    "badge": "Edison Motion Picture Vault",
    "image": "/images/character_edison_stage.png",
    "thumbnail": "/images/character_edison_stage.png",
    "desc": "Thomas Edison and his Scottish laboratory assistant William Kennedy-Laurie Dickson designed the Kinetoscope, the first successful motion picture viewing apparatus. Using George Eastman's flexible 35mm nitrocellulose film perforated with four sprocket holes per frame, patrons peeked through an eyepiece to watch moving movies.",
    "description": "Thomas Edison and his Scottish laboratory assistant William Kennedy-Laurie Dickson designed the Kinetoscope, the first successful motion picture viewing apparatus. Using George Eastman's flexible 35mm nitrocellulose film perforated with four sprocket holes per frame, patrons peeked through an eyepiece to watch moving movies.",
    "polyCount": "174,000 Quads",
    "medium": "Solid Oak Cabinet \u2022 35mm Perforated Celluloid Film Band \u2022 High-Speed Slotted Shutter Wheel",
    "resonance": "46 Frames-Per-Second Stroboscopic Illusion",
    "era": "1891 \u2014 Kinetoscope Parlor Era",
    "story": "Edison envisioned an instrument that would do for the eye what his phonograph had done for the ear.",
    "mechanics": "An endless 50-foot loop of 35mm perforated film travels continuously over rollers at 46 frames per second under an electric bulb; a revolving slotted wheel reveals fleeting flashes to create motion illusion.",
    "legacy": "Established the universal 35mm film format and rectangular perforation standards still used in filmmaking today.",
    "modelType": "edison",
    "model3dUrl": "/models/cad_photography_ha_pho_04.glb",
    "videoUrl": "/videos/reel_photography_ha_pho_04.mp4",
    "tags": [
      "Edison",
      "Kinetoscope",
      "Dickson",
      "35mm Film",
      "Motion Picture"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Kinetoscope Peep-Show Viewer fundamentally altered photography & cinematography, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  },
  {
    "id": "HA-PHO-05",
    "title": "Cin\u00e9matographe Motion Camera",
    "officialTitle": "Lumi\u00e8re Brothers Portable Hand-Cranked Film Camera and Projector",
    "inventor": "Auguste & Louis Lumi\u00e8re",
    "creator": "Auguste & Louis Lumi\u00e8re",
    "patent": "Pat. #245,032 \u2022 1895",
    "patentNumber": "FR245032A",
    "patentDate": "February 13, 1895",
    "year": "1895",
    "location": "Lyon, France",
    "category": "PHOTOGRAPHY",
    "categoryLabel": "Photography & Cinematography",
    "badge": "Institut Lumi\u00e8re Lyon",
    "image": "/images/hero_stage_bg.jpg",
    "thumbnail": "/images/hero_stage_bg.jpg",
    "desc": "On December 28, 1895, at the Grand Caf\u00e9 in Paris, brothers Auguste and Louis Lumi\u00e8re projected the first commercial motion picture screening to a paying audience. Their elegant, portable wooden 'Cin\u00e9matographe' weighed only 11 pounds and served as camera, film printer, and theatrical projector all in one.",
    "description": "On December 28, 1895, at the Grand Caf\u00e9 in Paris, brothers Auguste and Louis Lumi\u00e8re projected the first commercial motion picture screening to a paying audience. Their elegant, portable wooden 'Cin\u00e9matographe' weighed only 11 pounds and served as camera, film printer, and theatrical projector all in one.",
    "polyCount": "188,000 Quads",
    "medium": "Polished Walnut Case \u2022 Harmonic Claw Intermittent Movement \u2022 Detachable Lamphouse",
    "resonance": "16 FPS Harmonic Claw Intermittent Drive",
    "era": "1895 \u2014 Birth of Projected Cinema",
    "story": "While Edison's heavy Kinetoscope was confined to one viewer peeking in a box, the lightweight Lumi\u00e8re machine let whole audiences experience cinema together.",
    "mechanics": "A hand-cranked harmonic eccentric cam drives triangular metal claws that engage film perforations, pulling each frame down, holding it stationary while the shutter opens, then repeating.",
    "legacy": "Launched projected commercial cinema, documentary filmmaking, and global movie theater culture.",
    "modelType": "antigravity",
    "model3dUrl": "/models/cad_photography_ha_pho_05.glb",
    "videoUrl": "/videos/reel_photography_ha_pho_05.mp4",
    "tags": [
      "Lumi\u00e8re",
      "Cin\u00e9matographe",
      "Cinema",
      "Film Projector",
      "Claw Movement"
    ],
    "schematicImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBvoeUi7zbFfW6aL0rZOcCiSCwv9K_tLRK2Mhp4gAvv1nPCHY9QhJ4-BanaNERMMfPEEea0ve42hNJPB1l_6HTBm6HSxtZ2ZwD9nftsUnYxOg3vOiicMGWSV7-flKeYSr9kCUmqAp1G4W11WS9aWCo0-3DjEvYplPxfIUmuy4GcF6jUkvLgYbEg-9UR1mdI2R8ccumSrm5m-o7vxAKEI6txsLyg8s4-pkD04IJKE-Y",
    "videoDuration": "0:30",
    "curatorQuote": "The Cin\u00e9matographe Motion Camera fundamentally altered photography & cinematography, establishing lasting principles of mechanical engineering.",
    "curatorAuthor": "Dr. Julian Vance, National Museum of Science and Industry",
    "blueprintLedger": [
      {
        "item": "Primary Calibrated Core",
        "spec": "Tolerance \u00b10.005 in."
      },
      {
        "item": "Structural Chassis",
        "spec": "Hand-forged metallurgical composite"
      },
      {
        "item": "Kinematic Linkage",
        "spec": "Hardened carbon alloy gearing"
      },
      {
        "item": "Auxiliary Envelope",
        "spec": "Sealed atmospheric housing"
      }
    ],
    "hotspots": [
      {
        "id": 1,
        "title": "Precision Assembly",
        "desc": "Hand-adjusted mechanical tolerances ensuring continuous operation.",
        "pos": [
          35,
          42
        ]
      },
      {
        "id": 2,
        "title": "Patented Drive Mechanism",
        "desc": "The primary kinematic innovation authenticated by the patent registry.",
        "pos": [
          62,
          58
        ]
      }
    ]
  }
];
