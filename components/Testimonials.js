'use client';

const TestimonialsSection = () => {
    const testimonials1 = [
        {
            name: "Rajesh Kumar",
            role: "Regular Customer",
            initial: "R",
            rating: 5,
            quote: "Exceptional food quality and service! The Dal Kaveri Special is absolutely divine."
        },
        {
            name: "Amit Verma",
            role: "Business Professional",
            initial: "A",
            rating: 5,
            quote: "Been coming here for over 10 years. Consistency in taste and quality is remarkable."
        },
        {
            name: "Vikram Singh",
            role: "Food Blogger",
            initial: "V",
            rating: 5,
            quote: "A landmark restaurant in Ranchi! The Paneer Tikka Angara is a must-try."
        }
    ];

    const testimonials2 = [
        {
            name: "Priya Sharma",
            role: "Food Enthusiast",
            initial: "P",
            rating: 5,
            quote: "The ambiance is perfect for family gatherings. Their Maharaja Thali is worth every penny!"
        },
        {
            name: "Sneha Patel",
            role: "Homemaker",
            initial: "S",
            rating: 5,
            quote: "Their sweets and bakery items are fresh and delicious. Perfect for celebrations!"
        },
        {
            name: "Meera Joshi",
            role: "Teacher",
            initial: "M",
            rating: 5,
            quote: "Authentic vegetarian cuisine with a modern touch. The staff is very courteous."
        }
    ];

    const diamondImages = [
        { src: "/assets/Kanke/5.png", alt: "Restaurant Interior", cutClass: "kv-cut-top-left" },
        { src: "/assets/Kanke/6.png", alt: "Dining Experience", cutClass: "kv-cut-top-right" },
        { src: "/assets/Kanke/7.png", alt: "Restaurant Ambiance", cutClass: "kv-cut-middle-left" },
        { src: "/assets/Kanke/8.png", alt: "Fine Dining", cutClass: "kv-cut-middle-right" },
        { src: "/assets/Kanke/9.png", alt: "Kaveri Experience", cutClass: "kv-cut-bottom-left" },
        { src: "/assets/Kanke/kanke-3.png", alt: "Elegant Dining", cutClass: "kv-cut-bottom-right" }
    ];

    return (
        <section className="kv-testimonials-section">
            {/* Golden honeycomb pattern overlay */}
            <div
                className="kv-honeycomb-overlay"
                style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'87\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cdefs%3E%3Cpattern id=\\'honeycomb\\' x=\\'0\\' y=\\'0\\' width=\\'100\\' height=\\'87\\' patternUnits=\\'userSpaceOnUse\\'%3E%3Cpolygon points=\\'50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'0.5\\' opacity=\\'0.4\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'1.5\\' fill=\\'%23f4d03f\\' opacity=\\'0.6\\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\\'100\\' height=\\'87\\' fill=\\'url(%23honeycomb)\\'/%3E%3C/svg%3E')",
                    backgroundSize: '100px 87px'
                }}
            />

            <div className="kv-testimonials-container">
                {/* Section Header */}
                <div className="kv-testimonials-header">
                    <span className="kv-testimonials-badge">What Our Guests Say</span>
                    <h2 className="kv-testimonials-title">
                        Stories of <span className="kv-testimonials-highlight">Delight</span>
                    </h2>
                </div>

                <div className="kv-testimonials-grid">
                    {/* Left: Diamond Cut Image Grid */}
                    <div className="kv-diamond-grid">
                        {diamondImages.map((img, index) => (
                            <div key={index} className={`kv-diamond-card ${img.cutClass}`}>
                                <img src={img.src} alt={img.alt} />
                            </div>
                        ))}
                    </div>

                    {/* Right: Dual Column Scrolling Testimonials */}
                    <div className="kv-scroll-container">
                        {/* Column 1 - Scrolling Up */}
                        <div className="kv-scroll-column kv-scroll-up">
                            <div className="kv-scroll-track">
                                {[...testimonials1, ...testimonials1].map((t, index) => (
                                    <div key={index} className="kv-tcard">
                                        <div className="kv-tcard-header">
                                            <div className="kv-tcard-avatar">{t.initial}</div>
                                            <div className="kv-tcard-info">
                                                <h4 className="kv-tcard-name">{t.name}</h4>
                                                <p className="kv-tcard-role">{t.role}</p>
                                            </div>
                                            <div className="kv-tcard-stars">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="kv-star" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="kv-tcard-quote">"{t.quote}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Column 2 - Scrolling Down */}
                        <div className="kv-scroll-column kv-scroll-down">
                            <div className="kv-scroll-track">
                                {[...testimonials2, ...testimonials2].map((t, index) => (
                                    <div key={index} className="kv-tcard">
                                        <div className="kv-tcard-header">
                                            <div className="kv-tcard-avatar">{t.initial}</div>
                                            <div className="kv-tcard-info">
                                                <h4 className="kv-tcard-name">{t.name}</h4>
                                                <p className="kv-tcard-role">{t.role}</p>
                                            </div>
                                            <div className="kv-tcard-stars">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="kv-star" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="kv-tcard-quote">"{t.quote}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .kv-testimonials-section {
                    padding: 4rem 0;
                    background: linear-gradient(135deg, #fef3c7, #fef9e7, #fef3c7);
                    position: relative;
                    overflow: hidden;
                }

                .kv-honeycomb-overlay {
                    position: absolute;
                    inset: 0;
                    opacity: 0.6;
                    pointer-events: none;
                    mix-blend-mode: multiply;
                }

                .kv-testimonials-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    position: relative;
                    z-index: 10;
                }

                .kv-testimonials-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .kv-testimonials-badge {
                    color: #b45309;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    font-size: 0.75rem;
                }

                .kv-testimonials-title {
                    font-size: 2.5rem;
                    font-family: serif;
                    font-style: italic;
                    color: #1c1917;
                    margin-top: 1rem;
                }

                @media (min-width: 768px) {
                    .kv-testimonials-title {
                        font-size: 3rem;
                    }
                }

                .kv-testimonials-highlight {
                    background: linear-gradient(135deg, #d4af37, #f9e29c, #d4af37);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .kv-testimonials-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    align-items: center;
                }

                @media (min-width: 1024px) {
                    .kv-testimonials-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                /* Diamond Grid */
                .kv-diamond-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(3, 1fr);
                    gap: 1.5rem;
                    max-width: 550px;
                    perspective: 1000px;
                }

                @media (max-width: 1024px) {
                    .kv-diamond-grid {
                        max-width: 450px;
                        margin: 0 auto 3rem;
                    }
                }

                @media (max-width: 768px) {
                    .kv-diamond-grid {
                        max-width: 350px;
                        gap: 1rem;
                    }
                }

                .kv-diamond-card {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 4/3;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    transform-style: preserve-3d;
                }

                .kv-diamond-card:nth-child(odd) {
                    transform: rotateY(-10deg);
                }

                .kv-diamond-card:nth-child(even) {
                    transform: rotateY(10deg);
                }

                .kv-diamond-card:nth-child(odd):hover {
                    transform: rotateY(-10deg) translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5);
                }

                .kv-diamond-card:nth-child(even):hover {
                    transform: rotateY(10deg) translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5);
                }

                .kv-diamond-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .kv-diamond-card:hover img {
                    transform: scale(1.1);
                }

                .kv-cut-top-left {
                    clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%);
                }

                .kv-cut-top-right {
                    clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%);
                }

                .kv-cut-middle-left, .kv-cut-middle-right {
                    clip-path: none;
                }

                .kv-cut-bottom-left {
                    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 85%);
                }

                .kv-cut-bottom-right {
                    clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%);
                }

                /* Scroll Container */
                .kv-scroll-container {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                    height: 600px;
                    overflow: hidden;
                }

                @media (max-width: 1024px) {
                    .kv-scroll-container {
                        height: 500px;
                    }
                }

                @media (max-width: 768px) {
                    .kv-scroll-container {
                        grid-template-columns: 1fr;
                        height: 400px;
                    }
                    
                    .kv-scroll-down {
                        display: none;
                    }
                }

                .kv-scroll-column {
                    overflow: hidden;
                    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
                    mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
                }

                .kv-scroll-track {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .kv-scroll-up .kv-scroll-track {
                    animation: kvScrollUp 25s linear infinite;
                }

                .kv-scroll-down .kv-scroll-track {
                    animation: kvScrollDown 25s linear infinite;
                }

                @keyframes kvScrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }

                @keyframes kvScrollDown {
                    0% { transform: translateY(-50%); }
                    100% { transform: translateY(0); }
                }

                /* Testimonial Card - GOLDEN GLASS */
                .kv-tcard {
                    background: rgba(251, 191, 36, 0.25);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(251, 191, 36, 0.4);
                    border-radius: 20px;
                    padding: 1.5rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    flex-shrink: 0;
                }

                /* WHITE ON HOVER */
                .kv-tcard:hover {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(30px);
                    -webkit-backdrop-filter: blur(30px);
                    border: 1px solid rgba(212, 175, 55, 0.6);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    transform: translateY(-6px);
                }

                /* Pause scroll on hover */
                .kv-tcard:hover ~ .kv-scroll-track,
                .kv-scroll-column:has(.kv-tcard:hover) .kv-scroll-track {
                    animation-play-state: paused;
                }

                .kv-tcard-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .kv-tcard-avatar {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #fbbf24, #d97706);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    font-size: 1.125rem;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                }

                .kv-tcard:hover .kv-tcard-avatar {
                    background: linear-gradient(135deg, #d4af37, #f9e29c, #d4af37);
                    color: white;
                }

                .kv-tcard-info {
                    flex: 1;
                }

                .kv-tcard-name {
                    font-weight: bold;
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    transition: all 0.3s ease;
                }

                .kv-tcard:hover .kv-tcard-name {
                    background: #1c1917;
                    -webkit-background-clip: text;
                    background-clip: text;
                }

                .kv-tcard-role {
                    font-size: 0.75rem;
                    color: #78716c;
                }

                .kv-tcard-stars {
                    display: flex;
                    gap: 0.25rem;
                }

                .kv-star {
                    width: 1rem;
                    height: 1rem;
                    color: #f59e0b;
                    transition: color 0.3s ease;
                }

                .kv-tcard:hover .kv-star {
                    color: #d4af37;
                }

                .kv-tcard-quote {
                    color: #57534e;
                    line-height: 1.625;
                    font-style: italic;
                    font-size: 0.875rem;
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;
