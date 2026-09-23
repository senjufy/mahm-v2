import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Pillars from "@/components/Pillars";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DonateModal from "@/components/DonateModal";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#fbf9f2]">
      <Header />

      <main className="flex-1">
        {/* Full-bleed Photographic Hero Carousel */}
        <Hero />

        {/* Section: Our Story (Where It Began) */}
        <Story />

        {/* Section: Who We Are (Vision & Mission) */}
        <VisionMission />

        {/* Section: Our Four Pillars (What We Do) */}
        <Pillars />

        {/* Section: Our Team */}
        <Team />

        {/* Section: Our Impact (Data-Driven Baseline & Evidence) */}
        <Impact />

        {/* Section: Get Involved (Join Us) */}
        <GetInvolved />

        {/* Section: Latest News & Updates */}
        {/* <News />*/}

        {/* Section: Contact (Reach Us) */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Donate Modal */}
      <DonateModal />
    </div>
  );
}
