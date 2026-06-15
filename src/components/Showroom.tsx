"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Showroom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && imageRef.current) {
      gsap.to(imageRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="w-full h-[80vh] md:h-screen relative overflow-hidden bg-dark flex items-center justify-center">
      <div className="absolute inset-0 z-0 scale-[1.2]">
        <Image sizes="(max-width: 768px) 100vw, 50vw"
          ref={imageRef}
          src="/images/showroom_interior.png"
          alt="Luxury Showroom"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-dark/40 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-8">
          The Immersive Showroom
        </p>
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
          Step Into A World <br /> Of Meaningful Spaces
        </h2>
      </div>
    </section>
  );
}
