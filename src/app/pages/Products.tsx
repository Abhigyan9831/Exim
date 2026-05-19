import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-100">
            Premium specialty agricultural commodities from sustainable sources
          </p>
        </div>
      </section>

      {/* Interactive Single Product Section - "Who We Are" Style 2-Column Grid Layout */}
      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Product Information */}
            <div>
              <span className="text-brand-brown font-semibold tracking-wider uppercase text-sm block mb-2">
                Premium Spices
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Premium Himalayan Black Cardamom
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed">
                As a spice supplier from India, our Black Cardamom is native to the Himalayan region and features a distinct smoky aroma that serves as a crucial ingredient for stews, broths, braised foods and slow cooked dishes. Our Black Cardamom is naturally processed using traditional drying methods and smoke-cured to preserve its authentic smoky aroma and intense taste, ideal for international culinary standards. Growth in the wild Himalyan terrains each pod of cardamom narrates a story of cultural richness and culinary delight. It begins with meticulous farmingg and the cultivation carries a cultural significance which impacts the rural livelihood. The rough dark pods work in the background, creating a robust smoky flavour that perfumes slow-cooked dishes to perfection.
              </p>
              
              <div className="mb-8">
                <p className="text-base text-white/80">
                  <strong className="text-white">Origin:</strong> Eastern Himalayas, India
                </p>
              </div>
              
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center px-6 py-3 bg-brand-brown text-white font-semibold rounded-lg hover:bg-brand-brown/80 transition-colors shadow-md"
              >
                Inquire Now →
              </Link>
            </div>
            
            {/* Right Column: Product Image Frame & 3-Grid Thumbnails */}
            <div className="flex flex-col">
              <div className="relative h-56 md:h-[360px] w-full">
                <ImageWithFallback
                  src={activeImage}
                  alt="Premium Himalayan Black Cardamom"
                  className="w-full h-full object-cover rounded-xl shadow-lg border border-white/10 transition-all duration-300"
                />
              </div>
              
              {/* Row of 4 Small Grids Horizontally for Alternate Views */}
              <div className="grid grid-cols-4 gap-4 mt-4 w-full">
                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view4)}
                  className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${
                    activeImage === PRODUCT_IMAGES.view4
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
                  className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${
                    activeImage === PRODUCT_IMAGES.view1
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
                  className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${
                    activeImage === PRODUCT_IMAGES.view2
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
                  className={`relative aspect-square w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${
                    activeImage === PRODUCT_IMAGES.view3
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
      <section className="py-8 md:py-12 bg-brand-grey">
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
