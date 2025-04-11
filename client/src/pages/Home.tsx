import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PromotionBanner from "@/components/PromotionBanner";
import GallerySection from "@/components/GallerySection";
import SignatureOfferings from "@/components/SignatureOfferings";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PromotionBanner />
        <GallerySection />
        <SignatureOfferings />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
