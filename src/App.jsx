import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyThisIsSafe from './components/WhyThisIsSafe';
import PricingSection from './components/PricingSection';
import LifeAtWoodlands from './components/LifeAtWoodlands';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import heroLogo from './assets/hero-logo.jpg';

const WHATSAPP_URL = "https://wa.me/2348092555222?text=Hello%2C%20I%20am%20interested%20in%20The%20Woodlands%2C%20please%20tell%20me%20more.";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-coffee/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 md:gap-4 text-xl md:text-2xl font-bold font-heading text-white tracking-widest uppercase group">
          <img
            src={heroLogo}
            alt="The Woodlands Logo"
            className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover border-2 border-gold/50 group-hover:border-gold transition-colors shadow-lg"
            loading="eager"
            fetchPriority="high"
          />
          <span className="drop-shadow-sm">The Woodlands</span>
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-coffee hover:bg-white px-4 md:px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Us</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-coffee text-white py-8 border-t border-white/5">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/40 uppercase tracking-widest">
          &copy; 2025 Tout-Moi Ltd. All rights reserved.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/60 hover:text-gold transition-colors uppercase tracking-widest"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="font-sans antialiased text-charcoal bg-sand selection:bg-gold selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <WhyThisIsSafe />
        <PricingSection />
        <LifeAtWoodlands />
        <SocialProof />
        <FinalCTA />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-coffee/95 backdrop-blur-md border-t border-white/10">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn btn-gold shadow-xl py-3.5 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <span>💬</span> Talk to Our Property Consultant
        </a>
      </div>
    </div>
  );
};

export default App;
