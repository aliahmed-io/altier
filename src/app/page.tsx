"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Philosophy from "@/components/Philosophy";
import ClientConfigurator from "@/components/ClientConfigurator";
import CuratedCollections from "@/components/CuratedCollections";
import MaterialLibrary from "@/components/MaterialLibrary";
import Awards from "@/components/Awards";
import Showroom from "@/components/Showroom";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Philosophy />
      <ClientConfigurator />
      <CuratedCollections />
      <MaterialLibrary />
      <Awards />
      <Showroom />

      <Footer />
    </main>
  );
}
