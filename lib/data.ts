export const personalInfo = {
  name: "Artyom Hovhannisyan",
  title: "Full-Stack Developer & Mobile Engineer",
  tagline:
    "Building scalable web and mobile applications with React, React Native, and modern AI-assisted development.",
  bio: "Middle Frontend Developer with 5+ years of experience developing scalable web and mobile applications using React and React Native. Experienced in performance optimization, frontend-backend integration, and building maintainable solutions focused on delivering excellent user experiences.",
  location: "Ararat, Armenia",
  email: "artyomhovhannisyan005@gmail.com",
  phone: "+374 98 102 792",
  github: "https://github.com/ArtyomHovhannisyann",
  linkedin: "https://www.linkedin.com/in/artyom-hovhannisyan/",
  telegram: "https://t.me/artyomhovhannisyan",
  yearsOfExperience: 5,
  resumeUrl: "/Artyom_Hovhannisyan_CV.pdf",
};

export const skills = [
  "TypeScript",
  "JavaScript",
  "React.js",
  "Next.js",
  "React Native",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Nest.js",
  "Prisma",
  "MySQL",
  "SQL",
  "Tailwind CSS",
  "Sass",
  "HTML",
  "CSS",
  "GitHub Copilot",
  "OpenAI Codex",
];

export const projects = [
  {
    id: 1,
    title: "Veictor Messenger",
    description:
      "European B2B secure messaging platform with end-to-end encryption, full data sovereignty, and zero tracking. Built for enterprises to manage internal communications, file sharing, and workspace collaboration.",
    image: "/projects/web-veictor-messenger.jpg",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],
    demoUrl: "https://veictormessenger.com",
    repoUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Veictor Exchange",
    description:
      "Secure French peer-to-peer marketplace with verified user identities, safe first-meeting coordination, and legally binding auto-generated digital sale contracts — drastically reducing fraud.",
    image: "/projects/web-veictor-exchange.jpg",
    category: "Full Stack",
    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],
    demoUrl: "https://veictorexchange.com",
    repoUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Amaranoc",
    description:
      "Armenian vacation rental platform — an Airbnb-style marketplace for booking cottages, frame houses, lakeside villas, and hotels across Armenia with map-based filtering.",
    image: "/projects/web-amaranoc.jpg",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
    ],
    demoUrl: "https://amaranoc.am",
    repoUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Fantasy Space",
    description:
      "Company website for Fantasy Space — an AI-powered software development agency offering web, mobile, ML integration, LLM features, AI agents, DevOps, and MVP builds.",
    image: "/projects/web-fantasyspace.jpg",
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "Sass"],
    demoUrl: "https://fantasyspace.co",
    repoUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Sela Vee Jewelry",
    description:
      "Luxury jewelry e-commerce brand with a bold editorial identity. Features a cinematic hero, product gallery, and a strong brand narrative around feminine empowerment.",
    image: "/projects/web-selavee.jpg",
    category: "Frontend",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "CSS"],
    demoUrl: "https://selaveejewelry.com",
    repoUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Stone Market",
    description:
      "Armenian natural stone e-commerce platform with 500+ stone types, designer catalog, production services, and delivery across Armenia. Full shopping experience in Armenian.",
    image: "/projects/web-stonemarket.jpg",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
    ],
    demoUrl: "https://stonemarket.am",
    repoUrl: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Eden by Siroon Minas",
    description:
      "Premium skincare & aesthetics clinic booking platform for Dr. Siroon Minas. Offers facial treatments, laser hair removal, RF microneedling, injectables, gift cards, and online appointments.",
    image: "/projects/web-eden.jpg",
    category: "Frontend",
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
    demoUrl: "https://eden.am",
    repoUrl: "#",
    featured: false,
  },
];

export const mobileProjects = [
  {
    id: 101,
    title: "Veictor Exchange App",
    description:
      "Mobile companion to the Veictor Exchange platform. Secure P2P marketplace app with verified identity flows, listing management, safe meeting coordination, and auto-generated digital sale contracts.",
    image: "/projects/mobile-exchange.jpg",
    category: "Mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "JWT",
    ],
    relatedUrl: "https://veictorexchange.com",
    featured: true,
  },
  {
    id: 102,
    title: "Veictor Messenger App",
    description:
      "Mobile version of the Veictor B2B secure messenger. End-to-end encrypted conversations, workspace management, file sharing, and contact verification — all in a clean native app.",
    image: "/projects/mobile-messenger.jpg",
    category: "Mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "JWT",
    ],
    relatedUrl: "https://veictormessenger.com",
    featured: true,
  },
  {
    id: 103,
    title: "Callinger App",
    description:
      "Mobile calling and communication application built with React Native, featuring audio/video call flows, contact management, and a modern UI designed for seamless real-time communication.",
    image: "/projects/mobile-callinger.jpg",
    category: "Mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "WebRTC",
      "Node.js",
      "Express.js",
    ],
    relatedUrl: null,
    featured: false,
  },
  {
    id: 104,
    title: "Knots App",
    description:
      "Privacy-first social networking mobile app with identity verification, phone-based onboarding, parent/child account support, and real-time messaging — built for secure trusted connections.",
    image: "/projects/mobile-knots.jpg",
    category: "Mobile",
    technologies: ["React Native", "TypeScript", "Node.js", "MySQL", "Prisma"],
    relatedUrl: null,
    featured: false,
  },
  {
    id: 105,
    title: "Stone Market Mobile App",
    description:
      "Mobile shopping experience for the Stone Market platform. Browse 500+ natural stone types, view designer catalogs, filter by category, and place orders — all optimized for mobile.",
    image: "/projects/mobile-stonemarket.jpg",
    category: "Mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MySQL",
      "Tailwind CSS",
    ],
    relatedUrl: "https://stonemarket.am",
    featured: false,
  },
  {
    id: 106,
    title: "Scan Love App",
    description:
      "Mobile app concept for ScanLove with a polished onboarding flow, relationship-focused interface, and a clean design system prepared from the Figma product screens.",
    image: "/projects/mobile-scan-love.png",
    category: "Mobile",
    technologies: ["React Native", "TypeScript", "Figma", "UI/UX", "Mobile"],
    relatedUrl:
      "https://www.figma.com/design/jg5iCz2KtPVy80ouMs1lZM/ScanLove?node-id=0-1&t=0wvfI8HsA8r0fORV-1",
    featured: false,
  },
];

export const certificates = [
  {
    id: 1,
    title: "AWS Certified Developer – Associate",
    organization: "Amazon Web Services",
    date: "December 2024",
    image: null,
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Professional Scrum Master I",
    organization: "Scrum.org",
    date: "September 2024",
    image: null,
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Meta React Developer Certificate",
    organization: "Meta / Coursera",
    date: "June 2023",
    image: null,
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Node.js Application Developer",
    organization: "OpenJS Foundation",
    date: "March 2023",
    image: null,
    credentialUrl: "#",
  },
];

export type PersonalInfo = typeof personalInfo;
export type Project = (typeof projects)[number];
export type MobileProject = (typeof mobileProjects)[number];
export type Certificate = (typeof certificates)[number];
