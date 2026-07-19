'use client';
import Hero from '../../components/Hero';
import ChefSpecial from '../../components/ChefSpecial';
import OffersCarousel from '../../components/OffersCarousel';
import CategoriesMenu from '../../components/CategoriesMenu';
import SignatureDish from '../../components/SignatureDish';
import ZeroProof from '../../components/ZeroProof';
import StatsCounter from '../../components/StatsCounter';
import Heritage from '../../components/Heritage';
import CraftOfSpices from '../../components/CraftOfSpices';
import Gallery from '../../components/Gallery';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import VisitUs from '../../components/VisitUs';
import BookingForm from '../../components/BookingForm';
import BespokeEvents from '../../components/BespokeEvents';
import { useModal } from '../../context/ModalContext';

export default function RatuRoadPage() {
    const { openBooking } = useModal();

    const sliderImages = [
        '/assets/Ratu Road/ratu-1.png',
        '/assets/Ratu Road/ratu-2.png',
        '/assets/Ratu Road/ratu-3.png',
        '/assets/Ratu Road/ratu-4.png'
    ];

    return (
        <main>
            <Hero
                slides={sliderImages}
                subtitle="Pure Vegetarian Fine Dining"
                title={<span>Kaveri<br /><span className="italic font-light bg-gradient-to-br from-[#10b981] via-[#6ee7b7] to-[#10b981] bg-clip-text text-transparent">Ratu Road</span></span>}
                description="Relaxed & Cozy family dining experience."
                onBookingClick={openBooking}
            />

            {/* Chef's Special Spotlight */}
            <ChefSpecial />

            {/* Special Offers */}
            <OffersCarousel />

            {/* Categories & Menu Grid */}
            <CategoriesMenu />

            {/* Signature Dish Showcase */}
            <SignatureDish />

            {/* Sweet Indulgence - Zero Proof */}
            <ZeroProof />

            {/* Animated Stats Counter */}
            <StatsCounter />

            {/* Heritage Section */}
            <Heritage />

            {/* The Craft of Spices */}
            <CraftOfSpices />

            {/* Photo Gallery */}
            <Gallery />

            {/* Customer Testimonials */}
            <Testimonials />

            {/* FAQ Section */}
            <FAQ />

            {/* Visit Us - Location & Contact */}
            <VisitUs />

            {/* Booking Form */}
            <BookingForm />

            {/* Bespoke Events */}
            <BespokeEvents />
        </main>
    );
}
