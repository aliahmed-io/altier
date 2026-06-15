"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const chairRef = useRef<HTMLDivElement>(null);
  const awardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!chairRef.current || !awardRef.current) return;
      const xPos = (e.clientX / window.innerWidth - 0.5) * 18;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 18;

      gsap.to(chairRef.current, {
        x: xPos,
        y: yPos,
        duration: 1.8,
        ease: "power2.out",
      });

      gsap.to(awardRef.current, {
        x: xPos * 0.4,
        y: yPos * 0.4,
        duration: 2.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full flex flex-col md:flex-row overflow-hidden" style={{ height: "min(100vh, max(580px, 56.25vw))" }}>

      {/* Scroll indicator */}
      <div className="absolute left-6 bottom-10 flex flex-col items-center gap-3 z-30 text-[9px] tracking-[0.3em] uppercase text-secondary hidden md:flex">
        <span className="-rotate-90 origin-center mb-6">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <div className="w-full h-1/2 bg-accent absolute top-0 animate-[shimmer_2s_infinite]" />
        </div>
      </div>

      {/* ── Left Content Panel ── */}
      <div className="w-full md:w-[44%] h-full bg-background flex flex-col justify-center px-8 md:pl-[8%] md:pr-8 relative z-10">

        <p className="text-[9px] tracking-[0.22em] uppercase text-secondary mb-6">
          Designed To Endure. Created To Inspire.
        </p>

        <h1 className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-foreground mb-6">
          Timeless <br />Design.<br />
          Unrivaled<br />
          <span className="text-accent italic">Experience.</span>
        </h1>

        <p className="text-secondary text-sm leading-relaxed mb-8 max-w-[28ch]">
          Obsidian Atelier crafts collectible furniture and spaces for those who value artistry, heritage, and the future of design.
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <button className="bg-foreground text-background px-7 py-3.5 text-[10px] tracking-widest uppercase hover:bg-accent transition-colors duration-500">
            Explore Collections
          </button>
          <button className="text-foreground text-[10px] tracking-widest uppercase flex items-center gap-3 group">
            Book Concierge
            <span className="w-8 h-[1px] bg-foreground inline-block group-hover:w-12 transition-all duration-500" />
          </button>
        </div>
      </div>

      {/* ── Right Image Panel ── */}
      <div className="w-full md:w-[56%] h-full bg-[#0e0e0e] relative overflow-hidden">

        {/* Full-bleed chair image */}
        <div ref={chairRef} className="absolute inset-0 scale-[1.04]">
          <Image
            src="/images/hero_chair_v2.png"
            alt="Obsidian Atelier signature chair on stone pedestal"
            fill
            sizes="(max-width: 768px) 100vw, 56vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* 360° label — bottom right */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 text-white">
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase font-semibold leading-tight">360° Immersive Experience</p>
            <p className="text-[8px] tracking-widest text-white/40 uppercase">Drag To Rotate</p>
          </div>
        </div>
      </div>

      {/* ── Award Seal — sits on the split line ── */}
      <div
        ref={awardRef}
        className="absolute top-[38%] left-[44%] -translate-x-1/2 -translate-y-1/2 w-[108px] h-[108px] rounded-full bg-background/85 backdrop-blur-md flex flex-col items-center justify-center z-30 shadow-2xl hidden md:flex"
      >
        <svg className="absolute w-full h-full animate-[spin_22s_linear_infinite]" viewBox="0 0 100 100">
          <path id="awardCurve" fill="transparent" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          <text className="text-[6.5px] uppercase tracking-[0.3em] fill-accent font-semibold">
            <textPath href="#awardCurve" startOffset="0%">
              Awwwards • Site of the Day • FWA •{" "}
            </textPath>
          </text>
        </svg>
        <div className="text-center font-heading text-accent leading-none border border-accent/20 rounded-full w-[76%] h-[76%] flex flex-col items-center justify-center bg-background">
          <span className="block text-lg font-semibold tracking-wide">GOLD</span>
          <span className="block text-[9px] mt-0.5 tracking-widest">WINNER</span>
          <span className="block text-[7px] tracking-widest mt-1.5 border-t border-accent/20 pt-1">2026</span>
        </div>
      </div>

    </section>
  );
}
