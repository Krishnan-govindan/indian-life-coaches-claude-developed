import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import faqs from '../data/faq';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';

function FAQItem({ faq, isOpen, onToggle }) {
  const answerId = `faq-answer-${faq.id}`;
  const buttonId = `faq-btn-${faq.id}`;

  return (
    <div className="bg-white rounded-xl mb-3 shadow-sm overflow-hidden">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex justify-between items-center w-full py-5 px-6 text-left"
      >
        <span className="font-semibold text-[#1E3A5F] text-lg pr-4">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className="text-[#E8A838] shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 text-[#64748B] leading-relaxed border-t border-gray-100 pt-3">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#FAFBFC] py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="We Understand Your Concerns — Here Are the Answers to Help You Decide with Confidence"
        />

        <AnimatedSection>
          <div role="list">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>

          <p className="mt-10 text-center text-[#64748B]">
            Got Questions? WhatsApp us{' '}
            <a
              href="https://wa.me/14254424167"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us at +1 425 442 4167 (opens in new tab)"
              className="text-[#E8A838] font-semibold hover:underline"
            >
              +1(425)442-4167
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default FAQSection;
