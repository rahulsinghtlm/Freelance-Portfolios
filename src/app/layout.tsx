import type { Metadata } from "next";
import { Bebas_Neue, Syne, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

// Instrument Serif = the elegant italic serif — gives that magazine editorial feel
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "QuantomTheEditor",
  description: "Cinematic video editing for YouTube, brands, and film.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${bebasNeue.variable}
          ${syne.variable}
          ${instrumentSerif.variable}
          antialiased
        `}
      >
        <div className="vignette-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}