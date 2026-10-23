import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Alife Stable — Partner • Grow • Succeed | Build Your Own AI Course Business",
  description:
    "Launch your branded online learning business with ready-to-sell courses, a personal website, and complete support. Focus on growing your business — we handle the technology and course infrastructure.",
  keywords: [
    "Alife Stable",
    "EdTech partnership",
    "Online Course Business",
    "Education Platform",
    "White label learning platform",
    "Partner Grow Succeed",
  ],
  openGraph: {
    title: "Alife Stable — Partner • Grow • Succeed",
    description:
      "Build your own online course business with your own brand, without creating courses or requiring technical skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable} ${plusJakartaSans.className}`}>
      <body className="antialiased text-[#102B2B] bg-[#FBF7EF] min-h-screen selection:bg-[#078765]/20 selection:text-[#064E43]">
        {children}
      </body>
    </html>
  );
}
