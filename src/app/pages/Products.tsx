import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Mountain, Flame, Leaf, Sprout, MapPin, ClipboardList, FileText } from "lucide-react";

// Easily swap these URLs with your custom product image paths once ready
const PRODUCT_IMAGES = {
  view1: "/images/view1.png", // Primary View
  view2: "/images/view2.png", // Alternative View 1
  view3: "/images/view3.png", // Alternative View 2
  view4: "/images/grid4.png"  // Alternative View 3
};

export function Products() {
  const [activeImage, setActiveImage] = useState(PRODUCT_IMAGES.view1);

  return (
    <div>
      {/* Hero Section - Exact Match with About Page Design */}
      <section className="relative h-[100dvh] md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="/images/probg.png"
          alt="Our Products Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Product</h1>
          <p className="text-xl text-gray-100">
            Harvested in the Himalayas, crafted for global kitchens
          </p>
        </div>
      </section>

      {/* Interactive Single Product Section - "Who We Are" Style 2-Column Grid Layout */}
      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">

            {/* Left Column: Product Information */}
            <div className="flex flex-col h-full justify-center">
              <span className="text-[#A35C10] font-semibold tracking-wider uppercase text-sm block mb-3">
                PREMIUM SPICES
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-white mb-6 leading-[1.1]">
                Premium Himalayan <br /> Black Cardamom
              </h2>

              <div className="flex items-center mb-10">
                <div className="h-[1px] w-12 bg-white/10"></div>
                <div className="w-2 h-2 rotate-45 border border-[#A35C10] mx-2"></div>
                <div className="h-[1px] w-12 bg-white/10"></div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                    <svg className="w-7 h-7" width="100%" height="100%">
                      <defs>
                        <filter id="invertProduct">
                          <feColorMatrix type="matrix" values="-1 0 0 0 1   0 -1 0 0 1   0 0 -1 0 1   0 0 0 1 0" />
                        </filter>
                        <mask id="mountainMaskProduct">
                          <image href="/images/WhatsApp Image 2026-05-23 at 00.14.21.jpeg" width="100%" height="100%" filter="url(#invertProduct)" preserveAspectRatio="xMidYMid meet" />
                        </mask>
                      </defs>
                      <rect width="100%" height="100%" fill="currentColor" mask="url(#mountainMaskProduct)" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Himalayan Origin</h3>
                    <p className="text-white/70 text-base leading-relaxed">Sustainably sourced from the Eastern Himalayan region of India.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                    <Flame className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Naturally Smoked & Dried</h3>
                    <p className="text-white/70 text-base leading-relaxed">Naturally smoke-cured using traditional Himalayan drying methods.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                    <Leaf className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Rich, Smoky & Robust</h3>
                    <p className="text-white/70 text-base leading-relaxed">Strong smoky aroma with rich, earthy flavour. Premium hand-selected pods with high essential oil content. Ideal for curries, stews, biryanis, broths & spice blends.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                    <Sprout className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Sustainably Grown</h3>
                    <p className="text-white/70 text-base leading-relaxed">Carefully cultivated by local farmers, supporting rural livelihoods and preserving cultural heritage.</p>
                  </div>
                </div>

                <div className="flex gap-5 pt-2">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                    <ClipboardList className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-[#d8c2aa] font-semibold text-lg mb-3">Product Specifications</h3>
                    <div className="px-6 py-2 rounded-xl border border-white/10 bg-black/20 shadow-inner">
                      <ul className="flex flex-col">
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                          <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Origin</span>
                          <span className="text-white/90 font-medium text-sm sm:text-right">Eastern Himalayas, India</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                          <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Product Type</span>
                          <span className="text-white/90 font-medium text-sm sm:text-right">Whole Black Cardamom</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                          <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Processing Method</span>
                          <span className="text-white/90 font-medium text-sm sm:text-right">Traditional Smoke Drying</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                          <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Colour</span>
                          <span className="text-white/90 font-medium text-sm sm:text-right">Dark Brown to Deep Black</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                          <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Aroma</span>
                          <span className="text-white/90 font-medium text-sm sm:text-right">Strong, Smoky & Earthy</span>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                          <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Quality Grade</span>
                          <span className="text-white/90 font-medium text-sm sm:text-right">Premium Export Quality</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5 pt-2">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                    <FileText className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Product Description</h3>
                    <p className="text-white/70 text-base leading-relaxed">As a spice supplier from India, our Black Cardamom is native to the Himalayan region and features a distinct smoky aroma that serves as a crucial ingredient for stews, broths, braised foods and slow-cooked dishes. Pure Black cardamom is naturally processed using traditional drying methods and smoke-cured to preserve its authentic smoky aroma and intense taste, ideal for international culinary standards. Grown in the wild Himalayan terrains, each pod of cardamom narrates a story of cultural richness and culinary delight. It begins with meticulous farming and the cultivation carries a cultural significance which impacts the rural livelihoods. The rough dark pods work in the background, creating a robust smoky flavour that perfumes slow-cooked dishes to perfection. We strictly source from high-altitude farms for their rich essential oil content that produces the desired flavour profiles.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/contact#contact-form"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 bg-[#A35C10] text-white text-base font-semibold rounded-lg hover:bg-[#A35C10]/90 transition-all duration-300 uppercase tracking-wider shadow-[0_4px_14px_0_rgba(163,92,16,0.39)] hover:shadow-[0_6px_20px_rgba(163,92,16,0.23)] hover:-translate-y-0.5"
                >
                  <span className="mr-2">INQUIRE NOW</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Product Image Frame & 3-Grid Thumbnails */}
            <div className="flex flex-col lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl shadow-2xl border border-white/10 overflow-hidden bg-[#0A0A0A]">
                <ImageWithFallback
                  src={activeImage}
                  alt="Premium Himalayan Black Cardamom"
                  className="w-full h-auto object-cover transition-all duration-300"
                />
              </div>

              {/* Row of 4 Small Grids Horizontally for Alternate Views */}
              <div className="grid grid-cols-4 gap-4 mt-6 w-full">
                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view4)}
                  className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${activeImage === PRODUCT_IMAGES.view4
                    ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                    : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  aria-label="View fourth angle"
                >
                  <ImageWithFallback
                    src={PRODUCT_IMAGES.view4}
                    alt="Cardamom View 4"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>

                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view1)}
                  className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${activeImage === PRODUCT_IMAGES.view1
                    ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                    : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  aria-label="View primary angle"
                >
                  <ImageWithFallback
                    src={PRODUCT_IMAGES.view1}
                    alt="Cardamom View 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>

                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view2)}
                  className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${activeImage === PRODUCT_IMAGES.view2
                    ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                    : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  aria-label="View alternative angle"
                >
                  <ImageWithFallback
                    src={PRODUCT_IMAGES.view2}
                    alt="Cardamom View 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>

                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view3)}
                  className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${activeImage === PRODUCT_IMAGES.view3
                    ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                    : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  aria-label="View third angle"
                >
                  <ImageWithFallback
                    src={PRODUCT_IMAGES.view3}
                    alt="Cardamom View 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Custom Inquiry Section */}
      <section className="py-3 md:py-4 pb-12 md:pb-16 bg-brand-grey shadow-inner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Custom Sourcing & Bulk Orders
          </h2>
          <p className="text-lg text-white/80 mb-8">
            We partner with clients globally for specialty spices and custom grade sourcing.
          </p>
          <Link
            to="/contact#contact-form"
            className="inline-block px-8 py-4 bg-brand-brown text-white rounded-lg font-semibold hover:bg-brand-brown/80 transition-colors shadow-md"
          >
            Request custom specifications
          </Link>
        </div>
      </section>
    </div>
  );
}
