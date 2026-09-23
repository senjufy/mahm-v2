import Image from "next/image";

export default function VisionMission() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#fbf9f2] pt-16 sm:pt-20 lg:pt-24 scroll-mt-20 overflow-hidden"
    >
      {/* Full-width Narrative Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#e08a1e] block mb-3">
          Who We Are
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#3f5a30] tracking-tight leading-[1.15] mb-6 sm:mb-8">
          Our Vision &amp; Mission
        </h2>

        <div className="w-full text-base sm:text-lg lg:text-xl text-[#2d3a27] leading-relaxed font-normal text-justify">
          <p className="text-justify">
            Every community has the strength to shape its own future. Our vision
            is clear and ambitious: self-reliant, gender-equitable,
            climate-resilient and future-ready communities. We strengthen human
            capital and institutionalise resilience within communities. We
            promote environmental sustainability and climate resilience. Our
            mission is to work with vulnerable families to build their resources
            for secure and sustainable futures.
          </p>
        </div>
      </div>

      {/* Panoramic Banner Illustration - Stretches full 100vw edge-to-edge */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 sm:mt-16 lg:mt-20 overflow-hidden">
        <Image
          src="/Vision/Mission_Vission_MAHM_TRUST.jpg"
          alt="Panoramic illustration of community life, education, agriculture, and future growth in Bangladesh"
          width={2560}
          height={864}
          sizes="100vw"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
