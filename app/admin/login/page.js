'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAdmin } from '@/context/AdminContext';

export default function AdminLogin() {
    const router = useRouter();
    const { login } = useAdmin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulate network delay for realism
        await new Promise(resolve => setTimeout(resolve, 800));

        const success = login(email, password);

        if (success) {
            router.push('/admin');
        } else {
            setError('Invalid email or password access denied.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-stone-900">
            {/* Left Side - Visual */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                <Image
                    src="/assets/Ashok Nagar/ashok-nagar-2.png"
                    alt="Kaveri Kitchen"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/40 to-transparent" />

                <div className="relative z-10 p-16 flex flex-col justify-between h-full text-white">
                    <div className="w-32">
                        <Image src="/assets/main_logo.png" alt="Logo" width={150} height={80} className="object-contain drop-shadow-lg" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-serif font-bold mb-6 italic leading-tight">Master the Art <br /> of Service.</h1>
                        <p className="text-lg text-stone-300 max-w-md font-light">
                            Access the centralized dashboard to manage orders, reservations, and the culinary experience.
                        </p>
                    </div>
                    <div className="text-sm text-stone-500 uppercase tracking-widest">
                        Internal System v2.1 (RBAC Enabled)
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-stone-950">
                <div className="w-full max-w-md">
                    <div className="mb-10 text-center lg:text-left">
                        <Link href="/" className="lg:hidden inline-block mb-8">
                            <Image src="/assets/main_logo.png" alt="Logo" width={120} height={60} />
                        </Link>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#d4af37] bg-clip-text text-transparent mb-2 inline-block">Welcome Back</h2>
                        <p className="text-stone-400">Please sign in to your dashboard.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-stone-900 border border-stone-800 text-amber-500 px-4 py-3 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors placeholder-stone-600"
                                placeholder="admin@thekaveris.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-stone-900 border border-stone-800 text-amber-500 px-4 py-3 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors placeholder-stone-600"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm font-bold bg-red-900/20 p-3 rounded-lg border border-red-900">
                                {error}
                            </div>
                        )}

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-stone-400 cursor-pointer">
                                <input type="checkbox" className="mr-2 accent-[#d4af37] w-4 h-4 rounded bg-stone-800 border-stone-700" />
                                Remember me
                            </label>
                            <a href="#" className="text-[#d4af37] hover:text-[#f9e29c] font-medium">Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#d4af37] text-stone-950 font-bold py-3.5 rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform active:scale-[0.98] disabled:opacity-70 flex items-center justify-center tracking-wide uppercase text-sm"
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 text-stone-900" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    {/* DEMO CREDENTIALS HINT */}
                    <div className="mt-8 pt-8 border-t border-stone-800 text-center text-stone-600 text-xs">
                        <p className="font-bold uppercase tracking-widest mb-2 text-stone-500">Demo Access</p>
                        <div className="grid grid-cols-2 gap-4 text-left max-w-xs mx-auto">
                            <div>
                                <span className="block text-amber-600 font-bold">Super Admin:</span>
                                super@kaveri.com / admin
                            </div>
                            <div>
                                <span className="block text-amber-600 font-bold">Outlet Admin:</span>
                                ashok@kaveri.com / admin
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
