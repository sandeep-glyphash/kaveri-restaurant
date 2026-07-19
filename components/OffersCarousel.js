'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const OffersCarousel = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollCarousel = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 370; // Card width + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const index = Math.round(scrollRef.current.scrollLeft / 370);
            if (index >= 0 && index < offers.length) {
                setActiveIndex(index);
            }
        }
    };

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                const scrollAmount = 370;

                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const offers = [
        {
            id: 1,
            tag: 'First Order',
            title: 'Flat 20% OFF',
            description: 'On your digital order via our app or website.',
            code: 'KAVERI20',
            image: '/assets/menu/paneer-tikka-angara.png'
        },
        {
            id: 2,
            tag: 'Weekend Vibes',
            title: 'Free Kulfi',
            description: 'Complimentary dessert with bills above ₹1,200.',
            code: 'SAT-SUN',
            image: '/assets/menu/kesar-kulfi.png'
        },
        {
            id: 3,
            tag: 'Midnight Crave',
            title: 'BOGO Drinks',
            description: 'Buy 1 Get 1 on all Mocktails, 10 PM - 11 PM.',
            code: 'REFRESH',
            image: '/assets/menu/cold-coffee.png'
        },
        {
            id: 4,
            tag: 'Lunch Special',
            title: 'Meal @ ₹299',
            description: 'Dal, Sabzi, Rice, Roti & Dessert. Mon-Fri.',
            code: '12-3 PM',
            image: '/assets/menu/maharaja-thali.png'
        },
        {
            id: 5,
            tag: 'Birthday Treat',
            title: 'Free Cake',
            description: 'Complimentary celebration cake with Thali.',
            code: 'BOOK NOW',
            image: '/assets/menu/sizzling-brownie.png'
        },
        {
            id: 6,
            tag: 'Family Feast',
            title: '15% OFF Thalis',
            description: 'On family orders above ₹2,000. Valid all days.',
            code: 'FAMILY15',
            image: '/assets/menu/punjabi-thali.png'
        }
    ];

    return (
        <section id="offers" className="py-20 bg-stone-950 relative overflow-hidden transition-colors duration-1000">
            {/* Background Images Layer */}
            <div className="absolute inset-0 z-0">
                {offers.map((offer, index) => (
                    <div
                        key={offer.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-40' : 'opacity-0'}`}
                    >
                        <Image
                            src={offer.image}
                            alt="Background"
                            fill
                            className="object-cover blur-[2px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/60" />
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-[10px]">Membership Benefits</span>
                        <h3 className="text-3xl md:text-4xl font-serif text-white mt-2">
                            Special <span className="italic text-amber-500">Privileges</span>
                        </h3>
                    </div>

                    <div className="hidden md:flex space-x-3">
                        <button
                            onClick={() => scrollCarousel('left')}
                            className="w-12 h-12 rounded-full border border-stone-700 bg-stone-900/50 flex items-center justify-center text-white hover:border-amber-500 hover:text-amber-500 transition-all backdrop-blur-sm"
                            aria-label="Scroll left"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollCarousel('right')}
                            className="w-12 h-12 rounded-full border border-stone-700 bg-stone-900/50 flex items-center justify-center text-white hover:border-amber-500 hover:text-amber-500 transition-all backdrop-blur-sm"
                            aria-label="Scroll right"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Offers Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto scrollbar-hide space-x-6 pb-12 snap-x scroll-smooth -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {offers.map((offer, index) => (
                        <div
                            key={offer.id}
                            className={`min-w-[340px] md:min-w-[380px] h-[240px] bg-white rounded-2xl p-6 flex flex-col justify-between snap-center group transition-all duration-500 border-l-4 border-amber-500 box-content
                                ${index === activeIndex ? 'shadow-[0_0_30px_rgba(212,175,55,0.3)] scale-[1.02]' : 'opacity-80 scale-100'}
                            `}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 border border-stone-200 px-2 py-1 rounded bg-stone-50">
                                        {offer.tag}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="text-3xl font-serif text-stone-900 italic mb-2 group-hover:text-amber-700 transition-colors">
                                    {offer.title}
                                </h4>
                                <p className="text-stone-600 text-sm font-light leading-relaxed">
                                    {offer.description}
                                </p>
                            </div>

                            {/* Code / Footer */}
                            <div className="mt-4 pt-4 border-t border-dashed border-stone-200 flex justify-between items-center">
                                <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">
                                    Use Code:
                                </span>
                                <div className="px-4 py-1.5 bg-stone-950 text-amber-400 rounded text-xs font-bold tracking-wider font-mono shadow-inner">
                                    {offer.code}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default OffersCarousel;
