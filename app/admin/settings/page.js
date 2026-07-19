'use client';
import { useAdmin } from '@/context/AdminContext';
import { useState } from 'react';

export default function AdminSettingsPage() {
    const { selectedLocation, locations } = useAdmin();
    const currentLocationName = locations.find(l => l.id === selectedLocation)?.name || 'All Locations';
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
    };

    return (
        <div className="animate-fade-in-up max-w-4xl">
            <h1 className="text-2xl font-bold text-stone-800 mb-2">Settings</h1>
            <p className="text-stone-500 text-sm mb-8">Configuration for: <span className="font-bold text-amber-600">{currentLocationName}</span></p>

            <form onSubmit={handleSave} className="space-y-6">
                {/* General Settings */}
                <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                    <h2 className="text-lg font-bold text-stone-800 mb-4 border-b border-stone-100 pb-2">General Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Outlet Name</label>
                            <input type="text" defaultValue={currentLocationName} className="w-full border border-stone-200 rounded-lg p-2.5 focus:ring-amber-500 focus:border-amber-500 bg-stone-50" disabled={selectedLocation === 'all'} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Contact Email</label>
                            <input type="email" defaultValue="info@thekaveris.com" className="w-full border border-stone-200 rounded-lg p-2.5 focus:ring-amber-500 focus:border-amber-500" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Phone Number</label>
                            <input type="tel" defaultValue="+91 98351 62304" className="w-full border border-stone-200 rounded-lg p-2.5 focus:ring-amber-500 focus:border-amber-500" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Currency</label>
                            <select className="w-full border border-stone-200 rounded-lg p-2.5 bg-stone-50">
                                <option>INR (₹)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                    <h2 className="text-lg font-bold text-stone-800 mb-4 border-b border-stone-100 pb-2">Opening Hours</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-stone-600 font-medium">Monday - Friday</span>
                            <div className="flex items-center gap-2">
                                <input type="time" defaultValue="11:00" className="border border-stone-200 rounded p-1" />
                                <span>to</span>
                                <input type="time" defaultValue="23:00" className="border border-stone-200 rounded p-1" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-stone-600 font-medium">Saturday - Sunday</span>
                            <div className="flex items-center gap-2">
                                <input type="time" defaultValue="10:00" className="border border-stone-200 rounded p-1" />
                                <span>to</span>
                                <input type="time" defaultValue="23:30" className="border border-stone-200 rounded p-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                    <h2 className="text-lg font-bold text-stone-800 mb-4 border-b border-stone-100 pb-2">Notifications</h2>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500" />
                            <span className="text-stone-600">Email alerts for new orders</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500" />
                            <span className="text-stone-600">SMS alerts for reservations</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-amber-600 rounded border-stone-300 focus:ring-amber-500" />
                            <span className="text-stone-600">Daily revenue report</span>
                        </label>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-8 py-3 bg-stone-900 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors shadow-lg flex items-center"
                    >
                        {isLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
}
