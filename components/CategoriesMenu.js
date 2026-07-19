'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { useShop } from '../context/ShopContext';
import { useModal } from '../context/ModalContext';

const CategoriesMenu = () => {
    const [activeCategory, setActiveCategory] = useState('bestsellers');
    const [itemsToShow, setItemsToShow] = useState(8);
    const scrollRef = useRef(null);
    const { cart, addToCart, removeFromCart, wishlist, toggleWishlist } = useShop();

    const categories = [
        { id: 'bestsellers', name: 'Bestsellers', image: '/assets/Categories/Bestseller.png' },
        { id: 'breakfast', name: 'Breakfast', image: '/assets/Categories/Breakfast.png' },
        { id: 'south', name: 'South Indian', image: '/assets/Categories/South Indian.png' },
        { id: 'north', name: 'North Indian', image: '/assets/Categories/North Indian.png' },
        { id: 'tandoor', name: 'Tandoori', image: '/assets/Categories/Tandoori.png' },
        { id: 'chinese', name: 'Chinese', image: '/assets/Categories/Chinese.png' },
        { id: 'continental', name: 'Continental', image: '/assets/Categories/Continental.png' },
        { id: 'thalis', name: 'Grand Thalis', image: '/assets/Categories/Grand Thalis.png' },
        { id: 'soups', name: 'Soups', image: '/assets/Categories/Soups.png' },
        { id: 'desserts', name: 'Desserts', image: '/assets/Categories/Desserts.png' },
        { id: 'beverages', name: 'Beverages', image: '/assets/Categories/beverages.png' }
    ];

    const menuItems = [
        // Bestsellers
        { id: 101, name: "Masala Dosa", category: "south", price: 185, image: "/assets/menu/masala-dosa.png", desc: "Crispy rice crepe with spiced potato filling.", bestseller: true },
        { id: 203, name: "Chole Bhature", category: "breakfast", price: 210, image: "/assets/menu/chole-bhature.png", desc: "Spiced chickpeas with fried bread.", bestseller: true },
        { id: 301, name: "Dal Kaveri Special", category: "north", price: 395, image: "/assets/menu/dal.png", desc: "Signature black lentils cooked 24h.", bestseller: true },
        { id: 302, name: "Paneer Butter Masala", category: "north", price: 425, image: "/assets/menu/paneer-butter-masala.png", desc: "Cottage cheese in rich buttery tomato gravy.", bestseller: true },
        { id: 401, name: "Paneer Tikka Angara", category: "tandoor", price: 345, image: "/assets/menu/paneer-tikka-angara.png", desc: "Smoked cottage cheese in Rajputana spices.", bestseller: true },
        { id: 701, name: "Maharaja Thali", category: "thalis", price: 495, image: "/assets/menu/maharaja-thali.png", desc: "Royal unlimited feast with 3 sabzis.", bestseller: true },
        { id: 901, name: "Gulab Jamun", category: "desserts", price: 95, image: "/assets/menu/gulab-jamun.png", desc: "Soft milk solids in sugar syrup.", bestseller: true },
        { id: 1001, name: "Mango Lassi", category: "beverages", price: 145, image: "/assets/menu/mango-lassi.png", desc: "Thick yogurt shake with mango pulp.", bestseller: true },

        // Breakfast
        { id: 201, name: "Poha", category: "breakfast", price: 95, image: "/assets/menu/poha.png", desc: "Flattened rice sautéed with spices." },
        { id: 202, name: "Aloo Paratha", category: "breakfast", price: 120, image: "/assets/menu/aloo-paratha.png", desc: "Stuffed potato flatbread with curd." },
        { id: 204, name: "Upma", category: "breakfast", price: 105, image: "/assets/menu/upma.png", desc: "Semolina porridge with veggies." },

        // South Indian
        { id: 102, name: "Idli Sambar", category: "south", price: 125, image: "/assets/menu/idli-sambar.png", desc: "Steamed rice cakes with lentil stew." },
        { id: 103, name: "Medu Vada", category: "south", price: 145, image: "/assets/menu/medu-vada.png", desc: "Crispy lentil donuts." },
        { id: 104, name: "Onion Uttapam", category: "south", price: 195, image: "/assets/menu/onion-uttapam.png", desc: "Thick savory pancake topped with onions." },

        // North Indian
        { id: 303, name: "Malai Kofta", category: "north", price: 410, image: "/assets/menu/malai-kofta.png", desc: "Fried dumplings in creamy cashew sauce." },
        { id: 304, name: "Diwani Handi", category: "north", price: 385, image: "/assets/menu/diwani-handi.png", desc: "Mixed vegetables in slow-cooked gravy." },

        // Tandoori
        { id: 402, name: "Tandoori Aloo", category: "tandoor", price: 295, image: "/assets/menu/tandoori-aloo.png", desc: "Stuffed potatoes roasted in clay oven." },
        { id: 403, name: "Veg Seekh Kebab", category: "tandoor", price: 310, image: "/assets/menu/veg-seekh-kebab.png", desc: "Minced mixed vegetable skewers." },

        // Chinese
        { id: 501, name: "Paneer Chilli Dry", category: "chinese", price: 325, image: "/assets/menu/paneer-chilli-dry.png", desc: "Wok-tossed cottage cheese with spices." },
        { id: 502, name: "Hakka Noodles", category: "chinese", price: 245, image: "/assets/menu/hakka-noodles.png", desc: "Stir-fried noodles with crisp veggies." },

        // Continental
        { id: 601, name: "Penne Alfredo", category: "continental", price: 375, image: "/assets/menu/penne-alfredo.png", desc: "Pasta in creamy white cheese sauce." },
        { id: 602, name: "Veg Cheese Burger", category: "continental", price: 195, image: "/assets/menu/veg-cheese-burger.png", desc: "Grilled patty with cheddar slice." },

        // Thalis
        { id: 702, name: "Special Thali", category: "thalis", price: 350, image: "/assets/menu/special-thali.png", desc: "Seasonal vegetable platter." },
        { id: 703, name: "Mini Meal", category: "thalis", price: 245, image: "/assets/menu/mini-meal.png", desc: "Rice, Dal, 1 Sabzi, 2 Rotis." },

        // Soups
        { id: 801, name: "Tomato Shorba", category: "soups", price: 145, image: "/assets/menu/tomato-shorba.png", desc: "Spiced Indian tomato soup." },
        { id: 802, name: "Sweet Corn Veg", category: "soups", price: 155, image: "/assets/menu/sweet-corn-veg.png", desc: "Creamy corn soup with veggies." },

        // Desserts
        { id: 902, name: "Rasmalai", category: "desserts", price: 125, image: "/assets/menu/rasmalai.jpg.png", desc: "Cottage cheese patties in saffron milk." },
        { id: 903, name: "Sizzling Brownie", category: "desserts", price: 215, image: "/assets/menu/sizzling-brownie.png", desc: "Walnut brownie with vanilla ice cream." },

        // Beverages
        { id: 1002, name: "Fresh Lime Soda", category: "beverages", price: 95, image: "/assets/menu/mango-lassi.png", desc: "Refreshing fizzy lime drink." },
        { id: 1003, name: "Cold Coffee", category: "beverages", price: 165, image: "/assets/menu/cold-coffee.png", desc: "Blended coffee with ice cream." }
    ];

    const scrollCarousel = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const filterMenu = (category) => {
        setActiveCategory(category);
        setItemsToShow(8);
    };

    const getFilteredItems = () => {
        if (activeCategory === 'bestsellers') {
            return menuItems.filter(item => item.bestseller);
        }
        return menuItems.filter(item => item.category === activeCategory);
    };

    const getQuantity = (id) => {
        return cart.find(i => i.id === id)?.quantity || 0;
    };

    const isWishlisted = (id) => {
        return wishlist.some(i => i.id === id);
    };

    const filteredItems = getFilteredItems();
    const displayedItems = filteredItems.slice(0, itemsToShow);
    const hasMore = filteredItems.length > itemsToShow;

    return (
        <section id="menu" className="py-16 overflow-hidden border-t border-stone-100 relative bg-gradient-to-br from-amber-50 to-white">
            {/* STUNNING Golden Honeycomb Luxury Pattern */}
            <div
                className="absolute inset-0 opacity-60 pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'87\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cdefs%3E%3Cpattern id=\\'honeycomb\\' x=\\'0\\' y=\\'0\\' width=\\'100\\' height=\\'87\\' patternUnits=\\'userSpaceOnUse\\'%3E%3Cpolygon points=\\'50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'0.5\\' opacity=\\'0.4\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'1.5\\' fill=\\'%23f4d03f\\' opacity=\\'0.6\\'/%3E%3Cpolygon points=\\'0,43.5 21.65,31.5 21.65,56.5 0,68.5\\' fill=\\'%23fbbf24\\' opacity=\\'0.05\\'/%3E%3Cpolygon points=\\'100,43.5 78.35,31.5 78.35,56.5 100,68.5\\' fill=\\'%23fbbf24\\' opacity=\\'0.05\\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\\'100\\' height=\\'87\\' fill=\\'url(%23honeycomb)\\'/%3E%3C/svg%3E')",
                    backgroundSize: '100px 87px'
                }}
            />

            {/* Elegant golden shimmer particles */}
            <div
                className="absolute inset-0 opacity-35 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 40%)'
                }}
            />

            {/* Subtle diagonal golden stripes */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                    background: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251, 191, 36, 0.3) 35px, rgba(251, 191, 36, 0.3) 36px)'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Categories Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px]">Culinary Journey</span>
                        <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mt-2">
                            The <span className="italic text-amber-600">Collection</span>
                        </h3>
                    </div>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => scrollCarousel('left')}
                            className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-500 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm"
                            aria-label="Scroll left"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scrollCarousel('right')}
                            className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-500 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm"
                            aria-label="Scroll right"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Categories Carousel */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide space-x-8 pb-8 snap-x scroll-smooth mb-16"
                >
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => filterMenu(category.id)}
                            className="flex-shrink-0 flex flex-col items-center cursor-pointer group snap-start"
                        >
                            <div className={`relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] group-hover:scale-105 border-[3px] ${activeCategory === category.id
                                ? 'border-amber-500 shadow-[0_0_0_4px_rgba(245,158,11,0.1)]'
                                : 'border-stone-200 bg-stone-100'
                                }`}>
                                <div className="absolute inset-0 bg-stone-200">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${activeCategory === category.id ? 'text-amber-600' : 'text-stone-400 group-hover:text-stone-800'
                                }`}>
                                {category.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedItems.map((item) => {
                        const qty = getQuantity(item.id);
                        const wishlisted = isWishlisted(item.id);
                        return (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl p-4 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative"
                            >
                                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-stone-50">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Wishlist Button */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggleWishlist(item); }}
                                        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform text-stone-400 hover:text-red-500 z-10"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" className={`w-5 h-5 ${wishlisted ? 'text-red-500' : ''}`} strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-serif font-bold text-stone-900 leading-tight">
                                            {item.name}
                                        </h3>
                                        <div className="w-3 h-3 border border-emerald-500 flex items-center justify-center rounded-sm mt-1 flex-shrink-0">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                        </div>
                                    </div>
                                    <p className="text-stone-500 text-xs font-light line-clamp-2 mb-4">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
                                        <span className="font-bold text-stone-900">₹{item.price}</span>

                                        {/* Quantity Selector / Add Button */}
                                        {qty > 0 ? (
                                            <div className="flex items-center bg-stone-900 rounded-lg overflow-hidden shadow-md">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }}
                                                    className="px-3 py-2 text-white hover:bg-stone-800 transition-colors text-xs"
                                                >
                                                    -
                                                </button>
                                                <span className="px-1 text-white text-xs font-bold min-w-[1.5rem] text-center">{qty}</span>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                                                    className="px-3 py-2 text-white hover:bg-stone-800 transition-colors text-xs"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                                                className="px-4 py-2 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] text-stone-950 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all shadow-md hover:shadow-lg transform active:scale-95 hover:scale-105"
                                            >
                                                Add
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setItemsToShow(prev => prev + 8)}
                            className="px-8 py-3 border border-stone-200 text-stone-500 rounded-full text-xs font-bold uppercase tracking-widest hover:border-amber-500 hover:text-amber-600 transition-all"
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default CategoriesMenu;
