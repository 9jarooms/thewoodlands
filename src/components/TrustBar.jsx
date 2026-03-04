import React from 'react';
import { motion } from 'framer-motion';

import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';

const TrustBar = () => {
    const logos = [
        { name: 'Enugu State Government', src: logo1 },
        { name: 'Tout Moi', src: logo2 },
        { name: 'Intraurban', src: logo3 },
        { name: 'Brand Logo 4', src: logo4 }
    ];

    return (
        <section className="bg-coffee border-t border-white/10 overflow-hidden">
            <div className="container mx-auto py-8 lg:py-10 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-20 items-center justify-items-center">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            className="flex items-center justify-center w-full transition-all duration-500 hover:scale-105"
                        >
                            <img
                                src={logo.src}
                                alt={`${logo.name} Logo`}
                                className="max-h-12 sm:max-h-14 md:max-h-16 lg:max-h-20 w-auto object-contain filter drop-shadow-md"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
