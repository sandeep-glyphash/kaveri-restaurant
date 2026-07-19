'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useShop } from '../../context/ShopContext';

// --- DATA SOURCE (Consolidated from Ashok Nagar components) ---
const MENU_CATEGORIES = [
    { id: 'bestsellers', name: 'Bestsellers', image: '/assets/Categories/Bestseller.png' },
    { id: 'starters', name: 'Starters & Tandoor', image: '/assets/Categories/Tandoori.png' },
    { id: 'north', name: 'North Indian', image: '/assets/Categories/North Indian.png' },
    { id: 'south', name: 'South Indian', image: '/assets/Categories/South Indian.png' },
    { id: 'chinese', name: 'Chinese', image: '/assets/Categories/Chinese.png' },
    { id: 'continental', name: 'Continental', image: '/assets/Categories/Continental.png' },
    { id: 'thalis', name: 'Royal Thalis', image: '/assets/Categories/Grand Thalis.png' },
    { id: 'desserts', name: 'Desserts', image: '/assets/Categories/Desserts.png' },
    { id: 'beverages', name: 'Beverages', image: '/assets/Categories/beverages.png' }
];

const MENU_ITEMS = [
    // Bestsellers / Chef's Special
    { id: 301, name: "Dal Kaveri Special", category: "bestsellers", price: 395, image: "/assets/menu/dal.png", desc: "Signature black lentils slow-cooked for 24 hours with fresh cream and aromatic spices.", veg: true, rating: 4.9 },
    { id: 401, name: "Paneer Tikka Angara", category: "bestsellers", price: 345, image: "/assets/menu/paneer-tikka-angara.png", desc: "Smoked cottage cheese marinated in a fiery blend of Rajputana spices.", veg: true, rating: 4.8 },
    { id: 302, name: "Paneer Butter Masala", category: "bestsellers", price: 425, image: "/assets/menu/paneer-butter-masala.png", desc: "Cottage cheese in rich buttery tomato gravy.", veg: true, rating: 4.9 },

    // Starters & Tandoor
    { id: 402, name: "Tandoori Aloo", category: "starters", price: 295, image: "/assets/menu/tandoori-aloo.png", desc: "Stuffed potatoes roasted in clay oven.", veg: true, rating: 4.5 },
    { id: 403, name: "Veg Seekh Kebab", category: "starters", price: 310, image: "/assets/menu/veg-seekh-kebab.png", desc: "Minced mixed vegetable skewers roasted in tandoor.", veg: true, rating: 4.6 },
    { id: 501, name: "Paneer Chilli Dry", category: "starters", price: 325, image: "/assets/menu/paneer-chilli-dry.png", desc: "Wok-tossed cottage cheese with peppers and spices.", veg: true, rating: 4.7 },

    // North Indian
    { id: 303, name: "Malai Kofta", category: "north", price: 410, image: "/assets/menu/malai-kofta.png", desc: "Soft cottage cheese dumplings simmered in a rich, creamy cashew nut gravy.", veg: true, rating: 4.8 },
    { id: 304, name: "Diwani Handi", category: "north", price: 385, image: "/assets/menu/diwani-handi.png", desc: "Mixed vegetables in slow-cooked gravy.", veg: true, rating: 4.5 },
    { id: 305, name: "Paneer Lababdar", category: "north", price: 415, image: "/assets/menu/paneer-butter-masala.png", desc: "Cottage cheese cubes in a creamy tomato gravy with onions and bell peppers.", veg: true, rating: 4.7 },

    // South Indian
    { id: 101, name: "Masala Dosa", category: "south", price: 185, image: "/assets/menu/masala-dosa.png", desc: "Crispy rice crepe with spiced potato filling.", veg: true, rating: 4.6 },
    { id: 102, name: "Idli Sambar", category: "south", price: 125, image: "/assets/menu/idli-sambar.png", desc: "Steamed rice cakes with lentil stew.", veg: true, rating: 4.4 },
    { id: 103, name: "Medu Vada", category: "south", price: 145, image: "/assets/menu/medu-vada.png", desc: "Crispy lentil donuts served with chutney.", veg: true, rating: 4.5 },
    { id: 104, name: "Onion Uttapam", category: "south", price: 195, image: "/assets/menu/onion-uttapam.png", desc: "Thick savory pancake topped with onions.", veg: true, rating: 4.4 },

    // Chinese
    { id: 502, name: "Hakka Noodles", category: "chinese", price: 245, image: "/assets/menu/hakka-noodles.png", desc: "Stir-fried noodles with crisp veggies.", veg: true, rating: 4.3 },
    { id: 503, name: "Veg Manchurian", category: "chinese", price: 295, image: "/assets/menu/veg-cheese-burger.png", desc: "Vegetable balls in soy-garlic sauce.", veg: true, rating: 4.5 }, // Placeholder image if missing

    // Continental
    { id: 601, name: "Penne Alfredo", category: "continental", price: 375, image: "/assets/menu/penne-alfredo.png", desc: "Pasta in creamy white cheese sauce with herbs.", veg: true, rating: 4.6 },
    { id: 602, name: "Veg Cheese Burger", category: "continental", price: 195, image: "/assets/menu/veg-cheese-burger.png", desc: "Grilled patty with cheddar slice and fresh veggies.", veg: true, rating: 4.4 },

    // Thalis
    { id: 701, name: "Maharaja Thali", category: "thalis", price: 495, image: "/assets/menu/maharaja-thali.png", desc: "Royal unlimited feast with 3 sabzis, dal, rice, breads, dessert.", veg: true, rating: 4.9 },
    { id: 702, name: "Special Thali", category: "thalis", price: 350, image: "/assets/menu/special-thali.png", desc: "Seasonal vegetable platter with roti and rice.", veg: true, rating: 4.7 },
    { id: 703, name: "Mini Meal", category: "thalis", price: 245, image: "/assets/menu/mini-meal.png", desc: "Rice, Dal, 1 Sabzi, 2 Rotis.", veg: true, rating: 4.3 },

    // Desserts
    { id: 901, name: "Gulab Jamun", category: "desserts", price: 95, image: "/assets/menu/gulab-jamun.png", desc: "Soft milk solids in sugar syrup.", veg: true, rating: 4.8 },
    { id: 902, name: "Rasmalai", category: "desserts", price: 125, image: "/assets/menu/rasmalai.jpg.png", desc: "Cottage cheese patties in saffron milk.", veg: true, rating: 4.9 },
    { id: 903, name: "Sizzling Brownie", category: "desserts", price: 215, image: "/assets/menu/sizzling-brownie.png", desc: "Walnut brownie with vanilla ice cream.", veg: true, rating: 4.8 },

    // Beverages
    { id: 1001, name: "Mango Lassi", category: "beverages", price: 145, image: "/assets/menu/mango-lassi.png", desc: "Thick yogurt shake with mango pulp.", veg: true, rating: 4.7 },
    { id: 1003, name: "Cold Coffee", category: "beverages", price: 165, image: "/assets/menu/cold-coffee.png", desc: "Blended coffee with ice cream.", veg: true, rating: 4.6 }
];

