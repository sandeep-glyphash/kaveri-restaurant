'use client';
import { useState } from 'react';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: 'Lunch - 12:30 PM',
        guests: '2 Guests',
        requests: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission
        console.log('Booking submitted:', formData);
        alert('Reservation request submitted! We will confirm shortly.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="booking" className="py-20 bg-stone-50 text-stone-900 border-t border-stone-200 relative overflow-hidden">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage: 'url(/assets/9423856.jpg)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '400px 400px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left: Copy & Info (4 Cols) */}
                    <div className="lg:col-span-4 space-y-8 pt-8">
                        <div>
                            <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
                                Reservations
                            </span>
                            <h2 className="text-5xl font-serif italic text-stone-900 leading-tight">
                                Secure Your<br />Table
                            </h2>
                        </div>
                        <p className="text-stone-600 font-light leading-relaxed">
                            Experience the finest pure vegetarian dining in Ranchi. For parties larger than 8, please contact our concierge directly to ensure the perfect arrangement.
                        </p>

                        <div className="pt-8 border-t border-stone-200">
                            <h4 className="text-stone-900 font-bold uppercase text-[10px] tracking-widest mb-2">
                                Direct Line
                            </h4>
                            <p className="text-amber-600 text-xl font-serif font-bold">
                                +91 98765 43210
                            </p>
                        </div>
                    </div>

                    {/* Right: The Form (8 Cols) */}
                    <div className="lg:col-span-8">
                        <form onSubmit={handleSubmit} className="space-y-12">

                            {/* Row 1: Personal Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="group">
                                    <label className="block text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-3 group-focus-within:text-amber-600 transition-colors">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Guest Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-stone-300 text-stone-900 font-serif text-lg py-2 focus:border-amber-600 focus:outline-none transition-colors placeholder:text-stone-400"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-3 group-focus-within:text-amber-600 transition-colors">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="+91"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-stone-300 text-stone-900 font-serif text-lg py-2 focus:border-amber-600 focus:outline-none transition-colors placeholder:text-stone-400"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Date & Time */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                <div className="group">
                                    <label className="block text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-3 group-focus-within:text-amber-600 transition-colors">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-stone-300 text-stone-900 font-serif text-lg py-2 focus:border-amber-600 focus:outline-none transition-colors [color-scheme:light]"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-3 group-focus-within:text-amber-600 transition-colors">
                                        Time
                                    </label>
                                    <select
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-stone-300 text-stone-900 font-serif text-lg py-2 focus:border-amber-600 focus:outline-none transition-colors appearance-none cursor-pointer"
                                    >
                                        <option className="bg-white text-stone-900">Lunch - 12:30 PM</option>
                                        <option className="bg-white text-stone-900">Lunch - 01:30 PM</option>
                                        <option className="bg-white text-stone-900">Lunch - 02:30 PM</option>
                                        <option className="bg-white text-stone-900">Dinner - 07:30 PM</option>
                                        <option className="bg-white text-stone-900">Dinner - 08:30 PM</option>
                                        <option className="bg-white text-stone-900">Dinner - 09:30 PM</option>
                                    </select>
                                </div>
                                <div className="group">
                                    <label className="block text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-3 group-focus-within:text-amber-600 transition-colors">
                                        Guests
                                    </label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-stone-300 text-stone-900 font-serif text-lg py-2 focus:border-amber-600 focus:outline-none transition-colors appearance-none cursor-pointer"
                                    >
                                        <option className="bg-white text-stone-900">2 Guests</option>
                                        <option className="bg-white text-stone-900">3 Guests</option>
                                        <option className="bg-white text-stone-900">4 Guests</option>
                                        <option className="bg-white text-stone-900">5 Guests</option>
                                        <option className="bg-white text-stone-900">6 Guests</option>
                                        <option className="bg-white text-stone-900">7-8 Guests</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 3: Special Requests */}
                            <div className="group">
                                <label className="block text-stone-600 text-[10px] font-bold uppercase tracking-widest mb-3 group-focus-within:text-amber-600 transition-colors">
                                    Special Requests (Optional)
                                </label>
                                <textarea
                                    name="requests"
                                    rows="2"
                                    placeholder="Anniversary, Dietary Requirements, Quiet Table..."
                                    value={formData.requests}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-stone-300 text-stone-900 font-serif text-lg py-2 focus:border-amber-600 focus:outline-none transition-colors resize-none placeholder:text-stone-400"
                                />
                            </div>

                            {/* Action */}
                            <div className="pt-4 flex justify-end">
                                <button
                                    type="submit"
                                    className="px-14 py-5 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] text-stone-950 font-black uppercase tracking-widest text-[11px] rounded-full shadow-lg hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all outline-none"
                                >
                                    Confirm Reservation
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookingForm;
