import { Project, Service, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Work",     href: "#work"     },
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

export const PROJECTS: Project[] = [
  { id: 1, title: "Adventure Series",       category: "YouTube · Vlog",        year: "2024", thumbnail: "/images/p1.jpg", size: "wide"   },
  { id: 2, title: "Product Launch Reel",    category: "Brand Commercial",       year: "2024", thumbnail: "/images/p2.jpg", size: "tall"   },
  { id: 3, title: "Night City Timelapse",   category: "Short Film",             year: "2023", thumbnail: "/images/p3.jpg", size: "square" },
  { id: 4, title: "Brand Motion Identity",  category: "Motion Graphics",        year: "2024", thumbnail: "/images/p4.jpg", size: "square" },
  { id: 5, title: "Neon Dreamscape",        category: "Music Video",            year: "2023", thumbnail: "/images/p5.jpg", size: "wide"   },
  { id: 6, title: "Urban Stories Vol. 3",   category: "Documentary",            year: "2024", thumbnail: "/images/p6.jpg", size: "tall"   },
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Video Editing",
    description: "Full narrative editing — pacing, cuts, structure, and story arc for long and short form content.",
    tags: ["Premiere Pro", "Long-form", "Short-form"],
  },
  {
    number: "02",
    title: "Motion Graphics",
    description: "Custom animated titles, transitions, lower thirds, and brand animations that elevate your visual identity.",
    tags: ["After Effects", "Animation", "Branding"],
  },
  {
    number: "03",
    title: "Color Grading",
    description: "Cinematic colour treatment using professional LUTs and manual grading to define the mood of your content.",
    tags: ["DaVinci", "LUTs", "Colour Science"],
  },
  {
    number: "04",
    title: "YouTube Strategy",
    description: "Retention-optimised editing, thumbnail design, chapter structure, and hook engineering for growth.",
    tags: ["CTR", "Retention", "Thumbnails"],
  },
];

export const MARQUEE_ITEMS = [
  "Premiere Pro", "After Effects", "Color Grading",
  "Motion Graphics", "YouTube", "Sound Design", "Visual Effects",
];

export const STATS = [
  { value: 120, suffix: "+", label: "Projects" },
  { value: 45,  suffix: "K", label: "Views"    },
  { value: 3,   suffix: "+", label: "Years"    },
];

export const SOFTWARE_TOOLS = [
  { name: "Premiere Pro", slug: "adobepremiere" },
  { name: "After Effects", slug: "aftereffects" },
  { name: "DaVinci Resolve", slug: "davinciresolve" },
  { name: "Cinema 4D", slug: "cinema4d" },
  { name: "Figma", slug: "figma" },
  { name: "Blender", slug: "blender" },
];