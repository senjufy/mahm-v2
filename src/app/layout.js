import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mahm.org"),
  title: "MAHM: Mastery in Servitude",
  description: "Official website of MAHM, institutionalising community resilience and strengthening human capital.",
  icons: {
    icon: [
      { url: "/Head.jpeg" },
      { url: "/Head.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/Head.jpeg",
    apple: "/Head.jpeg",
  },
  openGraph: {
    title: "MAHM: Mastery in Servitude",
    description: "Official website of MAHM, institutionalising community resilience and strengthening human capital.",
    images: [
      {
        url: "/Head.jpeg",
        width: 500,
        height: 500,
        alt: "MAHM Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MAHM: Mastery in Servitude",
    description: "Official website of MAHM, institutionalising community resilience and strengthening human capital.",
    images: ["/Head.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth antialiased">
      <head>
        <link rel="icon" href="/Head.jpeg" type="image/jpeg" sizes="any" />
        <link rel="shortcut icon" href="/Head.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/Head.jpeg" />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#fbf9f2] text-[#1d2619]">
        {children}
      </body>
    </html>
  );
}
