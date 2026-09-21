import Image from "next/image";

const PILLARS_DATA = [
  {
    icon: "🌱",
    title: "Inclusive Growth",
    description:
      "We open fair pathways to economic participation, shaping each programme, integrated or stand-alone, around what a community actually needs to thrive sustainably.",
    image: "/Pillars/pillar-1.jpeg",
    imageAlt: "Farmer planting seedlings in the field",
    label: "Inclusive Growth",
  },
  {
    icon: "📚",
    title: "Education Continuum",
    description:
      "From the first day of school to lifelong learning, we work to keep the classroom door open so no child's education is interrupted by circumstance.",
    image: "/Pillars/pillar-2.jpeg",
    imageAlt: "Students commuting and studying together",
    label: "Education Continuum",
  },
  {
    icon: "🤝",
    title: "Women's Livelihood & Financial Empowerment",
    description:
      "We strengthen women's skills, income pathways, and support networks, building the financial independence that helps prevent early marriage.",
    image: "/Pillars/pillar-3.jpeg",
    imageAlt: "Woman managing dairy and livestock in Muksudpur",
    label: "Women's Livelihood",
  },
  {
    icon: "🌾",
    title: "Sustainable Agriculture, Fisheries & Food Security",
    description:
      "We help farming and fishing households produce and earn sustainably, including our local-to-global coalition work on chemicals and waste management to protect the land they depend on.",
    image: "/Pillars/pillar-4.jpeg",
    imageAlt: "Smiling woman carrying harvested fresh produce",
    label: "Sustainable Agriculture",
  },
];

const PRINCIPLES_DATA = [
  {
    number: "01",
    title: "Dignity First",
    description:
      "We don't work with passive beneficiaries. Every participant is an active decision-maker, our role is to open doors, not create dependency.",
  },
  {
    number: "02",
    title: "Holistic & Systems-Based",
    description:
      "Poverty is never just one problem. We treat education, livelihoods, health, and environment as connected parts of the same picture.",
  },
  {
    number: "03",
    title: "Multi-Generational Stewardship",
    description:
      "Rooted in decades of continuity, we adapt every year to new challenges, from climate vulnerability to shifting local economies.",
  },
  {
    number: "04",
    title: "Mastery in Servitude",
    description:
      "Our guiding philosophy: excellence only means something when it advances the sustainable development of the most marginalised.",
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      className="relative w-full bg-[#fbf9f2] pt-16 sm:pt-20 lg:pt-20 pb-16 sm:pb-20 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-5xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#e08a1e] block mb-3">
            Our Four Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#3f5a30] tracking-tight leading-[1.15] mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-[#2d3a27] leading-relaxed">
            Everything we build stands on four interconnected pillars, because lasting change rarely comes from just one direction.
          </p>
        </div>

        {/* 4 Pillars Card Grid (with green top border line) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#3f5a30]/10 border-t-4 border-t-[#3f5a30] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#eef2e6] flex items-center justify-center text-2xl mb-5">
                  <span role="img" aria-label={pillar.title}>
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1d2619] mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#4a5544] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Documentary Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {PILLARS_DATA.map((pillar) => (
            <div key={pillar.label} className="flex flex-col group">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xs border border-[#3f5a30]/10 bg-[#eef2e6]">
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mt-3 text-xs sm:text-[13px] font-medium text-[#52604c] text-center">
                {pillar.label}
              </span>
            </div>
          ))}
        </div>

        {/* Spotlight Callout Card: Local-to-Global Coalition */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#3f5a30]/10 border-l-4 border-l-[#e08a1e] shadow-xs">
          <div className="flex flex-col md:flex-row items-start gap-5 sm:gap-6">
            <div className="w-12 h-12 shrink-0 rounded-full bg-[#eef2e6] flex items-center justify-center text-2xl">
              <span role="img" aria-label="Globe">
                🌍
              </span>
            </div>

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
                Local-to-Global Coalition · Under Sustainable Agriculture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3f5a30] mb-3 leading-snug">
                Chemicals &amp; Waste Management: Tackling Agricultural Plastic Pollution
              </h3>
              <p className="text-sm sm:text-base text-[#2d3a27] leading-relaxed">
                Through our local-to-global coalition on chemicals and waste management, we&apos;re tackling one of agriculture&apos;s most overlooked problems: plastic pollution left in the field. In Bangladesh, we&apos;re building a circular, commercially viable recovery system that brings farmers and the private sector into the same value chain, pairing a targeted, incentivised collection model with an AI-based decision-support tool that adjusts collection logistics and pricing in real time. The result is a verifiable chain running from farmer training all the way to final recycling. On the ground, that means measurably less plastic waste left in the field, an end to open burning, and healthier soil for the next season&apos;s harvest.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Panoramic Banner Illustration - Mulching Film in Agriculture (sit ABOVE Our Principles section, 100vw edge-to-edge) */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-12 sm:my-16 lg:my-20 overflow-hidden">
        <Image
          src="/Pillars/Mulching_Film_in_Agro.png"
          alt="Agricultural plastic mulching film and solar irrigation in rural Bangladesh"
          width={2560}
          height={864}
          sizes="100vw"
          className="w-full h-auto block"
        />
      </div>

      {/* Our Principles: How We Work (Contained in sage panel, now sits BELOW the panoramic illustration) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#eef2e6] rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
              Our Principles
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#3f5a30] mb-3 leading-snug">
              How We Work
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES_DATA.map((principle) => (
              <div
                key={principle.number}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#3f5a30]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-sm font-bold text-[#e08a1e] block mb-2">
                    {principle.number}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#1d2619] mb-2 leading-snug">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4a5544] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
