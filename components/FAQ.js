'use client';
import { useState } from 'react';

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "Pure Veg Commitment?",
            answer: "Absolutely. Kaveri is a strictly 100% pure vegetarian establishment. We do not allow any non-vegetarian ingredients in our kitchen, ensuring zero cross-contamination and honoring the sanctity of Sattvic preparation."
        },
        {
            id: 2,
            question: "Parking Facilities?",
            answer: "We understand the busy streets of Ranchi. That's why we offer complimentary valet parking for all our dining guests at the Ashok Nagar location, ensuring your experience is seamless from arrival to departure."
        },
        {
            id: 3,
            question: "Private Dining & Events?",
            answer: "Yes, our Royal Suites are available for reservation. These soundproof, climate-controlled spaces are perfect for intimate family gatherings (up to 20 guests) or corporate board meetings requiring absolute privacy to discuss matters over a meal."
        },
        {
            id: 4,
            question: "Home Delivery & Catering?",
            answer: "Enjoy Kaveri signatures at home via Swiggy and Zomato, or order directly through our website for exclusive priority delivery. For large events (50+ guests), our \"Royal Banquet\" outdoor catering service brings the full Kaveri experience to your venue."
        }
    ];

    const toggleFAQ = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <section className="py-16 bg-white relative overflow-hidden" id="faq">
            {/* Background Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'url(/assets/bg-pattern-faq.jpg)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '300px 300px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left: Visual Collage (5 cols) */}
                    <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
                        {/* Main Image (Interior/Ambiance) */}
                        <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl z-10 transform hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src="/assets/Kanke/kanke-1.png"
                                alt="Kaveri Restaurant Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Secondary Image (Food Detail) */}
                        <div className="absolute bottom-10 right-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 transform hover:scale-[1.02] transition-transform duration-700 delay-100">
                            <img
                                src="/assets/Ashok Nagar/ashok-nagar-3.png"
                                alt="Kaveri Delicacies"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Gold Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-amber-500/20 rounded-full z-0" />
                    </div>

                    {/* Right: Accordion (7 cols) */}
                    <div className="lg:col-span-7">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-[10px] mb-2 block">
                            Good to Know
                        </span>
                        <h3 className="text-4xl font-serif mb-10 italic bg-gradient-to-br from-[#d4af37] via-[#f9e29c] to-[#d4af37] bg-clip-text text-transparent">
                            Frequently Asked
                        </h3>

                        <div className="space-y-0 border-t border-stone-200">
                            {faqs.map((faq) => (
                                <div key={faq.id} className="group border-b border-stone-200">
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className="text-xl font-serif text-stone-800 group-hover:text-amber-600 transition-colors">
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`text-2xl text-amber-500 font-light transition-transform duration-300 ${openFaq === faq.id ? 'rotate-45' : ''
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === faq.id ? 'max-h-96' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="pb-6 text-stone-500 font-light leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
