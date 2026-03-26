import AnimatedSection from './AnimatedSection';

function SectionHeading({ title, subtitle, light = false }) {
  return (
    <AnimatedSection className="mb-12 text-center">
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          light ? 'text-white' : 'text-[#1E3A5F]'
        }`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl mx-auto ${
            light ? 'text-white/70' : 'text-[#64748B]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}

export default SectionHeading;
