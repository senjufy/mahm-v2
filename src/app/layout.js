import "./globals.css";

export const metadata = {
  title: "MAHM — Mastery in Servitude",
  description: "Official website of MAHM - Institutionalising community resilience and strengthening human capital.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#fbf9f2] text-[#1d2619]">
        {children}
      </body>
    </html>
  );
}
