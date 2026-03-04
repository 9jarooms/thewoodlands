import React from 'react';
import { motion } from 'framer-motion';

import logo1 from '../assets/logo1.png'; // Enugu State
import edgeLogo from '../assets/edge-logo.png'; // Edge Zero Carbon
import logo4 from '../assets/logo4.png'; // Intraurban
import havenview from '../assets/havenview-logo.png';
import toutMoi from '../assets/tout-moi-beige.png';

const TrustBar = () => {
    const logos = [
        { name: 'Enugu State Government', src: logo1, customClass: 'h-8 sm:h-10 md:h-12 lg:h-14' },
        { name: 'Intraurban', src: logo4, customClass: 'h-8 sm:h-10 md:h-12 lg:h-14 max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]' },
        { name: 'Edge Zero Carbon', src: edgeLogo, customClass: 'h-8 sm:h-10 md:h-12 lg:h-14' },
        { name: 'Havenview', src: havenview, customClass: 'h-8 sm:h-10 md:h-12 lg:h-14' },
        { name: 'Tout Moi', src: toutMoi, customClass: 'h-8 sm:h-10 md:h-12 lg:h-14' }
    ];

    return (
        <section className="bg-coffee border-t border-white/10 overflow-hidden">
            <div className="container mx-auto py-8 lg:py-10 px-4 max-w-7xl">
                <div className="flex flex-row justify-between items-center w-full gap-2 sm:gap-6 md:gap-10">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            className="flex items-center justify-center transition-all duration-500 hover:scale-105"
                        >
                            <img
                                src={logo.src}
                                alt={`${logo.name} Logo`}
                                loading="eager"
                                fetchPriority="high"
                                className={`w-auto object-contain filter drop-shadow-sm ${logo.customClass}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
