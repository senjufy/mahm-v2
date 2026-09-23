export default function Story() {
  return (
    <section
      id="story"
      className="relative w-full bg-[#fbf9f2] pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 scroll-mt-20 overflow-hidden"
    >
      <span id="about" className="absolute -top-20" aria-hidden="true" />

      {/* Main Narrative & Ethos Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Story Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#e08a1e] block mb-3">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#3f5a30] tracking-tight leading-[1.15] mb-6 sm:mb-8">
              Where It Began
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#2d3a27] leading-relaxed font-normal text-left">
              <p>
                MAHM&apos;s story began with one head teacher&apos;s insight. Moulovi Abdul Hye, a dedicated primary school teacher, and his son Ali Azam, an engineer and Liberation War veteran, saw clearly what many still overlook: that education and poverty are inseparably linked.
              </p>
              <p>
                That conviction led them to found their first school in 1996, and two years later, in 1998, to formally establish the Trust that carries their vision forward today, still rooted, generation after generation, in local empowerment.
              </p>
            </div>
          </div>

          {/* Right Column: Philosophy Quote Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-sm border border-[#3f5a30]/10 border-l-4 border-l-[#e08a1e]">
              <blockquote className="italic text-xl sm:text-2xl font-bold text-[#1d2619] mb-3 leading-snug">
                &ldquo;Mastery in Servitude.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-[#4a5544] leading-relaxed">
                The philosophy at the heart of everything we do: excellence is only meaningful when it advances the lives of the most marginalised.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
