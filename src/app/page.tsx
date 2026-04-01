import Hero from "@/components/Hero";
import WhyAfrica from "@/components/WhyAfrica";

import Pillars from "@/components/Pillars";
import Network from "@/components/Network";
import Leadership from "@/components/Leadership";

import Footer from "@/components/Footer";
import Opportunity from "@/components/Opportunity";
import Ventures from "@/components/Ventures";
import Assets from "@/components/Assets";
import Partnerships from "@/components/Partnerships";
import Connect from "@/components/Connect";
import Support from "@/components/Support";

export default function Home() {
  return (
    // 1. The main container must be relative and have a min-height
    <main className='relative min-h-screen w-full bg-black'>
      {/* 2. THE FIXED BACKGROUND LAYER 
          By putting this in its own div, we avoid issues with 'background-attachment: fixed' 
          which sometimes fails on mobile or specific browsers.
      */}
      <div
        className='fixed inset-0 w-full h-full z-0'
        style={{
          // IMPORTANT: Ensure 'abstract-globe.jpg' is directly in your /public folder
          backgroundImage: "url('/abstract-globe.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 3. THE DARK OVERLAY LAYER
          This makes the globe dark enough so your white text is always readable.
      */}
      <div className='fixed inset-0 z-10 bg-black/60 pointer-events-none' />

      {/* 4. THE CONTENT LAYER
          z-20 ensures all your components sit ON TOP of the background and overlay.
      */}
      <div className='relative z-20 w-full border-green-400 outline-violet-700 outline-2'>
        <Hero />
        <Opportunity />
        <WhyAfrica />
        <Pillars />
        <Ventures />
        <Assets />
        <Partnerships />
        <Leadership />
        <Network />
        <Connect />
        <Support />

        <Footer />
      </div>
    </main>
  );
}
