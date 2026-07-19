'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useShop } from '../../context/ShopContext';

export default function SweetsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart, addToCart, removeFromCart, wishlist, toggleWishlist } = useShop();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { id: 'all', name: 'All Sweets' },
        { id: 'traditional', name: 'Traditional' },
        { id: 'premium', name: 'Premium' },
        { id: 'dry-fruits', name: 'Dry Fruits' },
        { id: 'seasonal', name: 'Seasonal' }
    ];

    const sweets = [
        { id: 's1', name: 'Kaju Katli', category: 'premium', price: 699, image: '/assets/menu/paneer-tikka.jpg', desc: 'Premium diamond-shaped cashew fudge', weight: '500g' },
        { id: 's2', name: 'Rasgulla', category: 'traditional', price: 299, image: '/assets/menu/dal-makhani.jpg', desc: 'Soft cottage cheese balls in sugar syrup', weight: '500g' },
        { id: 's3', name: 'Gulab Jamun', category: 'traditional', price: 249, image: '/assets/menu/paneer-butter.jpg', desc: 'Deep-fried milk dumplings in rose syrup', weight: '500g' },
        { id: 's4', name: 'Soan Papdi', category: 'traditional', price: 349, image: '/assets/menu/veg-biryani.jpg', desc: 'Flaky, crispy traditional sweet', weight: '500g' },
        { id: 's5', name: 'Besan Ladoo', category: 'traditional', price: 299, image: '/assets/menu/malai-kofta.jpg', desc: 'Gram flour balls with ghee', weight: '500g' },
        { id: 's6', name: 'Motichoor Ladoo', category: 'traditional', price: 329, image: '/assets/menu/kadhai-paneer.jpg', desc: 'Fine boondi pearls sweetened', weight: '500g' },
        { id: 's7', name: 'Barfi Mix', category: 'premium', price: 599, image: '/assets/menu/shahi-paneer.jpg', desc: 'Assorted premium barfi selection', weight: '500g' },
        { id: 's8', name: 'Dry Fruit Barfi', category: 'dry-fruits', price: 799, image: '/assets/menu/mushroom-masala.jpg', desc: 'Rich barfi with assorted nuts', weight: '500g' },
        { id: 's9', name: 'Kaju Roll', category: 'premium', price: 749, image: '/assets/menu/mix-veg.jpg', desc: 'Cashew rolls with silver leaf', weight: '500g' },
        { id: 's10', name: 'Pista Roll', category: 'dry-fruits', price: 849, image: '/assets/menu/gobi-manchurian.jpg', desc: 'Pistachio rolls - premium quality', weight: '500g' },
        { id: 's11', name: 'Rasmalai', category: 'traditional', price: 399, image: '/assets/menu/chilli-paneer.jpg', desc: 'Cottage cheese patties in cream', weight: '500g' },
        { id: 's12', name: 'Kalakand', category: 'traditional', price: 449, image: '/assets/menu/manchow-soup.jpg', desc: 'Milk cake with cardamom', weight: '500g' },
        { id: 's13', name: 'Peda', category: 'traditional', price: 349, image: '/assets/menu/hot-sour.jpg', desc: 'Traditional milk-based sweet', weight: '500g' },
        { id: 's14', name: 'Anjeer Barfi', category: 'dry-fruits', price: 899, image: '/assets/menu/tomato-soup.jpg', desc: 'Fig barfi with nuts', weight: '500g' },
        { id: 's15', name: 'Coconut Ladoo', category: 'traditional', price: 299, image: '/assets/menu/crispy-corn.jpg', desc: 'Fresh coconut balls', weight: '500g' },
        { id: 's16', name: 'Mysore Pak', category: 'premium', price: 549, image: '/assets/menu/baby-corn.jpg', desc: 'Ghee-rich gram flour sweet', weight: '500g' },
        { id: 's17', name: 'Jalebi', category: 'seasonal', price: 199, image: '/assets/menu/butter-naan.jpg', desc: 'Crispy spiral in sugar syrup', weight: '500g' },
        { id: 's18', name: 'Petha', category: 'seasonal', price: 399, image: '/assets/menu/garlic-naan.jpg', desc: 'Translucent pumpkin sweet', weight: '500g' },
        { id: 's19', name: 'Kheer Kadam', category: 'premium', price: 649, image: '/assets/menu/tandoori-roti.jpg', desc: 'Two-layered milk sweet', weight: '500g' },
        { id: 's20', name: 'Rajbhog', category: 'premium', price: 699, image: '/assets/menu/plain-rice.jpg', desc: 'Saffron cottage cheese balls', weight: '500g' }
    ];

    const filteredSweets = sweets.filter(sweet => {
        const matchesCategory = selectedCategory === 'all' || sweet.category === selectedCategory;
        const matchesSearch = sweet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sweet.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-stone-50 font-sans relative">
            <div
                className="fixed inset-0 opacity-[0.1] pointer-events-none z-0 mix-blend-multiply"
                style={{
                    backgroundImage: 'url(/assets/9423856.jpg)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px 400px'
                }}
            />

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/Hampers/IMG_7925.jpg"
                            alt="Traditional Sweets"
                            fill
                            className="object-cover animate-pan-zoom"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
                    </div>
                    <div className="relative z-10 text-center px-4 mt-12">
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-2 italic drop-shadow-lg">
                            Traditional <span className="text-amber-400">Sweets</span>
                        </h1>
                        <p className="text-white/80 text-sm md:text-lg tracking-widest uppercase font-bold">
                            Handcrafted with Love • Pure Ingredients • Authentic Flavors
                        </p>
                    </div>
                </section>

                {/* Sticky Navigation */}
                <div className="sticky top-[60px] md:top-[80px] z-30 bg-white/95 backdrop-blur-xl border-b border-stone-200/60 shadow-sm transition-all duration-500">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className={`flex flex-col md:flex-row items-center gap-3 md:gap-4 py-2 md:py-4 transition-all duration-500 ${isScrolled ? 'md:pl-[140px] justify-start' : 'md:pl-0 justify-center'}`}>

                            <div className={`relative shrink-0 group transition-all duration-500 ${isScrolled ? 'w-[calc(100%-96px)] ml-auto md:ml-0 md:w-64' : 'w-full md:w-96'}`}>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-stone-400 group-focus-within:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-stone-200 rounded-full leading-5 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors sm:text-xs font-sans shadow-inner"
                                    placeholder="Search sweets..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="hidden md:block w-px h-8 bg-stone-200 mx-2"></div>

                            <div className="w-full overflow-x-auto no-scrollbar border-t md:border-t-0 border-stone-100 pt-3 md:pt-0 flex items-center justify-between">
                                <div className="flex items-center gap-6 md:gap-7 px-2">
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            className={`relative whitespace-nowrap py-2 text-xs font-bold uppercase tracking-widest transition-colors ${selectedCategory === cat.id ? 'text-amber-600' : 'text-stone-500 hover:text-stone-800'}`}
                                        >
                                            {cat.name}
                                            <div className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300 ${selectedCategory === cat.id ? 'w-full' : 'w-0'}`} />
                                        </button>
                                    ))}
                                </div>

                                <div className="hidden md:flex items-center gap-2 ml-4 shrink-0 border-l border-stone-200 pl-4">
                                    <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-amber-100 text-amber-600' : 'text-stone-400 hover:text-stone-600'}`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                    </button>
                                    <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-amber-100 text-amber-600' : 'text-stone-400 hover:text-stone-600'}`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sweets Grid */}
                <div className="max-w-7xl mx-auto px-4 py-8 pb-32">
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                        {filteredSweets.map((sweet) => {
                            const cartItem = cart.find(i => i.id === sweet.id);
                            const qty = cartItem ? cartItem.quantity : 0;
                            const isWishlisted = wishlist.some(w => w.id === sweet.id);

                            if (viewMode === 'list') {
                                return (
                                    <div key={sweet.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all border border-transparent hover:border-amber-100 flex h-32 md:h-40">
                                        <div className="relative w-32 md:w-48 h-full shrink-0 overflow-hidden">
                                            <Image src={sweet.image} alt={sweet.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <span className="absolute top-2 left-2 bg-green-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm">VEG</span>
                                        </div>
                                        <div className="flex-1 p-3 md:p-5 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-sm md:text-lg font-bold text-stone-900 leading-tight group-hover:text-amber-700 transition-colors line-clamp-1">{sweet.name}</h3>
                                                    <p className="text-stone-400 text-[10px] md:text-xs mt-1 line-clamp-2">{sweet.desc}</p>
                                                    <span className="text-[10px] text-stone-500">{sweet.weight}</span>
                                                </div>
                                                <span className="text-sm md:text-lg font-bold text-stone-900 whitespace-nowrap ml-2">₹{sweet.price}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button onClick={() => toggleWishlist(sweet)} className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isWishlisted ? 'text-red-500 bg-red-50 border-red-200' : 'text-stone-300 hover:text-red-400 border-stone-200'}`}>
                                                    <svg className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                                {qty === 0 ? (
                                                    <button onClick={() => addToCart(sweet)} className="px-4 py-1.5 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors">Add</button>
                                                ) : (
                                                    <div className="flex items-center bg-stone-50 rounded-lg border border-stone-200 h-8">
                                                        <button onClick={() => removeFromCart(sweet.id)} className="w-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">-</button>
                                                        <span className="px-1 text-xs font-bold text-stone-900">{qty}</span>
                                                        <button onClick={() => addToCart(sweet)} className="w-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">+</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div key={sweet.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all border border-transparent hover:border-amber-100 flex flex-col">
                                    <div className="relative aspect-square overflow-hidden">
                                        <Image src={sweet.image} alt={sweet.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">VEG</span>
                                        </div>
                                        <button onClick={() => toggleWishlist(sweet)} className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md transition-all flex items-center justify-center ${isWishlisted ? 'bg-white text-red-500' : 'bg-white/20 text-white hover:bg-white hover:text-red-500'}`}>
                                            <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-stone-900 leading-tight group-hover:text-amber-700 transition-colors">{sweet.name}</h3>
                                            <span className="text-lg font-bold text-stone-900">₹{sweet.price}</span>
                                        </div>
                                        <p className="text-stone-500 text-xs leading-relaxed mb-2 line-clamp-2 flex-1">{sweet.desc}</p>
                                        <p className="text-xs text-stone-400 mb-4">{sweet.weight}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                                            <div className="flex items-center gap-1">
                                                <div className="w-3 h-3 rounded-sm border border-green-600 flex items-center justify-center p-0.5">
                                                    <div className="w-full h-full bg-green-600 rounded-full" />
                                                </div>
                                                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Pure Veg</span>
                                            </div>
                                            {qty === 0 ? (
                                                <button onClick={() => addToCart(sweet)} className="px-6 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors shadow-lg">Add</button>
                                            ) : (
                                                <div className="flex items-center bg-stone-50 rounded-lg border border-stone-200">
                                                    <button onClick={() => removeFromCart(sweet.id)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">-</button>
                                                    <span className="w-6 text-center text-sm font-bold text-stone-900">{qty}</span>
                                                    <button onClick={() => addToCart(sweet)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">+</button>
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
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                    @keyframes pan-zoom {
                        0% { transform: scale(1); }
                        100% { transform: scale(1.1); }
                    }
                    .animate-pan-zoom { animation: pan-zoom 20s infinite alternate linear; }
                `}</style>
            </div>
        </div>
    );
}
