'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useModal } from '../context/ModalContext';
import { useShop } from '../context/ShopContext';

export default function BottomNav() {
    const pathname = usePathname();
    const { openCart, openWishlist } = useModal();
    const { cartCount, wishlistCount } = useShop();

    // Hide on landing page
    if (pathname === '/') return null;

    const navItems = [
        {
            id: 'menu',
            label: 'Menu',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            ),
            href: '/menu',
            action: null
        },
        {
            id: 'cart',
            label: 'Cart',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            action: openCart,
            badge: cartCount
        },
        {
            id: 'wishlist',
            label: 'Wishlist',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            action: openWishlist,
            badge: wishlistCount
        },
        {
            id: 'account',
            label: 'Account',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            href: '/account',
            action: null
        }
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-4 h-16">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    const content = (
                        <div className="flex flex-col items-center justify-center h-full relative group">
                            {/* Badge */}
                            {item.badge > 0 && (
                                <div className="absolute top-1.5 right-1/2 translate-x-3">
                                    <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white text-[10px] font-bold rounded-full shadow-md">
                                        {item.badge > 99 ? '99+' : item.badge}
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div className={`transition-all duration-300 ${isActive
                                    ? 'text-[#d4af37] scale-110'
                                    : 'text-stone-600 group-hover:text-[#d4af37] group-hover:scale-105'
                                }`}>
                                {item.icon}
                            </div>

                            {/* Label */}
                            <span className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 transition-all duration-300 ${isActive
                                    ? 'text-[#d4af37]'
                                    : 'text-stone-500 group-hover:text-[#d4af37]'
                                }`}>
                                {item.label}
                            </span>

                            {/* Active Indicator */}
                            {isActive && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full" />
                            )}
                        </div>
                    );

                    if (item.action) {
                        return (
                            <button
                                key={item.id}
                                onClick={item.action}
                                className="relative active:bg-stone-50 transition-colors"
                                aria-label={item.label}
                            >
                                {content}
                            </button>
                        );
                    }

                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="relative active:bg-stone-50 transition-colors"
                            aria-label={item.label}
                        >
                            {content}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
