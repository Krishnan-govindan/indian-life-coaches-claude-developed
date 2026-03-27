import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Button from './ui/Button';

const fadeLeft = (delay) => ({
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const fadeRight = (delay) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const fadePop = (delay) => ({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'backOut', delay },
});

// Floating decorative shapes config
const shapes = [
  {
    style: { width: 320, height: 320, top: '-80px', left: '-80px' },
    color: '#E8A838',
    opacity: 0.1,
    animate: { y: [0, 24, 0], x: [0, 12, 0] },
    duration: 8,
  },
  {
    style: { width: 200, height: 200, bottom: '60px', right: '5%' },
    color: '#ffffff',
    opacity: 0.08,
    animate: { y: [0, -20, 0], x: [0, -10, 0] },
    duration: 10,
  },
  {
    style: { width: 100, height: 100, top: '30%', right: '25%' },
    color: '#E8A838',
    opacity: 0.15,
    animate: { y: [0, 16, 0], scale: [1, 1.1, 1] },
    duration: 6,
  },
  {
    style: { width: 50, height: 50, bottom: '25%', left: '15%' },
    color: '#ffffff',
    opacity: 0.2,
    animate: { y: [0, -12, 0], x: [0, 8, 0] },
    duration: 7,
  },
];

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1E3A5F] via-[#2E5F8A] to-[#1E3A5F]"
    >
      {/* Floating decorative shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            ...shape.style,
            backgroundColor: shape.color,
            opacity: shape.opacity,
          }}
          animate={shape.animate}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.div {...fadeLeft(0.3)} className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-amber-300 text-sm font-medium px-4 py-2 rounded-full border border-white/20">
                🏆 #1 NRI Life Coaching Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeLeft(0.4)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              #1 Online Indian Life Coaching Platform for NRIs
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeLeft(0.5)}
              className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed"
            >
              Our Mission is to Help NRIs achieve Financial Freedom, Unleash their
              limitless potential, Live a happy life beyond Dreams. Complete holistic
              lifestyle transformation!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button variant="primary" size="lg" href="#booking">
                Book a Free Discovery Call →
              </Button>
              <Button variant="outline" size="lg" href="#services">
                Learn More ↓
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              {...fadeUp(0.7)}
              className="flex flex-wrap gap-x-6 gap-y-2 mt-8"
            >
              {[
                '✅ 100% Money-Back Guarantee',
                '✅ Free 30-Min Discovery Session',
                '✅ Culturally Aligned Coaches',
              ].map((item) => (
                <span key={item} className="text-white/60 text-sm">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <motion.div
            {...fadeRight(0.5)}
            className="relative mt-14 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-visible border-2 border-[#E8A838]/30">
              {/* Hero Image */}
              <img
                src="https://assets.cdn.filesafe.space/m9jCzEyKqM4xlMWTjcgS/media/681b9a45d5b18d7300b6410e.webp"
                alt="Indian Life Coach helping NRI clients achieve their goals"
                className="w-full rounded-2xl object-cover"
                style={{ maxHeight: '500px', objectPosition: 'center top' }}
              />

              {/* Floating stats badge */}
              <motion.div
                {...fadePop(0.8)}
                className="absolute bottom-4 -left-4 bg-white text-[#1E3A5F] px-4 py-3 rounded-xl shadow-xl flex items-center gap-2"
              >
                <Users size={18} className="text-[#1E3A5F]" />
                <span className="font-semibold text-sm whitespace-nowrap">
                  500+ NRIs Coached
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
