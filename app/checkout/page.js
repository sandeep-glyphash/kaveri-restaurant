'use client';
import { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CheckoutPage() {
    const router = useRouter();
    const { cart, cartTotal, clearCart } = useShop();
    const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Confirmation
    const [orderId, setOrderId] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: 'Ranchi',
        pincode: '',
        landmark: '',
        orderType: 'delivery', // 'delivery' or 'pickup'
        location: 'ashok-nagar',
        paymentMethod: 'online', // 'online', 'cod'
        instructions: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else if (step === 2) {
            const newOrderId = 'KAV' + Date.now().toString().slice(-8);
            setOrderId(newOrderId);
            setStep(3);
            clearCart();
        }
    };

    const tax = Math.round(cartTotal * 0.05);
    const deliveryFee = formData.orderType === 'delivery' ? 50 : 0;
    const total = cartTotal + tax + deliveryFee;

    if (cart.length === 0 && step !== 3) {
        return (
            <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 pt-32">
                <div className="max-w-md w-full bg-white rounded-3xl p-12 text-center shadow-xl">
                    <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-serif italic text-stone-900 mb-3">Your cart is empty</h2>
                    <p className="text-stone-600 mb-8">Add some delicious items to get started</p>
                    <button
                        onClick={() => router.push('/menu')}
                        className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Browse Menu
                    </button>
                </div>
            </div>
        );
    }

    // Step 3: Order Confirmation
    if (step === 3) {
        return (
            <div className="min-h-screen bg-stone-50">
                {/* Hero Section */}
                <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-24">
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/Kanke/kanke-1.png"
                            alt="Success"
                            fill
                            className="object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-2">Order Confirmed!</h1>
                        <p className="text-white/80 text-sm">Order ID: <span className="font-mono font-bold">{orderId}</span></p>
                    </div>
                </section>

                <div className="max-w-2xl mx-auto px-4 py-12">
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                        <div className="text-center mb-8">
                            <p className="text-stone-600 text-lg mb-6">Thank you for your order!</p>

                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                                <p className="text-sm text-amber-700 font-bold uppercase tracking-wider mb-2">
                                    {formData.orderType === 'delivery' ? 'Expected Delivery' : 'Ready for Pickup'}
                                </p>
                                <p className="text-2xl font-bold text-amber-900">45-60 minutes</p>
                            </div>

                            <div className="text-left space-y-3 mb-8 border-t border-b border-stone-200 py-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-stone-600">Total Amount</span>
                                    <span className="text-xl font-bold text-stone-900">₹{total}</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => router.push('/track-order?id=' + orderId)}
                                    className="flex-1 px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                                >
                                    Track Order
                                </button>
                                <button
                                    onClick={() => router.push('/menu')}
                                    className="flex-1 px-8 py-3 border-2 border-stone-300 text-stone-700 hover:border-[#d4af37] hover:text-[#d4af37] rounded-full font-bold uppercase tracking-wider text-sm transition-all"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50">

            {/* Hero Section - Black Background */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-24">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/Ashok Nagar/ashok-nagar-1.png"
                        alt="Checkout"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-4">Checkout</h1>

                    {/* Progress Steps */}
                    <div className="flex justify-center items-center gap-3 text-white/80 text-xs uppercase tracking-wider font-bold">
                        <span className={step >= 1 ? 'text-amber-400' : ''}>1. Details</span>
                        <span>•</span>
                        <span className={step >= 2 ? 'text-amber-400' : ''}>2. Payment</span>
                        <span>•</span>
                        <span className={step >= 3 ? 'text-amber-400' : ''}>3. Confirm</span>
                    </div>
                </div>
            </section>

            {/* Main Content - Split Layout */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Left: Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl">

                            {step === 1 && (
                                <>
                                    <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Personal Details</h2>
                                    <div className="space-y-4 mb-6">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                            placeholder="Full Name *"
                                        />
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                                placeholder="Email Address *"
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                pattern="[0-9]{10}"
                                                className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                                placeholder="Phone Number *"
                                            />
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Order Type</h2>
                                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                                        <label className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.orderType === 'delivery' ? 'border-[#d4af37] bg-amber-50' : 'border-stone-200'
                                            }`}>
                                            <input
                                                type="radio"
                                                name="orderType"
                                                value="delivery"
                                                checked={formData.orderType === 'delivery'}
                                                onChange={handleChange}
                                                className="w-5 h-5"
                                            />
                                            <span className="font-bold text-stone-900">Home Delivery</span>
                                        </label>
                                        <label className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.orderType === 'pickup' ? 'border-[#d4af37] bg-amber-50' : 'border-stone-200'
                                            }`}>
                                            <input
                                                type="radio"
                                                name="orderType"
                                                value="pickup"
                                                checked={formData.orderType === 'pickup'}
                                                onChange={handleChange}
                                                className="w-5 h-5"
                                            />
                                            <span className="font-bold text-stone-900">Pickup</span>
                                        </label>
                                    </div>

                                    {formData.orderType === 'delivery' ? (
                                        <>
                                            <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Delivery Address</h2>
                                            <div className="space-y-4">
                                                <textarea
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                    required
                                                    rows={3}
                                                    className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all resize-none text-stone-900 bg-stone-50"
                                                    placeholder="Complete Address *"
                                                />
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                                        placeholder="City"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="pincode"
                                                        value={formData.pincode}
                                                        onChange={handleChange}
                                                        required
                                                        pattern="[0-9]{6}"
                                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                                        placeholder="Pincode *"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="landmark"
                                                        value={formData.landmark}
                                                        onChange={handleChange}
                                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                                        placeholder="Landmark"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Pickup Location</h2>
                                            <select
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                            >
                                                <option value="ashok-nagar">Ashok Nagar</option>
                                                <option value="kanke-road">Kanke Road</option>
                                                <option value="ratu-road">Ratu Road</option>
                                            </select>
                                        </>
                                    )}
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Payment Method</h2>
                                    <div className="space-y-4">
                                        <label className={`flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'online' ? 'border-[#d4af37] bg-amber-50' : 'border-stone-200'
                                            }`}>
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="online"
                                                checked={formData.paymentMethod === 'online'}
                                                onChange={handleChange}
                                                className="w-5 h-5"
                                            />
                                            <div className="flex-1">
                                                <div className="font-bold text-stone-900 mb-1">Online Payment</div>
                                                <div className="text-sm text-stone-500">UPI, Cards, Net Banking</div>
                                            </div>
                                        </label>

                                        <label className={`flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'cod' ? 'border-[#d4af37] bg-amber-50' : 'border-stone-200'
                                            }`}>
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="cod"
                                                checked={formData.paymentMethod === 'cod'}
                                                onChange={handleChange}
                                                className="w-5 h-5"
                                            />
                                            <div className="flex-1">
                                                <div className="font-bold text-stone-900 mb-1">Cash on Delivery</div>
                                                <div className="text-sm text-stone-500">Pay when you receive</div>
                                            </div>
                                        </label>
                                    </div>
                                </>
                            )}

                            <div className="flex gap-4 mt-8 pt-6 border-t border-stone-200">
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step - 1)}
                                        className="px-8 py-3 border-2 border-stone-300 text-stone-700 hover:border-[#d4af37] hover:text-[#d4af37] rounded-full font-bold uppercase tracking-wider text-sm transition-all"
                                    >
                                        Back
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="flex-1 px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                                >
                                    {step === 1 ? 'Continue to Payment' : 'Place Order'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Order Summary */}
                    <div>
                        <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-24">
                            <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Order Summary</h2>

                            <div className="space-y-4 max-h-60 overflow-y-auto mb-6">
                                {cart.map(item => (
                                    <div key={item.id} className="flex gap-3 items-center">
                                        <div className="w-16 h-16 relative rounded-lg overflow-hidden shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-stone-800 text-sm truncate">{item.name}</p>
                                            <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-bold text-stone-900">₹{item.price * item.quantity}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 border-t border-stone-200 pt-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-stone-600">Subtotal</span>
                                    <span className="font-bold text-stone-900">₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-stone-600">Tax (5%)</span>
                                    <span className="font-bold text-stone-900">₹{tax}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-stone-600">Delivery Fee</span>
                                    <span className="font-bold text-stone-900">₹{deliveryFee}</span>
                                </div>
                                <div className="flex justify-between pt-3 border-t border-stone-200">
                                    <span className="text-lg font-serif italic text-stone-900">Total</span>
                                    <span className="text-2xl font-bold text-stone-900">₹{total}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
