'use client';

const ZeroProof = () => {
    return (
        <section className="py-12 bg-gradient-to-br from-amber-50/30 via-white to-amber-50/30 relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                    backgroundImage: 'url(/assets/pg-pattern-white.png)',
                    backgroundRepeat: 'repeat'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <div className="order-2 lg:order-1">
                        <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] border-4 border-white">
                            <img
                                src="/assets/cakes/5.png"
                                alt="Kaveri Bakery & Sweets"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Sweet Indulgence</span>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 leading-tight">
                            Kaveri Bakery &<br />Sweet Delights
                        </h2>
                        <p className="text-stone-600 text-lg font-light leading-relaxed">
                            Discover our exquisite collection of freshly baked cakes, traditional Indian sweets, and artisanal confections. Each creation is crafted with premium ingredients and time-honored recipes.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-800 text-sm">Fresh Cakes</h4>
                                    <p className="text-xs text-stone-500">Daily baked</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-800 text-sm">Traditional Sweets</h4>
                                    <p className="text-xs text-stone-500">Authentic recipes</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#menu"
                            className="inline-block mt-6 px-8 py-3 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] text-stone-950 font-bold rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-md"
                        >
                            Explore Sweets
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZeroProof;
