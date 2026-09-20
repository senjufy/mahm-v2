const NEWS_ITEMS = [
  {
    id: 1,
    date: "[ DATE ]",
    title: "[ Article Title ]",
    summary:
      "[ One-line summary of the story, a pilot milestone, a partnership, a field update. ]",
  },
  {
    id: 2,
    date: "[ DATE ]",
    title: "[ Article Title ]",
    summary: "[ One-line summary of the story. ]",
  },
  {
    id: 3,
    date: "[ DATE ]",
    title: "[ Article Title ]",
    summary: "[ One-line summary of the story. ]",
  },
];

export default function News() {
  return (
    <section
      id="news"
      className="relative w-full bg-[#fbf9f2] pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
            Latest
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3f5a30] leading-tight">
            News &amp; Updates
          </h2>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#3f5a30]/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-200 group"
            >
              {/* Photo Placeholder Container */}
              <div className="w-full aspect-[16/10] bg-[#cbd9be] flex items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-[#52604c]/75">
                  Photo
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#e08a1e] block mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#1d2619] mb-3 leading-snug group-hover:text-[#3f5a30] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52604c] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-10 sm:mt-14">
          <a
            href="#news"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1d2619] hover:text-[#e08a1e] transition-colors"
          >
            View All News &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
