"use client";

import Image from "next/image";

export default function Philosophy() {
  const cards = [
    {
      id: "01",
      title: "Crafted By Masters",
      description: "Honoring tradition, perfected through modern mastery. Every curve and joint is a testament to human skill.",
      image: "/images/craft_philosophy.png",
    },
    {
      id: "02",
      title: "Finest Materials",
      description: "We source rare, honest, and responsible materials. Leather that ages beautifully, wood that carries history.",
      image: "/images/material_leather.png",
    },
    {
      id: "03",
      title: "Design With Intent",
      description: "Every piece is born from a vision, shaped by purpose. Not merely furniture, but functional sculpture.",
      image: "/images/design_intent.png",
    },
  ];

  return (
    <section id="our-world" className="w-full bg-background py-32 px-8">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-24">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-8">
            Our Philosophy
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8">
            Where Artistry <br /> Meets Purpose
          </h2>
          <p className="text-secondary leading-relaxed mb-12 max-w-sm">
            We believe true luxury lies in meaning. Every curve, every texture, every seam is a tribute to human skill and a commitment to beauty that lasts.
          </p>
          <div>
            <button className="text-xs tracking-widest uppercase flex items-center gap-4 hover:text-accent transition-colors duration-300 group">
              Discover Our World
              <span className="w-8 h-[1px] bg-foreground group-hover:bg-accent group-hover:w-12 transition-all duration-300"></span>
            </button>
          </div>
        </div>

        {/* Right Column - Image Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-dark/5 mb-6">
                <Image sizes="(max-width: 768px) 100vw, 50vw"
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-500" />
              </div>
              <div className="border-t border-border pt-4">
                <span className="text-[10px] text-secondary font-medium tracking-widest block mb-3">{card.id}</span>
                <h3 className="text-sm tracking-widest uppercase font-semibold mb-2">{card.title}</h3>
                <p className="text-xs text-secondary leading-relaxed pr-4">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
