export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  size: "wide" | "tall" | "square";
}

export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}