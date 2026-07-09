import { HeroSection, WelcomeSection, WhyChooseSection, OurProductSection, ReadyToPartnerSection } from "./pages/Home";

// Initialize Builder with the Public API Key
export const BUILDER_PUBLIC_KEY = (import.meta as any).env.VITE_BUILDER_PUBLIC_KEY || "YOUR_BUILDER_PUBLIC_KEY";

// Register custom components/sections for visual editing in Gen 2 SDK-React
export const customComponents = [
  {
    component: HeroSection,
    name: "HeroSection",
    inputs: [
      { name: "title", type: "string", defaultValue: "Naturally Grown Loved Worldwide" },
      { name: "subtitle", type: "string", defaultValue: "From the Eastern Himalayas to your kitchen" },
      { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/images/her.webp" },
    ],
  },
  {
    component: WelcomeSection,
    name: "WelcomeSection",
    inputs: [
      { name: "title", type: "string", defaultValue: "Welcome to M R EXIM" },
      { name: "description", type: "longText", defaultValue: "At M R EXIM, we are essentially focussed on trading in single origin pure Himalayan Black cardamom from India..." },
      { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/images/cardamom_brightness_reduced.webp" },
    ],
  },
  {
    component: WhyChooseSection,
    name: "WhyChooseSection",
    inputs: [
      { name: "title", type: "string", defaultValue: "Why Choose M R EXIM?" },
      { name: "subtitle", type: "string", defaultValue: "Connecting Indian spices with global markets" },
    ],
  },
  {
    component: OurProductSection,
    name: "OurProductSection",
    inputs: [
      { name: "title", type: "string", defaultValue: "Our Product" },
      { name: "productName", type: "string", defaultValue: "Himalayan Black Cardamom" },
      { name: "image1", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/images/ChatGPT Image May 19, 2026, 11_39_19 PM.webp" },
      { name: "image2", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"], defaultValue: "/images/ChatGPT Image May 23, 2026, 01_23_08 AM.webp" },
    ],
  },
  {
    component: ReadyToPartnerSection,
    name: "ReadyToPartnerSection",
    inputs: [
      { name: "title", type: "string", defaultValue: "Ready to Partner With Us?" },
      { name: "subtitle", type: "string", defaultValue: "Get in touch today to discuss your specialty agricultural commodity needs" },
    ],
  },
];
