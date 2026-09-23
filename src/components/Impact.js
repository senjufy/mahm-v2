import Image from "next/image";

const RISK_MATRIX_DATA = [
  {
    sector: "Water Security",
    percentage: 78,
    severity: "Critical · Quality Crisis",
    barColor: "bg-[#c53030]",
    badgeBg: "bg-[#c53030] text-white",
  },
  {
    sector: "Digital Access & Assets",
    percentage: 58,
    severity: "High · Structural Barrier",
    barColor: "bg-[#e06d53]",
    badgeBg: "bg-[#e06d53] text-white",
  },
  {
    sector: "Income Security",
    percentage: 56,
    severity: "High · Precarity",
    barColor: "bg-[#e06d53]",
    badgeBg: "bg-[#e06d53] text-white",
  },
  {
    sector: "Savings & Financial Resilience",
    percentage: 56,
    severity: "High · Insolvency",
    barColor: "bg-[#e06d53]",
    badgeBg: "bg-[#e06d53] text-white",
  },
  {
    sector: "Sanitation",
    percentage: 55,
    severity: "High · Structural",
    barColor: "bg-[#e06d53]",
    badgeBg: "bg-[#e06d53] text-white",
  },
  {
    sector: "Healthcare",
    percentage: 53,
    severity: "High · Capital Erosion",
    barColor: "bg-[#e06d53]",
    badgeBg: "bg-[#e06d53] text-white",
  },
  {
    sector: "Housing & Structural Safety",
    percentage: 51,
    severity: "High · Climate Risk",
    barColor: "bg-[#e06d53]",
    badgeBg: "bg-[#e06d53] text-white",
  },
  {
    sector: "Food Security",
    percentage: 49,
    severity: "Monitor",
    barColor: "bg-[#e08a1e]",
    badgeBg: "bg-[#e08a1e] text-white",
  },
  {
    sector: "Education",
    percentage: 35,
    severity: "Core",
    barColor: "bg-[#2f855a]",
    badgeBg: "bg-[#2f855a] text-white",
  },
  {
    sector: "Income Diversification",
    percentage: 27,
    severity: "Core",
    barColor: "bg-[#2f855a]",
    badgeBg: "bg-[#2f855a] text-white",
  },
];

const LOGIC_MODEL_STEPS = [
  {
    step: "1",
    title: "Basic Needs",
    description:
      "Stabilise safe water, nutrition, and storm-resistant housing to mitigate the shocks that drain limited capital.",
  },
  {
    step: "2",
    title: "Skills & Market Access",
    description:
      "Market-driven skills and value-chain training let households diversify income beyond the 72.7% single-source dependency.",
  },
  {
    step: "3",
    title: "Financial Inclusion",
    description:
      "Moving from predatory debt to formal savings and tailored products secures liquidity for long-term investment.",
  },
  {
    step: "4",
    title: "Gender Empowerment",
    description:
      "Socio-economic empowerment and community sensitisation grow women's control over household resources.",
  },
];

const STRATEGIC_OBJECTIVES = [
  {
    title: "Economic Stability",
    description:
      "Diversify income to eliminate the 72.7% single-source dependency and bridge the ৳22,299 annual income-to-debt deficit.",
  },
  {
    title: "Access to Basic Needs",
    description:
      "Eradicate arsenic exposure and mitigate the ৳34,739 annual medical expenditure through preventative water security.",
  },
  {
    title: "Future Prospects",
    description:
      "Sustain educational attainment and measurably reduce social precarity and early marriage.",
  },
  {
    title: "Climate Resilience",
    description:
      "Build climate-resilient communities by promoting nature-based farming, sustainable waste management, waste prevention, and practical green practices including clean energy use.",
  },
];

