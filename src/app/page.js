"use client"

import Business from "@/components/Business/Business";
import Social from "@/components/Social/Social";
import Hero from "@/components/Hero/Hero";
import Tool from "@/components/Tool/Tool";
import Agency from "@/components/Agency/Agency";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 bg-white pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Business />
        <Hero />
        <Social />
        <Tool />
        <Agency/>
       </main>
    </div>
  );
}
