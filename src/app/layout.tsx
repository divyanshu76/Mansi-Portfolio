import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mansi | Luxury Makeup Artist — Bridal & Editorial Beauty",
  description:
    "Experience luxury beauty artistry by Mansi. Premium bridal makeup, editorial looks, and cinematic transformations. Book your exclusive beauty consultation.",
  keywords: [
    "luxury makeup artist",
    "bridal makeup",
    "editorial beauty",
    "wedding makeup",
    "premium makeup artist",
  ],
  openGraph: {
    title: "Mansi | Luxury Makeup Artist",
    description: "Premium bridal & editorial beauty experiences",
    type: "website",
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
      className={`${cormorant.variable} ${manrope.variable} ${instrument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
