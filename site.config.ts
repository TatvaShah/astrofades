import type { SiteConfig } from "@/lib/types";

const B = "http://astrofades.booksy.com/";
const g = (n: number, h: number, alt: string, caption: string, href: string) => ({ src: `/images/cut-${n}.jpg`, width: 1080, height: h, alt, caption, href });

export const site: SiteConfig = {
  name: "AstroFades",
  tagline: "Fades, tapers, mullets, and designs in Brampton, Ontario.",
  category: "Barber",
  schemaType: "HairSalon",
  area: "Brampton, ON",
  siteUrl: "https://astrofades.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#c9a24a" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Barber in Brampton",
    headline: "Clean fades. Sharp designs.",
    subhead: "Tapers, mullets, maintenance cuts, and custom designs from a barber with 4+ years behind the chair. Pick your time on Booksy and come through.",
    primaryCta: { label: "Book on Booksy", href: B },
    images: [
      { src: "/images/cut-2.jpg", alt: "Textured cut with a clean taper by AstroFades" },
      { src: "/images/cut-4.jpg", alt: "Maintenance cut, side profile" },
      { src: "/images/cut-6.jpg", alt: "Low taper with a design" },
    ],
    secondaryCta: { label: "See the cuts", href: "#gallery" },
  },

  highlights: ["4+ years of experience", "Fades, tapers and designs", "Book online with Booksy", "Brampton, Ontario"],

  about: {
    title: "Cuts with precision",
    body: [
      "AstroFades is a Brampton barber with 4+ years of experience, known for fades, tapers, mullets, and clean custom designs.",
      "Whether you need a quick maintenance cut or something new, booking takes a minute on Booksy.",
    ],
    image: { src: "/images/cut-8.jpg", alt: "Fresh cut by AstroFades" },
  },

  menu: {
    label: "Services",
    title: "What we do",
    variant: "list",
    showPrices: false,
    priceNote: "See current prices and open times on Booksy.",
    groups: [
      {
        title: "Cuts",
        items: [
          { name: "Fades and tapers" },
          { name: "Low taper and design" },
          { name: "Taper and mullet" },
          { name: "Maintenance cut" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cuts",
    items: [
      g(2, 1440, "Textured cut with taper", "Flow State", "https://www.instagram.com/p/DeiUExKt0y_/"),
      g(4, 1440, "Maintenance cut side profile", "Maintenance Cut", "https://www.instagram.com/p/Dec-Z9_t4TS/"),
      g(5, 1440, "Fresh fade under red light", "Icey", "https://www.instagram.com/p/DeadQQ5tgkZ/"),
      g(6, 1080, "Low taper with a design", "Low Taper + Design", "https://www.instagram.com/p/DdeOA67MgCN/"),
      g(7, 1440, "Clean back taper", "Simple", "https://www.instagram.com/p/DdWlOycMfuU/"),
      g(8, 1440, "Taper with beard line up", "New Era", "https://www.instagram.com/p/DdScLtyt4TC/"),
      g(9, 1242, "Fresh cut and beard", "Luxury Cuts", "https://www.instagram.com/p/DYnEhbKjHqB/"),
      g(1, 1440, "Taper with a design at the back", "Design work", "https://www.instagram.com/p/De7-twrN96T/"),
      g(10, 1440, "Textured top with burst fade", "Burst fade", "https://www.instagram.com/p/DXGKpCojYRB/"),
      g(12, 1440, "Textured cut with a design", "No Competition", "https://www.instagram.com/p/DWNeIY9jUZ7/"),
    ],
  },

  instagram: {
    handle: "astrofades_",
    embeds: [],
  },

  order: {
    label: "How to book",
    title: "Book your next cut",
    intro: "Booking is online through Booksy. Pick your service and time, and you are set. Questions about a design? Send a DM.",
    dmMessage: "Hi AstroFades! I would like to book a cut.\nDate:\nCut (fade, taper, mullet, design):\nDesign idea (I can send a photo):",
    links: [{ label: "Book on Booksy", href: B }],
    headerCtaLabel: "Book now",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Book online through Booksy at astrofades.booksy.com. Pick your service and an open time." },
    { q: "What cuts do you do?", a: "Fades, tapers, mullets, maintenance cuts, and custom designs." },
    { q: "Where are you located?", a: "AstroFades is in Brampton, Ontario. Your booking confirmation has the details." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario",
    socials: [{ label: "Booksy", href: B }],
  },

  seo: {
    title: "AstroFades | Barber in Brampton",
    description: "AstroFades is a Brampton barber with 4+ years of experience in fades, tapers, mullets, and custom designs. Book your next cut online through Booksy.",
    keywords: ["barber Brampton", "fades Brampton", "taper fade Brampton", "Brampton barbershop"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