const PILOT_PROGRAMMES = [
  {
    number: "PILOT 1",
    title: "Education & Digital Literacy",
    objective: "Stabilise the Education Continuum and bridge the digital divide.",
    vulnerability: "25.2% irregular attendance; 47.3% lack of connectivity.",
    activities:
      "IT assets, digital literacy training, financial-barrier removal (৳16,247/child/year).",
    isPlaceholder: false,
  },
  {
    number: "PILOT 2",
    title: "Sustainable Livelihood Graduation",
    objective: "Institutionalise income diversification through demand-driven pathways.",
    vulnerability: "72.7% single-source dependency; 48.7% precarious day labour.",
    activities:
      "Livestock rearing and sewing/tailoring, requested by 37% of respondents.",
    isPlaceholder: false,
  },
  {
    number: "PILOT 3",
    title: "Water Security & Health Resilience",
    objective: "Mitigate systemic capital leakage caused by chronic disease.",
    vulnerability: "78% water risk; 44% chronic disease prevalence.",
    activities:
      "Safe water filtration and integrated chronic-disease management.",
    isPlaceholder: false,
  },
  {
    number: "PILOT 4",
    title: "Regenerative Agriculture & Plastic Recovery",
    objective: "Plastic management and regenerative agriculture.",
    vulnerability:
      "Soil health degradation, environmental hazard, and waste dumping.",
    activities:
      "Farmer awareness and training; plastic usage and waste management.",
    isPlaceholder: false,
  },
];

const KPI_DATA = [
  {
    category: "Resilience",
    quantitative: "% reduction in household debt-to-income ratio",
    qualitative: "Increase in self-reported social belonging",
  },
  {
    category: "Education",
    quantitative: "% increase in regular school attendance",
    qualitative: "Documented reduction in early marriage risk",
  },
  {
    category: "Health",
    quantitative: "% decrease in annual medical expenditure",
    qualitative: "Improved self-reported physical well-being",
  },
  {
    category: "Women Empowerment",
    quantitative: "% increase in women's control of household resources",
    qualitative: "Increase in self-reported autonomy / dignity",
  },
  {
    category: "Agriculture",
    quantitative: "% increased green/clean practices among the farmers",
    qualitative: "Improved Soil Health and Produce",
  },
];

