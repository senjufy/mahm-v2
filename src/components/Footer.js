import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e2e17] text-white py-12 sm:py-14 border-t border-[#3f5a30]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-4">
          <div className="bg-white/95 rounded-xl p-2 sm:p-2.5 shadow-xs inline-block">
            <Image
              src="/logo_new.png"
              alt="MAHM Logo"
              width={64}
              height={64}
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>
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
