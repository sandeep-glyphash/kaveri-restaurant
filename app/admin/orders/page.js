'use client';
import { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';

const INITIAL_ORDERS = [
    { id: '#ORD-001', customer: 'Rahul Kumar', items: 'Masala Dosa x2, Coffee', total: '₹350', status: 'Pending', time: '10:30 AM', loc: 'ashok-nagar' },
    { id: '#ORD-002', customer: 'Amit Singh', items: 'Paneer Butter Masala, Naan', total: '₹560', status: 'Cooking', time: '10:45 AM', loc: 'kanke-road' },
    { id: '#ORD-003', customer: 'Sneha Gupta', items: 'Veg Biryani', total: '₹280', status: 'Delivered', time: '11:00 AM', loc: 'ashok-nagar' },
    { id: '#ORD-004', customer: 'Priya Sharma', items: 'Thali Special', total: '₹450', status: 'Delivered', time: '11:15 AM', loc: 'ratu-road' },
    { id: '#ORD-005', customer: 'Vikram Malhotra', items: 'Chinese Platter', total: '₹620', status: 'Pending', time: '11:20 AM', loc: 'kanke-road' },
];

export default function AdminOrdersPage() {
    const { selectedLocation, locations } = useAdmin();
    const [orders, setOrders] = useState(INITIAL_ORDERS);
    const [filterStatus, setFilterStatus] = useState('All');

    const filteredOrders = orders.filter(order => {
        const matchesLoc = selectedLocation === 'all' || order.loc === selectedLocation;
        const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
        return matchesLoc && matchesStatus;
    });

    const categories = ['All', 'Pending', 'Cooking', 'Delivered', 'Cancelled'];
    const currentLocationName = locations.find(l => l.id === selectedLocation)?.name || 'All Locations';

    const handleStatusChange = (id, newStatus) => {
        setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
    };

    return (
        <div className="animate-fade-in-up">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-stone-800">Order Management</h1>
                    <p className="text-stone-500 text-sm">Live orders for: <span className="font-bold text-amber-600">{currentLocationName}</span></p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm mb-6 flex gap-2 overflow-x-auto">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilterStatus(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${filterStatus === cat
                                ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                : 'bg-stone-50 text-stone-500 hover:bg-stone-100'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider text-xs font-bold border-b border-stone-100">
                        <tr>
                            <th className="px-6 py-4">Order ID</th>
                            <th className="px-6 py-4">Customer</th>
                            <th className="px-6 py-4">Items</th>
                            <th className="px-6 py-4">Total</th>
                            <th className="px-6 py-4">Time</th>
                            <th className="px-6 py-4">Status Update</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {filteredOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-amber-50/30 transition-colors">
                                <td className="px-6 py-4 font-bold text-stone-900">{order.id}</td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-stone-800">{order.customer}</div>
                                    <div className="text-xs text-stone-400 capitalize">{order.loc.replace('-', ' ')}</div>
                                </td>
                                <td className="px-6 py-4 text-stone-600 truncate max-w-xs">{order.items}</td>
                                <td className="px-6 py-4 font-bold text-stone-800">{order.total}</td>
                                <td className="px-6 py-4 text-stone-500">{order.time}</td>
                                <td className="px-6 py-4">
                                    <select
                                        value={order.status}
                                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        className={`text-xs font-bold rounded-full px-3 py-1 border-none focus:ring-0 cursor-pointer ${order.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                order.status === 'Cooking' ? 'bg-blue-100 text-blue-700' :
                                                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                        'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Cooking">Cooking</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredOrders.length === 0 && (
                    <div className="p-12 text-center text-stone-400">
                        No orders found.
                    </div>
                )}
            </div>
        </div>
    );
}
