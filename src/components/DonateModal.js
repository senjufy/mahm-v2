"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Global helper function to trigger the Donate Modal from any component or handler
 */
export function openDonateModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-donate-modal"));
  }
}

export default function DonateModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-donate-modal", handleOpen);

    return () => window.removeEventListener("open-donate-modal", handleOpen);
  }, []);

  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Dimmed & Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-[390px] sm:max-w-[420px] bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 shadow-2xl border border-[#3f5a30]/10 text-center z-10 transition-all animate-in fade-in zoom-in-95 duration-200">
        {/* Top-Right Close Button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Top Heart Badge */}
        <div className="w-16 h-16 rounded-full bg-[#f0f4ea] mx-auto flex items-center justify-center mb-5 shadow-2xs">
          <svg
            className="w-8 h-8 drop-shadow-xs"
            viewBox="0 0 24 24"
            fill="none"
          >
            <defs>
              <linearGradient
                id="donateHeartGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#48bb78" />
                <stop offset="60%" stopColor="#2f855a" />
                <stop offset="100%" stopColor="#1f573b" />
              </linearGradient>
            </defs>
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="url(#donateHeartGradient)"
            />
          </svg>
        </div>

        {/* Title */}
        <h3
          id="donate-modal-title"
          className="text-xl sm:text-[22px] font-bold text-[#354c29] mb-3 leading-snug tracking-tight"
        >
          Thank You for Your Generosity
        </h3>

        {/* Body Text (strict zero em-dashes rule maintained) */}
        <p className="text-xs sm:text-sm text-[#52604c] leading-relaxed mb-6 px-1 sm:px-2">
          Your generosity means the world to the families and communities we
          work with every day. To make a donation, please reach out to us
          directly, we&apos;d love to speak with you and guide you through it
          personally.
        </p>

        {/* Call or WhatsApp Box */}
        <div className="bg-[#f0f4ea] rounded-2xl p-4 sm:p-5 mb-5 border border-[#3f5a30]/10">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#52604c] block mb-1">
            Call or WhatsApp Us
          </span>
          <a
            href="tel:+8801713164506"
            className="text-[#2f4722] font-black text-xl sm:text-2xl tracking-tight block hover:text-[#e08a1e] transition-colors"
          >
            +880 1713-164506
          </a>
        </div>

        {/* Bottom Orange Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="w-full bg-[#e08a1e] hover:bg-[#c97715] active:bg-[#b5670e] text-white font-bold text-sm sm:text-base py-3 px-6 rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}
