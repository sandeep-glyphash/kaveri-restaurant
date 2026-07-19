'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BulkOrderPage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        orderType: 'corporate', // corporate, wedding, event
        eventDate: '',
        guestCount: '',
        requirements: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your bulk order inquiry! Our team will contact you within 24 hours.');
    };

    return (
        <div className="min-h-screen bg-stone-50">

            {/* Hero Section - Black Background */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-24">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/Hampers/IMG_7834.jpg"
                        alt="Bulk Orders"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-3">Bulk Orders</h1>
                    <p className="text-white/80">Catering & Large Orders for Every Occasion</p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left: Information */}
                    <div>
                        <h2 className="text-3xl font-serif italic text-stone-900 mb-6">Perfect for Every Celebration</h2>
                        <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                            Whether it's a corporate event, wedding, festival, or any special occasion,
                            Kaveri's Sweets and Restaurant is here to make your celebration memorable with our
                            delicious food and exceptional service.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 mb-1">Corporate Events</h3>
                                    <p className="text-stone-600 text-sm">Office parties, conferences, meetings, and team celebrations</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 mb-1">Weddings & Receptions</h3>
                                    <p className="text-stone-600 text-sm">Full catering services for your special day</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 mb-1">Festivals & Occasions</h3>
                                    <p className="text-stone-600 text-sm">Diwali, Holi, Christmas, New Year, and all celebrations</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 mb-1">Social Events</h3>
                                    <p className="text-stone-600 text-sm">Birthday parties, anniversaries, family gatherings</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                            <h3 className="font-bold text-amber-900 mb-3">Why Choose Kaveri?</h3>
                            <ul className="space-y-2 text-sm text-amber-800">
                                <li className="flex items-center gap-2">
                                    <span className="text-amber-600">✓</span> Minimum order: 50 people
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-amber-600">✓</span> Customizable menus
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-amber-600">✓</span> Fresh, authentic flavors
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-amber-600">✓</span> Timely delivery & setup
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-amber-600">✓</span> Competitive pricing
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <h2 className="text-2xl font-serif italic text-stone-900 mb-6">Request a Quote</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                        placeholder="Full Name *"
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                        placeholder="Company/Organization"
                                    />
                                </div>

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
                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                        placeholder="Phone Number *"
                                    />
                                </div>

                                <select
                                    name="orderType"
                                    value={formData.orderType}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                >
                                    <option value="corporate">Corporate Event</option>
                                    <option value="wedding">Wedding/Reception</option>
                                    <option value="festival">Festival/Religious Event</option>
                                    <option value="social">Social Event</option>
                                    <option value="other">Other</option>
                                </select>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="date"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                        placeholder="Event Date"
                                    />
                                    <input
                                        type="number"
                                        name="guestCount"
                                        value={formData.guestCount}
                                        onChange={handleChange}
                                        required
                                        min="50"
                                        className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                        placeholder="Number of Guests (Min 50) *"
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                    placeholder="Specific Requirements (Veg/Non-Veg/Jain)"
                                />

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all resize-none text-stone-900 bg-stone-50"
                                    placeholder="Additional Details or Special Requests"
                                />

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                                >
                                    Submit Inquiry
                                </button>

                                <p className="text-xs text-stone-500 text-center">
                                    *Our team will contact you within 24 hours to discuss your requirements
                                </p>
                            </form>
                        </div>
                    </div>

                </div>

                {/* Contact Info */}
                <div className="mt-12 text-center">
                    <p className="text-stone-600 mb-4">For immediate assistance, call us at:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:+918409211101" className="px-6 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +91-84092 11101
                        </a>
                        <a href="mailto:info@thekaveris.com" className="px-6 py-3 border-2 border-stone-300 text-stone-700 hover:border-[#d4af37] hover:text-[#d4af37] rounded-full font-bold transition-all flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            info@thekaveris.com
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
