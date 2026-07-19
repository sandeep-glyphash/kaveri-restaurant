'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [stats, setStats] = useState({ years: 0, locations: 0, guests: 0, varieties: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    const heroImages = [
        '/assets/Ashok Nagar/ashok-nagar-1.png',
        '/assets/Kanke/kanke-1.png',
        '/assets/Ratu Road/ratu-1.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Animated Counter
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateValue('years', 0, 75, 2000);
                    animateValue('locations', 0, 3, 1000);
                    animateValue('guests', 0, 15000, 2500);
                    animateValue('varieties', 0, 100, 2000);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateValue = (key, start, end, duration) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 16);
    };

    return (
        <div className="min-h-screen bg-stone-50">

            {/* Hero Section with Carousel */}
            <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={image}
                                alt={`Kaveri ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/70 to-stone-950/85" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white mb-6 leading-tight drop-shadow-2xl">
                        A Legacy of <span className="bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#d4af37] bg-clip-text text-transparent">Culinary Excellence</span>
                    </h1>

                    <div className="flex justify-center mb-8">
                        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full shadow-lg shadow-amber-500/50" />
                    </div>

                    <p className="text-lg md:text-2xl text-stone-200 leading-relaxed max-w-3xl mx-auto">
                        Since 1948, serving Ranchi with authentic flavors and unwavering commitment to quality
                    </p>

                    <div className="flex justify-center gap-2 mt-8">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-[#d4af37] w-8' : 'bg-white/50 hover:bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Heritage Story */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/Ashok Nagar/ashok-nagar-1.png"
                                    alt="Kaveri Interior"
                                    width={700}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#b8860b] text-white rounded-2xl p-6 shadow-2xl">
                                <div className="text-4xl font-serif italic font-bold">73+</div>
                                <div className="text-sm uppercase tracking-wider font-bold">Years Combined</div>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#d4af37] text-[11px] font-bold tracking-[0.6em] uppercase mb-6">SINCE 1948</p>

                            <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8 leading-tight">
                                A Heritage Built on Passion & Excellence
                            </h2>

                            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                                <p>
                                    The Kaveri legacy began in <strong className="text-stone-900">1948</strong> when <strong className="text-stone-900">Ved Prakash Bhatia</strong> established Punjab Sweet House, planting the seeds of what would become Ranchi's most cherished culinary destination.
                                </p>
                                <p>
                                    In <strong className="text-stone-900">1987</strong>, Kaveri Restaurant opened its doors, quickly becoming a landmark in North Indian cuisine. Our Main Road branch has been delighting guests for over three decades.
                                </p>
                                <p>
                                    Building on this success, <strong className="text-stone-900">Ashwini Kumar Bhatia</strong> founded Kaveri Caterers in <strong className="text-stone-900">1989</strong>. A defining moment came when we successfully catered dinner for over 1,000 guests, including Steel Minister K.C. Pant.
                                </p>
                                <p>
                                    Today, we proudly operate <strong className="text-stone-900">three premium locations</strong> across Ranchi and handle catering for up to <strong className="text-stone-900">15,000 guests</strong> daily.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animated Stats Counter */}
            <section ref={statsRef} className="py-12 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f9e29c] rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-serif italic bg-gradient-to-r from-[#d4af37] to-[#f9e29c] bg-clip-text text-transparent font-bold mb-2">
                                {stats.years}+
                            </div>
                            <div className="text-stone-300 text-sm uppercase tracking-wider font-bold">Years Legacy</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-serif italic bg-gradient-to-r from-[#d4af37] to-[#f9e29c] bg-clip-text text-transparent font-bold mb-2">
                                {stats.locations}
                            </div>
                            <div className="text-stone-300 text-sm uppercase tracking-wider font-bold">Locations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-serif italic bg-gradient-to-r from-[#d4af37] to-[#f9e29c] bg-clip-text text-transparent font-bold mb-2">
                                {stats.guests.toLocaleString()}+
                            </div>
                            <div className="text-stone-300 text-sm uppercase tracking-wider font-bold">Daily Capacity</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-serif italic bg-gradient-to-r from-[#d4af37] to-[#f9e29c] bg-clip-text text-transparent font-bold mb-2">
                                {stats.varieties}+
                            </div>
                            <div className="text-stone-300 text-sm uppercase tracking-wider font-bold">Sweet Varieties</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-12 px-4 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <p className="text-[#d4af37] text-[11px] font-bold tracking-[0.6em] uppercase mb-6">OUR OFFERINGS</p>

                            <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-8 leading-tight">
                                A Complete Culinary Experience
                            </h2>

                            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                                <p>
                                    Our <strong className="text-stone-900">Restaurant</strong> menu features authentic North Indian, South Indian, and Chinese cuisines, along with refreshers, soups, kebabs, biryanis, breads, and signature thalis.
                                </p>
                                <p>
                                    Our <strong className="text-stone-900">Sweets Shop</strong> crafts over 100 varieties of traditional Indian sweets, from classic Rasgulla and Rasmalai to premium Kaju Barfi and specialty mithai.
                                </p>
                                <p>
                                    The <strong className="text-stone-900">Bakery</strong> offers fresh cakes, pastries, and baked goods, while our <strong className="text-stone-900">Namkeen</strong> selection includes savory snacks.
                                </p>
                                <p>
                                    Our <strong className="text-stone-900">Catering Services</strong> handle everything from intimate gatherings to grand celebrations for thousands.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/Kanke/kanke-1.png"
                                    alt="Kaveri Sweets"
                                    width={700}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#b8860b] text-white rounded-2xl p-6 shadow-2xl">
                                <div className="text-4xl font-serif italic font-bold">15K+</div>
                                <div className="text-sm uppercase tracking-wider font-bold">Daily Capacity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Preview */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-[#d4af37] text-[11px] font-bold tracking-[0.6em] uppercase mb-6">VISIT US</p>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6">
                            Three Premium Locations
                        </h2>
                        <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                            Experience Kaveri hospitality at any of our thoughtfully designed restaurants across Ranchi
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Ashok Nagar', image: '/assets/Ashok Nagar/ashok-nagar-1.png', slug: 'ashok-nagar' },
                            { name: 'Kanke Road', image: '/assets/Kanke/kanke-1.png', slug: 'kanke-road' },
                            { name: 'Ratu Road', image: '/assets/Ratu Road/ratu-1.png', slug: 'ratu-road' }
                        ].map((location) => (
                            <Link
                                key={location.slug}
                                href={`/${location.slug}`}
                                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <Image
                                    src={location.image}
                                    alt={location.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-3xl font-serif italic text-white mb-2">{location.name}</h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-[#f9e29c] rounded-full" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-stone-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6">
                        Experience the Kaveri Difference
                    </h2>
                    <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Visit us at any of our three premium locations or let us bring our legendary hospitality to your next special event.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="group px-10 py-4 text-[12px] font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-500 text-stone-900 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,175,55,0.6)] hover:scale-105 inline-block"
                        >
                            Explore Locations
                        </Link>
                        <Link
                            href="/contact"
                            className="px-10 py-4 text-[12px] font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-500 border-2 border-stone-300 text-stone-700 hover:border-[#d4af37] hover:text-[#d4af37] inline-block"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
