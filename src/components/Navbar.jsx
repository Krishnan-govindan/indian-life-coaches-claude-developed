import { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './ui/Button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: 'https://indianlifecoaches.com/blog', external: true },
];

function smoothScroll(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, link) => {
    if (link.external) return; // let browser handle
    e.preventDefault();
    smoothScroll(link.href);
    setMenuOpen(false);
  };

  const textColor = isScrolled ? 'text-[#1E3A5F]' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 lg:px-6 lg:py-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); smoothScroll('#home'); }}
            className={`flex items-center gap-2 font-bold text-xl ${textColor} transition-colors duration-300`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <Compass size={22} strokeWidth={2} aria-hidden="true" />
            <span>Indian Life Coaches</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.external ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium hover:opacity-75 transition-opacity duration-200 ${textColor}`}
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-sm font-medium hover:opacity-75 transition-opacity duration-200 ${textColor}`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="primary" size="sm" href="#booking">
              Book Free Call
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden ${textColor} transition-colors duration-300`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ backgroundColor: 'rgba(30, 58, 95, 0.95)' }}
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="text-2xl font-medium text-white hover:text-[#E8A838] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-2xl font-medium text-white hover:text-[#E8A838] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>

            <Button variant="primary" size="lg" href="#booking">
              Book Free Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
