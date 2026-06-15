"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CuratedCollections() {
  const collections = [
    {
      id: "luminara",
      title: "Luminara Collection",
      subtitle: "The essence of modern luxury.",
      image: "/images/collection_luminara.png",
      featured: true,
    },
    {
      id: "soffio",
      title: "Soffio Collection",
      subtitle: "Soft forms. Timeless comfort.",
      image: "/images/collection_soffio.png",
      featured: false,
    },
    {
      id: "solen",
      title: "Solen Collection",
      subtitle: "Sculptural. Bold. Iconic.",
      image: "/images/collection_solen.png",
      featured: false,
    },
  ];

  return (
    <section id="collections" className="w-full bg-[#F7F4EF] pt-32 pb-8 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-secondary mb-4">
              Curated Collections
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl leading-[1.1] text-foreground">
              Pieces That Define <br /> Extraordinary Spaces
            </h2>
          </div>
          <button className="text-xs tracking-widest uppercase flex items-center gap-4 hover:text-accent transition-colors duration-300 group">
            View All Collections
            <span className="w-12 h-[1px] bg-border group-hover:bg-accent transition-all duration-300 relative">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-current rotate-45 origin-right"></span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-current -rotate-45 origin-right"></span>
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:h-[600px]">
          {collections.map((col, i) => (
            <div 
              key={col.id} 
              className={`relative w-full h-[400px] lg:h-full group overflow-hidden bg-dark/5 cursor-pointer ${
                i === 1 ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <Image 
                sizes={i === 1 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                src={col.image}
                alt={col.title}
                fill
                className="object-cover group-hover:scale-105"
                style={{
                  transition: "transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-8 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-[11px] tracking-widest uppercase font-semibold mb-2">{col.title}</h3>
                  <p className="text-white/80 text-xs font-light">{col.subtitle}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-dark transition-all duration-500">
                  <ArrowRight size={16} strokeWidth={1} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
