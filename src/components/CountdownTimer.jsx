import React, { useState, useEffect } from 'react';

const targetDate = "2028-04-01T00:00:00";

const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <div className="mb-8 md:mb-10 inline-block w-full sm:w-auto">
            <div className="text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 flex items-center">
                <span className="bg-gold h-px flex-grow mr-4 opacity-50 hidden sm:block"></span>
                <span className="whitespace-nowrap">Countdown to Wuye's Newest Landmark</span>
                <span className="bg-gold h-px flex-grow ml-4 opacity-50 hidden sm:block"></span>
            </div>
            <div className="flex gap-3 sm:gap-6">
                {timeUnits.map((unit, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 sm:flex-none">
                        <div className="w-full sm:w-20 aspect-square sm:h-20 bg-coffee/80 backdrop-blur-md border border-gold/40 rounded-lg flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative overflow-hidden group hover:border-gold transition-colors duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                            <span className="text-2xl sm:text-4xl font-heading font-medium text-white z-10 drop-shadow-md">
                                {unit.value.toString().padStart(2, '0')}
                            </span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-white/80 uppercase tracking-[0.15em] mt-3 font-medium">
                            {unit.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
