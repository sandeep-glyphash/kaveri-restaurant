'use client';

const CraftOfSpices = () => {
    return (
        <section className="py-10" style={{ backgroundColor: '#fdfae7' }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-[10px] block mb-2">
                            Our Foundation
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 italic bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                            The Craft of Spices
                        </h2>
                        <p className="text-stone-700 text-lg leading-relaxed font-light mb-8">
                            Our master chefs believe that every dish is a silent dialogue between the ingredients and the flame. We hand-pick our spices from organic gardens, ensuring the purity that Kaveri is synonymous with.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-amber-600 font-bold uppercase text-[10px] tracking-widest mb-2">
                                    Hand-Pounded
                                </h4>
                                <p className="text-xs font-light text-stone-600">
                                    Ancient techniques for maximum flavor retention.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-amber-600 font-bold uppercase text-[10px] tracking-widest mb-2">
                                    Fresh Harvest
                                </h4>
                                <p className="text-xs font-light text-stone-600">
                                    Daily arrivals from local organic farms.
                                </p>
                            </div>
                        </div>
                        <a
                            href="#booking"
                            className="inline-block px-10 py-4 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] text-stone-900 font-black uppercase text-[10px] rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            Reserve Outdoor Table
                        </a>
                    </div>
                    <div className="md:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-300">
                            <img
                                src="/assets/Ratu Road/kaveri-restaurant-main-road-ranchi-home-delivery-restaurants-paga1.jpg"
                                alt="Craft of Spices"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CraftOfSpices;
