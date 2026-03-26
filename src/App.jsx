import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import PromiseSection from './components/PromiseSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import GuaranteeBanner from './components/GuaranteeBanner';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div>
      {/* Skip to main content — visually hidden, appears on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[#1E3A5F] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-xl focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <ServicesGrid />
        <PromiseSection />
        <WhyChooseUs />
        <Testimonials />
        <GuaranteeBanner />
        <BookingSection />
        <FAQSection />
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
