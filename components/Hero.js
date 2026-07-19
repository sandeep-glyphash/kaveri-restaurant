'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = ({ slides, subtitle, title, description, onBookingClick }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Auto-advance carousel with smooth transition
    useEffect(() => {
        const interval = setInterval(() => {
            handleSlideChange((currentSlide + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    const handleSlideChange = (index) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, 800); // Smooth fade duration
    };

    const goToSlide = (index) => {
        if (index !== currentSlide) {
            handleSlideChange(index);
        }
    };

    return (
        <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
            {/* Background Image Carousel with Smooth Crossfade */}
            <div className="absolute top-0 left-0 w-full h-full z-[1]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] ease-in-out ${index === currentSlide
                            ? 'opacity-100 scale-105 z-[2]'
                            : 'opacity-0 scale-100 z-[1]'
                            }`}
                        style={{
                            backgroundImage: `url('${slide}')`,
                            filter: index === currentSlide ? 'brightness(0.85)' : 'brightness(0.7)'
                        }}
                    />
                ))}
                {/* Elegant Dark Overlay with Gradient */}
                <div className="absolute top-0 left-0 w-full h-full z-[3] bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            {/* Hero Content with Fade Animation */}
            <div className={`relative z-10 text-center px-5 max-w-[1200px] mx-auto w-full transition-opacity duration-700 ${isTransitioning ? 'opacity-70' : 'opacity-100'
                }`}>
                <div className="animate-fade-in-up">
                    {/* Subtitle with Golden Color */}
                    <p className="text-[#d4af37] text-[10px] md:text-[11px] font-bold tracking-[0.6em] uppercase mb-[30px] font-sans drop-shadow-lg">
                        {subtitle}
                    </p>

                    {/* Main Title with Playfair Display */}
                    <h1 className="text-white text-[clamp(48px,8vw,100px)] font-serif font-normal leading-[0.9] mb-[40px] tracking-[-0.02em] drop-shadow-2xl">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="text-stone-200 text-[clamp(16px,2vw,20px)] leading-relaxed max-w-[700px] mx-auto mb-[50px] font-light font-sans drop-shadow-md">
                        {description}
                    </p>

                    {/* Action Buttons with Golden Gradient */}
                    <div className="flex gap-[20px] justify-center flex-wrap flex-col md:flex-row items-center">
                        {/* Primary Button - Golden Gradient */}
                        <button
                            onClick={onBookingClick}
                            className="group px-10 py-4 text-[12px] font-bold uppercase tracking-[0.15em] rounded-full cursor-pointer transition-all duration-500 border-none inline-block text-stone-900 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,175,55,0.6)] hover:scale-105 font-sans relative overflow-hidden"
                        >
                            <span className="relative z-10">Reserve Table</span>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#f9e29c] via-[#d4af37] to-[#b8860b] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </button>

                        {/* Secondary Button - Glass Effect with Golden Border */}
                        <Link
                            href="/menu"
                            className="group px-10 py-4 text-[12px] font-bold uppercase tracking-[0.15em] rounded-full cursor-pointer transition-all duration-500 border-2 border-[#d4af37]/50 text-white bg-white/5 backdrop-blur-[15px] hover:bg-[#d4af37]/10 hover:border-[#d4af37] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)] font-sans"
                        >
                            View Menu
                        </Link>
                    </div>
                </div>
            </div>

            {/* Elegant Carousel Indicators */}
            <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 z-20 flex gap-[12px]">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="group relative w-[50px] h-[4px] border-none cursor-pointer transition-all duration-500 overflow-hidden rounded-full"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {/* Background Track */}
                        <div className={`absolute inset-0 transition-all duration-500 ${index === currentSlide
                            ? 'bg-white/40'
                            : 'bg-white/20 group-hover:bg-white/30'
                            }`} />

                        {/* Active Progress Bar with Golden Gradient */}
                        <div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#d4af37] transition-all duration-500 rounded-full ${index === currentSlide
                                ? 'w-full shadow-[0_0_15px_rgba(212,175,55,0.8)]'
                                : 'w-0'
                                }`}
                            style={{
                                animation: index === currentSlide ? 'progressBar 6s linear' : 'none'
                            }}
                        />
                    </button>
                ))}
            </div>

            {/* Navigation Arrows (Optional - for manual control) */}
            <button
                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <style jsx>{`
                @keyframes progressBar {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
