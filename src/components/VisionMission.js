import Image from "next/image";

export default function VisionMission() {
  return (
    <section id="about" className="relative w-full bg-[#fbf9f2] pt-16 sm:pt-20 lg:pt-24 scroll-mt-20 overflow-hidden">
      {/* 2-Column Content Grid: Text & Photo (constrained to max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#e08a1e] mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#3f5a30] tracking-tight leading-[1.15] mb-6 sm:mb-8">
              Our Vision &amp; Mission
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#2d3a27] leading-relaxed font-normal text-left">
              <p>
                We believe every community already holds the strength to build its own future our role is to help that strength take root. MAHM is committed to institutionalising community resilience and strengthening human capital, so families are equipped to withstand shocks instead of merely surviving them.
              </p>
              <p>
                Our vision is simple to state and ambitious to achieve: self-reliant, gender-equitable, future-ready communities with youth and women leading the way as the primary architects of their own change.
              </p>
            </div>
          </div>

          {/* Right Column: Photo & Editorial Caption */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/Vision/why_our_work_matters_MAHM_Trust.jpg"
                alt="Women leading a community planning session in Muksudpur"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs sm:text-[13px] text-[#5e6b57] italic leading-snug">
              Women leading a household planning session the everyday reality behind the strategy.
            </p>
          </div>
        </div>
      </div>

      {/* Panoramic Banner Illustration - Stretches full 100vw edge-to-edge */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 sm:mt-16 lg:mt-20 overflow-hidden">
        <Image
          src="/Vision/Mission_Vission_MAHM_TRUST.png"
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
