import { Target, Telescope, Map } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';

const steps = [
  {
    id: 1,
    icon: Target,
    title: "Explore what's holding you back",
    description: 'Uncover internal blocks and limiting patterns that are keeping you stuck.',
  },
  {
    id: 2,
    icon: Telescope,
    title: 'Envision the life you want',
    description:
      'Clarify your true desires and direction — not what society expects, but what feels deeply aligned for you.',
  },
  {
    id: 3,
    icon: Map,
    title: 'Identify the next steps',
    description: 'Build a simple roadmap to move you forward with clarity and confidence.',
  },
];

function BookingSection() {
  return (
    <section id="booking" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ready to Unlock Your Potential? Book Your Free Discovery Call"
          subtitle="This free 30-minute session is a powerful space to pause and reflect on your journey."
        />

        <div className="lg:grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN — Timeline */}
          <AnimatedSection delay={0.1}>
            <div>
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id}>
                    <div className="flex gap-4">
                      {/* Icon circle */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-amber-50 border-2 border-[#E8A838] flex items-center justify-center shrink-0">
                          <Icon size={20} color="#E8A838" strokeWidth={1.75} />
                        </div>
                        {/* Connector line between steps */}
                        {index < steps.length - 1 && (
                          <div className="w-0.5 h-8 bg-[#E8A838]/30 mt-1" />
                        )}
                      </div>

                      {/* Text */}
                      <div className="pb-8">
                        <h3 className="font-semibold text-lg text-[#1E3A5F]">
                          {step.title}
                        </h3>
                        <p className="text-[#64748B] text-sm mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Confirmation note */}
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800">
                This is a relaxed, no-pressure conversation. ✅ You'll receive a confirmation email with session details and your Zoom link.
              </div>

              {/* WhatsApp fallback */}
              <p className="mt-4 text-sm text-[#64748B]">
                Having trouble booking?{' '}
                <a
                  href="https://wa.me/14254424167?text=Hi%20Team%2C%20I%20need%20help%20booking%20a%20discovery%20call."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline"
                >
                  WhatsApp us
                </a>{' '}
                at +1(425)442-4167
              </p>
            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN — Calendly embed */}
          <AnimatedSection delay={0.2}>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <iframe
                  src="YOUR_CALENDLY_LINK"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  loading="lazy"
                  title="Book a Discovery Call"
                />
              </div>
              {/* REPLACE YOUR_CALENDLY_LINK ABOVE WITH YOUR ACTUAL CALENDLY SCHEDULING URL */}
              <p className="text-xs text-red-400 italic mt-2">
                Replace YOUR_CALENDLY_LINK in the code with your actual Calendly URL
              </p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

export default BookingSection;
