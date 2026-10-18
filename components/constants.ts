// Centralized Asset URLs and Data Configurations for Alife Stable

export const IMAGE_ASSETS = {
  // Desktop hero background: Professionals shaking hands in a modern office
  desktopHeroBg:
    "https://ik.imagekit.io/0s0fb4b2b/Alife%20Stable/Professional%20Handshake%20by%20the%20Window.webp",

  // Mobile hero background: Golden handshake above city skyline
  mobileHeroBg:
    "https://ik.imagekit.io/0s0fb4b2b/Alife%20Stable/Golden%20Handshake%20Above%20the%20City.webp",

  // Partner dashboard mockup showing analytics, courses, and admin controls
  partnerDashboardMockup:
    "https://ik.imagekit.io/0s0fb4b2b/Alife%20Stable/Partner%20Education%20Dashboard%20Mockup.webp",

  // Branded academy website and student learning platform mockup
  academyPlatformMockup:
    "https://ik.imagekit.io/0s0fb4b2b/Alife%20Stable/Your%20Academy%20Learning%20Platform%20Mockup.webp",

  // Friendly customer support assistant illustration for FAQ & help section
  customerSupportIllustration:
    "https://ik.imagekit.io/0s0fb4b2b/Alife%20Stable/Friendly%20Customer%20Support%20Assistant%20Illustration.webp",

  // Empowering woman with education analytics sticker for partnership hero
  empoweringWomanAnalytics:
    "https://ik.imagekit.io/0s0fb4b2b/Alife%20Stable/Empowering%20Woman%20with%20Education%20Analytics.webp",
} as const;

export const BRAND_INFO = {
  name: "Alife Stable",
  tagline: "Partner • Grow • Succeed",
  eyebrow: "YOUR EDUCATION PARTNER FOR A BIGGER TOMORROW",
  heroHeadline: "Build Your Own AI Course Business with Alife Stable",
  heroDescription:
    "Launch your own branded online learning business with ready-to-sell courses, a personal website, and complete support. Focus on growing your business — we handle the technology and course infrastructure.",
  positioning:
    "Build your own online course business with your own brand, without creating courses or requiring technical skills.",
};

export const TRUST_INDICATORS = [
  { value: "1000+", label: "Courses Available", highlight: "Ready-to-sell catalog" },
  { value: "500+", label: "Active Partners", highlight: "Pan-India presence" },
  { value: "100%", label: "Your Profits", highlight: "Direct payout model" },
  { value: "24/7", label: "Support & Guidance", highlight: "Dedicated assistance" },
];

export const HERO_FLOATING_BENEFITS = [
  "No Course Creation",
  "No Technical Skills Required",
  "Ready-to-Sell Courses",
  "Training & Support",
];

export const WHAT_IS_BENEFITS = [
  { title: "Ready-Made Courses", desc: "Industry-standard pre-built curriculum" },
  { title: "Your Own Brand", desc: "Custom domain, logo, and academy identity" },
  { title: "Full Admin Control", desc: "Comprehensive management dashboard" },
  { title: "Sell & Earn 100% Profits", desc: "Retain total control over your revenue" },
];

