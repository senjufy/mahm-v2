"use client";

import { useState } from "react";

const CONTACT_CHANNELS = [
  {
    icon: "📍",
    label: "Address",
    value: "374 (5th Floor), Tejgaon I/A, Dhaka - 1208",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "02-55029739",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@mahmtrust.org",
  },
  {
    icon: "🕐",
    label: "Office Hours",
    value: "10am To 5pm",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#fbf9f2] pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e08a1e] block mb-2">
            Reach Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3f5a30] leading-tight">
            Contact
          </h2>
        </div>

        {/* Two-Column Grid: Left Channels, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {CONTACT_CHANNELS.map((item) => (
              <div key={item.label} className="flex items-start gap-4 sm:gap-5">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#eef2e6] border border-[#3f5a30]/10 flex items-center justify-center text-xl shadow-2xs">
                  <span role="img" aria-label={item.label}>
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1d2619] leading-snug">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52604c] mt-0.5">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Inquiry Message Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-10 border border-[#3f5a30]/10 shadow-xs">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#eef2e6] text-[#3f5a30] flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-[#1d2619]">
                  Thank You
                </h4>
                <p className="text-sm text-[#52604c] max-w-md mx-auto">
                  Your message has been received. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-[#1d2619] block mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#faf9f5] border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#1d2619] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#3f5a30]/30 focus:border-[#3f5a30] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-[#1d2619] block mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-[#faf9f5] border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#1d2619] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#3f5a30]/30 focus:border-[#3f5a30] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-[#1d2619] block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full bg-[#faf9f5] border border-[#e5e7eb] rounded-xl px-4 py-3 text-sm text-[#1d2619] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#3f5a30]/30 focus:border-[#3f5a30] transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#e08a1e] hover:bg-[#c97816] text-white font-bold text-sm px-8 py-3 rounded-xl shadow-sm transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
