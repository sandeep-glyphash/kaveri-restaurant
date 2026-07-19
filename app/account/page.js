'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AccountPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to false for login view
    const [activeTab, setActiveTab] = useState('profile'); // profile, orders, addresses, settings

    const [profileData, setProfileData] = useState({
        name: 'Kunal Bose',
        email: 'kunal@example.com',
        phone: '+91-98765 43210',
        memberSince: 'January 2023'
    });

    const [orders] = useState([
        { id: 'KAV12345678', date: '2024-12-29', items: 3, total: 1547, status: 'Delivered' },
        { id: 'KAV87654321', date: '2024-12-25', items: 5, total: 2890, status: 'Delivered' },
        { id: 'KAV11223344', date: '2024-12-20', items: 2, total: 895, status: 'Delivered' }
    ]);

    const [addresses] = useState([
        { id: 1, name: 'Home', address: 'Freds Palace, Ashok Nagar, Road No.3', city: 'Ranchi', pincode: '834002', isDefault: true },
        { id: 2, name: 'Office', address: 'HEC Colony, Sector 2', city: 'Ranchi', pincode: '834004', isDefault: false }
    ]);

    // Login/Signup View
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
                <div className="max-w-md w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                    <h1 className="text-3xl font-serif italic text-stone-900 mb-2 text-center">Welcome Back</h1>
                    <p className="text-stone-600 text-center mb-8">Sign in to your Kaveri account</p>

                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                        />
                        <button
                            type="submit"
                            onClick={() => setIsLoggedIn(true)}
                            className="w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-stone-600">Don't have an account? <button className="text-[#d4af37] font-bold hover:underline">Sign Up</button></p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-4">My Account</h1>
                    <p className="text-stone-600">Manage your profile, orders, and preferences</p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-6 shadow-xl">
                            {/* Profile Summary */}
                            <div className="text-center mb-6 pb-6 border-b border-stone-200">
                                <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                                    {profileData.name.charAt(0)}
                                </div>
                                <h3 className="font-bold text-stone-900 text-lg">{profileData.name}</h3>
                                <p className="text-sm text-stone-500">{profileData.email}</p>
                            </div>

                            {/* Navigation */}
                            <nav className="space-y-2">
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'profile' ? 'bg-amber-50 text-amber-700' : 'text-stone-600 hover:bg-stone-50'
                                        }`}
                                >
                                    📝 Profile
                                </button>
                                <button
                                    onClick={() => setActiveTab('orders')}
                                    className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'orders' ? 'bg-amber-50 text-amber-700' : 'text-stone-600 hover:bg-stone-50'
                                        }`}
                                >
                                    📦 Orders
                                </button>
                                <button
                                    onClick={() => setActiveTab('addresses')}
                                    className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'addresses' ? 'bg-amber-50 text-amber-700' : 'text-stone-600 hover:bg-stone-50'
                                        }`}
                                >
                                    📍 Addresses
                                </button>
                                <button
                                    onClick={() => setActiveTab('settings')}
                                    className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'settings' ? 'bg-amber-50 text-amber-700' : 'text-stone-600 hover:bg-stone-50'
                                        }`}
                                >
                                    ⚙️ Settings
                                </button>
                                <button
                                    onClick={() => setIsLoggedIn(false)}
                                    className="w-full text-left px-4 py-3 rounded-xl font-bold text-red-600 hover:bg-red-50 transition-all"
                                >
                                    🚪 Logout
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">

                            {/* Profile Tab */}
                            {activeTab === 'profile' && (
                                <div>
                                    <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Profile Information</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                value={profileData.name}
                                                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                                className="w-full px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                value={profileData.email}
                                                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                                className="w-full px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                value={profileData.phone}
                                                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                                className="w-full px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                            />
                                        </div>
                                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                                            <p className="text-sm text-amber-700 font-bold">Member Since: {profileData.memberSince}</p>
                                        </div>
                                        <button className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Orders Tab */}
                            {activeTab === 'orders' && (
                                <div>
                                    <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Order History</h2>
                                    <div className="space-y-4">
                                        {orders.map(order => (
                                            <div key={order.id} className="border border-stone-200 rounded-2xl p-6 hover:border-amber-200 transition-all">
                                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                                    <div>
                                                        <p className="text-sm text-stone-500 mb-1">Order ID</p>
                                                        <p className="font-bold text-stone-900 font-mono">{order.id}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-stone-500 mb-1">Date</p>
                                                        <p className="font-bold text-stone-900">{order.date}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-stone-500 mb-1">Items</p>
                                                        <p className="font-bold text-stone-900">{order.items}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-stone-500 mb-1">Total</p>
                                                        <p className="font-bold text-stone-900">₹{order.total}</p>
                                                    </div>
                                                    <div>
                                                        <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                                                            {order.status}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <Link
                                                        href={`/track-order?id=${order.id}`}
                                                        className="px-6 py-2 bg-stone-900 text-white rounded-lg font-bold text-sm hover:bg-[#d4af37] transition-colors"
                                                    >
                                                        Track
                                                    </Link>
                                                    <button className="px-6 py-2 border-2 border-stone-300 text-stone-700 hover:border-[#d4af37] hover:text-[#d4af37] rounded-lg font-bold text-sm transition-all">
                                                        Reorder
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Addresses Tab */}
                            {activeTab === 'addresses' && (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-2xl font-serif italic text-stone-900">Saved Addresses</h2>
                                        <button className="px-6 py-2 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                                            + Add New
                                        </button>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {addresses.map(addr => (
                                            <div key={addr.id} className="border border-stone-200 rounded-2xl p-6 hover:border-amber-200 transition-all relative">
                                                {addr.isDefault && (
                                                    <span className="absolute top-4 right-4 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
                                                        DEFAULT
                                                    </span>
                                                )}
                                                <h3 className="font-bold text-stone-900 mb-2">{addr.name}</h3>
                                                <p className="text-stone-600 text-sm mb-1">{addr.address}</p>
                                                <p className="text-stone-600 text-sm mb-4">{addr.city} - {addr.pincode}</p>
                                                <div className="flex gap-2">
                                                    <button className="px-4 py-2 bg-stone-100 text-stone-700 hover:bg-stone-200 rounded-lg font-bold text-sm transition-all">
                                                        Edit
                                                    </button>
                                                    <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-bold text-sm transition-all">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Settings Tab */}
                            {activeTab === 'settings' && (
                                <div>
                                    <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Settings</h2>
                                    <div className="space-y-6">
                                        <div className="border border-stone-200 rounded-2xl p-6">
                                            <h3 className="font-bold text-stone-900 mb-4">Notifications</h3>
                                            <div className="space-y-3">
                                                <label className="flex items-center justify-between cursor-pointer">
                                                    <span className="text-stone-700">Order updates via Email</span>
                                                    <input type="checkbox" defaultChecked className="w-5 h-5 text-[#d4af37] rounded" />
                                                </label>
                                                <label className="flex items-center justify-between cursor-pointer">
                                                    <span className="text-stone-700">Promotional offers via SMS</span>
                                                    <input type="checkbox" defaultChecked className="w-5 h-5 text-[#d4af37] rounded" />
                                                </label>
                                                <label className="flex items-center justify-between cursor-pointer">
                                                    <span className="text-stone-700">Weekly newsletter</span>
                                                    <input type="checkbox" className="w-5 h-5 text-[#d4af37] rounded" />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="border border-stone-200 rounded-2xl p-6">
                                            <h3 className="font-bold text-stone-900 mb-4">Change Password</h3>
                                            <div className="space-y-3">
                                                <input
                                                    type="password"
                                                    placeholder="Current Password"
                                                    className="w-full px-6 py-3 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="New Password"
                                                    className="w-full px-6 py-3 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Confirm New Password"
                                                    className="w-full px-6 py-3 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                                />
                                                <button className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                                                    Update Password
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
