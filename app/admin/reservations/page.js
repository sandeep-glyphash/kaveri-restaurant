'use client';
import { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';

const INITIAL_BOOKINGS = [
    { id: 'RES-8821', name: "Rohit Sharma", date: "2024-10-25", time: "19:00", guests: 4, table: "T-12", status: "Confirmed", loc: "ashok-nagar", phone: "+91 98765 43210" },
    { id: 'RES-8822', name: "Virat Kohli", date: "2024-10-25", time: "20:30", guests: 2, table: "VIP-1", status: "Pending", loc: "kanke-road", phone: "+91 98765 43211" },
    { id: 'RES-8823', name: "Anushka Sharma", date: "2024-10-26", time: "13:00", guests: 6, table: "T-05", status: "Confirmed", loc: "ashok-nagar", phone: "+91 98765 43212" },
    { id: 'RES-8824', name: "MS Dhoni", date: "2024-10-26", time: "20:00", guests: 10, table: "PDR", status: "Confirmed", loc: "ratu-road", phone: "+91 98765 43213" },
];

export default function AdminReservationsPage() {
    const { selectedLocation, locations } = useAdmin();
    const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
    const [filterStatus, setFilterStatus] = useState('All');

    const filteredBookings = bookings.filter(booking => {
        const matchesLoc = selectedLocation === 'all' || booking.loc === selectedLocation;
        const matchesStatus = filterStatus === 'All' || booking.status === filterStatus;
        return matchesLoc && matchesStatus;
    });

    const categories = ['All', 'Confirmed', 'Pending', 'Cancelled'];
    const currentLocationName = locations.find(l => l.id === selectedLocation)?.name || 'All Locations';

    return (
        <div className="animate-fade-in-up">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-stone-800">Reservations</h1>
                    <p className="text-stone-500 text-sm">Managing bookings for: <span className="font-bold text-amber-600">{currentLocationName}</span></p>
                </div>
                <button className="px-6 py-2.5 bg-stone-900 text-white rounded-lg hover:bg-amber-600 transition-colors shadow-lg shadow-stone-900/20 text-sm font-bold">
                    + New Booking
                </button>
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
                            <th className="px-6 py-4">Ref ID</th>
                            <th className="px-6 py-4">Guest Name</th>
                            <th className="px-6 py-4">Date & Time</th>
                            <th className="px-6 py-4">Details</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {filteredBookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-amber-50/30 transition-colors">
                                <td className="px-6 py-4 font-bold text-stone-500 text-xs">{booking.id}</td>
                                <td className="px-6 py-4">
                                    <div className="font-bold text-stone-900">{booking.name}</div>
                                    <div className="text-xs text-stone-400">{booking.phone}</div>
                                </td>
                                <td className="px-6 py-4 text-stone-600">
                                    <div>{booking.date}</div>
                                    <div className="text-xs font-bold text-amber-600">{booking.time}</div>
                                </td>
                                <td className="px-6 py-4 text-stone-600">
                                    <span className="inline-block bg-stone-100 rounded px-2 py-1 text-xs mr-2">{booking.guests} Guests</span>
                                    <span className="inline-block bg-stone-100 rounded px-2 py-1 text-xs">Table {booking.table}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                                            'bg-orange-100 text-orange-700'
                                        }`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-stone-400 hover:text-amber-600 font-bold text-xs uppercase tracking-wider">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredBookings.length === 0 && (
                    <div className="p-12 text-center text-stone-400">
                        No bookings found.
                    </div>
                )}
            </div>
        </div>
    );
}
