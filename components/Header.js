'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import BookingModal from './BookingModal';
import CartModal from './CartModal';
import WishlistModal from './WishlistModal';
import MegaMenu from './MegaMenu';
import { useModal } from '../context/ModalContext';
import { useShop } from '../context/ShopContext';
import { locations } from '../data/locations';

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const { isBookingOpen, closeBooking, openBooking, isCartOpen, openCart, closeCart, isWishlistOpen, openWishlist, closeWishlist } = useModal();
    const { wishlistCount, cartCount } = useShop();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Hide Header on Landing Page
    if (pathname === '/') return null;

    const pathSlug = pathname.split('/')[1];
    const currentLoc = locations[pathSlug] || locations['ashok-nagar'];

    // Handle location change - navigate to the selected outlet page
    const handleLocationChange = (e) => {
        const selectedSlug = e.target.value;
        if (selectedSlug && locations[selectedSlug]) {
            router.push(`/${selectedSlug}`);
        }
    };

    // Mock data for search
    const menuItems = [
        { id: 1, name: 'Paneer Tikka', category: 'Starters', price: '₹385' },
        { id: 2, name: 'Dal Makhani', category: 'Main Course', price: '₹295' },
        { id: 3, name: 'Butter Naan', category: 'Breads', price: '₹65' },
        { id: 4, name: 'Veg Biryani', category: 'Rice', price: '₹345' },
        { id: 5, name: 'Manchow Soup', category: 'Soups', price: '₹185' },
        { id: 6, name: 'Crispy Corn', category: 'Starters', price: '₹275' },
    ];
    const filteredItems = searchQuery
        ? menuItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    const navLinks = [
        { name: 'Outlets', href: '/' },
        { name: 'Menu', href: '/menu' },
        { name: 'Sweets', href: '/sweets' },
        { name: 'Bakery', href: '/bakery' },
        { name: 'About', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Hampers', href: '/hampers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Bulk Order', href: '/bulk-order' },
    ];

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isSearchOpen) setSearchQuery(''); // Clear search on close
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-stone-200 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Left: Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="relative z-50">
                                <div className="bg-white rounded-b-[30px] md:rounded-b-[40px] px-4 md:px-6 pb-4 md:pb-5 pt-3 md:pt-4 -mb-10 md:-mb-12 shadow-lg relative z-50 transition-all">
                                    <Image
                                        src="/images/main_logo.png"
                                        alt="Kaveri Restaurant Logo"
                                        width={80}
                                        height={80}
                                        className="h-14 w-auto md:h-20 transition-all"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop: Location Selector */}
                        <div className="hidden lg:flex items-center ml-4 mr-4">
                            <div className="flex items-center bg-stone-50 rounded-full px-3 py-1.5 border border-stone-200 hover:border-[#d4af37] transition-colors cursor-pointer group relative shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#b8860b] mr-1.5">
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>

                                <select
                                    className="bg-transparent text-[10px] font-bold uppercase tracking-wider text-stone-700 outline-none cursor-pointer appearance-none pr-5 font-sans py-0.5"
                                    value={currentLoc.slug}
                                    onChange={handleLocationChange}
                                >
                                    {Object.values(locations).map((loc) => (
                                        <option key={loc.slug} value={loc.slug}>{loc.name}</option>
                                    ))}
                                </select>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-stone-400 absolute right-2.5 pointer-events-none group-hover:text-[#d4af37] transition-colors">
                                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        {/* Desktop Navigation - Mega Menu */}
                        <MegaMenu />
                        {/* Right: Icons & Actions */}
                        <div className="flex items-center gap-3">

                            {/* Mobile Location (Designed to match screenshot) */}
                            <div className="lg:hidden relative">
                                <div className="flex items-center bg-white rounded-full px-4 py-2 border border-stone-200 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#b8860b] mr-2">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-bold text-stone-700 font-sans mr-2">{currentLoc.name}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-stone-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    <select
                                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                        value={currentLoc.slug}
                                        onChange={handleLocationChange}
                                    >
                                        {Object.values(locations).map((loc) => (
                                            <option key={loc.slug} value={loc.slug}>{loc.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* Search Icon (Visible on all) */}
                            <button
                                onClick={toggleSearch}
                                className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-100 hover:bg-amber-50 transition-colors"
                                aria-label="Search"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-stone-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>

                            {/* Wishlist Icon */}
                            <button
                                onClick={() => openWishlist()}
                                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 hover:bg-amber-50 transition-colors relative"
                                aria-label="Wishlist"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                {wishlistCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{wishlistCount}</span>}
                            </button>

                            {/* Cart Icon */}
                            <button
                                onClick={() => openCart()}
                                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 hover:bg-amber-50 transition-colors relative"
                                aria-label="Cart"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>}
                            </button>

                            {/* Book Table Button */}
                            <button
                                onClick={() => openBooking()}
                                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#b8860b] text-stone-950 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md hover:scale-105 transition-transform font-sans"
                            >
                                Book a Table
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 hover:bg-amber-50 transition-colors"
                                aria-label="Open menu"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#d4af37]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Search Modal */}
            <div className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 flex items-start justify-center pt-24 px-4 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {/* Backdrop click to close */}
                <div className="absolute inset-0" onClick={toggleSearch}></div>

                <div className={`bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative transform transition-all duration-300 ${isSearchOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
                    <div className="p-4 border-b border-stone-100 flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search menu items..."
                            className="flex-1 text-lg outline-none text-stone-700 font-sans"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus={isSearchOpen}
                        />
                        <button onClick={toggleSearch} className="p-1 rounded-full hover:bg-stone-100 text-stone-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto p-2">
                        {searchQuery ? (
                            filteredItems.length > 0 ? (
                                <div className="space-y-1">
                                    {filteredItems.map(item => (
                                        <div key={item.id} className="p-3 hover:bg-stone-50 rounded-lg flex justify-between items-center cursor-pointer group">
                                            <div>
                                                <h4 className="font-bold text-stone-800 group-hover:text-[#d4af37] transition-colors font-sans text-base md:text-lg">{item.name}</h4>
                                                <p className="text-xs md:text-sm text-stone-500 font-sans">{item.category}</p>
                                            </div>
                                            <span className="font-bold text-[#b8860b] font-sans text-base md:text-lg">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 text-center text-stone-500 font-sans">
                                    <p>No results found for "{searchQuery}"</p>
                                </div>
                            )
                        ) : (
                            <div className="p-8 text-center text-stone-400 font-sans">
                                <p>Start typing to search...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMenu}></div>

            {/* Mobile Menu Sidebar */}
            <div className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 h-full flex flex-col font-sans">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-serif font-bold italic text-stone-900">Menu</h3>
                        <button onClick={toggleMenu} className="text-stone-600 hover:text-[#d4af37]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <Link href="/" className="flex items-center hover:bg-stone-50 p-2 rounded-lg transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center mr-3 group-hover:bg-amber-100 transition-colors">
                            <svg className="w-4 h-4 text-stone-600 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col items-start mr-2 hidden md:flex">
                            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest leading-none mb-1">Location</span>
                            <span className="text-sm font-serif font-bold text-stone-800 leading-none">{currentLoc.name}</span>
                        </div>
                        <svg className="w-4 h-4 text-stone-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </Link>
                    <nav className="flex flex-col gap-5 flex-1 overflow-y-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-stone-800 hover:text-[#d4af37] transition-colors py-1 font-sans"
                                onClick={toggleMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            className="text-lg font-bold text-[#d4af37] py-1 mt-2 font-serif italic text-left"
                            onClick={() => {
                                openBooking();
                                toggleMenu();
                            }}
                        >
                            Book a Table
                        </button>
                    </nav>

                    <div className="mt-auto border-t border-stone-200 pt-6">
                        <h4 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-4 font-serif">Follow Us</h4>
                        <div className="flex gap-3">
                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#b8860b] flex items-center justify-center hover:shadow-lg transition-transform hover:-translate-y-1">
                                <svg className="w-4 h-4 text-stone-900" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#b8860b] flex items-center justify-center hover:shadow-lg transition-transform hover:-translate-y-1">
                                <svg className="w-4 h-4 text-stone-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            {/* Twitter */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#b8860b] flex items-center justify-center hover:shadow-lg transition-transform hover:-translate-y-1">
                                <svg className="w-4 h-4 text-stone-900" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 py-3 bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#b8860b] text-stone-900 font-bold rounded-lg text-sm shadow-md hover:scale-105 transition-transform">Log In</button>
                            <button className="flex-1 py-3 border-2 border-[#d4af37] text-[#b8860b] font-bold rounded-lg text-sm hover:bg-[#d4af37] hover:text-white transition-colors">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
            <CartModal isOpen={isCartOpen} onClose={closeCart} />
            <WishlistModal isOpen={isWishlistOpen} onClose={closeWishlist} />
        </>
    );
}
