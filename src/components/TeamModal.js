"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function TeamModal({ member, onClose }) {
  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!member) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Dimmed & Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl sm:max-w-2xl bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xl border border-[#3f5a30]/10 z-10 transition-all animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Top-Right Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100 cursor-pointer z-20"
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

        {/* Header: Photo + Name + Role + LinkedIn */}
        <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8 pr-8">
          {/* Member Photo Thumbnail */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 bg-gradient-to-b from-[#f0f4ea] via-[#e5ecdb] to-[#d8e5cb] border-2 border-white ring-1 ring-[#3f5a30]/15 shadow-xs flex items-center justify-center">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 80px, 112px"
                className="object-cover object-center"
                style={{ objectPosition: member.objectPosition || "center" }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-2 text-[#3f5a30]/70 select-none">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="text-[9px] font-bold uppercase tracking-wider">
                  Photo
                </span>
              </div>
            )}
          </div>

          {/* Member Details */}
          <div className="flex flex-col pt-0.5 sm:pt-1">
            <h3
              id="team-modal-title"
              className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#354c29] leading-tight mb-1"
            >
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#e08a1e] mb-2">
              {member.role}
            </p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-[#1d2619] hover:text-[#e08a1e] underline decoration-1 underline-offset-2 transition-colors w-fit"
              >
                View LinkedIn Profile &rarr;
              </a>
            )}
          </div>
        </div>

        {/* Member Biography */}
        <div className="space-y-4 text-xs sm:text-sm md:text-[15px] text-[#4a5544] leading-relaxed border-t border-[#3f5a30]/10 pt-5 sm:pt-6">
          {member.bio && member.bio.length > 0 ? (
            member.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>
              Profile and biographical details for {member.name} will be updated
              shortly as part of MAHM&apos;s leadership directory.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
