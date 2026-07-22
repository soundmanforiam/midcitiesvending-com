/**
 * ============================================================
 * MID CITIES VENDING — SITE CONTENT
 * ============================================================
 * This is the ONLY file you should need to edit.
 * Everything on the website — headlines, body copy, phone
 * number, email, links, FAQ, service areas — lives here.
 *
 * HOW TO EDIT
 * - Find the text you want to change between the quote marks
 *   " " and type your new text in its place.
 * - Keep the quote marks and commas exactly where they are.
 * - To add a new item to a list (like an FAQ question or a
 *   service area), copy an existing "{ ... }," block in that
 *   list and edit the copy.
 * - To remove an item, delete its whole "{ ... }," block.
 * - Do not edit script.js or index.html — those just display
 *   whatever is written in here.
 * - After editing, save the file, commit it, and push to
 *   GitHub. Cloudflare Pages will publish the update
 *   automatically within a minute or two.
 * ============================================================
 */

window.CONTENT = {

  // Used in the browser tab title and search engine results.
  meta: {
    title: "Cashless Vending Machines in Dallas–Fort Worth | Mid Cities Vending",
    description: "Modern cashless vending machines for DFW offices, warehouses, dealerships, and breakrooms. Tap-to-pay, smart inventory tracking, stocking, service, and maintenance included.",
  },

  business: {
    name: "Mid Cities Vending",
    shortName: "Mid Cities Vending",
    tagline: "Your Partner in Vending Solutions",
    phoneDisplay: "(682) 207-7950",
    phoneHref: "tel:+16822077950",
    email: "contact@midcitiesvending.com",
    facebookUrl: "https://www.facebook.com/profile.php?id=61563038035305&mibextid=LQQJ4d",
    googleReviewsUrl: "https://www.google.com/maps/place/Mid+Cities+Vending/data=!4m2!3m1!1s0x0:0xda1756a30ac419a1",
    // Shown as a small status pill in the header.
    statusLabel: "Available Now",
    // Logo shown in the header. Relative path into the /img folder.
    logo: "./img/logo.png",
    logoAlt: "Mid Cities Vending logo",
  },

  // Top navigation. "href" can be an in-page link like "#about"
  // or a full page link.
  nav: [
    { label: "Home", href: "#top" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Dallas–Fort Worth Smart Vending",
    headline: "Cashless vending, made simple.",
    body: "Mid Cities Vending places, stocks, and services modern smart vending machines for DFW offices, warehouses, dealerships, gyms, and breakrooms. Customers tap, grab, and go — we handle the rest.",
    primaryCta: { label: "Request Free Assessment", href: "#get-started" },
    secondaryCta: { label: "See How It Works", href: "#how-it-works" },
    // Photo shown in the hero. Relative path into the /img folder.
    // Swap the file in /img to update it — no need to touch this path
    // unless you rename the file.
    image: "./img/image_2026-07-03_211948211.png",
    imageAlt: "Mid Cities Vending smart vending machine in a breakroom",
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: "Four taps, zero hassle.",
    body: "Our smart vending machines are cashless, easy to use, and professionally serviced from day one.",
    steps: [
      { code: "A1", title: "Tap or swipe", description: "Customers pay with card or Apple/Google Pay right at the reader — no cash, no exact change." },
      { code: "A2", title: "Door unlocks", description: "The machine confirms payment instantly and the door pops open." },
      { code: "A3", title: "Grab & go", description: "They take what they want and close the door. Checkout is already handled." },
      { code: "A4", title: "We restock remotely", description: "Smart inventory tracking tells us what's low before it runs out, so we restock ahead of demand." },
    ],
  },

  upgrade: {
    eyebrow: "Smart Vending Machines",
    headline: "Modern machines that actually look like an upgrade.",
    body: "Give your employees, customers, and guests a cleaner vending experience without adding work for your team. It's a better fit for modern workplaces than outdated snack and soda machines — especially in offices, dealerships, warehouses, gyms, and busy breakrooms where people want fast, grab-and-go options.",
    // Photo of a machine. Relative path into the /img folder.
    // Swap the file in /img to update it — no need to touch this path
    // unless you rename the file.
    photo: "./img/machine-modern.png",
    photoAlt: "Mid Cities Vending smart vending machine",
  },

  locations: {
    eyebrow: "Locations We Service",
    headline: "Built for busy DFW workplaces.",
    body: "Smart vending works best where employees, customers, or guests need quick access to drinks, snacks, and grab-and-go options. We focus on workplaces with steady foot traffic, breakroom needs, and teams that benefit from fast, convenient service.",
    types: [
      "Auto Dealerships",
      "Employee Breakrooms",
      "Warehouses",
      "Manufacturing Facilities",
      "Offices",
      "Gyms",
      "Schools & Training Centers",
      "Customer Waiting Areas",
    ],
  },

  // Cities linked from "Service Areas" — matches the original site's
  // area pages. Point href at the matching page once it exists, or
  // leave as "#" for now.
  serviceAreas: [
    { label: "Dallas", href: "./areas/dallas.html" },
    { label: "Fort Worth", href: "./areas/fort-worth.html" },
    { label: "Arlington", href: "./areas/arlington.html" },
    { label: "Mansfield", href: "./areas/mansfield.html" },
    { label: "Grand Prairie", href: "./areas/grand-prairie.html" },
    { label: "Irving", href: "./areas/irving.html" },
    { label: "Hurst-Euless-Bedford", href: "./areas/hurst-euless-bedford.html" },
    { label: "Midlothian", href: "./areas/midlothian.html" },
  ],

  features: [
    { code: "", image: "./img/feature-full-service.png", title: "Full Service Vending", description: "We place and fully manage modern cashless vending machines with zero hassle for businesses all across the DFW metroplex." },
    { code: "", image: "./img/feature-custom-mix.png", title: "Custom Product Mix", description: "Your people choose what goes in the machine. We tailor the lineup to your preferences, budget, and dietary needs, and we can adjust anytime." },
    { code: "", image: "./img/feature-support.png", title: "24/7 Support", description: "If something isn't working right, you get quick support. We specialize in servicing busy workplaces and multi-shift locations." },
    { code: "", image: "./img/feature-restocking.png", title: "Fast Restocking", description: "Expect consistently stocked machines and fresh products. We monitor best-sellers, rotate inventory, and stay ahead of outages." },
    { code: "", image: "./img/feature-healthy.png", title: "Healthy Options", description: "Want better choices? We can stock protein snacks, low-sugar drinks, energy options, and healthier picks while still keeping the crowd favorites." },
    { code: "", image: "./img/feature-cashless.png", title: "Cashless Payments", description: "Card and tap-to-pay options like Apple/Google Pay make it easy for customers. Smart readers also help us track inventory and restock faster." },
  ],

  testimonials: {
    eyebrow: "Testimonials",
    headline: "What DFW businesses are saying.",
    body: "Customer reviews shared on Google.",
    googleLogo: "./img/google-logo.png",
    reviewUrl: "https://www.google.com/maps/place/Mid+Cities+Vending/data=!4m2!3m1!1s0x0:0xda1756a30ac419a1",
    reviewCtaLabel: "View all reviews on Google →",
  },

  faq: {
    eyebrow: "Frequently Asked Questions",
    headline: "Good to know.",
    items: [
      { q: "How much does vending service cost?", a: "Absolutely no cost to you! We provide the machine, delivery, setup, stocking, and service." },
      { q: "How often do you restock?", a: "We monitor inventory remotely and restock before the machine even starts looking empty." },
      { q: "What happens if the machine has an issue?", a: "Every machine has a support QR code. You can also call, text, or email us anytime and we'll be happy to help." },
      { q: "Can we choose the products?", a: "Absolutely. We can stock drinks, snacks, candy, healthier options, and even location-specific items as long as they fit the machine and are larger than a golf ball." },
      { q: "What do we need to provide?", a: "Just a suitable indoor space and access to a standard electrical outlet. We handle the rest." },
      { q: "What types of locations are a good fit?", a: "Warehouses, offices, employee breakrooms, dealerships, gyms, schools, training centers, and customer waiting areas." },
    ],
  },

  ctaBand: {
    id: "get-started",
    eyebrow: "Ready for an Upgrade?",
    headline: "Let's get your location set up.",
    body: "Old machines, empty rows, cash-only payments, and slow service make vending frustrating for employees and customers. Mid Cities Vending makes it simple to bring in a cleaner, modern cashless machine with local service and no day-to-day work for your team. Request a free smart vending assessment and we'll review your location, traffic, breakroom setup, and product needs to see if your facility is a good fit.",
    cta: { label: "Get Started", href: "https://forms.midcitiesvending.com/midcitiesvending/form/GetStarted/formperma/Nlca7JWxF0-Y-1DkDoS-LKJHZLBtWwolQPmQywHj37w" },
  },

  contact: {
    eyebrow: "Contact Us",
    headline: "Let's talk about your location.",
    callTitle: "Call or Text",
    callBody: "Got questions? Call our vending team anytime for 24/7 assistance.",
    emailTitle: "Email Us",
    emailBody: "Email us your details and we'll reach out to provide a free vending assessment.",
  },

  footer: {
    name: "Mid Cities Vending",
    links: [
      { label: "Terms and Conditions", href: "/legal#terms" },
      { label: "Privacy Policy", href: "/legal#privacy_policy" },
    ],
  },
};
