import promises from '../data/promises';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

function PromiseCard({ item, delay }) {
  const Icon = item.icon;

  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 h-full">
        <Icon size={28} color="#E8A838" strokeWidth={1.75} className="mb-3" />
        <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-2">
          {item.title}
        </h3>
        <p className="text-white/70 text-sm">
          {item.description}
        </p>
      </div>
    </AnimatedSection>
  );
}

function PromiseSection() {
  return (
    <section
      id="promise"
      className="bg-gradient-to-br from-[#1E3A5F] via-[#2E5F8A] to-[#1E3A5F] py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Promise: We'll Help You Stay on Track, Stay Committed, and Follow Through"
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((item, index) => (
            <PromiseCard
              key={item.id}
              item={item}
              delay={Math.min(index * 0.08, 0.4)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg" href="#booking">
            Reserve Your Strategy Session →
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PromiseSection;
