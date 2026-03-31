import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import the new Navbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chayil Global | Investor & Partner Network",
  description: "Join Chayil Global’s Founding Network.",
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
      {/* 1. Removed the blue gradient. 
          2. Added bg-black as a fallback.
          3. Placed Navbar above {children}.
      */}
      <body className='bg-black text-white antialiased min-h-screen'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
