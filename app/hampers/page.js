'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useShop } from '../../context/ShopContext';

export default function HampersPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart, addToCart, removeFromCart, wishlist, toggleWishlist } = useShop();

    // Handle Scroll for Sticky Header Styles
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { id: 'all', name: 'All Hampers' },
        { id: 'premium', name: 'Premium' },
        { id: 'festive', name: 'Festive' },
        { id: 'traditional', name: 'Traditional' }
    ];

    const hampers = [
        { id: 'h1', name: 'Festive Delight Basket', category: 'festive', price: 1499, image: '/assets/Hampers/IMG_7809.jpg', desc: 'Beautiful arrangement of traditional sweets and dry fruits' },
        { id: 'h2', name: 'Premium Sweets Box', category: 'premium', price: 1799, image: '/assets/Hampers/IMG_7820.jpg', desc: 'Elegant box filled with assorted premium sweets' },
        { id: 'h3', name: 'Golden Moments', category: 'premium', price: 2199, image: '/assets/Hampers/IMG_7829.jpg', desc: 'Luxury hamper with premium dry fruits and sweets' },
        { id: 'h4', name: 'Royal Celebration', category: 'premium', price: 2499, image: '/assets/Hampers/IMG_7831.jpg', desc: 'Grand assortment with decorative packaging' },
        { id: 'h5', name: 'Heritage Collection', category: 'premium', price: 2299, image: '/assets/Hampers/IMG_7834.jpg', desc: 'Traditional favorites in premium presentation' },
        { id: 'h6', name: 'Festival Joy', category: 'festive', price: 1899, image: '/assets/Hampers/IMG_7840.jpg', desc: 'Colorful festive hamper with mixed delights' },
        { id: 'h7', name: 'Classic Tradition', category: 'traditional', price: 1699, image: '/assets/Hampers/IMG_7856.jpg', desc: 'Traditional sweets and savories combination' },
        { id: 'h8', name: 'Celebration Crate', category: 'festive', price: 1999, image: '/assets/Hampers/IMG_7867.jpg', desc: 'Festive crate with premium sweets selection' },
        { id: 'h9', name: 'Gourmet Selection', category: 'premium', price: 2599, image: '/assets/Hampers/IMG_7925.jpg', desc: 'Curated selection of gourmet sweets' },
        { id: 'h10', name: 'Festive Hamper Duo', category: 'festive', price: 1799, image: '/assets/Hampers/IMG_7928.jpg', desc: 'Dual basket festive arrangement' },
        { id: 'h11', name: 'Traditional Elegance', category: 'traditional', price: 1599, image: '/assets/Hampers/IMG_7940.jpg', desc: 'Classic sweets in elegant packaging' },
        { id: 'h12', name: 'Festive Celebration', category: 'festive', price: 1899, image: '/assets/Hampers/IMG_7941.jpg', desc: 'Colorful celebration hamper' },
        { id: 'h13', name: 'Sweet Surprises', category: 'traditional', price: 1399, image: '/assets/Hampers/IMG_7947.jpg', desc: 'Assorted traditional favorites' },
        { id: 'h14', name: 'Premium Diwali Box', category: 'festive', price: 2199, image: '/assets/Hampers/IMG_7965.jpg', desc: 'Special Diwali hamper with premium items' },
        { id: 'h15', name: 'Royal Festive Tray', category: 'premium', price: 2399, image: '/assets/Hampers/IMG_7974.jpg', desc: 'Elegant tray with royal selection' },
        { id: 'h16', name: 'Heritage Hamper', category: 'traditional', price: 1799, image: '/assets/Hampers/IMG_7986.jpg', desc: 'Traditional heritage collection' },
        { id: 'h17', name: 'Golden Gift Box', category: 'premium', price: 1999, image: '/assets/Hampers/IMG_7996.jpg', desc: 'Premium golden packaging with sweets' },
        { id: 'h18', name: 'Luxury Assortment', category: 'premium', price: 2799, image: '/assets/Hampers/IMG_8001.jpg', desc: 'Luxurious assortment in premium box' },
        { id: 'h19', name: 'Festive Joy Basket', category: 'festive', price: 1699, image: '/assets/Hampers/IMG_8011.jpg', desc: 'Joyful festive basket arrangement' },
        { id: 'h20', name: 'Premium Selection', category: 'premium', price: 2099, image: '/assets/Hampers/IMG_8018.jpg', desc: 'Carefully selected premium items' },
        { id: 'h21', name: 'Traditional Basket', category: 'traditional', price: 1499, image: '/assets/Hampers/IMG_8038.jpg', desc: 'Classic traditional arrangement' },
        { id: 'h22', name: 'Celebration Gift', category: 'festive', price: 1899, image: '/assets/Hampers/IMG_8047.jpg', desc: 'Special celebration hamper' },
        { id: 'h23', name: 'Grand Festival Box', category: 'premium', price: 2299, image: '/assets/Hampers/IMG_8051.jpg', desc: 'Grand premium festival box' },
        { id: 'h24', name: 'Elite Collection', category: 'premium', price: 2699, image: '/assets/Hampers/IMG_8054.JPG', desc: 'Elite selection for special occasions' }
    ];

    const filteredHampers = hampers.filter(hamper => {
        const matchesCategory = selectedCategory === 'all' || hamper.category === selectedCategory;
        const matchesSearch = hamper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hamper.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-stone-50 font-sans relative selection:bg-amber-100 selection:text-amber-900">
            {/* Background Pattern Overlay (Subtle) - Same as Menu */}
            <div
                className="fixed inset-0 opacity-[0.1] pointer-events-none z-0 mix-blend-multiply"
                style={{
                    backgroundImage: 'url(/assets/9423856.jpg)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px 400px'
                }}
            />

            {/* Content Wrapper */}
            <div className="relative z-10">

                {/* Hero Section - Parallax Style (Same as Menu) */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/Hampers/IMG_7834.jpg"
                            alt="Gift Hampers"
                            fill
                            className="object-cover animate-pan-zoom"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
                    </div>
                    <div className="relative z-10 text-center px-4 mt-12">
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-2 italic drop-shadow-lg">
                            Gift <span className="text-amber-400">Hampers</span>
                        </h1>
                        <p className="text-white/80 text-sm md:text-lg tracking-widest uppercase font-bold">
                            Premium Gifts • Festive Collections • Handcrafted with Love
                        </p>
                    </div>
                </section>

                {/* Premium Sticky Navigation Bar - Exactly like Menu */}
                <div className="sticky top-[60px] md:top-[80px] z-30 bg-white/95 backdrop-blur-xl border-b border-stone-200/60 shadow-sm transition-all duration-500 ease-in-out">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className={`flex flex-col md:flex-row items-center gap-3 md:gap-4 py-2 md:py-4 transition-all duration-500 ${isScrolled ? 'md:pl-[140px] justify-start' : 'md:pl-0 justify-center'}`}>

                            {/* Search - Sleek & Minimal */}
                            <div className={`relative shrink-0 group transition-all duration-500 ${isScrolled
                                ? 'w-[calc(100%-96px)] ml-auto md:ml-0 md:w-64'
                                : 'w-full md:w-96'
                                }`}>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-stone-400 group-focus-within:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-stone-200 rounded-full leading-5 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 sm:text-xs font-sans shadow-inner"
                                    placeholder="Search gift hampers..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px h-8 bg-stone-200 mx-2"></div>

                            {/* Categories - Clean Text Tabs */}
                            <div className="w-full overflow-x-auto no-scrollbar border-t md:border-t-0 border-stone-100 pt-3 md:pt-0 flex items-center justify-between">
                                <div className="flex items-center gap-6 md:gap-7 px-2 transition-all duration-500">
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            className={`relative whitespace-nowrap py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 group ${selectedCategory === cat.id ? 'text-amber-600' : 'text-stone-500 hover:text-stone-800'
                                                }`}
                                        >
                                            {cat.name}
                                            <div className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300 ${selectedCategory === cat.id ? 'w-full' : 'w-0 group-hover:w-1/2'
                                                }`} />
                                        </button>
                                    ))}
                                </div>

                                {/* View Toggles (Desktop only mostly, or right aligned) */}
                                <div className="hidden md:flex items-center gap-2 ml-4 shrink-0 border-l border-stone-200 pl-4">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-amber-100 text-amber-600' : 'text-stone-400 hover:text-stone-600'}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-amber-100 text-amber-600' : 'text-stone-400 hover:text-stone-600'}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Hampers Grid/List */}
                <div className="max-w-7xl mx-auto px-4 py-8 pb-32">
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                        {filteredHampers.map((hamper) => {
                            const cartItem = cart.find(i => i.id === hamper.id);
                            const qty = cartItem ? cartItem.quantity : 0;
                            const isWishlisted = wishlist.some(w => w.id === hamper.id);

                            // LIST VIEW RENDER
                            if (viewMode === 'list') {
                                return (
                                    <div key={hamper.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-transparent hover:border-amber-100 flex h-32 md:h-40">
                                        {/* Image Left */}
                                        <div className="relative w-32 md:w-48 h-full shrink-0 overflow-hidden">
                                            <Image
                                                src={hamper.image}
                                                alt={hamper.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <span className="absolute top-2 left-2 bg-amber-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm uppercase tracking-wider">
                                                {hamper.category}
                                            </span>
                                            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                VEG
                                            </div>
                                        </div>

                                        {/* Content Right */}
                                        <div className="flex-1 p-3 md:p-5 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-sm md:text-lg font-bold text-stone-900 leading-tight group-hover:text-amber-700 transition-colors line-clamp-1">
                                                        {hamper.name}
                                                    </h3>
                                                    <p className="text-stone-400 text-[10px] md:text-xs leading-relaxed mt-1 line-clamp-2">
                                                        {hamper.desc}
                                                    </p>
                                                </div>
                                                <span className="text-sm md:text-lg font-bold text-stone-900 whitespace-nowrap ml-2">₹{hamper.price}</span>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => toggleWishlist(hamper)}
                                                        className={`w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center transition-all ${isWishlisted ? 'text-red-500 bg-red-50 border-red-200' : 'text-stone-300 hover:text-red-400 hover:border-red-200'
                                                            }`}
                                                    >
                                                        <svg className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    {qty === 0 ? (
                                                        <button
                                                            onClick={() => addToCart(hamper)}
                                                            className="px-4 py-1.5 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors shadow-md"
                                                        >
                                                            Add
                                                        </button>
                                                    ) : (
                                                        <div className="flex items-center bg-stone-50 rounded-lg border border-stone-200 h-8">
                                                            <button onClick={() => removeFromCart(hamper.id)} className="w-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">-</button>
                                                            <span className="px-1 text-xs font-bold text-stone-900">{qty}</span>
                                                            <button onClick={() => addToCart(hamper)} className="w-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">+</button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            // GRID VIEW RENDER (Default)
                            return (
                                <div key={hamper.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-100 flex flex-col">

                                    {/* Card Image */}
                                    <div className="relative aspect-square overflow-hidden">
                                        <Image
                                            src={hamper.image}
                                            alt={hamper.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                        {/* Category Badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
                                                {hamper.category}
                                            </span>
                                        </div>

                                        {/* Wishlist Toggle */}
                                        <button
                                            onClick={() => toggleWishlist(hamper)}
                                            className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md transition-all flex items-center justify-center ${isWishlisted ? 'bg-white text-red-500' : 'bg-white/20 text-white hover:bg-white hover:text-red-500'
                                                }`}
                                        >
                                            <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-stone-900 leading-tight group-hover:text-amber-700 transition-colors">
                                                {hamper.name}
                                            </h3>
                                            <div className="flex flex-col items-end">
                                                <span className="text-lg font-bold text-stone-900">₹{hamper.price}</span>
                                            </div>
                                        </div>

                                        <p className="text-stone-500 text-xs leading-relaxed mb-4 line-clamp-2 flex-1">
                                            {hamper.desc}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                                            <div className="flex items-center gap-1">
                                                <div className="w-3 h-3 rounded-sm border border-green-600 flex items-center justify-center p-0.5">
                                                    <div className="w-full h-full bg-green-600 rounded-full" />
                                                </div>
                                                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Pure Veg</span>
                                            </div>

                                            {qty === 0 ? (
                                                <button
                                                    onClick={() => addToCart(hamper)}
                                                    className="px-6 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors shadow-lg shadow-stone-200"
                                                >
                                                    Add
                                                </button>
                                            ) : (
                                                <div className="flex items-center bg-stone-50 rounded-lg border border-stone-200">
                                                    <button onClick={() => removeFromCart(hamper.id)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">-</button>
                                                    <span className="w-6 text-center text-sm font-bold text-stone-900">{qty}</span>
                                                    <button onClick={() => addToCart(hamper)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">+</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @keyframes pan-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .animate-pan-zoom {
            animation: pan-zoom 20s infinite alternate linear;
          }
        `}</style>
            </div>
        </div>
    );
}
