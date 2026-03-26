import services from '../data/services';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';

function ServiceCard({ service, delay }) {
  const Icon = service.icon;

  const handleBookNow = (e) => {
    e.preventDefault();
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatedSection delay={delay}>
      <Card className="group h-full flex flex-col relative overflow-hidden">
        {/* Gold top-border on hover */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8A838] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-4 shrink-0">
          <Icon size={32} color="#E8A838" strokeWidth={1.75} />
        </div>

        {/* Name */}
        <h3 className="font-semibold text-lg text-[#1E3A5F] mb-2">
          {service.name}
        </h3>

        {/* Tagline */}
        <p className="italic text-[#64748B] text-sm mb-4 flex-1">
          {service.tagline}
        </p>

        {/* Optional note */}
        {service.note && (
          <p className="text-xs text-[#94A3B8] mb-4">
            ({service.note})
          </p>
        )}

        {/* Book Now link */}
        <a
          href="#booking"
          onClick={handleBookNow}
          className="text-[#E8A838] font-semibold text-sm hover:underline mt-auto"
        >
          Book Now →
        </a>
      </Card>
    </AnimatedSection>
  );
}

function ServicesGrid() {
  return (
    <section id="services" className="bg-[#FAFBFC] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Type of Coaching Are You Looking For?"
          subtitle="Expert Indian coaches who understand your culture, values, and unique challenges as an NRI"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={Math.min(index * 0.05, 0.4)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
