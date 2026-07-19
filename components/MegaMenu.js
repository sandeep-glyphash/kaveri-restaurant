'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MegaMenu() {
    const [activeMenu, setActiveMenu] = useState(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = (menuName) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(menuName);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150); // 150ms delay to allow moving to dropdown
    };

    const megaMenuData = {
        'Our Menu': {
            sections: [
                {
                    title: 'Restaurant Menu',
                    href: '/menu',
                    desc: 'Full dining menu with curries, breads & more',
                    image: '/assets/menu/paneer-tikka-angara.png'
                },
                {
                    title: 'Traditional Sweets',
                    href: '/sweets',
                    desc: 'Handcrafted sweets, pure ingredients',
                    image: '/assets/Hampers/IMG_7925.jpg'
                },
                {
                    title: 'Fresh Bakery',
                    href: '/bakery',
                    desc: 'Cakes, pastries, cookies baked daily',
                    image: '/assets/Hampers/IMG_7834.jpg'
                }
            ]
        },
        'Gifts & Orders': {
            sections: [
                {
                    title: 'Gift Hampers',
                    href: '/hampers',
                    desc: 'Premium hampers for every occasion',
                    image: '/assets/Hampers/IMG_7831.jpg'
                },
                {
                    title: 'Bulk Orders',
                    href: '/bulk-order',
                    desc: 'Corporate events, weddings & parties',
                    image: '/assets/Hampers/IMG_7840.jpg'
                }
            ]
        },
        'Locations': {
            sections: [
                {
                    title: 'Ashok Nagar',
                    href: '/ashok-nagar',
                    desc: 'Road No.3, Ranchi',
                    image: '/assets/Ashok Nagar/ashok-nagar-1.png'
                },
                {
                    title: 'Kanke Road',
                    href: '/kanke-road',
                    desc: 'Kanke Road, Ranchi',
                    image: '/assets/Kanke/kanke-1.png'
                },
                {
                    title: 'Ratu Road',
                    href: '/ratu-road',
                    desc: 'Ratu Road, Ranchi',
                    image: '/assets/Ratu Road/ratu-1.png'
                }
            ]
        }
    };

    return (
        <>
            <nav className="hidden lg:flex items-center gap-1 ml-auto">
                {/* Mega Menu Dropdowns */}
                {Object.entries(megaMenuData).map(([menuName, data]) => (
                    <div
                        key={menuName}
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(menuName)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-700 hover:text-[#d4af37] transition-colors">
                            {menuName}
                        </button>
                    </div>
                ))}

                {/* Regular Links */}
                <Link href="/about" className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-700 hover:text-[#d4af37] transition-colors">
                    About Us
                </Link>
                <Link href="/gallery" className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-700 hover:text-[#d4af37] transition-colors">
                    Gallery
                </Link>
                <Link href="/contact" className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-700 hover:text-[#d4af37] transition-colors">
                    Contact
                </Link>
            </nav>

            {/* Full Width Mega Menu Dropdown */}
            {activeMenu && megaMenuData[activeMenu] && (
                <div
                    className="fixed left-0 right-0 top-[80px] z-40 bg-white border-t border-b border-stone-200 shadow-xl overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(activeMenu)}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Background Pattern Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.8] pointer-events-none z-0 mix-blend-multiply"
                        style={{
                            backgroundImage: 'url(/assets/9423856.jpg)',
                            backgroundRepeat: 'repeat',
                            backgroundSize: '400px 400px'
                        }}
                    />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
                        <div className={`grid gap-6 ${megaMenuData[activeMenu].sections.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                            {megaMenuData[activeMenu].sections.map((section, idx) => (
                                <Link
                                    key={idx}
                                    href={section.href}
                                    className="group block bg-stone-50/90 rounded-2xl p-6 hover:bg-amber-50/90 hover:shadow-lg transition-all"
                                >
                                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                                        <Image
                                            src={section.image}
                                            alt={section.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-[#d4af37] transition-colors">
                                        {section.title}
                                    </h3>
                                    <p className="text-sm text-stone-600">
                                        {section.desc}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay */}
            {activeMenu && (
                <div
                    className="fixed inset-0 bg-black/20 z-30 top-[80px]"
                    onMouseEnter={handleMouseLeave}
                />
            )}
        </>
    );
}
