export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  origin: string;
  packaging: string[];
  certifications: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
}

export const productCategories = [
  {
    id: "spices",
    name: "Ethnic Spices",
    description: "Premium quality ethnic and specialty spices",
    icon: "🌶️"
  },
  {
    id: "grains",
    name: "Specialty Grains",
    description: "High-quality grains and pulses",
    icon: "🌾"
  },
  {
    id: "herbs",
    name: "Dried Herbs",
    description: "Aromatic dried herbs and botanicals",
    icon: "🌿"
  },
  {
    id: "seeds",
    name: "Oil Seeds",
    description: "Premium oil seeds and derivatives",
    icon: "🌰"
  }
];

export const products: Product[] = [
  {
    id: "turmeric-powder",
    name: "Premium Turmeric Powder",
    category: "spices",
    description: "High-quality turmeric powder sourced from sustainable farms in South India. Known for its vibrant color and high curcumin content.",
    image: "https://images.unsplash.com/photo-1768729340925-2749ecdc211c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0dXJtZXJpYyUyMHNwaWNlJTIwcG93ZGVyfGVufDF8fHx8MTc3NzM3NDk5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    origin: "South India",
    packaging: ["25kg bags", "50kg bags", "Bulk containers"],
    certifications: ["Organic", "ISO 22000", "FSSAI"],
    specifications: [
      { label: "Curcumin Content", value: "3.5% minimum" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Ash Content", value: "Max 8%" },
      { label: "Color Value", value: "High" }
    ]
  },
  {
    id: "turmeric-root",
    name: "Dried Turmeric Root",
    category: "spices",
    description: "Whole dried turmeric roots (fingers) with excellent color and aroma. Perfect for processing or traditional use.",
    image: "https://images.unsplash.com/photo-1768729341078-9da4e0ea959e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0dXJtZXJpYyUyMHNwaWNlJTIwcG93ZGVyfGVufDF8fHx8MTc3NzM3NDk5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    origin: "India",
    packaging: ["20kg bags", "40kg bags"],
    certifications: ["Organic", "Fair Trade", "FSSAI"],
    specifications: [
      { label: "Size", value: "Fingers & Bulbs" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Quality", value: "Premium Grade" }
    ]
  },
  {
    id: "cardamom-green",
    name: "Green Cardamom",
    category: "spices",
    description: "Premium green cardamom pods with intense aroma and flavor. Sourced from high-altitude plantations.",
    image: "https://images.unsplash.com/photo-1758657996330-095d08451cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkYW1vbSUyMHNlZWRzJTIwc3BpY2V8ZW58MXx8fHwxNzc3Mzc0OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    origin: "Western Ghats, India",
    packaging: ["1kg bags", "5kg bags", "10kg cartons"],
    certifications: ["Organic", "ISO 22000", "Rainforest Alliance"],
    specifications: [
      { label: "Grade", value: "7mm - 8mm" },
      { label: "Color", value: "Bold Green" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Volatile Oil", value: "4% minimum" }
    ]
  },
  {
    id: "black-pepper",
    name: "Black Pepper Whole",
    category: "spices",
    description: "Premium quality black peppercorns with high piperine content. Bold flavor and aroma for discerning markets.",
    image: "https://images.unsplash.com/photo-1649951806971-ad0e00408773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcHBlciUyMHNwaWNlfGVufDF8fHx8MTc3NzM3NDk5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    origin: "Kerala, India",
    packaging: ["25kg bags", "50kg bags"],
    certifications: ["ISO 22000", "FSSAI", "Organic"],
    specifications: [
      { label: "Size", value: "500-550 g/l" },
      { label: "Piperine", value: "5% minimum" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Grade", value: "Premium" }
    ]
  },
  {
    id: "cumin-seeds",
    name: "Cumin Seeds",
    category: "seeds",
    description: "High-quality cumin seeds with strong aroma and flavor. Essential for ethnic cuisine worldwide.",
    image: "https://images.unsplash.com/photo-1773869910193-c7ae23145ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXJkYW1vbSUyMHNlZWRzJTIwc3BpY2V8ZW58MXx8fHwxNzc3Mzc0OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    origin: "Gujarat, India",
    packaging: ["25kg bags", "50kg bags"],
    certifications: ["ISO 22000", "FSSAI"],
    specifications: [
      { label: "Purity", value: "99% minimum" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Admixture", value: "Max 1%" }
    ]
  },
  {
    id: "mixed-spices",
    name: "Specialty Spice Mix",
    category: "spices",
    description: "Carefully curated blend of premium spices for authentic ethnic flavors.",
    image: "https://images.unsplash.com/photo-1769614596747-860600b5f2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjYXJkYW1vbSUyMHNlZWRzJTIwc3BpY2V8ZW58MXx8fHwxNzc3Mzc0OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    origin: "India",
    packaging: ["10kg bags", "25kg bags"],
    certifications: ["FSSAI", "ISO 22000"],
    specifications: [
      { label: "Ingredients", value: "Custom blend" },
      { label: "Shelf Life", value: "12 months" },
      { label: "Storage", value: "Cool & dry place" }
    ]
  }
];
