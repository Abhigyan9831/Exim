import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Easily swap these URLs with your custom product image paths once ready
const PRODUCT_IMAGES = {
  view1: "https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Primary View
  view2: "https://images.unsplash.com/photo-1758657996330-095d08451cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"  // Alternative View
};

export function Products() {
  const [activeImage, setActiveImage] = useState(PRODUCT_IMAGES.view1);

  return (
    <div>
      {/* Hero Section - Exact Match with About Page Design */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxzcGljZXN8ZW58MXx8fHwxNzc3Mzc0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Product Information */}
            <div>
              <span className="text-brand-brown font-semibold tracking-wider uppercase text-sm block mb-2">
                Premium Spices
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Premium Himalayan Black Cardamom
              </h2>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Our Himalayan Black Cardamom from India is naturally smoke-cured using traditional drying methods, giving it a rich smoky aroma and bold flavour ideal for stews, broths, braised, and slow-cooked dishes.
              </p>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Grown in the wild Himalayan terrains, each pod reflects cultural heritage, careful farming, and rural livelihoods while adding deep authentic flavour to culinary creations.
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
            
            {/* Right Column: Product Image Frame & 2-Grid Thumbnails */}
            <div className="flex flex-col">
              <div className="relative h-[432px] w-full">
                <ImageWithFallback
                  src={activeImage}
                  alt="Premium Himalayan Black Cardamom"
                  className="w-full h-full object-cover rounded-xl shadow-lg border border-white/10 transition-all duration-300"
                />
              </div>
              
              {/* Row of 2 Small Grids Horizontally for Alternate Views */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view1)}
                  className={`relative h-28 w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${
                    activeImage === PRODUCT_IMAGES.view1
                      ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                  aria-label="View primary angle"
                >
                  <ImageWithFallback
                    src={PRODUCT_IMAGES.view1}
                    alt="Cardamom Primary View"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>
                
                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view2)}
                  className={`relative h-28 w-full rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${
                    activeImage === PRODUCT_IMAGES.view2
                      ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                  aria-label="View alternative angle"
                >
                  <ImageWithFallback
                    src={PRODUCT_IMAGES.view2}
                    alt="Cardamom Alternative View"
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
      <section className="py-20 bg-brand-grey border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
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
