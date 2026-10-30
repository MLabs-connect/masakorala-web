export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  area: string;
  paverType: string;
  year: string;
  client: string;
  image: string;
  gallery: string[];
  excerpt: string;
  description: string;
  scope: string[];
}

export const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "phoenix-warehouse",
    title: "Phoenix Warehouse & Logistics Hub: High-Strength Paving",
    location: "Biyagama Export Processing Zone",
    area: "20,000 Sq.Ft",
    paverType: "80mm Heavy-Duty Uni Interlock (55 MPa)",
    year: "2024",
    client: "Phoenix Industries / Logistics Terminal",
    image: "/images/projects/warehouse-hub.jpg",
    gallery: [
      "/images/projects/warehouse-hub.jpg",
      "/images/uni-paver.jpg",
      "/images/products/uni-paver.webp",
    ],
    excerpt:
      "Successfully delivered 20,000 square feet of heavy-duty interlocking paving on compacted quarry dust bed, engineered to withstand high-capacity container forklift movements without surface settlement.",
    description:
      "Engineered specifically for heavy industrial freight distribution, this terminal handles continuous 45-ton reach-stacker and multi-axle haulage container operations. The paving was installed with high-compressive 80mm Uni Interlock blocks over a laser-screeded 50mm compacted quarry dust bedding. The precision herringbone interlock pattern distributes point-load forces evenly across the sub-base, preventing rutting and structural deformation.",
    scope: [
      "55 MPa Heavy-Duty Concrete Pavers",
      "Dynamic plate vibration and sub-grade compaction (98% Modified Proctor)",
      "Screened 50mm crushed quarry dust bedding bed screeded with laser accuracy",
      "Perimeter cast-in-situ reinforced edge restraint kerbs along haulage lanes",
      "Stabilized joint-sand filling preventing moisture ingress into sub-grades",
    ],
  },
  {
    id: "colombo-port-city",
    title: "Colombo Port City: Waterfront Retail & Promenade Paving",
    location: "Port City Commercial Gateway, Colombo",
    area: "35,000 Sq.Ft",
    paverType: "Customized Washed Eliana & Directional Pavers",
    year: "2024",
    client: "CHEC Port City Colombo / Luxury Gateway Promenade",
    image: "/images/projects/waterfront-port.jpg",
    gallery: [
      "/images/projects/waterfront-port.jpg",
      "/images/products/washed-eliana.webp",
      "/images/hero.jpg",
    ],
    excerpt:
      "Part of the world-class Port City investment zone for luxury dining, retail shops, and lifestyle spaces. Precision aesthetics combined with high skid-resistance for pedestrian safety.",
    description:
      "A flagship coastal pedestrian boulevard connecting luxury retail plazas and dining establishments along the Indian Ocean frontage. The project required architectural washed-aggregate Eliana paver units that deliver an authentic natural stone texture with high anti-slip ratings (PTV > 45) under maritime moisture conditions. Formulated with mineral oxides for lasting colorfastness under equatorial sunlight.",
    scope: [
      "Architectural exposed natural aggregate stone finish (Washed Eliana)",
      "High maritime salt-spray resistance with low water absorption (<6%)",
      "Built-in directional tactile guidance paving for accessibility",
      "Seamless integration with subsurface flush slot drains and tree grates",
      "Hermetic sealant treatment resisting beverage spills and stains",
    ],
  },
  {
    id: "keells-katugastota",
    title: "Keells Supermarket Commercial Car Park – Katugasthota",
    location: "Katugasthota, Central Province",
    area: "14,000 Sq.Ft",
    paverType: "80mm UNI Interlock Blocks & Parking Bays",
    year: "2023",
    client: "JayKay Marketing Services (John Keells Holdings)",
    image: "/images/projects/supermarket-park.jpg",
    gallery: [
      "/images/projects/supermarket-park.jpg",
      "/images/uni-paver.jpg",
      "/images/products/uni-paver.webp",
    ],
    excerpt:
      "High-traffic commercial car park paved with 80mm heavy-duty interlock blocks laid over compacted quarry dust base to support continuous customer vehicle turnover.",
    description:
      "Designed for high-density customer vehicle rotation, delivery supply vans, and supermarket shopping trolley traffic. The layout incorporates color-demarcated parking slots in charcoal-grey pavers contrasted against light natural grey drive aisles. The installation was completed in rapid phased night shifts to ensure supermarket trading remained uninterrupted.",
    scope: [
      "80mm heavy-traffic interlock paving for retail vehicle turnover",
      "Contrasting charcoal paver border delineations for parking bays",
      "Smooth wheel-friendly surface transitions for shopping trolley comfort",
      "Precision camber slope grading eliminating surface water puddles",
      "Reinforced heavy-vehicle unloading bay for delivery container trucks",
    ],
  },
  {
    id: "keells-pallekele",
    title: "Keells Supermarket Logistics Forecourt – Pallekele",
    location: "Pallekele, Kandy District",
    area: "12,500 Sq.Ft",
    paverType: "80mm UNI Interlock + Border Kerbs",
    year: "2023",
    client: "JayKay Marketing Services (Keells Super)",
    image: "/images/projects/supermarket-park.jpg",
    gallery: [
      "/images/projects/supermarket-park.jpg",
      "/images/uni-paver.jpg",
      "/images/products/uni-paver.webp",
    ],
    excerpt:
      "Customer car park and rear delivery dock paved with reinforced interlock units, eliminating surface water stagnation and ensuring smooth truck turnaround.",
    description:
      "A complete commercial external works package comprising retail parking, perimeter drainage kerbs, and a dedicated rear loading dock. Engineered to withstand heavy axle loads from refrigerated distribution trucks without surface depression.",
    scope: [
      "Heavy axle load capacity interlocking block pavement",
      "Integrated perimeter precast curb stones and drainage channels",
      "High abrasion resistance surface resisting oil and diesel dripping",
      "Rapid phased execution completed within 10 operational calendar days",
    ],
  },
  {
    id: "brandix-green-campus",
    title: "Brandix Eco-Tech Apparel Park – Sustainable Ground Paving",
    location: "Pannala Export Zone",
    area: "85,000 Sq.Ft",
    paverType: "Eco-Grass Permeable Cellular Blocks",
    year: "2025",
    client: "Brandix Apparel Solutions Ltd",
    image: "/images/projects/brandix-eco.jpg",
    gallery: [
      "/images/projects/brandix-eco.jpg",
      "/images/products/grass-paver.webp",
      "/images/grass-paver.jpg",
    ],
    excerpt:
      "Permeable cellular grass block installation recharging over 1.2 million liters of annual rainfall back to subterranean water aquifers, earning LEED Platinum sustainability points.",
    description:
      "An award-winning sustainable infrastructure project across an eco-friendly manufacturing campus. Masakorala supplied 85,000 sq.ft of permeable cellular grass pavers that permit lush turfgrass growth through the concrete grid while supporting light utility vehicles and emergency fire tender access.",
    scope: [
      "Permeable open-cell concrete matrix with 40% open vegetative void ratio",
      "Direct aquifer recharge preventing localized industrial stormwater runoff",
      "Reduction of micro-climatic heat island effect across employee outdoor zones",
      "Heavy concrete rib strength supporting periodic emergency fire truck access",
    ],
  },
  {
    id: "central-expressway",
    title: "Central Expressway Interchange Toll Plazas",
    location: "Kurunegala Central Interchange",
    area: "65,000 Sq.Ft",
    paverType: "Heavy-Duty Interlock Blocks 80mm",
    year: "2022",
    client: "Road Development Authority (RDA)",
    image: "/images/projects/expressway-toll.jpg",
    gallery: [
      "/images/projects/expressway-toll.jpg",
      "/images/uni-paver.jpg",
      "/images/products/uni-paver.webp",
    ],
    excerpt:
      "High-shear interlocking pattern engineered under Road Development Authority (RDA) supervision to withstand heavy braking forces of interprovincial transport buses and haulage trailers.",
    description:
      "Toll plaza lanes endure intense horizontal shear forces generated by heavy commercial vehicles decelerating and accelerating continuously. Masakorala supplied 55 MPa interlocking blocks laid in a tight 45-degree herringbone pattern to prevent block shifting and maintain strict flatness tolerances under RDA QA/QC compliance.",
    scope: [
      "Road Development Authority (RDA) compliant 55 MPa concrete pavement",
      "High-shear interlocking herringbone arrangement resisting displacement",
      "Kiln-dried silica joint stabilization resisting high-pressure cleaning",
      "Continuous load transfer across adjoining units minimizing differential deflection",
    ],
  },
];
