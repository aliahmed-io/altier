"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Items that sit over the dark right panel — white until scrolled
  const darkPanelItem = scrolled
    ? "text-foreground hover:text-accent transition-colors duration-300"
    : "text-white/90 hover:text-white transition-colors duration-300";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Link href="/" className="flex items-center group">
            {/* Custom Brand Logo */}
            <div className="flex items-center justify-center text-foreground group-hover:text-accent transition-colors duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4h8" />
                <path d="M6 20h12" />
                <path d="M12 4v16" />
                <path d="M8 4c2 6 2 10 -2 16" />
                <path d="M16 4c-2 6 -2 10 2 16" />
                <path d="M8 14h8" />
              </svg>
            </div>
            <span className="ml-4 font-heading text-xl tracking-[0.2em] uppercase">Obsidian</span>
          </Link>
          <span className="text-[10px] tracking-[0.3em] text-secondary mt-1 ml-12">Atelier</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-12 text-sm tracking-widest uppercase">
          <Link href="#collections" className="hover:text-accent transition-colors duration-300">Collections</Link>
          <Link href="#materials" className={darkPanelItem}>Materials</Link>
          <Link href="#our-world" className={darkPanelItem}>Our World</Link>
          <Link href="#journal" className={darkPanelItem}>Journal</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-8 text-sm tracking-widest uppercase">
          <Link href="#concierge" className={`hidden md:flex items-center gap-2 ${darkPanelItem}`}>
            Concierge
          </Link>
          <button
            className={darkPanelItem}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1} />
          </button>
        </div>
      </div>
    </nav>
  );
}
