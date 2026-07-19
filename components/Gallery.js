'use client';

const Gallery = () => {
    return (
        <section id="gallery" className="py-12 bg-white relative overflow-hidden">
            {/* PG Pattern White Background */}
            <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                    backgroundImage: 'url(/assets/pg-pattern-white.png)',
                    backgroundRepeat: 'repeat'
                }}
            />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-stone-900">
                    The Kaveri <span className="italic bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] bg-clip-text text-transparent">Soul</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] max-w-7xl mx-auto px-4">
                    {/* Large Image - Top Left (2x2) */}
                    <div className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/assets/Kanke/kanke-2.png"
                            alt="Kaveri Restaurant Interior"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Small Image - Top Right 1 */}
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/assets/Ashok Nagar/ashok-nagar-2.png"
                            alt="Kaveri Dining"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Small Image - Top Right 2 */}
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/assets/Kanke/3.png"
                            alt="Kaveri Ambiance"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Wide Image - Bottom Right (2x1) */}
                    <div className="col-span-2 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/assets/Ashok Nagar/ashok-nagar-4.png"
                            alt="Kaveri Dining Experience"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
