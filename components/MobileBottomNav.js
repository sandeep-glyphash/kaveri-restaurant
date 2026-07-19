'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useModal } from '../context/ModalContext';
import { useShop } from '../context/ShopContext';

export default function MobileBottomNav() {
    const pathname = usePathname();
    const { openWishlist, openCart } = useModal();
    const { wishlistCount, cartCount } = useShop();

    if (pathname === '/') return null;

    const sideItems = [
        {
            name: 'Home',
            href: '/ashok-nagar',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            )
        },
        {
            name: 'Cart',
            action: openCart,
            badge: cartCount,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
            )
        },
        {
            name: 'Wishlist',
            action: openWishlist,
            badge: wishlistCount,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: 'Account',
            href: '/account',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            activeIcon: (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60]">
            <nav className="relative bg-white border-t border-stone-200 px-3 pb-3 pt-2 shadow-[0_-2px_20px_rgba(0,0,0,0.08)]">
                {/* Navigation Grid */}
                <div className="grid grid-cols-5 items-center h-16">
                    {/* Left Items */}
                    {sideItems.slice(0, 2).map((item) => {
                        const isActive = item.href ? (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) : false;
                        const content = (
                            <div className="flex flex-col items-center gap-1 py-2 relative">
                                {/* Badge */}
                                {item.badge > 0 && (
                                    <div className="absolute -top-0.5 right-1/2 translate-x-3">
                                        <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1.5 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white text-[9px] font-bold rounded-full shadow-md">
                                            {item.badge > 99 ? '99+' : item.badge}
                                        </span>
                                    </div>
                                )}

                                <div className={`transition-all duration-300 ${isActive ? 'text-[#d4af37] -translate-y-0.5 scale-110' : 'text-stone-500'}`}>
                                    {isActive ? item.activeIcon : item.icon}
                                </div>
                                <span className={`text-[10px] font-bold transition-all duration-300 ${isActive ? 'text-[#d4af37]' : 'text-stone-500'}`}>
                                    {item.name}
                                </span>
                            </div>
                        );

                        const commonClasses = "flex flex-col items-center transition-all duration-300";

                        if (item.action) {
                            return (
                                <button key={item.name} onClick={item.action} className={commonClasses}>
                                    {content}
                                </button>
                            );
                        }

                        return (
                            <Link key={item.name} href={item.href} className={commonClasses}>
                                {content}
                            </Link>
                        );
                    })}

                    {/* Center Menu Button - Circular with Logo BULGING OUT */}
                    <div className="flex justify-center -mt-16">
                        <Link href="/menu">
                            <div className="relative group">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#b8860b] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />

                                {/* Main Circular Button */}
                                <div className="relative w-20 h-20 rounded-full bg-white flex flex-col items-center justify-center shadow-2xl border-4 border-stone-200 group-hover:scale-105 transition-transform">
                                    {/* Kaveri Logo */}
                                    <div className="mb-1">
                                        <Image
                                            src="/assets/main_logo.png"
                                            alt="Menu"
                                            width={32}
                                            height={32}
                                            className="object-contain drop-shadow-lg"
                                        />
                                    </div>

                                    {/* Menu Text Inside Circle */}
                                    <span className="text-[9px] font-black uppercase tracking-wider text-stone-700">
                                        Menu
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right Items */}
                    {sideItems.slice(2, 4).map((item) => {
                        const isActive = item.href ? (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) : false;
                        const content = (
                            <div className="flex flex-col items-center gap-1 py-2 relative">
                                {/* Badge */}
                                {item.badge > 0 && (
                                    <div className="absolute -top-0.5 right-1/2 translate-x-3">
                                        <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1.5 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white text-[9px] font-bold rounded-full shadow-md">
                                            {item.badge > 99 ? '99+' : item.badge}
                                        </span>
                                    </div>
                                )}

                                <div className={`transition-all duration-300 ${isActive ? 'text-[#d4af37] -translate-y-0.5 scale-110' : 'text-stone-500'}`}>
                                    {isActive ? item.activeIcon : item.icon}
                                </div>
                                <span className={`text-[10px] font-bold transition-all duration-300 ${isActive ? 'text-[#d4af37]' : 'text-stone-500'}`}>
                                    {item.name}
                                </span>
                            </div>
                        );

                        const commonClasses = "flex flex-col items-center transition-all duration-300";

                        if (item.action) {
                            return (
                                <button key={item.name} onClick={item.action} className={commonClasses}>
                                    {content}
                                </button>
                            );
                        }

                        return (
                            <Link key={item.name} href={item.href} className={commonClasses}>
                                {content}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
