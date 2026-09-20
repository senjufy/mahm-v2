import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e2e17] text-white py-12 sm:py-14 border-t border-[#3f5a30]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Logo and Brand Mark */}
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white/95 rounded-lg p-1.5 shadow-xs">
            <Image
              src="/logo.png"
              alt="MAHM Logo"
              width={40}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-wider text-white">
            MAHM
          </span>
        </div>

        {/* Motto */}
        <p className="italic text-sm text-[#daba7f] font-medium tracking-wide">
          &ldquo;Mastery in Servitude.&rdquo;
        </p>

        {/* Copyright */}
        <p className="text-xs text-white/60 mt-4 tracking-wide">
          &copy; {new Date().getFullYear()} MAHM. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
