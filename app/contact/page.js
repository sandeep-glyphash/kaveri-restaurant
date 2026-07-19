'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [selectedLocation, setSelectedLocation] = useState('ashok-nagar');

    const locations = [
        {
            id: 'ashok-nagar',
            name: 'Ashok Nagar',
            address: 'Freds Palace, Ashok Nagar, Opp Road No.3',
            city: 'Ranchi-834002, Jharkhand',
            phones: ['+91-84092 11101', '+91-84097 11101'],
            email: 'info@thekaveris.com',
            timing: 'Mon - Sat: 9AM - 9PM',
            image: '/assets/Ashok Nagar/ashok-nagar-1.png',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.0574!2d85.3156!3d23.3522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e15641d7e5a7%3A0x8a6e7b0a7c6d8e9f!2sKaveri%20Restaurant%20Ashok%20Nagar!5e0!3m2!1sen!2sin!4v1735539000000!5m2!1sen!2sin'
        },
        {
            id: 'kanke-road',
            name: 'Kanke Road',
            address: 'Shop No.6, Astor Green, Chandani Chowk',
            city: 'Ranchi-834008, Jharkhand',
            phones: ['+91-7781000533', '+91-7781000534'],
            email: 'info@thekaveris.com',
            timing: 'Mon - Sat: 9AM - 9PM',
            image: '/assets/Kanke/kanke-1.png',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.5!2d85.33!3d23.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0b641d7e5a7%3A0x9b7f8c1b8d9e0f1a!2sAstor%20Green%20Kanke%20Road%20Ranchi!5e0!3m2!1sen!2sin!4v1735539100000!5m2!1sen!2sin'
        },
        {
            id: 'ratu-road',
            name: 'Ratu Road',
            address: 'Ayodhya Apartment, Shivaji Park, Hehal',
            city: 'Ranchi-834005, Jharkhand',
            phones: ['+91-90319 24777', '+91-90319 23777'],
            email: 'info@thekaveris.com',
            timing: 'Mon - Sat: 9AM - 9PM',
            image: '/assets/Ratu Road/ratu-1.png',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.8!2d85.29!3d23.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4df5641d7e5a7%3A0x7c8f9d2e3f4a5b6c!2sRatu%20Road%20Ranchi!5e0!3m2!1sen!2sin!4v1735539200000!5m2!1sen!2sin'
        }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    const selectedLocationData = locations.find(loc => loc.id === selectedLocation);

    return (
        <div className="min-h-screen bg-stone-50">

            {/* Hero Section */}
            <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f9e29c] rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <p className="text-[#d4af37] text-[11px] font-bold tracking-[0.6em] uppercase mb-6">GET IN TOUCH</p>

                    <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-6 leading-tight">
                        We'd Love to <span className="bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#d4af37] bg-clip-text text-transparent">Hear From You</span>
                    </h1>

                    <div className="flex justify-center mb-8">
                        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full shadow-lg shadow-amber-500/50" />
                    </div>

                    <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
                        Whether you have a question, feedback, or want to plan your next celebration with us, we're here to help.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <p className="text-[#d4af37] text-[11px] font-bold tracking-[0.6em] uppercase mb-6">SEND A MESSAGE</p>

                            <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6">
                                Drop Us a Line
                            </h2>

                            <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                        placeholder="Your Name *"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                        placeholder="Email Address *"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                        placeholder="Phone Number"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-full border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all text-stone-900 bg-stone-50"
                                        placeholder="Subject *"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-6 py-4 rounded-3xl border border-stone-200 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 outline-none transition-all resize-none text-stone-900 bg-stone-50"
                                        placeholder="Your Message *"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group px-10 py-4 text-[12px] font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-500 text-stone-900 bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,175,55,0.6)] hover:scale-105 inline-block"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-stone-50 rounded-3xl p-10 border border-stone-100 shadow-lg">
                                <h3 className="text-2xl font-serif italic text-stone-900 mb-8">Quick Contact</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-stone-500 mb-1 uppercase tracking-wider font-bold">Call Us</div>
                                            <a href="tel:+919999988888" className="text-stone-900 font-bold hover:text-[#d4af37] transition-colors block">+91-99999 88888</a>
                                            <a href="tel:+917777788888" className="text-stone-900 font-bold hover:text-[#d4af37] transition-colors block">+91-77777 88888</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-stone-500 mb-1 uppercase tracking-wider font-bold">Email Us</div>
                                            <a href="mailto:info@thekaveris.com" className="text-stone-900 font-bold hover:text-[#d4af37] transition-colors block">info@thekaveris.com</a>
                                            <a href="mailto:support@thekaveris.com" className="text-stone-900 font-bold hover:text-[#d4af37] transition-colors block">support@thekaveris.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-stone-500 mb-1 uppercase tracking-wider font-bold">Business Hours</div>
                                            <div className="text-stone-900 font-bold">Mon - Sat</div>
                                            <div className="text-stone-600">9:00 AM - 9:00 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="py-12 px-4 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-[#d4af37] text-[11px] font-bold tracking-[0.6em] uppercase mb-6">OUR LOCATIONS</p>
                        <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6">
                            Visit Us in Ranchi
                        </h2>
                    </div>

                    {/* Location Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {locations.map((location) => (
                            <button
                                key={location.id}
                                onClick={() => setSelectedLocation(location.id)}
                                className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 ${selectedLocation === location.id
                                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white shadow-lg scale-105'
                                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                                    }`}
                            >
                                {location.name}
                            </button>
                        ))}
                    </div>

                    {/* Selected Location */}
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className={`transition-all duration-500 ${selectedLocation === location.id ? 'block' : 'hidden'
                                }`}
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={location.image}
                                        alt={location.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-4xl font-serif italic text-stone-900">{location.name}</h3>
                                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#f9e29c] rounded-full" />

                                    <div className="space-y-4 text-lg">
                                        <div>
                                            <div className="text-sm text-stone-500 mb-1 uppercase tracking-wider font-bold">Address</div>
                                            <div className="text-stone-900 font-medium">{location.address}</div>
                                            <div className="text-stone-600">{location.city}</div>
                                        </div>

                                        <div>
                                            <div className="text-sm text-stone-500 mb-1 uppercase tracking-wider font-bold">Phone</div>
                                            {location.phones.map((phone, idx) => (
                                                <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-stone-900 font-bold hover:text-[#d4af37] transition-colors">
                                                    {phone}
                                                </a>
                                            ))}
                                        </div>

                                        <div>
                                            <div className="text-sm text-stone-500 mb-1 uppercase tracking-wider font-bold">Hours</div>
                                            <div className="text-stone-900 font-bold">{location.timing}</div>
                                        </div>

                                        <div>
                                            <div className="text-sm text-stone-500 mb-1 uppercase tracking-wider font-bold">Email</div>
                                            <a href={`mailto:${location.email}`} className="text-stone-900 font-bold hover:text-[#d4af37] transition-colors">
                                                {location.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <Link
                                            href={`/${location.id}`}
                                            className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center"
                                        >
                                            Visit Page
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Full Width Map Section */}
            <section className="w-full h-[500px] bg-stone-200">
                {selectedLocationData && (
                    <iframe
                        src={selectedLocationData.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${selectedLocationData.name}`}
                    />
                )}
            </section>

        </div>
    );
}
