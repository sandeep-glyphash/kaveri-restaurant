'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const SignatureDish = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoplayRef = useRef(null);

    const slides = [
        {
            id: 0,
            badge: "Chef's Masterpiece",
            title: "Paneer",
            titleGradient: "Lababdar",
            description: "A symphony of flavors where soft cottage cheese cubes bask in a rich, creamy tomato gravy, finished with a whisper of kasuri methi and fresh cream.",
            image: "/assets/menu/paneer-butter-masala.png",
            bgImage: "/assets/Panner-lababdar-bg.png",
            rating: 4.9
        },
        {
            id: 1,
            badge: "Signature Dish",
            title: "Dal Kaveri",
            titleGradient: "Special",
            description: "Black lentils slow-cooked for 24 hours with fresh cream and aromatic spices. A rich, creamy legacy that defines our culinary heritage.",
            image: "/assets/menu/dal.png",
            bgImage: "/assets/dal-kaveri-special-bg.png",
            rating: 4.9
        },
        {
            id: 2,
            badge: "Royal Delight",
            title: "Malai",
            titleGradient: "Kofta",
            description: "Soft cottage cheese dumplings simmered in a rich, creamy cashew nut gravy. A royal delicacy that melts in your mouth.",
            image: "/assets/menu/malai-kofta.png",
            bgImage: "/assets/malai-kofta-bg.png",
            rating: 4.8
        },
        {
            id: 3,
            badge: "Tandoor Special",
            title: "Paneer Tikka",
            titleGradient: "Angara",
            description: "Smoked cottage cheese marinated in a fiery blend of Rajputana spices, roasted to perfection in our traditional clay oven.",
            image: "/assets/menu/paneer-tikka-angara.png",
            bgImage: "/assets/paneer-tikka-angara-bg.png",
            rating: 4.9
        }
    ];

    const showSlide = (index) => {
        setCurrentSlide(index);
    };

    const changeSlide = (direction) => {
        const newIndex = (currentSlide + direction + slides.length) % slides.length;
        showSlide(newIndex);
        resetAutoplay();
    };

    const goToSlide = (index) => {
        showSlide(index);
        resetAutoplay();
    };

    const nextSlide = () => {
        const newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    };

    const startAutoplay = () => {
        autoplayRef.current = setInterval(nextSlide, 3000);
    };

    const resetAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
        startAutoplay();
    };

    useEffect(() => {
        startAutoplay();
        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, []);

    const currentSlideData = slides[currentSlide];

    return (
        <section
            className="relative w-full overflow-hidden bg-stone-900"
            onMouseEnter={() => autoplayRef.current && clearInterval(autoplayRef.current)}
            onMouseLeave={startAutoplay}
        >
            {/* Slider Container */}
            <div className="relative min-h-[700px] md:min-h-[600px] lg:h-[80vh]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={slide.bgImage}
                                alt={`${slide.title} ${slide.titleGradient} Background`}
                                fill
                                className="object-cover opacity-60"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/80" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 py-12 md:py-0">
                            {/* Text Content */}
                            <div className="md:w-1/2 text-center md:text-left space-y-4 md:space-y-8">
                                <div>
                                    <span className="inline-block py-1 px-3 border border-amber-500/50 rounded-full text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 backdrop-blur-md">
                                        {slide.badge}
                                    </span>
                                    <h2 className="text-4xl md:text-7xl font-serif text-white italic leading-none mb-2">
                                        {slide.title} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                                            {slide.titleGradient}
                                        </span>
                                    </h2>
                                </div>
                                <p className="text-stone-300 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0 border-l-2 border-amber-500 pl-6">
                                    {slide.description}
                                </p>
                                <div className="pt-4">
                                    <button className="group/btn relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full overflow-hidden hover:border-amber-500 transition-colors">
                                        <span className="relative z-10 text-white text-xs font-bold uppercase tracking-widest group-hover/btn:text-stone-950 transition-colors">
                                            Experience the Taste
                                        </span>
                                        <div className="absolute inset-0 bg-amber-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
                                    </button>
                                </div>
                            </div>

                            {/* Dish Image */}
                            <div className="md:w-1/2 relative">
                                <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                                    <Image
                                        src={slide.image}
                                        alt={`${slide.title} ${slide.titleGradient}`}
                                        fill
                                        className="object-cover rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-stone-800/50"
                                    />
                                    <div className="absolute -bottom-4 -right-4 bg-white p-4 md:p-6 rounded-full shadow-xl">
                                        <div className="text-center">
                                            <span className="block text-xl md:text-2xl font-bold text-stone-900">
                                                {slide.rating}
                                            </span>
                                            <div className="flex text-amber-500 text-[10px] space-x-0.5">
                                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={() => changeSlide(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-amber-500 hover:border-amber-500 transition-all flex items-center justify-center"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => changeSlide(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-amber-500 hover:border-amber-500 transition-all flex items-center justify-center"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Indicator Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/30'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SignatureDish;
