'use client';

const VisitUs = () => {
    return (
        <section className="py-10 bg-gradient-to-b from-amber-50 to-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div>
                        <h4 className="text-[#d4af37] font-black uppercase text-[10px] tracking-widest mb-4">Location</h4>
                        <p className="text-stone-600 text-lg font-light">Freds Palace, Opposite Road No. 3 (Gate No. 3)</p>
                        <p className="text-stone-600 text-lg font-light">Ashok Nagar, Ranchi - 834002</p>
                        <div className="mt-4">
                            <p className="text-stone-800 font-bold">Reservations:</p>
                            <p className="text-[#d4af37] text-lg">+91-84092 11101 / +91-84097 11101</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[#d4af37] font-black uppercase text-[10px] tracking-widest mb-4">Dining Hours</h4>
                        <p className="text-stone-600 text-lg font-light">Mon - Sun</p>
                        <p className="text-stone-600 text-lg font-light">11:00 AM - 11:00 PM</p>
                    </div>
                    <div>
                        <h4 className="text-[#d4af37] font-black uppercase text-[10px] tracking-widest mb-4">Get In Touch</h4>
                        <p className="text-stone-600 text-lg font-light">+91 98765 43210</p>
                        <p className="text-stone-600 text-lg font-light">reservations@kaveri.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisitUs;
