# Indian Life Coaches — Website

The #1 online Indian life coaching platform for NRIs. Built with React + Vite + Tailwind CSS + Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

## How to Customize

### Replace the Calendly Link
1. Open `src/components/BookingSection.jsx`
2. Find `YOUR_CALENDLY_LINK` in the iframe `src`
3. Replace it with your actual Calendly scheduling page URL

   Example:
   ```
   https://calendly.com/your-username/discovery-call
   ```

### Replace the Hero Image
1. Add your image to `public/images/` (use `.webp` format for best performance)
2. Open `src/components/HeroSection.jsx`
3. Replace the placeholder `div` with an `<img>` tag pointing to your image

   Example:
   ```jsx
   <img
     src="/images/hero.webp"
     alt="Life coaching session"
     className="w-full rounded-2xl object-cover"
   />
   ```

### Add Social Media Links
1. Open `src/components/Footer.jsx`
2. Find the "Connect" column
3. Add your social media URLs alongside the existing email and WhatsApp links

### Update WhatsApp Number
If your WhatsApp number changes, update it in these 4 files:
1. `src/components/WhatsAppWidget.jsx` — the floating widget link
2. `src/components/BookingSection.jsx` — the booking fallback link
3. `src/components/FAQSection.jsx` — the contact link at the bottom
4. `src/components/Footer.jsx` — the phone number in the brand column

## Deployment to GitHub Pages

```bash
npm run build
npm run deploy
```

Then in your GitHub repo:
**Settings → Pages → Source → select `gh-pages` branch**

## Custom Domain Setup

1. The `CNAME` file is already in `public/` with `indianlifecoaches.com`
2. In your domain registrar, add these **DNS A records** pointing to GitHub Pages:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Add a **CNAME record**: `www` → `your-github-username.github.io`
4. In GitHub Pages settings, enable **"Enforce HTTPS"**

DNS changes can take up to 48 hours to propagate.

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── AnimatedSection.jsx   # Scroll-triggered fade-in wrapper
│   │   ├── Button.jsx            # Reusable button (primary/secondary/outline)
│   │   ├── Card.jsx              # Reusable card with hover effects
│   │   └── SectionHeading.jsx    # Section title + subtitle
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── ServicesGrid.jsx
│   ├── PromiseSection.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   ├── GuaranteeBanner.jsx
│   ├── BookingSection.jsx
│   ├── FAQSection.jsx
│   ├── Footer.jsx
│   └── WhatsAppWidget.jsx
├── data/
│   ├── services.js       # 12 coaching service cards
│   ├── promises.js       # 6 promise/value items
│   ├── testimonials.js   # 3 client testimonials
│   └── faq.js            # 8 FAQ questions
└── index.css             # Tailwind + Google Fonts + CSS variables
```

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 + Vite | UI framework + build tool |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Scroll animations, transitions |
| Lucide React | Icon library |
| gh-pages | GitHub Pages deployment |
