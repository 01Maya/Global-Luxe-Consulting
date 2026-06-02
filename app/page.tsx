import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import PresenceSection from '@/components/PresenceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Luxury animated pastel background */}
      <div className="fixed inset-0 -z-10 luxury-bg-gradient" />
      
      {/* Additional floating backdrop blurs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pastel-blue/30 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-pastel-purple/30 to-transparent rounded-full blur-3xl animate-float-slower" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gradient-to-br from-pastel-pink/30 to-transparent rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />
      <HeroSection />
      <VisionMissionSection />
      <AboutUsSection />
      <ServicesSection />
      <PresenceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
