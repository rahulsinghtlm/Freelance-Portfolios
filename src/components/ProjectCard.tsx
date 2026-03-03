"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CinematicTag from "./ui/CinematicTag";

interface ProjectCardProps {
  project: {
    id: number;
    size: "wide" | "tall" | "square";
    category: string;
    year: string;
    title: string;
  };
  index: number;
  sizeMap: Record<string, string>;
  gradients: string[];
}

export default function ProjectCard({
  project,
  index,
  sizeMap,
  gradients,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      key={project.id}
      className={`${sizeMap[project.size]} relative overflow-hidden group bg-[#0b0b10]`}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.08,
        ease: [0.77, 0, 0.18, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail — replace with real <Image> */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} transition-transform duration-700 group-hover:scale-105`}
      />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-[#1A1A1A]/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Category badge — film label */}
      <span className="absolute top-4 left-4 z-10">
        <CinematicTag className="!py-1 !px-2.5 text-[9px]">
          {project.category}
        </CinematicTag>
      </span>

      {/* Year — top right */}
      <span className="absolute top-4 right-4 font-['Bebas_Neue'] text-lg text-[#f5f0e8]/40">
        {project.year}
      </span>

      {/* Title slides up on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6"
        initial={{ y: 16, opacity: 0 }}
        animate={isHovered ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h3 className="font-['Bebas_Neue'] text-2xl text-[#f5f0e8] leading-tight">
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-1 font-['Syne'] text-[11px] tracking-widest uppercase text-[#ef4444] mt-2">
          View Project →
        </span>
      </motion.div>
    </motion.article>
  );
}
