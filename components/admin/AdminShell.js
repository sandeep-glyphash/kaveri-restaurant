'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAdmin } from '@/context/AdminContext';

export default function AdminShell({ children }) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/admin/login';
    const { user, logout, selectedLocation, changeLocation, locations } = useAdmin();

    if (isLoginPage) {
        return <>{children}</>;
    }

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
        { name: 'Menu Management', href: '/admin/menu', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'Orders', href: '/admin/orders', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
        { name: 'Reservations', href: '/admin/reservations', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
        { name: 'Customers', href: '/admin/customers', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
        { name: 'Settings', href: '/admin/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
    ];

    const isSuperAdmin = user?.role === 'SUPER_ADMIN';

    return (
        <div className="flex h-screen bg-stone-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-stone-900 text-white hidden md:flex flex-col flex-shrink-0 relative z-20 shadow-2xl">
                <div className="h-24 flex items-center justify-center border-b border-stone-800 py-4">
                    <Link href="/" className="relative w-40 h-14 transition-transform hover:scale-105">
                        <Image
                            src="/assets/main_logo.png"
                            alt="Kaveri Admin"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                </div>

                <nav className="flex-1 overflow-y-auto py-6">
                    <ul className="space-y-2 px-4">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center px-4 py-3 mx-2 rounded-md transition-all group border-l-4 ${isActive
                                                ? 'bg-stone-800 border-amber-500 text-white shadow-md'
                                                : 'border-transparent text-stone-400 hover:bg-stone-800/50 hover:text-white'
                                            }`}
                                    >
                                        <svg className={`w-5 h-5 mr-3 transition-colors ${isActive ? 'text-amber-500' : 'text-stone-500 group-hover:text-stone-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                        </svg>
                                        <span className="font-medium tracking-wide text-sm">{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="p-4 border-t border-stone-800 bg-stone-950">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center font-bold text-stone-900 shadow-lg flex-shrink-0">
                            {user?.name?.charAt(0) || 'G'}
                        </div>
                        <div className="overflow-hidden">
                            <div className="text-sm font-bold text-white truncate">{user?.name || 'Guest User'}</div>
                            <div className="text-[10px] text-stone-400 uppercase tracking-wider">{isSuperAdmin ? 'Super Admin' : 'Outlet Manager'}</div>
                            <button
                                onClick={logout}
                                className="text-[10px] text-red-400 hover:text-red-300 mt-1 font-bold uppercase tracking-widest flex items-center gap-1"
                            >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="h-20 bg-white border-b border-stone-200 flex items-center justify-between px-8 shadow-sm relative z-10">
                    <div className="flex items-center gap-6">
                        <h2 className="text-xl font-bold text-stone-800 hidden lg:block">Dashboard</h2>

                        {/* Location Switcher */}
                        <div className="flex items-center bg-stone-50 rounded-lg px-4 py-2 border border-stone-200 shadow-sm transition-all hover:border-amber-300">
                            <span className="text-[10px] text-stone-400 mr-2 uppercase tracking-widest font-bold">Outlet:</span>
                            {isSuperAdmin ? (
                                <select
                                    value={selectedLocation}
                                    onChange={(e) => changeLocation(e.target.value)}
                                    className="bg-transparent border-none text-stone-800 font-bold text-sm focus:ring-0 p-0 cursor-pointer min-w-[120px] outline-none"
                                >
                                    {locations.map(loc => (
                                        <option key={loc.id} value={loc.id}>{loc.name}</option>
                                    ))}
                                </select>
                            ) : (
                                <div className="text-stone-800 font-bold text-sm min-w-[120px] flex items-center">
                                    {locations.find(l => l.id === selectedLocation)?.name || 'Loading...'}
                                    <svg className="w-3 h-3 ml-2 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-stone-400 hover:text-amber-600 transition-colors relative">
                            <span className="sr-only">Notifications</span>
                            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse border border-white"></div>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <Link href="/" target="_blank" className="px-4 py-2 bg-stone-900 text-amber-500 text-xs font-bold uppercase rounded-lg hover:bg-stone-800 transition-all border border-stone-800 hover:border-amber-500/50 shadow-lg">
                            View Website
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto p-8 bg-stone-50">
                    {children}
                </main>
            </div>
        </div>
    );
}
