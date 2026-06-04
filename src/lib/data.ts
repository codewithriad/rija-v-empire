// Static data for the RIJA-V EMPIRE homepage

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Reason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FeaturedService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  imagePosition: "left" | "right";
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const companyInfo = {
  name: "RIJA-V EMPIRE",
  fullName: "RIJA-V EMPIRE NIGERIA LIMITED",
  tagline: "Empowering Multi-Industry Growth Across Nigeria",
  subTagline:
    "A diversified powerhouse delivering excellence across Agriculture, Education, Media, Real Estate, and beyond — building the future of Nigerian enterprise.",
  about:
    "RIJA-V EMPIRE NIGERIA LIMITED is a dynamic, multi-sector company with a proven track record across diverse industries. From agriculture and education to media production and real estate development, we deliver scalable solutions that drive growth, create value, and transform communities across Nigeria.",
  email: "contact@rijavempire.com",
  phone: "+234 000 000 0000",
  whatsapp: "+2340000000000",
  location: "Nigeria",
  facebook: "https://facebook.com/rijavempire",
  instagram: "https://instagram.com/rijavempire",
  linkedin: "https://linkedin.com/company/rijavempire",
  twitter: "https://twitter.com/rijavempire",
};

export const stats: Stat[] = [
  { id: "industries", value: 10, suffix: "+", label: "Industries Served" },
  { id: "clients", value: 150, suffix: "+", label: "Satisfied Clients" },
  { id: "projects", value: 200, suffix: "+", label: "Projects Delivered" },
  { id: "years", value: 5, suffix: "+", label: "Years of Excellence" },
];

export const services: Service[] = [
  {
    id: "agriculture",
    title: "Agriculture & Livestock",
    description:
      "Large-scale farming, livestock management, and agro-processing solutions driving food security and sustainable agriculture across Nigeria.",
    icon: "🌾",
  },
  {
    id: "education",
    title: "Education & EdTech",
    description:
      "Innovative educational programs and technology platforms transforming learning experiences and empowering the next generation.",
    icon: "🎓",
  },
  {
    id: "media",
    title: "Media & Production",
    description:
      "Full-spectrum media services including content creation, digital marketing, video production, and brand storytelling.",
    icon: "🎬",
  },
  {
    id: "realestate",
    title: "Real Estate",
    description:
      "Strategic property development, management, and investment across residential, commercial, and mixed-use projects.",
    icon: "🏗️",
  },
  {
    id: "consultancy",
    title: "Consultancy",
    description:
      "Expert business advisory, strategy consulting, and project management services for organizations seeking growth.",
    icon: "📊",
  },
  {
    id: "fashion",
    title: "Fashion & Lifestyle",
    description:
      "Contemporary fashion design, lifestyle brands, and retail solutions celebrating African creativity and style.",
    icon: "👗",
  },
  {
    id: "trading",
    title: "Import & Export",
    description:
      "International trade facilitation, supply chain management, and cross-border commerce connecting Nigerian businesses to global markets.",
    icon: "🚢",
  },
  {
    id: "investment",
    title: "Investment",
    description:
      "Strategic investment management, portfolio diversification, and financial advisory for sustainable wealth creation.",
    icon: "💎",
  },
];

export const reasons: Reason[] = [
  {
    id: "expertise",
    title: "Multi-Industry Expertise",
    description:
      "Deep knowledge spanning 10+ sectors gives us unmatched perspective and the ability to identify cross-industry opportunities.",
    icon: "🏆",
  },
  {
    id: "execution",
    title: "Professional Execution",
    description:
      "Every project is delivered with precision, transparency, and a commitment to exceeding expectations — on time, every time.",
    icon: "⚡",
  },
  {
    id: "scalable",
    title: "Scalable Solutions",
    description:
      "Our frameworks and processes are designed to grow with your ambitions, from local initiatives to national-scale operations.",
    icon: "📈",
  },
  {
    id: "client",
    title: "Client-Focused Approach",
    description:
      "Your success is our mission. We build lasting partnerships through dedicated support, clear communication, and measurable results.",
    icon: "🤝",
  },
];

export const featuredServices: FeaturedService[] = [
  {
    id: "agri-featured",
    title: "Agriculture & Livestock",
    subtitle: "Feeding the Nation, Growing the Economy",
    description:
      "Our agricultural division operates modern farms and livestock facilities across multiple states, leveraging technology and sustainable practices to drive productivity. From crop cultivation to animal husbandry and agro-processing, we are building a food-secure future for Nigeria.",
    highlights: [
      "Large-scale crop production",
      "Modern livestock management",
      "Agro-processing & value addition",
      "Sustainable farming practices",
    ],
    imagePosition: "left",
  },
  {
    id: "edu-featured",
    title: "Education & EdTech",
    subtitle: "Transforming Learning, Empowering Futures",
    description:
      "We are reimagining education through innovative EdTech platforms and comprehensive training programs. Our solutions bridge the gap between traditional learning and modern technology, making quality education accessible to communities across Nigeria.",
    highlights: [
      "Digital learning platforms",
      "Professional training programs",
      "Community education initiatives",
      "Technology-driven classrooms",
    ],
    imagePosition: "right",
  },
  {
    id: "media-featured",
    title: "Media & Production",
    subtitle: "Telling Stories That Inspire Action",
    description:
      "Our media division creates compelling content that captivates audiences and drives results. From documentary production to digital marketing campaigns, we help brands communicate their message with clarity, creativity, and impact across all channels.",
    highlights: [
      "Video & content production",
      "Digital marketing campaigns",
      "Brand strategy & identity",
      "Social media management",
    ],
    imagePosition: "left",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];
