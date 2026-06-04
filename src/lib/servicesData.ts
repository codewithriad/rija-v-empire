// Data for the "Our Flagship Services" tab-based section

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceTab {
  id: string;
  label: string;
  icon: string;
  accentColor: string;
  glowColor: string;
  cards: ServiceCard[];
}

export const serviceTabs: ServiceTab[] = [
  {
    id: "agriculture",
    label: "Agriculture",
    icon: "🌾",
    accentColor: "#16a34a",
    glowColor: "rgba(22, 163, 74, 0.5)",
    cards: [
      {
        id: "agri-1",
        title: "Poultry Farming Training",
        description:
          "Master the art of poultry production with our intensive, hands-on training programs. Learn modern broiler and layer management techniques, disease prevention, and how to build a profitable poultry business from scratch.",
        image: "/poultry-farming.jpg",
      },
      {
        id: "agri-2",
        title: "Fish Farming Training",
        description:
          "Dive into aquaculture with practical training on catfish and tilapia production. From pond construction and water quality management to feed formulation and harvesting, gain the skills to run a thriving fish farm.",
        image: "/fish-farming.jpg",
      },
      {
        id: "agri-3",
        title: "Dog Breeding Training",
        description:
          "Learn professional dog breeding practices including breed selection, genetic health screening, whelping management, and puppy care. Build a reputable and ethical breeding business with expert guidance.",
        image: "/dog-breeding.jpg",
      },
      {
        id: "agri-4",
        title: "Agro Equipment Supply",
        description:
          "Access high-quality agricultural machinery, tools, and equipment at competitive prices. From tractors and irrigation systems to processing equipment, we supply everything modern farms need to scale operations.",
        image: "/agro-equipment.jpg",
      },
      {
        id: "agri-5",
        title: "Farm Consultancy",
        description:
          "Get expert advisory services tailored to your farming goals. Our consultants provide feasibility studies, business planning, soil analysis, and strategic guidance to maximize yield and profitability across all agricultural ventures.",
        image: "/farm-consultancy.jpg",
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    icon: "🎓",
    accentColor: "#7c3aed",
    glowColor: "rgba(124, 58, 237, 0.5)",
    cards: [
      {
        id: "edu-1",
        title: "Study Abroad Programs",
        description:
          "Unlock world-class education opportunities across Europe, North America, and Asia. We guide students through university selection, application processes, visa procurement, and pre-departure preparation for a seamless transition.",
        image: "/study-abroad.jpg",
      },
      {
        id: "edu-2",
        title: "Scholarship Opportunities",
        description:
          "Discover and secure fully funded and partial scholarships at top global universities. Our team identifies the best-fit programs, assists with application essays, and provides mentorship to maximize your chances of success.",
        image: "/scholarship.jpg",
      },
      {
        id: "edu-3",
        title: "Academic Consulting",
        description:
          "Receive personalized academic guidance from experienced education consultants. Whether you're choosing a career path, preparing for standardized tests, or navigating admissions, we provide strategic support for student success.",
        image: "/consulting.jpg",
      },
      {
        id: "edu-4",
        title: "E-Learning Platforms",
        description:
          "Access cutting-edge digital learning solutions designed for the modern student. Our e-learning platforms deliver interactive courses, live tutoring, and skill-building programs that empower learners to thrive in a competitive world.",
        image: "/e-learning.jpg",
      },
    ],
  },
  {
    id: "media",
    label: "Media",
    icon: "🎬",
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.5)",
    cards: [
      {
        id: "media-1",
        title: "Digital Media Production",
        description:
          "From concept to screen, we produce compelling video content, documentaries, and brand films that captivate audiences. Our state-of-the-art production team delivers cinematic quality storytelling for every project.",
        image: "/media-production.jpg",
      },
      {
        id: "media-2",
        title: "Advertising Services",
        description:
          "Amplify your brand reach with data-driven advertising campaigns across digital and traditional channels. We craft targeted ad strategies, manage media buying, and optimize performance to deliver measurable ROI for your business.",
        image: "/advertising.jpg",
      },
      {
        id: "media-3",
        title: "Printing & Publishing",
        description:
          "Professional printing and publishing services for books, magazines, brochures, and corporate materials. We combine premium print quality with creative design to bring your publications to life with lasting impact.",
        image: "/printing.jpg",
      },
      {
        id: "media-4",
        title: "Multimedia Content Creation",
        description:
          "Elevate your brand with custom multimedia content including motion graphics, podcasts, social media assets, and interactive experiences. Our creative storytellers transform ideas into engaging content that drives brand growth.",
        image: "/multimedia.jpg",
      },
    ],
  },
];
