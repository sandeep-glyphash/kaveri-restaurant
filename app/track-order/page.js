'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function TrackOrderContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [orderId, setOrderId] = useState(searchParams.get('id') || '');
    const [searching, setSearching] = useState(false);
    const [orderFound, setOrderFound] = useState(false);

    const [orderData] = useState({
        id: orderId,
        status: 'preparing',
        orderType: 'delivery',
        items: 3,
        total: 1547,
        placedAt: new Date(Date.now() - 25 * 60 * 1000).toLocaleString(),
        estimatedTime: '20-25 minutes',
        address: 'Freds Palace, Ashok Nagar, Road No.3, Ranchi-834002',
        paymentMethod: 'Online',
        deliveryPerson: {
            name: 'Rahul Kumar',
            phone: '+91-98765 43210'
        }
    });

    const handleSearch = (e) => {
        e.preventDefault();
        if (orderId) {
            setSearching(true);
            setTimeout(() => {
                setSearching(false);
                setOrderFound(true);
            }, 1000);
        }
    };

    useEffect(() => {
        if (searchParams.get('id')) {
            setOrderFound(true);
        }
    }, [searchParams]);

    const statusSteps = [
        { key: 'placed', label: 'Order Placed', icon: '✓' },
        { key: 'preparing', label: 'Preparing', icon: '🍳' },
        { key: 'ready', label: 'Ready', icon: '📦' },
        { key: 'on-the-way', label: orderData.orderType === 'delivery' ? 'On the Way' : 'Ready for Pickup', icon: orderData.orderType === 'delivery' ? '🏍️' : '✓' },
        { key: 'delivered', label: orderData.orderType === 'delivery' ? 'Delivered' : 'Picked Up', icon: '✓' }
    ];

    const currentStepIndex = statusSteps.findIndex(s => s.key === orderData.status);

    return (
        <div className="min-h-screen bg-stone-50">

            {/* Hero Section - Black Background */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-24">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/Ratu Road/ratu-1.png"
                        alt="Track Order"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-3">Track Your Order</h1>
                    <p className="text-white/80">Enter your order ID to track your order status</p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-12">

                {/* Search Form */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-8">
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <input
                            type="text"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value.toUpperCase())}
                            placeholder="Enter Order ID (e.g., KAV12345678)"
                            className="flex-1 px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50 font-mono"
                            required
                        />
                        <button
                            type="submit"
                            disabled={searching}
                            className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {searching ? 'Searching...' : 'Track'}
                        </button>
                    </form>
                </div>

                {/* Order Details */}
                {orderFound && (
                    <div className="space-y-6">

                        {/* Order Info Card */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-sm text-stone-500 uppercase tracking-wider font-bold mb-1">Order ID</p>
                                    <p className="text-2xl font-bold text-stone-900 font-mono">{orderData.id}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-stone-500 uppercase tracking-wider font-bold mb-1">Placed At</p>
                                    <p className="text-sm font-bold text-stone-900">{orderData.placedAt}</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-stone-50 rounded-2xl p-4 text-center">
                                    <p className="text-xs text-stone-500 uppercase tracking-wider font-bold mb-2">Items</p>
                                    <p className="text-2xl font-bold text-stone-900">{orderData.items}</p>
                                </div>
                                <div className="bg-stone-50 rounded-2xl p-4 text-center">
                                    <p className="text-xs text-stone-500 uppercase tracking-wider font-bold mb-2">Total</p>
                                    <p className="text-2xl font-bold text-stone-900">₹{orderData.total}</p>
                                </div>
                                <div className="bg-stone-50 rounded-2xl p-4 text-center">
                                    <p className="text-xs text-stone-500 uppercase tracking-wider font-bold mb-2">Payment</p>
                                    <p className="text-xl font-bold text-stone-900">{orderData.paymentMethod}</p>
                                </div>
                            </div>

                            {orderData.orderType === 'delivery' && (
                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6">
                                    <p className="text-sm text-amber-700 font-bold uppercase tracking-wider mb-2">Delivery Address</p>
                                    <p className="text-stone-900">{orderData.address}</p>
                                </div>
                            )}
                        </div>

                        {/* Status Tracking */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
                            <h2 className="text-2xl font-serif italic text-stone-900 mb-8">Order Status</h2>

                            {/* Timeline */}
                            <div className="relative">
                                {statusSteps.map((step, index) => {
                                    const isActive = index <= currentStepIndex;
                                    const isCurrent = index === currentStepIndex;

                                    return (
                                        <div key={step.key} className="relative flex items-start mb-8 last:mb-0">
                                            {index < statusSteps.length - 1 && (
                                                <div className={`absolute left-6 top-12 bottom-0 w-1 ${isActive ? 'bg-gradient-to-b from-[#d4af37] to-[#b8860b]' : 'bg-stone-200'
                                                    }`} />
                                            )}

                                            <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${isActive
                                                ? 'bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white shadow-lg scale-110'
                                                : 'bg-stone-200 text-stone-400'
                                                } ${isCurrent ? 'animate-pulse ring-4 ring-amber-200' : ''}`}>
                                                {step.icon}
                                            </div>

                                            <div className="ml-6 flex-1">
                                                <h3 className={`text-lg font-bold mb-1 ${isActive ? 'text-stone-900' : 'text-stone-400'}`}>
                                                    {step.label}
                                                </h3>
                                                {isCurrent && (
                                                    <div className="space-y-2">
                                                        <p className="text-sm text-stone-600">
                                                            {step.key === 'preparing' && 'Our chefs are preparing your delicious order'}
                                                            {step.key === 'ready' && 'Your order is ready!'}
                                                            {step.key === 'on-the-way' && orderData.orderType === 'delivery' && 'Your order is on the way'}
                                                            {step.key === 'on-the-way' && orderData.orderType === 'pickup' && 'Ready for pickup'}
                                                        </p>
                                                        {step.key === 'preparing' && (
                                                            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                                                                ETA: {orderData.estimatedTime}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Delivery Person */}
                        {orderData.orderType === 'delivery' && currentStepIndex >= 3 && (
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
                                <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Delivery Partner</h2>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                            {orderData.deliveryPerson.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-stone-900 text-lg">{orderData.deliveryPerson.name}</p>
                                            <p className="text-sm text-stone-500">Delivery Partner</p>
                                        </div>
                                    </div>
                                    <a
                                        href={`tel:${orderData.deliveryPerson.phone}`}
                                        className="px-6 py-3 bg-green-600 text-white rounded-full font-bold flex items-center gap-2 hover:bg-green-700 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        Call
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/menu"
                                className="flex-1 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center"
                            >
                                Order Again
                            </Link>
                            <Link
                                href="/contact"
                                className="flex-1 px-8 py-4 border-2 border-stone-300 text-stone-700 hover:border-[#d4af37] hover:text-[#d4af37] rounded-full font-bold uppercase tracking-wider text-sm transition-all text-center"
                            >
                                Need Help?
                            </Link>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default function TrackOrderPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-stone-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#d4af37] border-t-transparent"></div>
                    <p className="mt-4 text-stone-600">Loading...</p>
                </div>
            </div>
        }>
            <TrackOrderContent />
        </Suspense>
    );
}
