import { Layers, Globe, Users, Heart } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';

const items = [
  {
    id: 1,
    title: 'Holistic Life Transformation',
    icon: Layers,
    description:
      "We don't just coach one area — we transform your entire lifestyle: career, health, relationships, and mindset.",
  },
  {
    id: 2,
    title: 'Online Coaching — Anytime, Anywhere',
    icon: Globe,
    description:
      'Connect with your coach from anywhere in the world via video call. Flexible scheduling across all time zones.',
  },
  {
    id: 3,
    title: 'Lifetime Access to a Private Community',
    icon: Users,
    description:
      'Join an exclusive community of like-minded NRIs on a growth journey. Get support, accountability, and networking for life.',
  },
  {
    id: 4,
    title: 'Coaches Who Understand Your Culture',
    icon: Heart,
    description:
      'Our coaches are Indian and culturally aligned. They understand the unique pressures NRIs face — family expectations, identity, and more.',
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us?"
          subtitle="More Than Coaching — A Complete Holistic Lifestyle Transformation!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#E8A838] h-full">
                  <Icon size={40} color="#E8A838" strokeWidth={1.75} className="mb-4" />
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
