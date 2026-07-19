'use client';
import { useState, useEffect, useRef } from 'react';

const StatsCounter = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [counts, setCounts] = useState({
        years: 0,
        dishes: 0,
        guests: 0,
        rating: 0
    });
    const sectionRef = useRef(null);

    const stats = [
        { key: 'years', target: 32, label: 'Years of Legacy', suffix: '', isDecimal: false },
        { key: 'dishes', target: 150, label: 'Signature Dishes', suffix: '', isDecimal: false },
        { key: 'guests', target: 50, label: 'Happy Guests', suffix: 'k+', isDecimal: false },
        { key: 'rating', target: 4.8, label: 'Customer Rating', suffix: '/5', isDecimal: true }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000; // ms
        const steps = 50;
        const stepTime = duration / steps;

        stats.forEach((stat) => {
            const increment = stat.target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.target) {
                    current = stat.target;
                    clearInterval(timer);
                }

                setCounts((prev) => ({
                    ...prev,
                    [stat.key]: stat.isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current)
                }));
            }, stepTime);
        });
    };

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-gradient-to-r from-stone-50 via-amber-50 to-stone-50 border-y border-amber-200"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {/* Stat 1 - Years */}
                    <div className="space-y-2">
                        <div className="text-6xl md:text-7xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-amber-700">
                            {counts.years}
                        </div>
                        <p className="text-stone-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            Years of Legacy
                        </p>
                    </div>

                    {/* Stat 2 - Dishes */}
                    <div className="space-y-2">
                        <div className="text-6xl md:text-7xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-amber-700">
                            {counts.dishes}
                        </div>
                        <p className="text-stone-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            Signature Dishes
                        </p>
                    </div>

                    {/* Stat 3 - Guests */}
                    <div className="space-y-2">
                        <div className="flex justify-center items-baseline gap-1">
                            <span className="text-6xl md:text-7xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-amber-700">
                                {counts.guests}
                            </span>
                            <span className="text-2xl text-amber-600 font-serif italic">k+</span>
                        </div>
                        <p className="text-stone-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            Happy Guests
                        </p>
                    </div>

                    {/* Stat 4 - Rating */}
                    <div className="space-y-2">
                        <div className="flex justify-center items-baseline gap-1">
                            <span className="text-6xl md:text-7xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-amber-700">
                                {counts.rating.toFixed(1)}
                            </span>
                            <span className="text-2xl text-stone-500 font-serif italic">/5</span>
                        </div>
                        <p className="text-stone-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            Customer Rating
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
