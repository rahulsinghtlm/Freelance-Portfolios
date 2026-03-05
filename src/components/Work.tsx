"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import SplitText from "./ui/SplitText";
import RevealStack, { RevealStackItem } from "./ui/RevealStack";

const easeFilm = [0.77, 0, 0.18, 1] as const;

/* ---------------- SHARED OBSERVER ---------------- */



/* ---------------- YOUTUBE VIDEO ---------------- */

function VideoEmbed({ videoId, label }: { videoId: string; label: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const active = useInView(containerRef, { amount: 0.6 });

  const autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div ref={containerRef} className="space-y-3">
      <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-[#020617] to-[#020202]">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            title={label}
            src={active ? autoplayUrl : undefined}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      <p className="font-['Syne'] text-xs tracking-[0.25em] uppercase text-[var(--text-muted)]">
        {label}
      </p>
    </div>
  );
}

/* ---------------- GENERIC MEDIA ---------------- */

function MediaEmbed({ src, label }: { src: string; label: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const active = useInView(containerRef, { amount: 0.6 });

  return (
    <div ref={containerRef} className="space-y-3">
      <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-[#020617] to-[#020202]">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            title={label}
            src={active ? src : undefined}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      <p className="font-['Syne'] text-xs tracking-[0.25em] uppercase text-[var(--text-muted)]">
        {label}
      </p>
    </div>
  );
}
/* ---------------- MAIN WORK SECTION ---------------- */

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-24 px-6 md:px-10 max-w-7xl mx-auto">

      {/* YOUTUBE WORK */}

      <div className="mb-16">
        <RevealStack>
          <p className="font-['Syne'] text-[11px] tracking-[0.25em] uppercase text-[var(--text-muted)] mb-4">
            — Selected Work
          </p>
        </RevealStack>

        <RevealStackItem delay={0.06}>
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,5rem)] leading-none text-[var(--text-primary)]">
            <SplitText text="YOUTUBE VLOG — AKG FOOTBALL" />
          </h2>
        </RevealStackItem>
      </div>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        <VideoEmbed videoId="UpgUNBsaSyc" label="AKG FOOTBALL — EPISODE 1" />
        <VideoEmbed videoId="YpaDf9wYWzE" label="AKG FOOTBALL — EPISODE 2" />
      </div>

      {/* FOOTBALL UNPLUGGED */}

      <div className="mt-20 mb-16">
        <RevealStack>
          <p className="font-['Syne'] text-[11px] tracking-[0.25em] uppercase text-[var(--text-muted)] mb-4">
            — Football Unplugged
          </p>
        </RevealStack>

        <RevealStackItem delay={0.1}>
          <h3 className="font-['Bebas_Neue'] text-[clamp(2rem,4vw,3.5rem)] leading-none text-[var(--text-primary)]">
            <SplitText text="FOOTBALL UNPLUGGED" />
          </h3>
        </RevealStackItem>
      </div>

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        <VideoEmbed videoId="5RVi9FsTpJY" label="EPISODE 1" />
        <VideoEmbed videoId="IEv74Rf595U" label="EPISODE 2" />
      </div>

      {/* REELS & SHORT FORM */}

      <div className="mt-20 mb-16">

        <RevealStack>
          <p className="font-['Syne'] text-[11px] tracking-[0.25em] uppercase text-[var(--text-muted)] mb-4">
            — Reels & Shorts
          </p>
        </RevealStack>

        <RevealStackItem delay={0.1}>
          <h3 className="font-['Bebas_Neue'] text-[clamp(2rem,4vw,3.5rem)] leading-none text-[var(--text-primary)]">
            <SplitText text="SHORT FORM EDITS" />
          </h3>
        </RevealStackItem>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
        <MediaEmbed
          src="https://www.instagram.com/reel/DQpMzyiEWfF/embed"
          label="INSTAGRAM REEL"
        />

        <MediaEmbed
          src="https://www.instagram.com/reel/DHQtA6zSbdX/embed"
          label="INSTAGRAM REEL"
        />

        <MediaEmbed
          src="https://www.youtube.com/embed/KbsNIdIDHzE"
          label="YOUTUBE SHORT"
        />

        <MediaEmbed
          src="https://player.vimeo.com/video/1021012534"
          label="VIMEO SHORT"
        />

        <MediaEmbed
          src="https://www.instagram.com/reel/DBlmdFJInut/embed"
          label="INSTAGRAM REEL"
        />
      </div>

    </section>
  );
}