const PRIORITY_DATA = [
  {
    group: "Widowed / Female-Headed",
    justification:
      "13.3% of households: acute single-earner dependency and social isolation.",
  },
  {
    group: "The Debt-Insolvent",
    justification:
      "Households with zero savings (82.7%) and debt exceeding annual income.",
  },
  {
    group: "Climate-Vulnerable",
    justification:
      "62% of households will be severely affected by climate change in next 5-7 years.",
  },
  {
    group: "Medical Distress",
    justification:
      "44% household prevalence of heart disease, stroke, or respiratory illness.",
  },
  {
    group: "Large / Dependent Households",
    justification:
      "Families with 4+ children or high elderly-dependency ratios.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="relative w-full scroll-mt-20 overflow-hidden">
      {/* 1. Main Header Banner (Dark Forest Green) - Only "Our Impact" is the Main Title */}
      <div className="bg-[#3f5a30] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#daba7f] block mb-3">
            The Evidence Behind The Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Our Impact
          </h2>
        </div>
      </div>

      {/* Content Canvas */}
      <div className="bg-[#fbf9f2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {/* 2. Subsection: Sector Risk Priority Matrix */}
          <div>
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
                Where The Need Is Greatest
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3f5a30] mb-3 leading-snug">
                Sector Risk Priority Matrix
              </h3>
              <p className="text-sm sm:text-base text-[#2d3a27] leading-relaxed">
                Synthesised from our household assessment, this data dictates
                exactly where our resources go, and where they don&apos;t, yet.
              </p>
            </div>

            {/* Matrix Bars Table */}
            <div className="space-y-3.5">
              {RISK_MATRIX_DATA.map((item) => (
                <div
                  key={item.sector}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 py-1"
                >
                  {/* Sector Name */}
                  <span className="w-full md:w-56 text-sm font-bold text-[#1d2619] shrink-0">
                    {item.sector}
                  </span>

                  {/* Visual Bar Track */}
                  <div className="flex-1 bg-white rounded-full h-7 p-1 border border-[#3f5a30]/10 shadow-2xs overflow-hidden flex items-center">
                    <div
                      className={`h-full rounded-full ${item.barColor} flex items-center justify-end px-3 transition-all duration-700`}
                      style={{ width: `${item.percentage}%` }}
                    >
                      <span className="text-xs font-bold text-white tracking-wide">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Severity Badge */}
                  <div className="w-full md:w-56 flex md:justify-end shrink-0">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${item.badgeBg}`}
                    >
                      {item.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Matrix Explanatory Callout */}
            <div className="bg-[#eef2e6] rounded-2xl p-5 sm:p-6 mt-8 text-xs sm:text-sm text-[#4a5544] leading-relaxed border border-[#3f5a30]/10">
              While Digital Access rates &ldquo;Moderate&rdquo; on the composite
              scale, the 47.3% total lack of connectivity represents a
              foundational bottleneck, a structural barrier to financial
              inclusion, educational continuity, and remote economic
              participation.
            </div>
          </div>

          {/* 3. Deep Dive Comparative Cards: Proximity Crisis vs. Debt Trap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: The Quality-Over-Proximity Crisis */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#3f5a30]/10 border-t-4 border-t-[#e08a1e] shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#1d2619] mb-1">
                  The Quality-Over-Proximity Crisis
                </h4>
                <p className="text-xs sm:text-sm text-[#52604c] mb-6">
                  Water insecurity is a crisis of quality, not geography.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#fbf9f2] rounded-2xl p-4 sm:p-5 text-center border border-[#3f5a30]/10">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#3f5a30] block mb-1">
                      93.3%
                    </span>
                    <span className="text-xs text-[#52604c] leading-tight block">
                      have a water source within 100 metres
                    </span>
                  </div>
                  <div className="bg-[#fbf9f2] rounded-2xl p-4 sm:p-5 text-center border border-[#3f5a30]/10">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#e08a1e] block mb-1">
                      88.7%
                    </span>
                    <span className="text-xs text-[#52604c] leading-tight block">
                      of those sources are unsafe
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#2d3a27] leading-relaxed pt-4 border-t border-[#3f5a30]/10">
                This &ldquo;proximity trap&rdquo; masks a deep public health
                crisis, which is why water security is our foundational
                strategic priority.
              </p>
            </div>

            {/* Card 2: The Debt-Financed Survival Trap */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#3f5a30]/10 border-t-4 border-t-[#e08a1e] shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#1d2619] mb-1">
                  The Debt-Financed Survival Trap
                </h4>
                <p className="text-xs sm:text-sm text-[#52604c] mb-6">
                  The target population is trapped in mathematical insolvency.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#fbf9f2] rounded-2xl p-4 sm:p-5 text-center border border-[#3f5a30]/10">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#3f5a30] block mb-1">
                      ৳142,299
                    </span>
                    <span className="text-xs text-[#52604c] leading-tight block">
                      mean household debt
                    </span>
                  </div>
                  <div className="bg-[#fbf9f2] rounded-2xl p-4 sm:p-5 text-center border border-[#3f5a30]/10">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#e08a1e] block mb-1">
                      ৳120,000
                    </span>
                    <span className="text-xs text-[#52604c] leading-tight block">
                      median annual income
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#2d3a27] leading-relaxed pt-4 border-t border-[#3f5a30]/10">
                A net annual deficit of ৳22,299 per household. With 82.7% holding
                zero savings, families are forced into high-interest debt just to
                survive.
              </p>
            </div>
          </div>

          {/* Panoramic Banner Illustration */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
            <Image
              src="/Impact/impact.jpg"
              alt="Panoramic illustration of rural community life and farming in Bangladesh"
              width={2560}
              height={864}
              sizes="100vw"
              className="w-full h-auto block"
            />
          </div>

          {/* 4. Subsection: Compound Vulnerability */}
          <div>
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
                Compound Vulnerability
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3f5a30] mb-3 leading-snug">
                Deprivation Is Multi-Layered
              </h3>
              <p className="text-sm sm:text-base text-[#2d3a27] leading-relaxed">
                Isolated, siloed interventions fail the households facing
                compound vulnerability across many sectors at once, so we
                don&apos;t design them that way.
              </p>
            </div>

            {/* Segmented Meter */}
            <div className="h-9 w-full rounded-xl overflow-hidden flex shadow-inner my-6">
              <div
                className="bg-[#2f855a] text-white flex items-center justify-center text-xs font-bold"
                style={{ width: "16.7%" }}
              >
                16.7%
              </div>
              <div
                className="bg-[#d69e2e] text-white flex items-center justify-center text-xs font-bold"
                style={{ width: "50.6%" }}
              >
                50.6%
              </div>
              <div
                className="bg-[#c53030] text-white flex items-center justify-center text-xs font-bold"
                style={{ width: "32.7%" }}
              >
                32.7%
              </div>
            </div>

            {/* Meter Legend */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#1d2619] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2f855a] shrink-0" />
                  0–2 high-risk sectors
                </span>
                <span className="text-xs text-[#52604c] ml-4.5">
                  Low compound vulnerability
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#1d2619] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d69e2e] shrink-0" />
                  3–6 high-risk sectors
                </span>
                <span className="text-xs text-[#52604c] ml-4.5">
                  Moderate–High compound vulnerability
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#1d2619] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c53030] shrink-0" />
                  7+ high-risk sectors
                </span>
                <span className="text-xs text-[#52604c] ml-4.5">
                  Severe–Extreme compound vulnerability
                </span>
              </div>
            </div>
          </div>

          {/* 6. Subsection: Our Logic Model (How Change Happens) */}
          <div>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
                Our Logic Model
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3f5a30] leading-snug">
                How Change Happens
              </h3>
            </div>

            {/* 4 Steps Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {LOGIC_MODEL_STEPS.map((item, index) => (
                <div
                  key={item.step}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#3f5a30]/10 shadow-xs flex flex-col justify-between relative group hover:border-[#3f5a30]/30 transition-all duration-200"
                >
                  <div>
                    {/* Step Number Circle */}
                    <div className="w-10 h-10 rounded-full bg-[#3f5a30] text-white flex items-center justify-center font-bold text-sm mb-5 shadow-xs">
                      {item.step}
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-[#1d2619] mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#52604c] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Flow Arrow Indicator (visible on lg screens between cards) */}
                  {index < LOGIC_MODEL_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#fbf9f2] border border-[#3f5a30]/20 text-[#3f5a30] text-xs font-bold text-center leading-6 shadow-2xs">
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Logic Model Callout Quote Box */}
            <div className="bg-[#eef2e6] rounded-2xl p-6 sm:p-7 text-center border border-[#3f5a30]/10 mt-8">
              <p className="text-xs sm:text-sm text-[#2d3a27] italic font-medium leading-relaxed max-w-4xl mx-auto">
                &ldquo;Targeted, multidimensionally poor women and households
                sustainably build resilience against future economic, social,
                and climatic shocks, transitioning from survival mode to
                graduation status.&rdquo;
              </p>
            </div>
          </div>

          {/* 7. Subsection: By 2031 (Strategic Objectives) */}
          <div>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
                By 2031
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3f5a30] leading-snug">
                Strategic Objectives
              </h3>
            </div>

            {/* 4 Strategic Objective Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STRATEGIC_OBJECTIVES.map((obj) => (
                <div
                  key={obj.title}
                  className="bg-white rounded-3xl px-7 sm:px-8 py-9 sm:py-10 min-h-[250px] sm:min-h-[280px] border border-[#3f5a30]/10 border-t-4 border-t-[#3f5a30] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-bold text-[#1d2619] mb-3 sm:mb-4">
                      {obj.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#52604c] leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8. Subsection: Proof of Concept (Our Pilot Programmes) */}
          <div>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
                Proof Of Concept
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3f5a30] leading-snug">
                Our Pilot Programmes
              </h3>
            </div>

            {/* 4 Pilot Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILOT_PROGRAMMES.map((pilot) => (
                <div
                  key={pilot.number}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                    pilot.isPlaceholder
                      ? "bg-[#fbf9f2] border-2 border-dashed border-[#3f5a30]/25"
                      : "bg-white border border-[#3f5a30]/10 shadow-xs"
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e08a1e] block mb-1.5">
                      {pilot.number}
                    </span>
                    <h4
                      className={`text-base sm:text-lg font-bold mb-4 ${
                        pilot.isPlaceholder
                          ? "text-[#52604c] italic"
                          : "text-[#1d2619]"
                      }`}
                    >
                      {pilot.title}
                    </h4>

                    {pilot.isPlaceholder ? (
                      <p className="text-xs text-[#52604c] leading-relaxed">
                        {pilot.placeholderNote}
                      </p>
                    ) : (
                      <div className="space-y-3 pt-1">
                        <div>
                          <strong className="text-xs font-bold text-[#3f5a30] block mb-0.5 uppercase tracking-wider">
                            Objective
                          </strong>
                          <p className="text-xs text-[#52604c] leading-relaxed">
                            {pilot.objective}
                          </p>
                        </div>
                        <div>
                          <strong className="text-xs font-bold text-[#e08a1e] block mb-0.5 uppercase tracking-wider">
                            Vulnerability
                          </strong>
                          <p className="text-xs text-[#52604c] leading-relaxed">
                            {pilot.vulnerability}
                          </p>
                        </div>
                        <div>
                          <strong className="text-xs font-bold text-[#1d2619] block mb-0.5 uppercase tracking-wider">
                            Activities
                          </strong>
                          <p className="text-xs text-[#52604c] leading-relaxed">
                            {pilot.activities}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Spotlight Callout Card: Local-to-Global Coalition */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#3f5a30]/10 border-l-4 border-l-[#e08a1e] shadow-xs mt-10">
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

          {/* 9. Subsection: Measuring What Matters (Key Performance Indicators) */}
          <div>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
                Measuring What Matters
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3f5a30] leading-snug">
                Key Performance Indicators
              </h3>
            </div>

            {/* KPI Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#3f5a30] text-white">
                    <th className="py-3.5 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider text-white border-r border-white/20 w-[18%]">
                      Category
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider text-white border-r border-white/20 w-[45%]">
                      Quantitative Indicator
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider text-white w-[37%]">
                      Qualitative Indicator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {KPI_DATA.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-[#3f5a30]/15 hover:bg-white/40 transition-colors"
                    >
                      <td className="py-4 px-4 sm:px-6 text-sm sm:text-base font-bold text-[#3f5a30]">
                        {row.category}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-[#2d3748]">
                        {row.quantitative}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-[#2d3748]">
                        {row.qualitative}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 10. Subsection: Dignity First Criteria (Who We Prioritise) */}
          <div>
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
                Dignity First Criteria
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3f5a30] leading-snug">
                Who We Prioritise
              </h3>
            </div>

            {/* Prioritisation Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#3f5a30] text-white">
                    <th className="py-3.5 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider text-white border-r border-white/20 w-1/3">
                      Priority Group
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider text-white w-2/3">
                      Data-Driven Justification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRIORITY_DATA.map((row) => (
                    <tr
                      key={row.group}
                      className="border-b border-[#3f5a30]/15 hover:bg-white/40 transition-colors"
                    >
                      <td className="py-4 px-4 sm:px-6 text-sm sm:text-base font-bold text-[#3f5a30]">
                        {row.group}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-[#2d3748]">
                        {row.justification}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Priority Ripple Effect Callout */}
            <div className="bg-[#eef2e6] rounded-2xl p-5 sm:p-6 mt-6 text-xs sm:text-sm text-[#4a5544] leading-relaxed border border-[#3f5a30]/10">
              Empowered families become models of resilience, a critical mass of
              &ldquo;graduated&rdquo; households creates a ripple effect that
              strengthens community citizenship and collective decision-making.
            </div>

            <p className="text-xs text-[#52604c] mt-6 italic">
              Source: MAHM baseline household assessment, 150 households,
              Muksudpur Upazila (Strategic Program Plan, Version 2).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
