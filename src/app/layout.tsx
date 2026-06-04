import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RIJA-V EMPIRE NIGERIA LIMITED | Multi-Sector Business Solutions",
  description:
    "RIJA-V EMPIRE is a diversified Nigerian company delivering excellence across Agriculture, Education, Media, Real Estate, Consultancy, Fashion, Trading, and Investment. Building the future of Nigerian enterprise.",
  keywords: [
    "RIJA-V EMPIRE",
    "Nigeria",
    "Agriculture",
    "Education",
    "EdTech",
    "Media",
    "Real Estate",
    "Consultancy",
    "Investment",
    "Multi-sector company",
  ],
  authors: [{ name: "RIJA-V EMPIRE NIGERIA LIMITED" }],
  openGraph: {
    title: "RIJA-V EMPIRE NIGERIA LIMITED",
    description:
      "Empowering Multi-Industry Growth Across Nigeria. A diversified powerhouse across 10+ sectors.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
