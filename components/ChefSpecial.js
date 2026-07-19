'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useShop } from '../context/ShopContext';
import { useModal } from '../context/ModalContext';

const ChefSpecial = () => {
    const scrollRef = useRef(null);
    const { addToCart } = useShop();
    const { openCart } = useModal();

    const scrollCarousel = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = container.offsetWidth; // Scroll one screen width
            const currentScroll = container.scrollLeft;

            if (direction === 'left') {
                container.scrollTo({
                    left: currentScroll - scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                // If at end, loop to start
                if (currentScroll + container.clientWidth >= container.scrollWidth - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }
    };

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                const cardWidth = container.querySelector('.snap-center')?.offsetWidth || container.offsetWidth;

                // Scroll by one card width or page width logic
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const dishes = [
        {
            id: 1,
            name: 'Paneer Tikka Angara',
            subtitle: 'Smoked & Spicy',
            price: 345,
            image: '/assets/menu/paneer-tikka-angara.png',
            description: 'Fresh cottage cheese marinated in a fiery blend of Rajputana spices, smoked to perfection in our clay oven.',
            bestseller: false
        },
        {
            id: 2,
            name: 'Dal Kaveri Special',
            subtitle: 'Signature Dish',
            price: 395,
            image: '/assets/menu/dal.png',
            description: 'Black lentils slow-cooked for 24 hours with fresh cream and aromatic spices. A rich, creamy legacy.',
            bestseller: true
        },
        {
            id: 3,
            name: 'Royal Maharaja Thali',
            subtitle: 'Unlimited Feast',
            price: 495,
            image: '/assets/menu/maharaja-thali.png',
            description: 'A grand assortment of seasonal vegetables, dal, rice, breads, and desserts. Experience a king\'s meal.',
            bestseller: false
        },
        {
            id: 4,
            name: 'Malai Kofta',
            subtitle: 'Creamy Delight',
            price: 410,
            image: '/assets/menu/malai-kofta.png',
            description: 'Soft cottage cheese dumplings simmered in a rich, creamy cashew nut gravy.',
            bestseller: false
        },
        {
            id: 5,
            name: 'Diwani Handi',
            subtitle: 'Royal Veggies',
            price: 385,
            image: '/assets/menu/diwani-handi.png',
            description: 'A mixed vegetable curry cooked in traditional handi style with slow-roasted spices.',
            bestseller: false
        }
    ];

    const handleOrder = (dish) => {
        addToCart(dish);
        openCart();
    };

    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* 9423856.jpg Background Overlay */}
            <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                    backgroundImage: 'url(/assets/9423856.jpg)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px 400px'
                }}
            />

            {/* Very subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-50/30 via-white to-stone-50/30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="text-center md:text-left w-full md:w-auto mb-8 md:mb-0">
                        <span className="text-[#d4af37] font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">
                            Culinary Masterpieces
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif italic text-stone-900">
                            Chef's Signature Selection
                        </h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => scrollCarousel('left')}
                            className="w-12 h-12 rounded-full border-2 border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37] transition-all flex items-center justify-center shadow-md"
                            aria-label="Scroll left"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollCarousel('right')}
                            className="w-12 h-12 rounded-full border-2 border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37] transition-all flex items-center justify-center shadow-md"
                            aria-label="Scroll right"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide scroll-smooth"
                    >
                        {dishes.map((dish) => (
                            <div
                                key={dish.id}
                                className="min-w-full md:min-w-[calc(33.333%-1rem)] snap-center group relative"
                            >
                                <div className={`aspect-[4/5] overflow-hidden rounded-[2rem] relative bg-stone-900 ${dish.bestseller ? 'border-2 border-[#d4af37]/20' : ''}`}>
                                    {/* Bestseller Badge */}
                                    {dish.bestseller && (
                                        <div className="absolute top-6 right-6 z-20">
                                            <span className="px-4 py-1.5 bg-[#d4af37] text-stone-950 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                                Bestseller
                                            </span>
                                        </div>
                                    )}

                                    {/* Image */}
                                    <Image
                                        src={dish.image}
                                        alt={dish.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex justify-between items-end mb-4">
                                            <div>
                                                <h3 className="text-2xl font-serif text-white italic mb-1">
                                                    {dish.name}
                                                </h3>
                                                <p className="text-[#d4af37] text-xs uppercase tracking-widest font-bold">
                                                    {dish.subtitle}
                                                </p>
                                            </div>
                                            <span className="text-2xl font-bold text-white/90">
                                                ₹{dish.price}
                                            </span>
                                        </div>
                                        <p className="text-stone-300 text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                                            {dish.description}
                                        </p>
                                        <button
                                            onClick={() => handleOrder(dish)}
                                            className="w-full py-4 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] text-stone-950 font-black uppercase text-[10px] tracking-widest rounded-xl hover:scale-[1.02] transition-transform shadow-lg"
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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

export default ChefSpecial;
