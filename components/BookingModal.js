import React from 'react';
import Image from 'next/image';

const BookingModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Table booking submitted! (Demo)');
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-white w-full max-w-5xl md:h-auto rounded-[10px] md:rounded-[32px] flex flex-col md:flex-row shadow-2xl relative overflow-hidden">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-30 p-1.5 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all shadow-lg border border-white/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-40 md:h-auto shrink-0">
                    <Image
                        src="/images/ashok-nagar-3.png"
                        alt="Kaveri Restaurant Ambiance"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-black/20"></div>
                    <div className="absolute bottom-3 left-6 md:bottom-8 md:left-8 md:right-8 text-white">
                        <h3 className="font-serif text-lg md:text-2xl italic mb-1 md:mb-2 drop-shadow-sm">Reserve your moment</h3>
                        <div className="h-0.5 w-8 md:w-10 bg-[#d4af37]"></div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-5 md:p-12 bg-white">
                    <h2 className="text-xl md:text-4xl font-playfair-italic font-normal tracking-wide drop-shadow-sm bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent mb-1 md:mb-2">Table Reservation</h2>
                    <p className="hidden md:block text-stone-500 text-sm mb-8 font-light font-sans">Join us for an unforgettable Sattvic culinary journey.</p>

                    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6 mt-2 md:mt-0">
                        {/* Personal Details */}
                        <div className="space-y-2 md:space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Guest Name"
                                    className="w-full border-b border-stone-200 py-1.5 md:py-2 text-sm md:text-base text-stone-900 font-serif focus:border-[#d4af37] focus:outline-none transition-colors placeholder-stone-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="Phone"
                                        className="w-full border-b border-stone-200 py-1.5 md:py-2 text-sm md:text-base text-stone-900 font-serif focus:border-[#d4af37] focus:outline-none transition-colors placeholder-stone-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full border-b border-stone-200 py-1.5 md:py-2 text-sm md:text-base text-stone-900 font-serif focus:border-[#d4af37] focus:outline-none transition-colors placeholder-stone-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Reservation Details */}
                        <div className="grid grid-cols-3 gap-3 md:gap-6">
                            <div className="col-span-1">
                                <label className="block text-stone-900 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-0.5 md:mb-1 font-sans">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="w-full border-b border-stone-200 py-1 md:py-2 text-stone-900 font-serif focus:border-[#d4af37] focus:outline-none transition-colors uppercase text-xs md:text-sm bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-stone-900 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-0.5 md:mb-1 font-sans">Time</label>
                                <select
                                    name="time"
                                    className="w-full border-b border-stone-200 py-1 md:py-2 text-xs md:text-base text-stone-900 font-serif focus:border-[#d4af37] focus:outline-none transition-colors bg-white appearance-none"
                                >
                                    <option>12:30 PM</option>
                                    <option>01:30 PM</option>
                                    <option>07:30 PM</option>
                                    <option>08:30 PM</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-stone-900 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-0.5 md:mb-1 font-sans">Guests</label>
                                <select
                                    name="guests"
                                    className="w-full border-b border-stone-200 py-1 md:py-2 text-xs md:text-base text-stone-900 font-serif focus:border-[#d4af37] focus:outline-none transition-colors bg-white appearance-none"
                                >
                                    <option>2 Ppl</option>
                                    <option>4 Ppl</option>
                                    <option>6+ Ppl</option>
                                </select>
                            </div>
                        </div>

                        {/* Special Request */}
                        <div>
                            <input
                                type="text"
                                name="special_request"
                                placeholder="Any Special Request?"
                                className="w-full border-b border-stone-200 py-1.5 md:py-2 text-sm md:text-base text-stone-900 font-serif focus:border-[#d4af37] focus:outline-none transition-colors placeholder-stone-500"
                            />
                        </div>

                        <div className="pt-2 md:pt-4">
                            <button
                                type="submit"
                                className="w-full py-3 md:py-4 gold-gradient text-stone-950 font-black uppercase tracking-widest text-[10px] md:text-xs rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all font-sans"
                            >
                                Confirm Table
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
