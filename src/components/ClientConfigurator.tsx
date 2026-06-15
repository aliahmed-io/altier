"use client";

import dynamic from "next/dynamic";

const SignatureExperience = dynamic(() => import("./SignatureExperience"), {
  ssr: false,
  loading: () => (
    <div className="w-full min-h-screen bg-[#111111] flex flex-col items-center justify-center text-white/40 text-[10px] tracking-[0.2em] uppercase">
      Loading Configurator...
    </div>
  ),
});

export default function ClientConfigurator() {
  return <SignatureExperience />;
}
