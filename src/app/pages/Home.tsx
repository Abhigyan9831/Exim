import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TrendingUp, Users, Leaf, Award, ArrowRight, Globe2, ShieldCheck, Settings } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Ethical Sourcing",
      description: "Farm-centric relationship ensuring traceability and fair trade practices."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving quality-conscious markets across South East Asia and beyond."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality testing for every batch and crafted with customer solutions."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "High-Altitude Cultivation",
      description: "We essentially focus on high altitude cultivation of black cardamom (1000-2000m above sea level)."
    }
  ];



  return (
    <div>
      <section className="relative min-h-[500px] sm:min-h-[600px] md:h-auto md:aspect-[1672/941] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="/images/who_we.png"
          alt="Who We Are - M R EXIM"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Naturally Grown<br />Loved Worldwide
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Connecting farms to global markets with quality, sustainability, and trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-brand-brown hover:opacity-90 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Explore Product <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-brand-brown text-white hover:opacity-90 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 text-center">
            Welcome to <span className="text-[#A35C10]">M R EXIM</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-white leading-relaxed">
                At M R EXIM, we are essentially focussed on trading in high-quality organic Black cardamom from India. In order to meet the quality expectations of our clientele, we select the batches through vigorous quality control procedures, ethical sourcing strategies and thereby providing the desired certifications. Our farm-centric relationships with the growers in the remote areas enable us to maintain the authenticity of our products and a steady supply of traceable ingredients throughout the year. In addition to this, we have adopted a customer-centric approach to navigate the market demand to the growers, thus positively impacting rural livelihoods. Our products are applicable across various industries and we provide different grades of black cardamom suited to customised and specific requirements. M R EXIM offers worldwide delivery with FOB, CIF, CNF shipping terms and other flexible mode of payments. We emphasize on transparent communications, quick response times and customised service to build strong and lasting business relationships.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="/images/welcome.png"
                alt="Welcome to MR Exim"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#A35C10]">M R EXIM</span>?
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Your trusted partner in specialty agricultural commodities trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 border border-white/20 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-brand-brown/10 rounded-lg flex items-center justify-center text-brand-brown mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-[#030303] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Our <span className="text-[#A35C10]">Product</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Himalayan Black Cardamom
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div className="text-white/80">Himalayan Black Cardamom with authentic smoky aroma & rich flavor.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div className="text-white/80">Naturally processed and traditionally smoke-cured for global culinary use.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div className="text-white/80">Ideal for stews, broths, braised, and slow-cooked dishes.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div className="text-white/80">Handcrafted with cultural heritage and supports rural livelihoods.</div>
                </li>
              </ul>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A35C10] text-white rounded-lg font-semibold hover:bg-[#A35C10]/90 transition-colors"
              >
                View More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="/images/view1.png"
                alt="M R EXIM Product View 1"
                className="w-full h-64 object-cover rounded-lg"
              />
              <ImageWithFallback
                src="/images/view3.png"
                alt="M R EXIM Product View 3"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-brand-grey shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Partner <span className="text-[#A35C10]">With Us</span>?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get in touch today to discuss your specialty agricultural commodity needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-brown text-white rounded-lg font-semibold hover:opacity-90 transition-colors"
          >
            Contact Us Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
