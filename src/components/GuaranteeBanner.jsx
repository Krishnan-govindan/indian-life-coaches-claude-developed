import { ShieldCheck } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import Button from './ui/Button';

function GuaranteeBanner() {
  return (
    <section
      id="guarantee"
      className="bg-gradient-to-r from-[#E8A838] via-[#F4C76B] to-[#E8A838] py-16 sm:py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <ShieldCheck size={64} color="#1E3A5F" className="mx-auto mb-6" />

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3A5F] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            If you're not seeing the progress in your life after 6 sessions, get a 100% refund — no questions asked!
          </h2>

          <p className="text-lg text-[#1E3A5F]/70 mb-8">
            We're that confident in our coaches. Zero risk for you.
          </p>

          <Button variant="secondary" size="lg" href="#booking">
            Start Your Transformation →
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default GuaranteeBanner;
