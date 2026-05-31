import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PERSONAL } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "600"],
  variable: "--font-display" 
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500"],
  variable: "--font-body" 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: `${PERSONAL.name} | ${PERSONAL.title}`,
  description: PERSONAL.tagline,
  openGraph: {
    title: `${PERSONAL.name} | ${PERSONAL.title}`,
    description: PERSONAL.tagline,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(cormorant.variable, dmSans.variable, jetbrainsMono.variable)}>
      <body className="noise-overlay antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
