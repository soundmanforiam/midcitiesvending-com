/**
 * ============================================================
 * MID CITIES VENDING — SITE CONTENT
 * ============================================================
 * This is the ONLY file you should need to edit.
 * Everything on the website — headlines, body copy, phone
 * number, email, links, FAQ, service areas, images — lives here.
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
 *
 * ABOUT THE IMAGES BELOW
 * All image paths point at local files in the /img folder
 * (e.g. "./img/logo.png"), so the site has zero dependency on
 * the original midcitiesvending.com site staying online. If you
 * ever need to swap a photo, just replace the file in /img with
 * a new one using the same filename — no code changes needed.
 * ============================================================
 */

window.CONTENT = {

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
    statusLabel: "Available Now",
    // Circular logo mark shown in the header.
    logo: "./img/logo.png",
    logoAlt: "Mid Cities Vending logo",
  },

  nav: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Dallas-Fort Worth Smart Vending",
    headline: "Cashless vending, made simple.",
    body: "Mid Cities Vending places, stocks, and services modern smart vending machines for DFW offices, warehouses, dealerships, gyms, and breakrooms. Customers swipe or tap, open the door, grab what they want, and close it. We handle the rest.",
    primaryCta: { label: "Request Free Assessment", href: "#get-started" },
    secondaryCta: { label: "See How It Works", href: "#about" },
    image: "./img/hero.png",
    imageAlt: "Modern smart vending machine in a workplace setting",
  },

  howItWorks: {
    eyebrow: "How It Works",
    headline: "How It Works.",
    body: "Our smart vending machines are cashless, easy to use, and professionally serviced. Customers simply swipe or tap, open the door, take what they want, and close the door. The machine handles checkout automatically.",
    image: "./img/how-it-works.png",
    imageAlt: "Customer tapping a card to pay at a smart vending machine",
  },

  upgrade: {
    eyebrow: "Smart Vending Machines",
    headline: "Modern machines that actually look like an upgrade.",
    body: "Give your employees, customers, and guests a cleaner vending experience without adding work for your team. It is a better fit for modern workplaces than outdated snack and soda machines especially in offices, dealerships, warehouses, gyms, and busy breakrooms where people want fast grab-and-go options.",
    photo: "./img/machine-tall.png",
    photoAlt: "Modern smart vending machine",
  },

  locations: {
    eyebrow: "Locations We Service",
    headline: "Built for busy DFW workplaces.",
    body: "Smart vending works best in locations where employees, customers, or guests need quick access to drinks, snacks, and grab-and-go options. We focus on workplaces with steady foot traffic, breakroom needs, and teams that benefit from fast, convenient service.",
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

  serviceAreas: [
    { label: "Dallas", href: "https://www.midcitiesvending.com/areas/dallas-vending-machines" },
    { label: "Fort Worth", href: "https://www.midcitiesvending.com/areas/fort-worth-vending-machines" },
    { label: "Arlington", href: "https://www.midcitiesvending.com/areas/arlington-vending-machines" },
    { label: "Mansfield", href: "https://www.midcitiesvending.com/areas/mansfield-vending-machines" },
    { label: "Grand Prairie", href: "https://www.midcitiesvending.com/areas/grand-prairie-vending-machines" },
    { label: "Irving", href: "https://www.midcitiesvending.com/areas/irving-vending-machines" },
    { label: "Hurst-Euless-Bedford", href: "https://www.midcitiesvending.com/areas/hurst-euless-bedford-vending-machines" },
    { label: "Midlothian", href: "https://www.midcitiesvending.com/areas/midlothian-vending-machines" },
  ],

  testimonials: {
    eyebrow: "Testimonials",
    headline: "Google Reviews",
    body: "Customer reviews shared on Google",
    googleLogo: "./img/google-logo.png",
    reviewUrl: "https://www.google.com/maps/place/Mid+Cities+Vending/data=!4m2!3m1!1s0x0:0xda1756a30ac419a1",
    reviewCtaLabel: "View all reviews on Google →",
  },

  features: [
    { image: "./img/feature-full-service.png", title: "Full Service Vending", description: "We place and fully manage modern cashless vending machines with zero hassle for businesses all across the DFW metroplex." },
    { image: "./img/feature-custom-mix.png", title: "Custom Product Mix", description: "Your people choose what goes in the machine. We tailor the lineup to your preferences, budget, and dietary needs, and we can adjust anytime." },
    { image: "./img/feature-support.png", title: "24/7 Support", description: "If something is not working right you get quick support. We specialize in servicing busy workplaces and multi-shift locations." },
    { image: "./img/feature-restocking.png", title: "Fast Restocking", description: "Expect consistently stocked machines and fresh products. We monitor best-sellers, rotate inventory, and stay ahead of outages." },
    { image: "./img/feature-healthy.png", title: "Healthy Options", description: "Want better choices? We can stock protein snacks, low-sugar drinks, energy options, and healthier picks while still keeping the crowd favorites." },
    { image: "./img/feature-cashless.png", title: "Cashless Payments", description: "Card and tap-to-pay options like Apple/Google Pay make it easy for customers. Smart readers also help us track inventory and restock faster." },
  ],

  faq: {
    eyebrow: "Frequently Asked Questions",
    headline: "",
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
    eyebrow: "",
    headline: "Ready for an upgrade?",
    body: "Old machines, empty rows, cash-only payments, and slow service make vending frustrating for employees and customers. Mid Cities Vending makes it simple to bring in a cleaner, modern cashless machine with local service and no day-to-day work for your team. Request a free smart vending assessment and we'll review your location, traffic, breakroom setup, and product needs to see if your facility is a good fit.",
    cta: { label: "Get Started", href: "https://forms.midcitiesvending.com/midcitiesvending/form/GetStarted/formperma/Nlca7JWxF0-Y-1DkDoS-LKJHZLBtWwolQPmQywHj37w" },
  },

  contact: {
    eyebrow: "Contact Us",
    headline: "",
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
