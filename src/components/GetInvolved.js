"use client";

import { openDonateModal } from "@/components/DonateModal";

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="relative w-full bg-[#fbf9f2] pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Circular Image */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-12 sm:mb-16 text-center sm:text-left">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md bg-[#eef2e6]">
            <img
              src="/Join/Get_Involved.jpeg"
              alt="Youth participating in community sports and activities"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-1.5">
              Join Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3f5a30] mb-2.5 leading-tight">
              Get Involved
            </h2>
            <p className="text-sm sm:text-base text-[#2d3a27] leading-relaxed max-w-2xl">
              Whether you give, volunteer, or simply share our story, every bit
              of support strengthens the communities we serve.
            </p>
          </div>
        </div>

        {/* 3 Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Donate */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-[#3f5a30]/10 shadow-xs flex flex-col justify-between items-center text-center hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#eef2e6] flex items-center justify-center text-2xl mb-4">
                <span role="img" aria-label="Donate">
                  💚
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1d2619] mb-3">Donate</h3>
              <p className="text-xs sm:text-sm text-[#52604c] leading-relaxed mb-6">
                Your gift funds a specific, costed intervention, from a ৳9,370
                water filter to a ৳16,247 year of schooling.
              </p>
            </div>
            <button
              type="button"
              onClick={openDonateModal}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#e08a1e] hover:bg-[#c97816] text-white font-bold text-sm px-7 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Donate Now
            </button>
          </div>

          {/* Card 2: Volunteer */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-[#3f5a30]/10 shadow-xs flex flex-col justify-between items-center text-center hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#eef2e6] flex items-center justify-center text-2xl mb-4">
                <span role="img" aria-label="Volunteer">
                  🙋
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1d2619] mb-3">Volunteer</h3>
              <p className="text-xs sm:text-sm text-[#52604c] leading-relaxed mb-6">
                Bring your skills to our pilots on the ground, from digital
                literacy training to livelihood coaching.
              </p>
            </div>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#3f5a30] text-[#3f5a30] hover:bg-[#3f5a30] hover:text-white font-bold text-sm px-6 py-2 rounded-lg transition-colors"
            >
              Apply to Volunteer
            </a>
          </div>

          {/* Card 3: Partner */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-[#3f5a30]/10 shadow-xs flex flex-col justify-between items-center text-center hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#eef2e6] flex items-center justify-center text-2xl mb-4">
                <span role="img" aria-label="Partner">
                  🤝
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1d2619] mb-3">Partner</h3>
              <p className="text-xs sm:text-sm text-[#52604c] leading-relaxed mb-6">
                We work best in coalition, local and global. If your
                organisation shares our focus, let&apos;s talk.
              </p>
            </div>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#3f5a30]/80 text-[#1d2619] hover:bg-[#3f5a30] hover:text-white hover:border-[#3f5a30] font-bold text-sm px-6 py-2 rounded-lg transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
