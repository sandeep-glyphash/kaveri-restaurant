'use client';

const BespokeEvents = () => {
    return (
        <section className="py-10 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative h-[450px] rounded-[32px] overflow-hidden shadow-2xl">
                    {/* High-quality image from Ratu Road directory */}
                    <img
                        src="/assets/Ratu Road/ratu-1.png"
                        alt="Bespoke Events"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center text-center p-8">
                        <div>
                            <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px]">
                                Grand Occasions
                            </span>
                            <h2 className="text-white text-4xl md:text-6xl font-serif mt-4 mb-4 italic">
                                Memories That Last Forever
                            </h2>
                            <p className="text-white/90 max-w-xl mx-auto font-light leading-relaxed mb-8 text-lg">
                                Majestic Pure Veg catering for weddings and celebrations.
                            </p>
                            <button className="px-14 py-5 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] text-stone-950 font-black uppercase text-[11px] rounded-full shadow-2xl hover:scale-105 transition-transform">
                                Enquire for Events
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BespokeEvents;