export default function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState('bestsellers');
    const [searchQuery, setSearchQuery] = useState('');
    const { cart, addToCart, removeFromCart, wishlist, toggleWishlist, cartTotal, cartCount } = useShop();
    const categoryRefs = useRef({});
    const [isScrolled, setIsScrolled] = useState(false);
    const categoriesContainerRef = useRef(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [showCartBanner, setShowCartBanner] = useState(true);

    // Handle Scroll for Sticky Header Styles
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to active category button
    useEffect(() => {
        if (categoriesContainerRef.current) {
            const activeBtn = categoriesContainerRef.current.querySelector(`[data-category="${selectedCategory}"]`);
            if (activeBtn) {
                activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [selectedCategory]);

    // Smooth scroll to category section
    const scrollToCategory = (catId) => {
        setSelectedCategory(catId);
        const element = document.getElementById(catId);
        if (element) {
            const headerOffset = 220; // Increased offset for better spacing
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Intersection observer to update active category on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelectedCategory(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-150px 0px -50% 0px' }
        );

        MENU_CATEGORIES.forEach((cat) => {
            const el = document.getElementById(cat.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Show cart banner when items are added after closing it
    useEffect(() => {
        if (cartCount > 0) {
            setShowCartBanner(true);
        }
    }, [cartCount]);


    return (
        <div className="min-h-screen bg-stone-50 font-sans relative selection:bg-amber-100 selection:text-amber-900">
            {/* Background Pattern Overlay (Subtle) */}
            <div
                className="fixed inset-0 opacity-[0.1] pointer-events-none z-0 mix-blend-multiply"
                style={{
                    backgroundImage: 'url(/assets/9423856.jpg)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px 400px'
                }}
            />

            {/* Content Wrapper to ensure z-index above background */}
            <div className="relative z-10">

                {/* Hero Section - Parallax Style */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/Panner-lababdar-bg.png"
                            alt="Menu Hero"
                            fill
                            className="object-cover animate-pan-zoom"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
                    </div>
                    <div className="relative z-10 text-center px-4 mt-12">
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-2 italic drop-shadow-lg">
                            Dining <span className="text-amber-400">Menu</span>
                        </h1>
                        <p className="text-white/80 text-sm md:text-lg tracking-widest uppercase font-bold">
                            Authentic Flavors • Pure Veg • Crafted with Love
                        </p>
                    </div>
                </section>

                {/* Premium Sticky Navigation Bar */}
                <div className={`sticky z-30 bg-white/95 backdrop-blur-xl border-b border-stone-200/60 shadow-sm transition-all duration-500 ease-in-out ${isScrolled ? 'top-[60px] md:top-[80px]' : 'top-[60px] md:top-[80px]'
                    }`}>
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Add padding-left to clear the logo bulge on desktop ONLY when scrolled */}
                        <div className={`flex flex-col md:flex-row items-center gap-3 md:gap-4 py-2 md:py-4 transition-all duration-500 ${isScrolled ? 'md:pl-[140px] justify-start' : 'md:pl-0 justify-center'
                            }`}>

                            {/* Search - Sleek & Minimal */}
                            <div className={`relative shrink-0 group transition-all duration-500 ${isScrolled
                                ? 'w-[calc(100%-96px)] ml-auto md:ml-0 md:w-64' // Mobile Scrolled: Smaller width for even spacing
                                : 'w-full md:w-96' // Initial: Full width mobile, Wide centered desktop
                                }`}>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-stone-400 group-focus-within:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-stone-200 rounded-full leading-5 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 sm:text-xs font-sans shadow-inner"
                                    placeholder="Search our menu..."
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px h-8 bg-stone-200 mx-2"></div>

                            {/* Categories - Clean Text Tabs */}
                            <div ref={categoriesContainerRef} className="w-full overflow-x-auto no-scrollbar border-t md:border-t-0 border-stone-100 pt-3 md:pt-0 flex items-center justify-between">
                                <div className={`flex items-center gap-6 md:gap-7 px-2 transition-all duration-500 ${!isScrolled && 'md:justify-center'}`}>
                                    {MENU_CATEGORIES.map(cat => (
                                        <button
                                            key={cat.id}
                                            data-category={cat.id}
                                            onClick={() => scrollToCategory(cat.id)}
                                            className={`relative whitespace-nowrap py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 group ${selectedCategory === cat.id
                                                ? 'text-amber-600'
                                                : 'text-stone-500 hover:text-stone-800'
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

                {/* Menu Content */}
                <div className="max-w-7xl mx-auto px-4 py-8 pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Menu List */}
                        <div className="lg:col-span-8 space-y-20">
                            {MENU_CATEGORIES.map(category => {
                                // Filter logic
                                const categoryItems = MENU_ITEMS.filter(item =>
                                    (category.id === 'bestsellers' ? item.category === 'bestsellers' || item.rating >= 4.8
                                        : item.category === category.id)
                                    && item.name.toLowerCase().includes(searchQuery.toLowerCase())
                                );

                                if (categoryItems.length === 0) return null;

                                return (
                                    <section key={category.id} id={category.id} className="scroll-mt-[220px]">
                                        <div className="flex items-end justify-between gap-4 mb-8 pb-2 border-b border-stone-200">
                                            <div className="flex items-end gap-3">
                                                <h2 className="text-3xl font-serif font-bold text-stone-800">
                                                    {category.name}
                                                </h2>
                                                <span className="text-stone-400 text-sm font-bold uppercase tracking-wider mb-1.5">
                                                    ({categoryItems.length} items)
                                                </span>
                                            </div>
                                            {/* View Toggle (Visible on Mobile & Desktop) */}
                                            <div className="flex gap-2">
                                                <button onClick={() => setViewMode('grid')} className={`transition-colors ${viewMode === 'grid' ? 'text-amber-600' : 'text-stone-300 hover:text-stone-500'}`}>
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                                                </button>
                                                <button onClick={() => setViewMode('list')} className={`transition-colors ${viewMode === 'list' ? 'text-amber-600' : 'text-stone-300 hover:text-stone-500'}`}>
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className={`grid gap-x-6 gap-y-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                                            {categoryItems.map(item => {
                                                const setItem = cart.find(i => i.id === item.id);
                                                const qty = setItem ? setItem.quantity : 0;
                                                const isWishlisted = wishlist.some(w => w.id === item.id);

                                                if (viewMode === 'list') {
                                                    // LIST VIEW RENDER
                                                    return (
                                                        <div key={item.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-transparent hover:border-amber-100 flex h-32 md:h-40">
                                                            {/* Image Left */}
                                                            <div className="relative w-32 md:w-48 h-full shrink-0 overflow-hidden">
                                                                <Image
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    fill
                                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                                />
                                                                {item.rating >= 4.8 && (
                                                                    <span className="absolute top-2 left-2 bg-amber-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm uppercase tracking-wider">
                                                                        Bestseller
                                                                    </span>
                                                                )}
                                                                {/* Veg Indicator */}
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
                                                                            {item.name}
                                                                        </h3>
                                                                        <p className="text-stone-400 text-[10px] md:text-xs leading-relaxed mt-1 line-clamp-2 md:line-clamp-2">
                                                                            {item.desc}
                                                                        </p>
                                                                    </div>
                                                                    <span className="text-sm md:text-lg font-bold text-stone-900 whitespace-nowrap ml-2">₹{item.price}</span>
                                                                </div>

                                                                <div className="flex items-center justify-between mt-2">
                                                                    <div className="flex text-amber-500 text-[10px]">
                                                                        {'★'.repeat(Math.round(item.rating))}
                                                                        <span className="text-stone-300 ml-1">({item.rating})</span>
                                                                    </div>

                                                                    <div className="flex items-center gap-2">
                                                                        {/* Wishlist Button for List View */}
                                                                        <button
                                                                            onClick={() => toggleWishlist(item.id)}
                                                                            className={`w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center transition-all ${isWishlisted ? 'text-red-500 bg-red-50 border-red-200' : 'text-stone-300 hover:text-red-400 hover:border-red-200'}`}
                                                                        >
                                                                            <svg className="w-4 h-4" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                            </svg>
                                                                        </button>

                                                                        {qty === 0 ? (
                                                                            <button
                                                                                onClick={() => addToCart(item)}
                                                                                className="px-4 py-1.5 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors shadow-md"
                                                                            >
                                                                                Add
                                                                            </button>
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
                                                        </div>
                                                    );
                                                }

                                                // GRID VIEW RENDER (Default)
                                                return (
                                                    <div key={item.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-amber-100 flex flex-col">

                                                        {/* Card Image */}
                                                        <div className="relative aspect-[4/3] overflow-hidden">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.name}
                                                                fill
                                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                            />

                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                                            {/* Badges */}
                                                            <div className="absolute top-3 left-3 flex flex-col gap-2">
                                                                {item.rating >= 4.8 && (
                                                                    <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">
                                                                        Bestseller
                                                                    </span>
                                                                )}
                                                            </div>

                                                            {/* Wishlist Toggle */}
                                                            <button
                                                                onClick={() => toggleWishlist(item)}
                                                                className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md transition-all flex items-center justify-center ${isWishlisted ? 'bg-white text-red-500' : 'bg-white/20 text-white hover:bg-white hover:text-red-500'}`}
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
                                                                    {item.name}
                                                                </h3>
                                                                <div className="flex flex-col items-end">
                                                                    <span className="text-lg font-bold text-stone-900">₹{item.price}</span>
                                                                </div>
                                                            </div>

                                                            <p className="text-stone-500 text-xs leading-relaxed mb-4 line-clamp-2 flex-1">
                                                                {item.desc}
                                                            </p>

                                                            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                                                                <div className="flex items-center gap-1">
                                                                    <div className="w-3 h-3 rounded-sm border border-green-600 flex items-center justify-center p-0.5">
                                                                        <div className="w-full h-full bg-green-600 rounded-full" />
                                                                    </div>
                                                                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider ml-1">Veg</span>
                                                                </div>

                                                                {qty === 0 ? (
                                                                    <button
                                                                        onClick={() => addToCart(item)}
                                                                        className="px-6 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors shadow-lg shadow-stone-200"
                                                                    >
                                                                        Add
                                                                    </button>
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
                                    </section>
                                );
                            })}
                        </div>

                        {/* Sidebar Cart - Desktop */}
                        <div className="hidden lg:block lg:col-span-4 pl-4">
                            <div className="sticky top-[180px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-stone-100 p-6">
                                <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 flex items-center justify-between border-b border-stone-100 pb-4">
                                    Your Order
                                    <span className="bg-amber-50 text-amber-600 text-[10px] px-2 py-1 rounded-full font-sans font-bold uppercase tracking-wider">
                                        {cartCount} Items
                                    </span>
                                </h3>

                                {cart.length === 0 ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-bold text-stone-400 uppercase tracking-wide">Your cart is empty</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                            {cart.map(item => (
                                                <div key={item.id} className="flex justify-between items-center group">
                                                    <div className="flex items-center gap-3 overflow-hidden">
                                                        <div className="w-12 h-12 relative rounded-lg overflow-hidden shrink-0">
                                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                        </div>
                                                        <div className="truncate">
                                                            <p className="font-bold text-stone-800 text-sm truncate group-hover:text-amber-600 transition-colors">{item.name}</p>
                                                            <p className="text-stone-400 text-xs">₹{item.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-stone-50 rounded-md p-1">
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-red-500 transition-colors text-xs"
                                                        >
                                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                            </svg>
                                                        </button>
                                                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => addToCart(item)}
                                                            className="w-5 h-5 flex items-center justify-center text-stone-400 hover:text-green-500 transition-colors text-xs"
                                                        >
                                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="border-t border-dashed border-stone-200 mt-6 pt-4 space-y-2">
                                            <div className="flex justify-between text-xs font-bold text-stone-400 uppercase tracking-wider">
                                                <span>Subtotal</span>
                                                <span>₹{cartTotal}</span>
                                            </div>
                                            <div className="flex justify-between text-xs font-bold text-stone-400 uppercase tracking-wider">
                                                <span>Tax (5%)</span>
                                                <span>₹{Math.round(cartTotal * 0.05)}</span>
                                            </div>
                                            <div className="flex justify-between text-lg font-bold text-stone-900 pt-2 border-t border-stone-100 mt-2">
                                                <span>Total</span>
                                                <span>₹{Math.round(cartTotal * 1.05)}</span>
                                            </div>
                                            <Link
                                                href="/checkout"
                                                className="block w-full py-4 mt-4 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] text-stone-950 font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:shadow-lg hover:translate-y-[-2px] transition-all active:scale-95 shadow-[0_10px_20px_rgba(212,175,55,0.2)] text-center"
                                            >
                                                Proceed to Checkout
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Bottom Cart Bar - Premium Glass */}
                {cart.length > 0 && showCartBanner && (
                    <div className="lg:hidden fixed bottom-24 left-4 right-4 bg-stone-900/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-4 z-50 animate-bounce-subtle border border-white/10">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowCartBanner(false)}
                            className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-stone-800 border-2 border-white/10 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-600 transition-all duration-300 shadow-lg group"
                            aria-label="Close cart banner"
                        >
                            <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex items-center justify-between gap-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">{cartCount} ITEMS</span>
                                <span className="text-xl font-serif text-white italic">₹{Math.round(cartTotal * 1.05)}</span>
                            </div>
                            <Link
                                href="/checkout"
                                className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-bold uppercase text-[10px] tracking-widest rounded-xl shadow-lg transform hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                Checkout
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                )}



                <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f5f5f4;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d6d3d1;
                    border-radius: 4px;
                }
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
