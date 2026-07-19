'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);
    const [viewMode, setViewMode] = useState('bento'); // 'bento' or 'masonry'

    const categories = [
        { id: 'all', label: 'All', icon: '✨' },
        { id: 'ambiance', label: 'Ambiance', icon: '🏛️' },
        { id: 'food', label: 'Culinary Arts', icon: '🍽️' },
        { id: 'interiors', label: 'Interiors', icon: '🎨' },
        { id: 'celebrations', label: 'Celebrations', icon: '🎉' }
    ];

    // Gallery with REAL images from your assets
    const galleryItems = [
        // Ashok Nagar
        { id: 1, src: '/assets/Ashok Nagar/ashok-nagar-1.png', category: 'ambiance', title: 'Ashok Nagar Flagship', size: 'large' },
        { id: 2, src: '/assets/Ashok Nagar/ashok-nagar-2.png', category: 'interiors', title: 'Dining Elegance' },
        { id: 3, src: '/assets/Ashok Nagar/ashok-nagar-3.png', category: 'ambiance', title: 'Premium Seating' },
        { id: 4, src: '/assets/Ashok Nagar/ashok-nagar-4.png', category: 'food', title: 'Signature Dishes', size: 'wide' },

        // Kanke Road
        { id: 5, src: '/assets/Kanke/kanke-1.png', category: 'ambiance', title: 'Kanke Road Entrance', size: 'tall' },
        { id: 6, src: '/assets/Kanke/kanke-2.png', category: 'interiors', title: 'Modern Aesthetics', size: 'large' },
        { id: 7, src: '/assets/Kanke/kanke-3.png', category: 'food', title: 'Culinary Excellence' },
        { id: 8, src: '/assets/Kanke/3.png', category: 'food', title: 'Chef Creations' },
        { id: 9, src: '/assets/Kanke/5.png', category: 'food', title: 'Gourmet Presentation' },
        { id: 10, src: '/assets/Kanke/6.png', category: 'food', title: 'Royal Feast' },
        { id: 11, src: '/assets/Kanke/7.png', category: 'food', title: 'Artisan Dishes', size: 'wide' },
        { id: 12, src: '/assets/Kanke/8.png', category: 'food', title: 'Fine Dining Experience' },
        { id: 13, src: '/assets/Kanke/9.png', category: 'interiors', title: 'Luxurious Ambiance' },

        // Ratu Road
        { id: 14, src: '/assets/Ratu Road/ratu-1.png', category: 'ambiance', title: 'Ratu Road Branch' },
        { id: 15, src: '/assets/Ratu Road/ratu-2.png', category: 'interiors', title: 'Family Warmth', size: 'tall' },
        { id: 16, src: '/assets/Ratu Road/ratu-3.png', category: 'food', title: 'Delicious Offerings', size: 'wide' },

        // Real Ratu Road Restaurant Photos
        { id: 17, src: '/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-home-delivery-restaurants-1seknbk5eu.jpg', category: 'interiors', title: 'Cozy Interiors' },
        { id: 18, src: '/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-home-delivery-restaurants-c7akt.jpg', category: 'ambiance', title: 'Welcoming Space' },
        { id: 19, src: '/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-home-delivery-restaurants-citjn.jpg', category: 'food', title: 'Authentic Cuisine' },
        { id: 20, src: '/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-home-delivery-restaurants-idylp.jpg', category: 'food', title: 'Traditional Flavors', size: 'large' },
        { id: 21, src: '/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-home-delivery-restaurants-paga1.jpg', category: 'food', title: 'Rich Delicacies' },
        { id: 22, src: '/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-north-indian-restaurants-1di6cccvkv.jpg', category: 'interiors', title: 'Refined Dining' },
        { id: 23, src: '/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-north-indian-restaurants-5ttj59waxf.jpg', category: 'food', title: 'North Indian Specialties', size: 'wide' },
        { id: 24, src: '/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-north-indian-restaurants-cqbpqtn6ay.jpg', category: 'food', title: 'Premium Quality' },
        { id: 25, src: '/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-north-indian-restaurants-soc4iq7cbf.jpg', category: 'celebrations', title: 'Special Moments', size: 'tall' },

        // Background Images
        { id: 26, src: '/assets/5431516.jpg', category: 'food', title: 'Exquisite Presentation' },
        { id: 27, src: '/assets/9423856.jpg', category: 'food', title: 'Culinary Artistry' },
        { id: 28, src: '/assets/Panner-lababdar-bg.png', category: 'food', title: 'Paneer Lababdar', size: 'large' }
    ];

    const filteredItems = selectedCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    const openLightbox = (image) => {
        setLightboxImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setLightboxImage(filteredItems[nextIndex]);
    };

    const prevImage = () => {
        const currentIndex = filteredItems.findIndex(item => item.id === lightboxImage.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setLightboxImage(filteredItems[prevIndex]);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!lightboxImage) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [lightboxImage, filteredItems]);

    return (
        <main className="min-h-screen bg-stone-950">
            {/* Cinematic Hero Section */}
            <section className="relative h-[50vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
                {/* Animated Background Grid */}
                <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden"
                            style={{
                                animationDelay: `${i * 100}ms`
                            }}
                        >
                            <Image
                                src={galleryItems[i % galleryItems.length].src}
                                alt=""
                                fill
                                className="object-cover opacity-20 hover:opacity-30 transition-opacity duration-700"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/70 to-stone-950" />

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-amber-400 font-sans font-bold">
                            Kaveri Visual Experience
                        </p>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 md:mb-6 leading-tight">
                        <span className="block text-white mb-1">Where</span>
                        <span className="block italic bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#d4af37] bg-clip-text text-transparent">
                            Moments
                        </span>
                        <span className="block text-white mt-1">Become Memories</span>
                    </h1>

                    <p className="text-stone-400 text-sm md:text-lg font-light max-w-2xl mx-auto mb-6 md:mb-8 font-sans">
                        A visual journey through three decades of culinary excellence
                    </p>

                    {/* Scroll Indicator */}
                    <div className="flex flex-col items-center gap-1 animate-bounce">
                        <span className="text-amber-400 text-[10px] uppercase tracking-widest font-sans">Explore</span>
                        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Sticky Controls Bar */}
            <section className="sticky top-16 md:top-20 z-40 bg-stone-950/95 backdrop-blur-lg border-b border-stone-800 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`group relative px-5 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 font-sans overflow-hidden ${selectedCategory === cat.id
                                        ? 'bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#b8860b] text-stone-900 shadow-lg shadow-amber-500/50 scale-105'
                                        : 'bg-stone-800/50 text-stone-300 hover:bg-stone-700 border border-stone-700 hover:border-amber-500/50'
                                        }`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span>{cat.icon}</span>
                                        <span>{cat.label}</span>
                                    </span>
                                    {selectedCategory !== cat.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-2 bg-stone-800/50 rounded-full p-1 border border-stone-700">
                            <button
                                onClick={() => setViewMode('bento')}
                                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 font-sans ${viewMode === 'bento'
                                    ? 'bg-amber-500 text-stone-900'
                                    : 'text-stone-400 hover:text-white'
                                    }`}
                                title="Bento Grid"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('masonry')}
                                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 font-sans ${viewMode === 'masonry'
                                    ? 'bg-amber-500 text-stone-900'
                                    : 'text-stone-400 hover:text-white'
                                    }`}
                                title="Masonry Layout"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 3h8v5H3V3zm10 0h8v8h-8V3zM3 10h8v11H3V10zm10 5h8v6h-8v-6z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="text-center mt-3">
                        <p className="text-stone-500 text-xs uppercase tracking-widest font-sans">
                            {filteredItems.length} {filteredItems.length === 1 ? 'Image' : 'Images'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {viewMode === 'bento' ? (
                        /* Bento Grid Layout */
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                            {filteredItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-[1.02] transition-all duration-500 ${item.size === 'large' ? 'col-span-2 row-span-2' :
                                        item.size === 'wide' ? 'col-span-2' :
                                            item.size === 'tall' ? 'row-span-2' :
                                                ''
                                        }`}
                                    style={{
                                        animationDelay: `${index * 30}ms`
                                    }}
                                    onClick={() => openLightbox(item)}
                                >
                                    {/* Image */}
                                    <div className={`relative ${item.size === 'tall' ? 'aspect-[3/4]' : item.size === 'wide' ? 'aspect-[2/1]' : item.size === 'large' ? 'aspect-square' : 'aspect-square'} overflow-hidden bg-stone-900`}>
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                                            <h3 className="text-white font-serif text-base md:text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-amber-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                <span className="text-xs uppercase tracking-wider font-sans font-bold">View</span>
                                            </div>
                                        </div>

                                        {/* Border Effect */}
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/50 rounded-2xl transition-all duration-500 pointer-events-none" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Masonry Layout */
                        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                            {filteredItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="break-inside-avoid group cursor-pointer"
                                    style={{
                                        animationDelay: `${index * 40}ms`
                                    }}
                                    onClick={() => openLightbox(item)}
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:scale-[1.02]">
                                        <div className="relative aspect-auto">
                                            <img
                                                src={item.src}
                                                alt={item.title}
                                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                <div>
                                                    <h3 className="text-white font-serif text-xl mb-2">{item.title}</h3>
                                                    <span className="text-amber-400 text-xs uppercase tracking-wider font-sans font-bold">
                                                        {categories.find(c => c.id === item.category)?.label}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Border */}
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/50 rounded-2xl transition-colors duration-500 pointer-events-none" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {filteredItems.length === 0 && (
                        <div className="text-center py-32">
                            <div className="text-6xl mb-4">🔍</div>
                            <p className="text-stone-500 text-xl font-serif mb-2">No images found</p>
                            <p className="text-stone-600 text-sm font-sans">Try selecting a different category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 bg-stone-950/98 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 md:top-8 md:right-8 w-14 h-14 rounded-full bg-stone-800/80 hover:bg-amber-500 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 z-50 border border-stone-700 hover:border-amber-500"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 md:left-8 w-14 h-14 rounded-full bg-stone-800/80 hover:bg-amber-500 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 border border-stone-700 hover:border-amber-500"
                        aria-label="Previous"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 md:right-8 w-14 h-14 rounded-full bg-stone-800/80 hover:bg-amber-500 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 border border-stone-700 hover:border-amber-500"
                        aria-label="Next"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image */}
                    <div
                        className="relative max-w-6xl max-h-[85vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            <img
                                src={lightboxImage.src}
                                alt={lightboxImage.title}
                                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            />
                        </div>

                        {/* Info Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950 via-stone-950/95 to-transparent p-8 rounded-b-xl">
                            <div className="flex items-end justify-between">
                                <div>
                                    <h3 className="text-white font-serif text-3xl md:text-4xl mb-2">{lightboxImage.title}</h3>
                                    <p className="text-amber-400 text-sm uppercase tracking-widest font-sans font-bold flex items-center gap-2">
                                        <span>{categories.find(c => c.id === lightboxImage.category)?.icon}</span>
                                        <span>{categories.find(c => c.id === lightboxImage.category)?.label}</span>
                                    </p>
                                </div>
                                <div className="hidden md:flex items-center gap-3 text-stone-500 text-sm font-sans">
                                    <kbd className="px-3 py-1 bg-stone-800 rounded border border-stone-700">←</kbd>
                                    <kbd className="px-3 py-1 bg-stone-800 rounded border border-stone-700">→</kbd>
                                    <span>to navigate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-950 to-stone-950" />
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'url(/assets/pg-pattern-white.png)',
                        backgroundRepeat: 'repeat'
                    }}
                />

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <div className="inline-block mb-6 px-6 py-2 bg-amber-500/10 rounded-full border border-amber-500/20">
                        <p className="text-amber-400 text-xs uppercase tracking-widest font-sans font-bold">
                            Ready to Experience?
                        </p>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-serif mb-6 text-white">
                        Visit <span className="italic bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#d4af37] bg-clip-text text-transparent">Kaveri</span> Today
                    </h2>

                    <p className="text-stone-400 text-lg md:text-xl mb-12 font-sans font-light max-w-2xl mx-auto">
                        Choose from our three exquisite locations and immerse yourself in the Kaveri experience
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/ashok-nagar"
                            className="group px-10 py-4 bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#b8860b] text-stone-900 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 font-sans"
                        >
                            <span className="flex items-center gap-2">
                                Explore Locations
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>

                        <a
                            href="/menu"
                            className="px-10 py-4 border-2 border-[#d4af37] text-[#d4af37] rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#d4af37] hover:text-stone-900 transition-all duration-300 shadow-xl font-sans"
                        >
                            View Our Menu
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
