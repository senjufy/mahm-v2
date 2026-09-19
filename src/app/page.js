import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Pillars from "@/components/Pillars";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Impact from "@/components/Impact";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#fbf9f2]">
      <Header />

      <main className="flex-1">
        {/* Full-bleed Photographic Hero Carousel */}
        <Hero />

        {/* Section: Who We Are (Vision & Mission) */}
        <VisionMission />

        {/* Section: Our Four Pillars (What We Do) */}
        <Pillars />

        {/* Section: Our Story (Where It Began) */}
        <Story />

        {/* Section: Our Team */}
        <Team />

        {/* Section: Our Impact (Data-Driven Baseline & Evidence) */}
        <Impact />

        {/* Anchor stub targets for remaining sections */}
        <div id="get-involved" className="h-16" />
        <div id="news" className="h-16" />
        <div id="contact" className="h-16" />
      </main>
    </div>
  );
}
