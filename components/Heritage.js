'use client';
import Image from 'next/image';

const Heritage = () => {
    return (
        <section id="about" className="py-12 relative overflow-hidden">
            {/* Warm Damask Pattern Background */}
            <div
                className="absolute inset-0 z-0 opacity-80"
                style={{
                    backgroundImage: 'url(/assets/bg-pattern-m.png)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '300px 300px'
                }}
            />

            {/* Lighter overlay for better pattern visibility */}
            <div className="absolute inset-0 bg-stone-900/40 z-0" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* ELEGANT 3-IMAGE ARRANGEMENT */}
                    <div className="relative h-[550px] md:h-[600px] flex items-center">
                        {/* Image 1: The Base (Large Vertical) - Restaurant Ambiance */}
                        <div className="absolute left-0 top-10 w-3/4 aspect-[3/4] bg-stone-100 overflow-hidden shadow-2xl rounded-2xl border-4 border-white z-10">
                            <Image
                                src="/assets/Ashok Nagar/ashok-nagar-1.png"
                                alt="Kaveri Restaurant Interior"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Image 2: Top Floating (Horizontal) - Sweet Delights */}
                        <div className="absolute top-0 right-4 w-1/2 aspect-video overflow-hidden shadow-xl rounded-2xl border-4 border-white z-20">
                            <Image
                                src="/assets/cakes/7.png"
                                alt="Kaveri Sweet Delights"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Image 3: Bottom Detail (Square) - Signature Dish */}
                        <div className="absolute bottom-10 right-0 w-5/12 aspect-square overflow-hidden shadow-2xl rounded-2xl border-4 border-white z-20">
                            <Image
                                src="/assets/menu/dal.png"
                                alt="Kaveri Dal Special"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Heritage Badge */}
                        <div className="absolute -bottom-4 -left-4 w-44 md:w-48 aspect-square bg-gradient-to-br from-[#d4af37] to-[#b8860b] p-6 md:p-8 text-white shadow-2xl border-4 border-white rounded-2xl z-30 flex flex-col justify-center text-center">
                            <span className="text-white text-5xl md:text-6xl font-serif mb-1 block font-bold leading-none">32</span>
                            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold leading-tight text-amber-100">Years of Heritage</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-[#f9e29c] font-bold uppercase tracking-widest text-xs">Pure Veg Heritage</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mt-4 text-white">
                                A Legacy Carved <br /><span className="italic font-light text-[#f9e29c]">in Spice.</span>
                            </h2>
                        </div>
                        <p className="text-stone-200 leading-relaxed text-lg font-light">
                            Established in 1992, Kaveri Restaurants began with a singular vision: to bring authentic pure vegetarian flavors to the heart of Ranchi. Over three decades, we've become a landmark where traditions are celebrated on every plate.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#f9e29c] mb-1">32+</div>
                                <div className="text-xs text-stone-300 uppercase tracking-wider">Years</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#f9e29c] mb-1">3</div>
                                <div className="text-xs text-stone-300 uppercase tracking-wider">Locations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#f9e29c] mb-1">100%</div>
                                <div className="text-xs text-stone-300 uppercase tracking-wider">Pure Veg</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heritage;
