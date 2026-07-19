'use client';
import { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';

const INITIAL_CUSTOMERS = [
    { id: 1, name: "Rahul Kumar", email: "rahul@example.com", phone: "+91 98765 43210", visits: 12, lastVisit: "2024-10-24", loc: "ashok-nagar" },
    { id: 2, name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 43211", visits: 5, lastVisit: "2024-10-20", loc: "kanke-road" },
    { id: 3, name: "Amit Singh", email: "amit@example.com", phone: "+91 98765 43212", visits: 3, lastVisit: "2024-10-22", loc: "ashok-nagar" },
    { id: 4, name: "Sneha Gupta", email: "sneha@example.com", phone: "+91 98765 43213", visits: 8, lastVisit: "2024-10-25", loc: "ratu-road" },
];

export default function AdminCustomersPage() {
    const { selectedLocation, locations } = useAdmin();
    const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCustomers = customers.filter(c => {
        const matchesLoc = selectedLocation === 'all' || c.loc === selectedLocation;
        const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.email.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLoc && matchesSearch;
    });

    const currentLocationName = locations.find(l => l.id === selectedLocation)?.name || 'All Locations';

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-2xl font-bold text-stone-800 mb-2">Customer Database</h1>
            <p className="text-stone-500 text-sm mb-8">Registered customers for: <span className="font-bold text-amber-600">{currentLocationName}</span></p>

            {/* Search */}
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm mb-6 max-w-md">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by name or email..."
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
                <table className="w-full text-left text-sm">
                    <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider text-xs font-bold border-b border-stone-100">
                        <tr>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Contact</th>
                            <th className="px-6 py-4">Visits</th>
                            <th className="px-6 py-4">Last Visit</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {filteredCustomers.map((customer) => (
                            <tr key={customer.id} className="hover:bg-amber-50/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-stone-900">{customer.name}</div>
                                    <div className="text-xs text-stone-400">ID: #{customer.id}</div>
                                </td>
                                <td className="px-6 py-4 text-stone-600">
                                    <div>{customer.email}</div>
                                    <div className="text-xs text-stone-400">{customer.phone}</div>
                                </td>
                                <td className="px-6 py-4 font-bold text-stone-700">{customer.visits}</td>
                                <td className="px-6 py-4 text-stone-500">{customer.lastVisit}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-amber-600 hover:text-amber-700 font-bold text-xs uppercase tracking-wider">
                                        View Profile
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredCustomers.length === 0 && (
                    <div className="p-12 text-center text-stone-400">
                        No customers found.
                    </div>
                )}
            </div>
        </div>
    );
}
