import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg-final.jpg';
import heroBgMobile from '../assets/hero-bg-final-mobile.jpg';
import CountdownTimer from './CountdownTimer';

const WHATSAPP_URL = "https://wa.me/2348092555222?text=Hello%2C%20I%20am%20interested%20in%20The%20Woodlands%2C%20please%20send%20me%20the%20full%20project%20details.";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden bg-coffee">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          srcSet={`${heroBgMobile} 800w, ${heroBg} 1920w`}
          sizes="(max-width: 768px) 100vw, 100vw"
          alt="The Woodlands Luxury Apartments Abuja"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-start"
        >
          <CountdownTimer />

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Secure your place in Wuye's next landmark community.
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed">
            Premium homes starting from ₦178M. Government-backed, Official JV, and verifiable at AGIS.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-auto sm:inline-flex btn bg-gold text-coffee hover:bg-white px-10 py-5 text-center font-bold text-base tracking-wide"
          >
            Get Full Details on WhatsApp →
          </a>

          <p className="mt-4 text-sm text-white/60">
            Our property consultant answers instantly, 24/7. No sales pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
