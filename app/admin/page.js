'use client';
import { useAdmin } from '@/context/AdminContext';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
    const { selectedLocation, locations } = useAdmin();
    const [stats, setStats] = useState([]);
    const [recentOrders, setRecentOrders] = useState([]);

    const currentLocationName = locations.find(l => l.id === selectedLocation)?.name || 'All Locations';

    // Mock Data Generator based on Location
    useEffect(() => {
        // Base stats
        let baseRevenue = 1245000;
        let baseOrders = 45;

        // Adjust based on location to simulate "different dashboards"
        if (selectedLocation === 'ashok-nagar') {
            baseRevenue = 850000;
            baseOrders = 28;
        } else if (selectedLocation === 'kanke-road') {
            baseRevenue = 210000;
            baseOrders = 12;
        } else if (selectedLocation === 'ratu-road') {
            baseRevenue = 185000;
            baseOrders = 5;
        }

        setStats([
            { label: 'Total Revenue', value: `₹${baseRevenue.toLocaleString('en-IN')}`, change: selectedLocation === 'all' ? '+12%' : '+8%', color: 'emerald' },
            { label: 'Orders Today', value: baseOrders, change: '+5%', color: 'blue' },
            { label: 'Pending Orders', value: Math.floor(baseOrders * 0.1), change: '-2', color: 'orange' },
            { label: 'New Customers', value: Math.floor(baseOrders * 0.3), change: '+18%', color: 'purple' },
        ]);

        // Mock Orders
        const orders = [
            { id: '#ORD-001', customer: 'Rahul Kumar', items: 'Masala Dosa, Coffee', total: '₹350', status: 'Pending', time: '10 mins ago', loc: 'ashok-nagar' },
            { id: '#ORD-002', customer: 'Amit Singh', items: 'Paneer Butter Masala, Naan', total: '₹560', status: 'Cooking', time: '25 mins ago', loc: 'kanke-road' },
            { id: '#ORD-003', customer: 'Sneha Gupta', items: 'Veg Biryani', total: '₹280', status: 'Delivered', time: '1 hour ago', loc: 'ashok-nagar' },
            { id: '#ORD-004', customer: 'Priya Sharma', items: 'Thali Special', total: '₹450', status: 'Delivered', time: '2 hours ago', loc: 'ratu-road' },
            { id: '#ORD-005', customer: 'Vikram Malhotra', items: 'Chinese Platter', total: '₹620', status: 'Pending', time: '5 mins ago', loc: 'kanke-road' },
        ];

        if (selectedLocation === 'all') {
            setRecentOrders(orders);
        } else {
            setRecentOrders(orders.filter(o => o.loc === selectedLocation));
        }

    }, [selectedLocation]);

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-stone-800">
                        Overview: <span className="text-amber-600 italic">{currentLocationName}</span>
                    </h1>
                    <p className="text-stone-500 text-sm mt-1">Real-time data for today's service.</p>
                </div>
                <div className="text-right hidden sm:block">
                    <div className="text-xs font-bold uppercase tracking-widest text-stone-400">Date</div>
                    <div className="text-stone-700 font-medium">Oct 24, 2024</div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                            <span className="text-stone-500 text-sm font-medium">{stat.label}</span>
                            <span className={`text-xs font-bold px-2 py-1 rounded bg-${stat.color}-100 text-${stat.color}-600`}>
                                {stat.change}
                            </span>
                        </div>
                        <div className="text-3xl font-bold text-stone-800">{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders Table */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
                        <h3 className="font-bold text-stone-800">Recent Orders</h3>
                        <button className="text-sm text-amber-600 font-medium hover:text-amber-700">View All</button>
                    </div>
                    {recentOrders.length === 0 ? (
                        <div className="p-12 text-center text-stone-400">No recent orders for this location.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-stone-50 text-stone-500">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Order ID</th>
                                        <th className="px-6 py-4 font-medium">Customer</th>
                                        <th className="px-6 py-4 font-medium">Details</th>
                                        <th className="px-6 py-4 font-medium">Status</th>
                                        <th className="px-6 py-4 font-medium">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id} className="hover:bg-stone-50 transition-colors group cursor-pointer">
                                            <td className="px-6 py-4 font-medium text-stone-900 group-hover:text-amber-600 transition-colors">{order.id}</td>
                                            <td className="px-6 py-4 text-stone-600">{order.customer}</td>
                                            <td className="px-6 py-4 text-stone-500 max-w-xs truncate">{order.items}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold 
                                                ${order.status === 'Pending' ? 'bg-orange-100 text-orange-600' :
                                                        order.status === 'Cooking' ? 'bg-blue-100 text-blue-600' :
                                                            'bg-green-100 text-green-600'}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-stone-800">{order.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Quick Actions / Activity */}
                <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
                    <h3 className="font-bold text-stone-800 mb-6">Quick Actions</h3>
                    <div className="space-y-4">
                        <button className="w-full py-3 px-4 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-colors flex items-center justify-center shadow-lg shadow-stone-900/10">
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add Menu Item ({currentLocationName})
                        </button>
                        <button className="w-full py-3 px-4 border border-stone-200 text-stone-700 rounded-lg font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">
                            Create Reservation
                        </button>
                        <button className="w-full py-3 px-4 border border-stone-200 text-stone-700 rounded-lg font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">
                            Manage Staff
                        </button>
                    </div>

                    <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
                        <h4 className="text-amber-800 font-bold mb-2 text-sm">Outlet Status</h4>
                        <p className="text-amber-700/80 text-xs">
                            You are currently managing <strong>{currentLocationName}</strong>.
                            Changes made here will strictly reflect on the specific outlet's frontend page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
