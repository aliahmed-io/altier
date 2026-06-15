"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { ChairModel } from "./ChairModel";

interface ThemePreset {
  id: string;
  name: string;
  color: string;
  swatchColor: string;
  description: string;
}

const THEME_PRESETS: ThemePreset[] = [
  {
    id: "classic",
    name: "Classic Atelier",
    color: "#ffffff",
    swatchColor: "#e0e0e0",
    description: "Signature luxury alabaster and walnut"
  },
  {
    id: "obsidian",
    name: "Obsidian Noir",
    color: "#2a2a2a",
    swatchColor: "#2a2a2a",
    description: "Sleek, minimalist dark charcoal palette"
  },
  {
    id: "sage-oak",
    name: "Sage & Warm Oak",
    color: "#5c5e53",
    swatchColor: "#5c5e53",
    description: "Serene nature-inspired organic tones"
  },
  {
    id: "monaco-blue",
    name: "Monaco Blue",
    color: "#1d2a3a",
    swatchColor: "#1d2a3a",
    description: "Deep indigo velvet and dark details"
  },
  {
    id: "tuscan-rust",
    name: "Tuscan Warmth",
    color: "#a95c42",
    swatchColor: "#a95c42",
    description: "Rich terracotta rust and espresso wood"
  }
];

export default function SignatureExperience() {
  const [activePreset, setActivePreset] = useState<ThemePreset>(THEME_PRESETS[0]);

  return (
    <section className="w-full min-h-screen bg-[#111111] flex flex-col xl:flex-row relative overflow-hidden">
      
      {/* Left Content */}
      <div className="w-full xl:w-1/3 flex flex-col justify-center px-8 md:px-16 py-20 z-10">
        <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-semibold mb-6">
          Immersive Experience
        </p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Explore Design <br /> Like Never Before
        </h2>
        <p className="text-white/60 text-sm max-w-sm mb-12 leading-relaxed">
          Interact, customize and visualize our pieces in stunning detail.
        </p>
        <button className="text-white text-[10px] tracking-widest uppercase flex items-center gap-3 group w-fit font-semibold">
          Launch Experience
          <span className="w-6 h-[1px] bg-white group-hover:bg-accent group-hover:w-8 transition-all duration-300 relative">
             <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-current rotate-45 origin-right"></span>
             <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-[1px] bg-current -rotate-45 origin-right"></span>
          </span>
        </button>
      </div>

      {/* Center 3D Canvas */}
      <div className="w-full xl:w-1/3 h-[50vh] xl:h-screen relative z-0 flex items-center justify-center touch-none">
        {/* Subtle background glow/pedestal rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-white/5 top-[60%] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full border border-accent/20 top-[60%] pointer-events-none"></div>
        
        <Canvas 
          shadows="percentage" 
          dpr={[1, 2]} 
          camera={{ position: [0, 0.15, 2.8], fov: 35 }} 
          className="touch-none"
        >
          <Suspense fallback={null}>
            <Environment preset="city" />
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow shadow-mapSize={2048} />
            <spotLight position={[-10, 10, 10]} angle={0.2} penumbra={1} intensity={0.5} />
            
            <ChairModel 
              color={activePreset.color} 
              position={[0, -0.15, 0]}
            />
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={1.8}
              maxDistance={3.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.8}
              enableDamping={true}
              dampingFactor={0.05}
              target={[0, -0.15, 0]}
            />
            <ContactShadows
              position={[0, -0.49, 0]}
              opacity={0.45}
              scale={2.5}
              blur={2}
              far={1}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Right Customization Panel */}
      <div className="w-full xl:w-1/3 flex flex-col justify-center px-8 md:px-16 py-20 z-10 xl:pl-24">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-white/80 font-semibold mb-12">
          Customize Your Piece
        </h3>
        
        {/* Designer Collections */}
        <div className="mb-16 flex flex-col gap-4">
          <p className="text-[10px] tracking-widest uppercase text-white/60 mb-2">Designer Collections</p>
          <div className="flex flex-col gap-4">
            {THEME_PRESETS.map((preset) => {
              const isActive = activePreset.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => setActivePreset(preset)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg border text-left transition-all duration-500 bg-[#1a1a1a]/40 hover:bg-[#1a1a1a]/80 group ${
                    isActive 
                      ? 'border-accent/80 shadow-[0_0_15px_rgba(200,169,126,0.1)]' 
                      : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Premium Single-Color Swatch */}
                    <div 
                      className="w-12 h-12 rounded-full border border-white/10 shadow-inner shrink-0 transition-colors duration-500" 
                      style={{ backgroundColor: preset.swatchColor }}
                    />
                    
                    <div className="flex flex-col gap-2">
                      <span className="text-white text-xs font-semibold uppercase tracking-widest transition-colors duration-300 group-hover:text-accent">
                        {preset.name}
                      </span>
                      <span className="text-white/40 text-[9px] uppercase tracking-wider leading-none">
                        {preset.description}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center pr-2">
                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      isActive ? 'bg-accent scale-100 shadow-[0_0_8px_#c8a97e]' : 'bg-white/10 scale-50 group-hover:scale-75'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <button className="text-white text-[10px] tracking-widest uppercase flex items-center gap-4 group font-semibold w-fit">
          View In Your Space
          <div className="w-8 h-[1px] bg-white group-hover:bg-accent transition-colors duration-300 relative flex items-center justify-center">
            {/* AR Cube Icon SVG overlaying the line */}
            <div className="absolute right-[-10px] bg-[#111111] px-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-accent transition-colors">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
          </div>
        </button>

      </div>
    </section>
  );
}
