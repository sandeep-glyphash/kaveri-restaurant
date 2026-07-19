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

export default function KankeRoadPage() {
    const { openBooking } = useModal();

    const sliderImages = [
        '/assets/Kanke/kanke-1.png',
        '/assets/Kanke/kanke-2.png',
        '/assets/Kanke/kanke-3.png',
        '/assets/Kanke/kanke-4.png'
    ];

    return (
        <main>
            <Hero
                slides={sliderImages}
                subtitle="Pure Vegetarian Fine Dining"
                title={<span>Kaveri<br /><span className="italic font-light bg-gradient-to-br from-[#38bdf8] via-[#7dd3fc] to-[#38bdf8] bg-clip-text text-transparent">Kanke Road</span></span>}
                description="Bright & Contemporary dining experience with modern elegance."
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
