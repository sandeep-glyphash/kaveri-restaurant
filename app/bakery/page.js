'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useShop } from '../../context/ShopContext';

export default function BakeryPage() {
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
        { id: 'all', name: 'All Items' },
        { id: 'cakes', name: 'Cakes' },
        { id: 'pastries', name: 'Pastries' },
        { id: 'cookies', name: 'Cookies' },
        { id: 'breads', name: 'Breads' }
    ];

    const bakeryItems = [
        { id: 'b1', name: 'Black Forest Cake', category: 'cakes', price: 599, image: '/assets/Hampers/IMG_7834.jpg', desc: 'Rich chocolate cake with cherries', type: 'egg' },
        { id: 'b2', name: 'Chocolate Truffle Cake', category: 'cakes', price: 699, image: '/assets/Hampers/IMG_7809.jpg', desc: 'Decadent chocolate layers', type: 'egg' },
        { id: 'b3', name: 'Butterscotch Cake', category: 'cakes', price: 549, image: '/assets/Hampers/IMG_7820.jpg', desc: 'Classic butterscotch flavor', type: 'egg' },
        { id: 'b4', name: 'Pineapple Cake', category: 'cakes', price: 499, image: '/assets/Hampers/IMG_7829.jpg', desc: 'Fresh pineapple delight', type: 'egg' },
        { id: 'b5', name: 'Red Velvet Cake', category: 'cakes', price: 649, image: '/assets/Hampers/IMG_7831.jpg', desc: 'Smooth cream cheese frosting', type: 'egg' },
        { id: 'b6', name: 'Chocolate Pastry', category: 'pastries', price: 89, image: '/assets/menu/paneer-tikka.jpg', desc: 'Individual chocolate delight', type: 'egg' },
        { id: 'b7', name: 'Strawberry Pastry', category: 'pastries', price: 99, image: '/assets/menu/dal-makhani.jpg', desc: 'Fresh strawberry cream', type: 'egg' },
        { id: 'b8', name: 'Vanilla Pastry', category: 'pastries', price: 79, image: '/assets/menu/paneer-butter.jpg', desc: 'Classic vanilla flavor', type: 'egg' },
        { id: 'b9', name: 'Black Forest Pastry', category: 'pastries', price: 99, image: '/assets/menu/veg-biryani.jpg', desc: 'Mini black forest treat', type: 'egg' },
        { id: 'b10', name: 'Chocolate Chip Cookies', category: 'cookies', price: 199, image: '/assets/menu/malai-kofta.jpg', desc: 'Crispy chocolate cookies', type: 'veg' },
        { id: 'b11', name: 'Butter Cookies', category: 'cookies', price: 179, image: '/assets/menu/kadhai-paneer.jpg', desc: 'Melt-in-mouth butter', type: 'veg' },
        { id: 'b12', name: 'Oatmeal Cookies', category: 'cookies', price: 189, image: '/assets/menu/shahi-paneer.jpg', desc: 'Healthy oat cookies', type: 'veg' },
        { id: 'b13', name: 'Jeera Cookies', category: 'cookies', price: 169, image: '/assets/menu/mushroom-masala.jpg', desc: 'Savory cumin cookies', type: 'veg' },
        { id: 'b14', name: 'Brown Bread', category: 'breads', price: 45, image: '/assets/menu/butter-naan.jpg', desc: 'Healthy whole wheat', type: 'veg' },
        { id: 'b15', name: 'White Bread', category: 'breads', price: 40, image: '/assets/menu/garlic-naan.jpg', desc: 'Soft white bread', type: 'veg' },
        { id: 'b16', name: 'Multigrain Bread', category: 'breads', price: 55, image: '/assets/menu/tandoori-roti.jpg', desc: 'Nutritious grain mix', type: 'veg' },
        { id: 'b17', name: 'Garlic Bread', category: 'breads', price: 129, image: '/assets/menu/plain-rice.jpg', desc: 'Buttery garlic flavor', type: 'veg' },
        { id: 'b18', name: 'Fruit Cake', category: 'cakes', price: 599, image: '/assets/Hampers/IMG_7840.jpg', desc: 'Mixed fruit celebration', type: 'egg' },
        { id: 'b19', name: 'Plum Cake', category: 'cakes', price: 649, image: '/assets/Hampers/IMG_7856.jpg', desc: 'Traditional Christmas cake', type: 'egg' },
        { id: 'b20', name: 'Cheese Bread', category: 'breads', price: 149, image: '/assets/menu/mix-veg.jpg', desc: 'Loaded with cheese', type: 'veg' }
    ];

    const filteredItems = bakeryItems.filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
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
                            src="/assets/Ashok Nagar/ashok-nagar-1.png"
                            alt="Fresh Bakery"
                            fill
                            className="object-cover animate-pan-zoom"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
                    </div>
                    <div className="relative z-10 text-center px-4 mt-12">
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-2 italic drop-shadow-lg">
                            Fresh <span className="text-amber-400">Bakery</span>
                        </h1>
                        <p className="text-white/80 text-sm md:text-lg tracking-widest uppercase font-bold">
                            Baked Daily • Premium Quality • Delicious Treats
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
                                    placeholder="Search bakery items..."
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

                {/* Bakery Items Grid */}
                <div className="max-w-7xl mx-auto px-4 py-8 pb-32">
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                        {filteredItems.map((item) => {
                            const cartItem = cart.find(i => i.id === item.id);
                            const qty = cartItem ? cartItem.quantity : 0;
                            const isWishlisted = wishlist.some(w => w.id === item.id);

                            if (viewMode === 'list') {
                                return (
                                    <div key={item.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all border border-transparent hover:border-amber-100 flex h-32 md:h-40">
                                        <div className="relative w-32 md:w-48 h-full shrink-0 overflow-hidden">
                                            <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <span className={`absolute top-2 left-2 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}>{item.type === 'veg' ? 'VEG' : 'EGG'}</span>
                                        </div>
                                        <div className="flex-1 p-3 md:p-5 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-sm md:text-lg font-bold text-stone-900 leading-tight group-hover:text-amber-700 transition-colors line-clamp-1">{item.name}</h3>
                                                    <p className="text-stone-400 text-[10px] md:text-xs mt-1 line-clamp-2">{item.desc}</p>
                                                </div>
                                                <span className="text-sm md:text-lg font-bold text-stone-900 whitespace-nowrap ml-2">₹{item.price}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button onClick={() => toggleWishlist(item)} className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isWishlisted ? 'text-red-500 bg-red-50 border-red-200' : 'text-stone-300 hover:text-red-400 border-stone-200'}`}>
                                                    <svg className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                                {qty === 0 ? (
                                                    <button onClick={() => addToCart(item)} className="px-4 py-1.5 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors">Add</button>
                                                ) : (
                                                    <div className="flex items-center bg-stone-50 rounded-lg border border-stone-200 h-8">
                                                        <button onClick={() => removeFromCart(item.id)} className="w-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">-</button>
                                                        <span className="px-1 text-xs font-bold text-stone-900">{qty}</span>
                                                        <button onClick={() => addToCart(item)} className="w-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">+</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div key={item.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all border border-transparent hover:border-amber-100 flex flex-col">
                                    <div className="relative aspect-square overflow-hidden">
                                        <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                        <div className="absolute top-3 left-3">
                                            <span className={`text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}>{item.type === 'veg' ? 'VEG' : 'EGG'}</span>
                                        </div>
                                        <button onClick={() => toggleWishlist(item)} className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md transition-all flex items-center justify-center ${isWishlisted ? 'bg-white text-red-500' : 'bg-white/20 text-white hover:bg-white hover:text-red-500'}`}>
                                            <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-stone-900 leading-tight group-hover:text-amber-700 transition-colors">{item.name}</h3>
                                            <span className="text-lg font-bold text-stone-900">₹{item.price}</span>
                                        </div>
                                        <p className="text-stone-500 text-xs leading-relaxed mb-4 line-clamp-2 flex-1">{item.desc}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                                            <div className="flex items-center gap-1">
                                                <div className={`w-3 h-3 rounded-sm border flex items-center justify-center p-0.5 ${item.type === 'veg' ? 'border-green-600' : 'border-red-600'}`}>
                                                    <div className={`w-full h-full rounded-full ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`} />
                                                </div>
                                                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">{item.type === 'veg' ? 'Pure Veg' : 'Contains Egg'}</span>
                                            </div>
                                            {qty === 0 ? (
                                                <button onClick={() => addToCart(item)} className="px-6 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors shadow-lg">Add</button>
                                            ) : (
                                                <div className="flex items-center bg-stone-50 rounded-lg border border-stone-200">
                                                    <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">-</button>
                                                    <span className="w-6 text-center text-sm font-bold text-stone-900">{qty}</span>
                                                    <button onClick={() => addToCart(item)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">+</button>
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
