import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PERSONAL } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Loader from "@/components/ui/Loader";
import PageTransition from "@/components/layout/PageTransition";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "600"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: { 
    default: `${PERSONAL.name} — ${PERSONAL.title}`, 
    template: `%s — ${PERSONAL.name}` 
  },
  description: "Full-stack developer and founder of LadeStack. I build AI-powered developer tools.",
  keywords: ["Full-stack developer", "Next.js developer", "LadeStack", "Girish Lade", "Mumbai developer"],
  authors: [{ name: PERSONAL.name, url: "https://girish.ladestack.in" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://girish.ladestack.in",
    siteName: PERSONAL.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${PERSONAL.name} Portfolio` }],
  },
  twitter: { card: "summary_large_image", site: PERSONAL.twitter },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://girish.ladestack.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(cormorant.variable, dmSans.variable, jetbrainsMono.variable)}>
      <body className="antialiased">
        {/* <Loader /> */}
        <CustomCursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