export const WHAT_YOU_GET_ITEMS = [
  {
    id: 1,
    title: "Personal Website",
    description: "Get your own branded website with your domain, logo, and business identity.",
    icon: "globe",
  },
  {
    id: 2,
    title: "Ready-to-Sell High-Demand Courses",
    description: "Access a library of ready-made courses across relevant categories.",
    icon: "book",
  },
  {
    id: 3,
    title: "Admin Panel",
    description: "Manage students, orders, course access, and more from a simple dashboard.",
    icon: "layout",
  },
  {
    id: 4,
    title: "Web App",
    description: "Provide students with a modern, responsive learning experience.",
    icon: "smartphone",
  },
  {
    id: 5,
    title: "100% Partnership Licence",
    description: "Get the commercial rights defined by your partnership agreement to operate your business.",
    icon: "shield",
  },
  {
    id: 6,
    title: "Your Brand, Your Pricing",
    description: "Use your own brand identity and set your own course prices within the applicable platform and agreement terms.",
    icon: "tag",
  },
  {
    id: 7,
    title: "Keep 100% of the Profits",
    description: "Keep 100% of your course-sale profit as represented by the partnership offer, subject to clearly disclosed applicable costs and agreement terms.",
    icon: "coins",
  },
  {
    id: 8,
    title: "Payment Gateway Integration",
    description: "Support payments through available payment gateway integrations.",
    icon: "credit-card",
  },
  {
    id: 9,
    title: "Training & Support",
    description: "Get onboarding, guidance, and ongoing support.",
    icon: "headphones",
  },
  {
    id: 10,
    title: "No Course Creation",
    description: "Start with ready-made content instead of creating every course yourself.",
    icon: "sparkles",
  },
  {
    id: 11,
    title: "No Technical Skills Required",
    description: "Focus on business growth while the platform handles the technical foundation.",
    icon: "wrench",
  },
  {
    id: 12,
    title: "Ready-to-Sell Courses",
    description: "Get started with existing course content and a prepared learning platform.",
    icon: "check-circle",
  },
];

export const YOUR_ACADEMY_CHECKLIST = [
  "Your Own Domain & Logo",
  "Your Branding, Your Identity",
  "Fully Customized Website & App",
  "Showcase Your Courses",
  "Build Your Own Student Community",
];

export const PRICING_PLANS = [
  {
    id: "all-in-one",
    name: "Complete Partnership Plan",
    price: "₹1,999",
    period: "/ year",
    popular: true,
    badge: "All-Inclusive Plan",
    description: "Everything you need to launch and grow your own branded online course academy.",
    features: [
      "Personal Branded Website & Domain Support",
      "Full Ready-to-Sell Course Library",
      "Complete Admin Panel Dashboard",
      "Mobile Responsive Web App for Students",
      "Payment Gateway Integration",
      "100% Commercial Partnership Licence",
      "Keep 100% of Your Course Profits",
      "Onboarding, Training & Priority Support",
    ],
    ctaText: "Become a Partner",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Alife Stable made it easier to start planning my own academy. Having courses and platform support in one place makes the journey simpler.",
    name: "Rahul Sharma",
    role: "Education Entrepreneur",
    location: "New Delhi",
    avatarInitial: "RS",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "I wanted to launch my learning platform without managing all the technical details. The partnership model gives me a clear starting point.",
    name: "Priya Mehta",
    role: "Online Educator",
    location: "Mumbai",
    avatarInitial: "PM",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Having a branded platform and ready-made courses helps me focus on reaching more learners and building my business.",
    name: "Amit Verma",
    role: "Training Institute Owner",
    location: "Bengaluru",
    avatarInitial: "AV",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Do I need technical knowledge to start?",
    answer:
      "No. The platform is designed to help you get started without advanced technical knowledge. Our team can guide you through the onboarding process.",
  },
  {
    question: "Can I use my own brand name and domain?",
    answer:
      "The partnership setup supports your own brand identity and domain, subject to the selected plan and applicable setup requirements.",
  },
  {
    question: "Do I get 100% of the profits?",
    answer:
      "Our partnership offer is designed around keeping 100% of the course-sale profit. Review the partnership agreement and any applicable gateway, platform, tax, or operating costs for the exact terms.",
  },
  {
    question: "What type of courses are included?",
    answer:
      "Available courses depend on the selected partnership plan and current course library.",
  },
  {
    question: "How long does it take to set up my platform?",
    answer:
      "The timeline depends on branding, domain configuration, payment integration, and the selected setup. Book a demo to discuss your requirements and estimated timeline.",
  },
  {
    question: "Is training provided?",
    answer:
      "Yes. Training and onboarding guidance are included as described in the selected partnership plan.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Contact our team to discuss available upgrade options and applicable charges.",
  },
  {
    question: "Who can become a partner?",
    answer:
      "Educators, institutes, entrepreneurs, and individuals interested in building an online course business can explore the partnership opportunity.",
  },
];
