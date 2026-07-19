'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { locations } from '../data/locations';

const Footer = () => {
    const pathname = usePathname();
    const [email, setEmail] = useState('');

    if (pathname === '/') return null;

    // Determine current location
    // If slug matches a key in locations, use it. Otherwise default to ashok-nagar.
    const pathSlug = pathname.split('/')[1];
    const currentLoc = locations[pathSlug] || locations['ashok-nagar'];

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter signup:', email);
        alert('Thank you for joining our Royal Circle!');
        setEmail('');
    };

    return (
        <footer id="contact" className="bg-stone-950 text-white pt-24 pb-12 border-t border-stone-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

                    {/* Col 1: Brand & Ethos */}
                    <div className="space-y-8">
                        <div>
                            <Image
                                src="/assets/main_logo.png"
                                alt="Kaveri Restaurant Logo"
                                width={200}
                                height={96}
                                className="h-24 w-auto mb-6 opacity-100"
                            />
                            <p className="text-stone-400 text-xs uppercase tracking-widest mt-1">
                                Pure Veg Since 1992
                            </p>
                        </div>
                        <p className="text-stone-500 text-lg font-light leading-relaxed">
                            A sanctuary of culinary heritage. Experience the timeless tradition of Sattvic fine dining at our {currentLoc.name} outlet.
                        </p>
                        <div className="flex space-x-6">
                            {/* Social Icons (Placeholder) */}
                            {['twitter', 'instagram', 'facebook'].map(social => (
                                <a key={social} href="#" className="text-stone-500 hover:text-amber-500 transition-colors">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current rounded-full opacity-20 hover:opacity-100" />
                                    {/* Using simple placeholder shapes if SVGs are too long, or I can copy SVGs from previous Step 893 */}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Locations (Dynamic Navigation) */}
                    <div>
                        <h5 className="text-white font-bold uppercase text-[10px] tracking-widest mb-8">
                            Select Location
                        </h5>
                        <ul className="space-y-4 text-base font-light text-stone-400">
                            {Object.values(locations).map(loc => (
                                <li key={loc.slug}>
                                    <Link
                                        href={`/${loc.slug}`}
                                        className={`transition-colors flex items-center justify-between group ${loc.slug === currentLoc.slug ? 'text-amber-500 font-medium' : 'hover:text-amber-500'}`}
                                    >
                                        <span>{loc.name}</span>
                                        {loc.slug === currentLoc.slug && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h5 className="text-white font-bold uppercase text-[10px] tracking-widest mt-8 mb-4">
                            Explore
                        </h5>
                        <ul className="space-y-2 text-sm font-light text-stone-400">
                            <li><Link href="/menu" className="hover:text-amber-500">Menu</Link></li>
                            <li><Link href="/about" className="hover:text-amber-500">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Visit (Dynamic Address) */}
                    <div>
                        <h5 className="text-white font-bold uppercase text-[10px] tracking-widest mb-8">
                            Reach Us
                        </h5>
                        <div className="space-y-6 text-base text-stone-400 leading-relaxed font-light">
                            <div>
                                <p className="text-white font-bold mb-1 text-sm">{currentLoc.name}</p>
                                <p>{currentLoc.address.line1}<br />{currentLoc.address.line2}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold mb-1 text-sm">Opening Hours</p>
                                <p>{currentLoc.timing}</p>
                            </div>
                            <div>
                                <p className="text-white font-bold mb-1 text-sm">Contact</p>
                                {currentLoc.phones && currentLoc.phones.map((phone, index) => (
                                    <p key={index} className="hover:text-amber-500 transition-colors cursor-pointer">{phone}</p>
                                ))}
                                <p className="text-sm mt-1 text-amber-500 hover:text-amber-400 transition-colors">{currentLoc.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Col 4: Newsletter */}
                    <div>
                        <h5 className="text-white font-bold uppercase text-[10px] tracking-widest mb-8">
                            Royal Circle
                        </h5>
                        <p className="text-stone-500 text-base mb-6 font-light">
                            Join our exclusive mailing list for seasonal updates and private event invitations.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="flex border-b border-stone-800 focus-within:border-amber-500 transition-colors pb-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-transparent w-full outline-none text-white text-xs placeholder-stone-600"
                            />
                            <button
                                type="submit"
                                className="text-amber-500 hover:text-amber-400 uppercase text-[9px] font-bold tracking-widest"
                            >
                                Join
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-600 space-y-4 md:space-y-0">
                    <p>&copy; 2024 Kaveri Restaurant Group. All Rights Reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
                        <Link href="/admin/login" className="hover:text-stone-400 transition-colors">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
