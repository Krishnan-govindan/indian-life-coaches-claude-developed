import { Star } from 'lucide-react';
import testimonials from '../data/testimonials';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';

function TestimonialCard({ testimonial, delay }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white rounded-2xl p-8 shadow-lg relative h-full flex flex-col">
        {/* Decorative quote mark */}
        <span className="absolute top-4 right-6 text-5xl text-[#E8A838] opacity-20 leading-none select-none">
          ❝
        </span>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} fill="#E8A838" color="#E8A838" />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">
          {testimonial.title}
        </h3>

        {/* Quote */}
        <p className="text-[#64748B] italic leading-relaxed mb-6 flex-1">
          {testimonial.quote}
        </p>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-4" />

        {/* Author row */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white font-bold text-sm shrink-0">
            {testimonial.initials}
          </div>
          <div>
            <p className="font-semibold text-[#1A1A2E]">{testimonial.name}</p>
            <p className="text-sm text-[#94A3B8]">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#FAFBFC] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Others Are Saying"
          subtitle="Real results from real NRIs who transformed their lives"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
