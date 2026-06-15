"use client";

import Image from "next/image";

export default function MaterialLibrary() {
  const materials = [
    {
      id: "stone",
      title: "Natural Stone",
      subtitle: "Hand-selected.",
      image: "/images/material_stone.png",
    },
    {
      id: "wood",
      title: "Solid Wood",
      subtitle: "Sustainably sourced.",
      image: "/images/material_wood.png",
    },
    {
      id: "metal",
      title: "Precious Metals",
      subtitle: "Finely finished.",
      image: "/images/material_metal.png",
    },
    {
      id: "fabric",
      title: "Luxury Fabrics",
      subtitle: "Tactile. Refined.",
      image: "/images/material_fabric_v2.png",
    },
  ];

  return (
    <section id="materials" className="w-full bg-[#F7F4EF] pt-8 pb-32 px-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-0">
        
        {/* Left Column */}
        <div className="w-full lg:w-[330px] shrink-0">
          <p className="text-[9px] tracking-[0.2em] uppercase text-secondary mb-4 font-semibold">
            Exceptional In Every Detail
          </p>
          <h2 className="font-heading text-4xl leading-[1.1] text-foreground">
            &apos;The Beauty <br /> Is In &apos;The Details
          </h2>
        </div>

        {/* Swatches Container */}
        <div className="w-full lg:w-[960px] grid grid-cols-2 md:grid-cols-4 gap-4">
          {materials.map((mat, i) => (
            <div key={i} className="w-full group cursor-pointer">
              <div className="w-full aspect-square relative overflow-hidden bg-dark/5 mb-4">
                <Image sizes="(max-width: 768px) 100vw, 25vw"
                  src={mat.image}
                  alt={mat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>
              <h3 className="text-[9px] tracking-[0.1em] uppercase font-bold mb-2 text-foreground">{mat.title}</h3>
              <p className="text-[10px] font-light text-secondary">{mat.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA Link Column */}
        <div className="hidden lg:flex lg:w-[150px] shrink-0 justify-end">
             <button className="flex items-center gap-4 group hover:text-accent transition-colors duration-300 w-fit whitespace-nowrap mb-1">
               <span className="text-[8px] tracking-[0.2em] uppercase text-secondary/90 font-bold">
                 Explore Materials
               </span>
               <span className="relative w-8 h-[1px] bg-secondary/50 group-hover:bg-accent transition-colors duration-300">
                 <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-current rotate-45 origin-right"></span>
                 <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-current -rotate-45 origin-right"></span>
               </span>
             </button>
        </div>
      </div>
    </section>
  );
}
