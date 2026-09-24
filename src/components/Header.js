"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { openDonateModal } from "@/components/DonateModal";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "What We Do", href: "#pillars" },
  { label: "Team", href: "#team" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-[#fbf9f2] ${
        scrolled
          ? "shadow-sm border-b border-[#3f5a30]/15 bg-[#fbf9f2]/95 backdrop-blur-sm"
          : "border-b border-[#3f5a30]/10"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo */}
          <Link
            href="#top"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3f5a30] rounded-md transition-opacity hover:opacity-90 py-0.5"
            aria-label="MAHM Home"
          >
            <div className="relative h-16 sm:h-[68px] w-auto flex items-center justify-center">
              <img
                src="/logo_new.png"
                alt="MAHM Logo"
                width={63}
                height={63}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                className="object-contain h-16 sm:h-[65px] w-auto drop-shadow-xs"
              />
            </div>
          </Link>

          {/* Center/Right: Desktop Navigation Items */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <nav
              className="flex items-center gap-6 xl:gap-8"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-semibold text-[#222e1b] hover:text-[#3f5a30] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3f5a30] rounded-sm py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Action Button */}
            <button
              type="button"
              onClick={openDonateModal}
              className="inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-semibold tracking-normal text-white bg-[#e08a1e] hover:bg-[#c97715] active:bg-[#b5670e] rounded-full shadow-xs transition-all duration-150 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e08a1e] focus-visible:ring-offset-2 cursor-pointer"
            >
              Donate
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center lg:hidden gap-3">
            <button
              type="button"
              onClick={openDonateModal}
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white bg-[#e08a1e] hover:bg-[#c97715] rounded-full shadow-xs cursor-pointer"
            >
              Donate
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#3f5a30] hover:text-[#2d4222] hover:bg-[#eef2e6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3f5a30]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-[#3f5a30]/10 bg-[#fbf9f2] px-5 pt-3 pb-6 shadow-md animate-in fade-in duration-150"
        >
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2 text-base font-semibold text-[#222e1b] hover:text-[#3f5a30] hover:bg-[#eef2e6] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#3f5a30]/10">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  openDonateModal();
                }}
                className="flex items-center justify-center w-full py-2.5 text-base font-semibold text-white bg-[#e08a1e] hover:bg-[#c97715] rounded-full shadow-xs cursor-pointer"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
