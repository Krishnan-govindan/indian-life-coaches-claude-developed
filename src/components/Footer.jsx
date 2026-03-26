function smoothScroll(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book a Call', href: '#booking' },
];

const serviceLinks = [
  'Career Coaching',
  'Side-Hustle Coaching',
  'Executive Leadership',
  'Holistic Life Coaching',
  'Divorce Coaching',
  'Healing & Manifestation',
];

function Footer() {
  return (
    <footer id="footer" className="bg-[#1E3A5F] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div>
            <h2
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Indian Life Coaches
            </h2>
            <p className="text-white/60 text-sm mb-4">
              #1 NRI Life Coaching Platform
            </p>
            <a
              href="https://wa.me/14254424167"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#E8A838] transition-colors duration-200 text-sm"
            >
              📞 +1(425) 442-4167
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScroll(link.href);
                    }}
                    className="text-white/60 hover:text-[#E8A838] transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((name) => (
                <li key={name} className="text-white/60 text-sm">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@indianlifecoaches.com"
                className="text-white/60 hover:text-[#E8A838] transition-colors duration-200 text-sm"
              >
                info@indianlifecoaches.com
              </a>
              <a
                href="https://wa.me/14254424167"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#E8A838] transition-colors duration-200 text-sm"
              >
                Chat on WhatsApp
              </a>
              <p className="text-white/40 text-sm mt-4">
                Got Questions? We're here to help!
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="h-px bg-white/20 my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
          <p className="text-white/40 text-sm">
            Copyright © 2025. All rights reserved. Indian Life Coaches
          </p>
          <p className="text-white/40 text-sm">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            {' | '}
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
