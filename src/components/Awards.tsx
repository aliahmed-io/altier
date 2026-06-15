"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Awards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Counter animation for stats
      statsRef.current.forEach((stat) => {
        if (!stat) return;
        const targetValue = parseFloat(stat.getAttribute("data-value") || "0");
        
        gsap.to(stat, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          innerHTML: targetValue,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          onUpdate: function () {
            stat.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toString() + (stat.getAttribute("data-suffix") || "");
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#111111] text-white py-16 px-8 border-y border-white/10">
      <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">
        
        {/* Left: Title */}
        <div className="w-full xl:w-1/4 flex flex-col">
          <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-semibold mb-4">
            Recognized Worldwide
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white">
            Awarded For <br /> Excellence
          </h2>
        </div>

        {/* Middle: Awards Logos */}
        <div className="w-full xl:w-2/4 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          
          {/* Logo 1: iF Style */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 bg-white text-[#111111] flex items-center justify-center font-bold text-3xl font-sans tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <span className="relative -top-1">iF</span>
            </div>
            <div className="text-center">
              <p className="text-[9px] tracking-widest uppercase font-semibold text-white/80">Gold Award</p>
              <p className="text-[8px] tracking-widest text-white/50 mt-1">2024</p>
            </div>
          </div>

          {/* Logo 2: Globe Style */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 10C27.9 10 10 27.9 10 50c0 19.3 13.6 35.4 31.8 39.3v-8.2c-13.6-3.6-23.6-16-23.6-31.1 0-17.7 14.3-32 32-32s32 14.3 32 32c0 15.1-10 27.5-23.6 31.1v8.2C76.4 85.4 90 69.3 90 50 90 27.9 72.1 10 50 10zm11.5 54.8c-2 8.7-9.8 15.2-19 15.2-10.8 0-19.6-8.8-19.6-19.6 0-9.2 6.5-17 15.2-19l3 12.5-14.2 3.4 1.8 7.3 14.2-3.4 3.4 14.2 7.3-1.8-3.4-14.2 14.2-3.4-1.8-7.3-14.2 3.4-3-12.5-7.3 1.8 3 12.5z" />
                <path d="M50 2C23.5 2 2 23.5 2 50s21.5 48 48 48 48-21.5 48-48S76.5 2 50 2zm0 88c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
                <path d="M69.5 43.8l-1.8-7.3-14.2 3.4-3-12.5-7.3 1.8 3 12.5-14.2 3.4 1.8 7.3 14.2-3.4 3.4 14.2 7.3-1.8-3.4-14.2 14.2-3.4z"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[9px] tracking-widest uppercase font-semibold text-white/80">Best of the Best</p>
              <p className="text-[8px] tracking-widest text-white/50 mt-1">2024</p>
            </div>
          </div>

          {/* Logo 3: A' Design Style */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 bg-white text-[#111111] flex items-center justify-center relative opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <svg width="40" height="40" viewBox="0 0 100 100">
                <polygon points="50,15 85,85 15,85" fill="#111111" />
                <circle cx="50" cy="55" r="15" fill="white" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[9px] tracking-widest uppercase font-semibold text-white/80">A{"'"}Design Award</p>
              <p className="text-[8px] tracking-widest text-white/50 mt-1">2024</p>
            </div>
          </div>

          {/* Logo 4: IDA Style */}
          <div className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
                <text x="15" y="60" fontSize="36" fontFamily="serif" fontWeight="bold" letterSpacing="-2">IDA</text>
                <path d="M75 25 C85 40 85 60 75 75" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M80 30 C88 45 88 55 80 70" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[9px] tracking-widest uppercase font-semibold text-white/80">Honorable Mention</p>
              <p className="text-[8px] tracking-widest text-white/50 mt-1">2023</p>
            </div>
          </div>

        </div>

        {/* Right: Stats */}
        <div className="w-full xl:w-1/4 flex items-center justify-between md:justify-end gap-12">
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <h3 className="font-heading text-4xl text-accent">
              <span ref={(el) => { statsRef.current[0] = el; }} data-value="12" data-suffix="+">0</span>
            </h3>
            <p className="text-[8px] tracking-[0.2em] uppercase text-white/50">Years of Heritage</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <h3 className="font-heading text-4xl text-accent">
              <span ref={(el) => { statsRef.current[1] = el; }} data-value="250" data-suffix="+">0</span>
            </h3>
            <p className="text-[8px] tracking-[0.2em] uppercase text-white/50">Bespoke Projects</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <h3 className="font-heading text-4xl text-accent">
              <span ref={(el) => { statsRef.current[2] = el; }} data-value="48" data-suffix="">0</span>
            </h3>
            <p className="text-[8px] tracking-[0.2em] uppercase text-white/50">Countries Served</p>
          </div>

        </div>
      </div>
    </section>
  );
}
