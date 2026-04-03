import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. VIEWPORT: Ensures the site doesn't zoom out or "float" on mobile
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// 2. METADATA: The "Free SEO" engine
export const metadata: Metadata = {
  metadataBase: new URL("https://chayilfoundingnetwork.com"), // Replace with your actual domain later
  title: {
    default: "Chayil Global | Private Founding Network",
    template: "%s | Chayil Global", // If a subpage has title "Leadership", it shows as "Leadership | Chayil Global"
  },
  description:
    "A strategic platform positioned at the intersection of faith, leadership and enterprise. Join the Chayil Founding Network to build long-term institutional assets in Africa.",
  keywords: [
    "Chayil Global",
    "African Leadership",
    "Strategic Enterprise",
    "Faith and Business",
    "Land Development Africa",
  ],
  authors: [{ name: "Chayil Global Team" }],
  creator: "Chayil Global",

  // Robots: Tells Google to index the site and follow all links
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // OpenGraph: How your site looks on WhatsApp, LinkedIn, and X
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chayilfoundingnetwork.com",
    siteName: "Chayil Global",
    title: "Chayil Global | Private Founding Network",
    description:
      "Mobilizing global capital and Kingdom-minded leadership to build institutions and assets across Africa.",
    images: [
      {
        url: "/opengraph-image.png", // Create a 1200x630px image and put it in your 'public' folder
        width: 1200,
        height: 630,
        alt: "Chayil Global Institutional Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      {/* - min-h-screen ensures the black background covers the whole page.
          - overflow-x-hidden is the final 'Mobile Lock' safety net.
      */}
      <body className='bg-black text-white antialiased min-h-screen w-full overflow-x-hidden'>
        <Navbar />
        {/* Wrap children in a main tag for better SEO structure */}
        <main id='main-content'>{children}</main>
      </body>
    </html>
  );
}
