'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useAdmin } from '@/context/AdminContext';

const INITIAL_MENU = [
    { id: 101, name: "Masala Dosa", category: "South Indian", price: 185, image: "/assets/menu/masala-dosa.png", status: "In Stock", locations: ['all', 'ashok-nagar', 'kanke-road'] },
    { id: 203, name: "Chole Bhature", category: "Breakfast", price: 210, image: "/assets/menu/chole-bhature.png", status: "In Stock", locations: ['all', 'ashok-nagar'] },
    { id: 302, name: "Paneer Butter Masala", category: "North Indian", price: 425, image: "/assets/menu/paneer-butter-masala.png", status: "In Stock", locations: ['all', 'ashok-nagar', 'kanke-road', 'ratu-road'] },
    { id: 401, name: "Paneer Tikka Angara", category: "Tandoori", price: 345, image: "/assets/menu/paneer-tikka-angara.png", status: "Sold Out", locations: ['all', 'kanke-road'] },
    { id: 1001, name: "Mango Lassi", category: "Beverages", price: 145, image: "/assets/menu/mango-lassi.png", status: "In Stock", locations: ['all', 'ashok-nagar', 'ratu-road'] },
];

export default function AdminMenuPage() {
    const { selectedLocation, locations } = useAdmin();
    const [menuItems, setMenuItems] = useState(INITIAL_MENU);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    // Filter Logic
    const filteredItems = menuItems.filter(item => {
        const matchesLoc = selectedLocation === 'all' || item.locations.includes('all') || item.locations.includes(selectedLocation);
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCat = filterCategory === 'All' || item.category === filterCategory;
        return matchesLoc && matchesSearch && matchesCat;
    });

    const categories = ['All', 'South Indian', 'North Indian', 'Tandoori', 'Beverages', 'Breakfast'];
    const currentLocationName = locations.find(l => l.id === selectedLocation)?.name || 'All Locations';

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this item?')) {
            setMenuItems(prev => prev.filter(i => i.id !== id));
        }
    };

    const handleStatusToggle = (id) => {
        setMenuItems(prev => prev.map(item =>
            item.id === id ? { ...item, status: item.status === 'In Stock' ? 'Sold Out' : 'In Stock' } : item
        ));
    };

    return (
        <div className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-stone-800">Menu Management</h1>
                    <p className="text-stone-500 text-sm">Managing items for: <span className="font-bold text-amber-600">{currentLocationName}</span></p>
                </div>
                <button
                    onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
                    className="px-6 py-2.5 bg-stone-900 text-white rounded-lg hover:bg-amber-600 transition-colors shadow-lg flex items-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Add New Item
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilterCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${filterCategory === cat
                                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                    : 'bg-stone-50 text-stone-500 hover:bg-stone-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:border-amber-500 text-sm"
                    />
                    <svg className="w-4 h-4 text-stone-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider text-xs font-bold border-b border-stone-100">
                            <tr>
                                <th className="px-6 py-4">Item Details</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                            {filteredItems.map((item) => (
                                <tr key={item.id} className="hover:bg-amber-50/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">{item.name}</div>
                                                <div className="text-xs text-stone-400">ID: #{item.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-xs font-medium">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-stone-800">
                                        ₹{item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleStatusToggle(item.id)}
                                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${item.status === 'In Stock'
                                                    ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                                                }`}
                                        >
                                            {item.status}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-stone-400 hover:text-amber-600 transition-colors">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-2 text-stone-400 hover:text-red-600 transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredItems.length === 0 && (
                    <div className="p-12 text-center text-stone-400">
                        No items found matching your filters.
                    </div>
                )}
            </div>

            {/* Simple Modal Placeholder */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
                        <div className="bg-stone-50 px-6 py-4 border-b border-stone-200 flex justify-between items-center">
                            <h3 className="font-bold text-lg text-stone-800">Add New Menu Item</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Item Name</label>
                                <input type="text" className="w-full border border-stone-200 rounded-lg p-2 focus:ring-amber-500 focus:border-amber-500" placeholder="e.g. Special Dosa" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Category</label>
                                    <select className="w-full border border-stone-200 rounded-lg p-2">
                                        {categories.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Price (₹)</label>
                                    <input type="number" className="w-full border border-stone-200 rounded-lg p-2" placeholder="0.00" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Description</label>
                                <textarea className="w-full border border-stone-200 rounded-lg p-2 h-24 resize-none" placeholder="Dish description..."></textarea>
                            </div>
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 text-xs text-amber-800">
                                NOTE: This item will be linked to <strong>{currentLocationName}</strong>.
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex justify-end gap-3">
                            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-stone-600 font-bold hover:bg-stone-200 rounded-lg">Cancel</button>
                            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-stone-900 text-white font-bold rounded-lg hover:bg-amber-600">Save Item</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
