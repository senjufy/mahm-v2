import Image from "next/image";

const TOP_ROW_SLOTS = [
  { id: 1, name: "[ Name ]", role: "[ ROLE ]" },
  { id: 2, name: "[ Name ]", role: "[ ROLE ]" },
  { id: 3, name: "[ Name ]", role: "[ ROLE ]" },
];

const BOTTOM_ROW_SLOTS = [
  { id: 4, name: "[ Name ]", role: "[ ROLE ]" },
  { id: 5, name: "[ Name ]", role: "[ ROLE ]" },
  { id: 6, name: "[ Name ]", role: "[ ROLE ]" },
  { id: 7, name: "[ Name ]", role: "[ ROLE ]" },
  { id: 8, name: "[ Name ]", role: "[ ROLE ]" },
];

function TeamMemberSlot({ member, isSmall = false }) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Circular Avatar Placeholder */}
      <div
        className={`relative rounded-full bg-gradient-to-b from-[#eef2e6] to-[#dbe4cd] border-2 border-[#3f5a30]/25 shadow-inner flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
          isSmall
            ? "w-20 h-20 sm:w-24 sm:h-24"
            : "w-28 h-28 sm:w-32 sm:h-32"
        }`}
      >
        <span
          className={`font-bold uppercase tracking-widest text-[#52604c] ${
            isSmall ? "text-[10px]" : "text-[11px] sm:text-xs"
          }`}
        >
          Photo
        </span>
      </div>

      {/* Member Details */}
      <span
        className={`font-bold text-[#1d2619] leading-snug mt-2.5 ${
          isSmall ? "text-sm sm:text-[15px]" : "text-base sm:text-[17px]"
        }`}
      >
        {member.name}
      </span>
      <span
        className={`font-semibold tracking-wider text-[#e08a1e] uppercase ${
          isSmall ? "text-[11px]" : "text-xs mt-0.5"
        }`}
      >
        {member.role}
      </span>
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative w-full bg-[#fbf9f2] pt-8 sm:pt-12 pb-16 sm:pb-24 scroll-mt-20 overflow-hidden"
    >
      {/* Illustrated Header Banner with Overlaid Title */}
      <div className="relative w-full overflow-hidden">
        {/* Full-width illustration */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <Image
            src="/Teams/teams.jpg"
            alt="Hand-drawn illustration of teachers, students, engineers, and community workers"
            width={2048}
            height={768}
            sizes="100vw"
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* Floating Centered Title - Positioned a tad bit higher */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-16 sm:pb-28 lg:pb-36 -translate-y-2 sm:-translate-y-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#e08a1e] drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)]">
            Our Team
          </h2>
        </div>
      </div>

      {/* Team Member Slots Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: 3 Members (brought down slightly so less sits above image, increased space) */}
        <div className="relative z-10 -mt-3 sm:-mt-5 lg:-mt-7 max-w-4xl mx-auto flex flex-wrap justify-center sm:justify-around gap-y-8 gap-x-16 sm:gap-x-28 lg:gap-x-44 mb-12 sm:mb-16">
          {TOP_ROW_SLOTS.map((member) => (
            <TeamMemberSlot key={member.id} member={member} isSmall={false} />
          ))}
        </div>

        {/* Bottom Row: 5 Members (smaller circle size, spreads out wider across the container) */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center sm:justify-between gap-y-8 gap-x-6 sm:gap-x-10 lg:gap-x-12 px-2 sm:px-6 mb-14 sm:mb-18">
          {BOTTOM_ROW_SLOTS.map((member) => (
            <TeamMemberSlot key={member.id} member={member} isSmall={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
