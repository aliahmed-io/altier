"use client";

import Image from "next/image";

export default function ConciergeCTA() {
  return (
    <section id="concierge" className="w-full bg-[#F7F4EF] flex flex-col md:flex-row">
      {/* Left Image Half */}
      <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-[700px] bg-dark/5">
        <Image sizes="(max-width: 768px) 100vw, 50vw"
          src="/images/concierge_sideboard.png"
          alt="Design Process"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content Half */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 py-24 md:py-32">
        <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-6 font-semibold">
          Beyond Furniture. Beyond Expectations.
        </p>
        <h2 className="font-heading text-4xl lg:text-5xl leading-[1.2] text-foreground mb-6">
          Let{"'"}s Create Something <br /> Extraordinary Together
        </h2>
        <p className="text-secondary text-sm leading-relaxed max-w-md mb-12">
          Whether you are designing a single room or a complete space, our team is here to bring your vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
          <button className="bg-[#111111] text-white px-8 py-5 text-[10px] tracking-widest uppercase hover:bg-accent transition-colors duration-500 font-semibold text-center whitespace-nowrap">
            Book A Private Consultation
          </button>
          <button className="text-foreground text-[10px] tracking-widest uppercase flex items-center gap-4 group font-semibold whitespace-nowrap">
            Chat With AI Concierge
            <span className="w-8 h-[1px] bg-foreground group-hover:bg-accent transition-colors duration-500 relative">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-current rotate-45 origin-right"></span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-current -rotate-45 origin-right"></span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
