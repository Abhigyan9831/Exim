import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TrendingUp, Users, Leaf, Award, ArrowRight, Globe2, ShieldCheck, Settings, MountainSnow, Droplet } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export function Home() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" width="100%" height="100%">
          <defs>
            <filter id="invert">
              <feColorMatrix type="matrix" values="-1 0 0 0 1   0 -1 0 0 1   0 0 -1 0 1   0 0 0 1 0" />
            </filter>
            <mask id="mountainMask">
              <image href="/images/WhatsApp Image 2026-05-23 at 00.14.21.jpeg" width="100%" height="100%" filter="url(#invert)" preserveAspectRatio="xMidYMid meet" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="currentColor" mask="url(#mountainMask)" />
        </svg>
      ),
      title: "High Altitude Cultivation",
      description: "We essentially focus on high altitude cultivation of pure black cardamom (1000-2000m above sea level)."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Ethical Sourcing",
      description: "Farm-centric relationships ensuring traceability, native ingredients & fair pricing from the mountains to your market."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality testing for small batches, stabilizing moisture content to maintain the authenticity of the product."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Eco-Friendly Cultivation",
      description: "Agro- forestry and organic production techniques for sustainability of forest ecosystems."
    }
  ];



  return (
    <div>
      <section className="relative min-h-[100dvh] md:min-h-[400px] md:aspect-[1647/955] md:max-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="/images/her.png"
          alt="M R EXIM Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-[50%_80%] brightness-125 saturate-200"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 -mt-16 md:-mt-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            Naturally Grown<br />Loved Worldwide
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-100">
            From the Eastern Himalayas to your kitchen
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/products"
              className="px-6 py-3 md:px-8 md:py-4 bg-brand-brown hover:opacity-90 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Explore Product <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 md:px-8 md:py-4 bg-brand-brown text-white hover:opacity-90 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-10 text-center">
            Welcome to <span className="text-[#A35C10]">M R EXIM</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-center sm:text-left text-sm md:text-xl text-white leading-relaxed">
                At M R EXIM, we are essentially focussed on trading in single origin pure Himalayan Black cardamom from India. In order to meet the quality expectations of our clientele, we select the batches through vigorous quality control procedures, ethical sourcing strategies and thereby providing the desired certifications. Our farm-centric relationships with the growers in the remote areas enable us to maintain the authenticity of our products and a steady supply of traceable ingredients throughout the year. In addition to this, we have adopted a customer-centric approach to navigate the market demand to the growers, thus positively impacting rural livelihoods. Our products are applicable across various industries and we provide different grades of black cardamom suited to customised and specific requirements. M R EXIM offers worldwide delivery with FOB, CIF, CNF shipping terms and other flexible mode of payments. We emphasize on transparent communications, quick response times and customised service to build strong and lasting business relationships.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start order-1 lg:order-2">
              <div className="relative w-full max-w-[584px] aspect-square overflow-hidden rounded-xl shadow-lg border border-white/10">
                <ImageWithFallback
                  src="/images/cardamom_brightness_reduced.png"
                  alt="Welcome to MR Exim"
                  className="w-full h-full object-cover brightness-75"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 md:py-4 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#A35C10]">M R EXIM</span>?
            </h2>
            <p className="text-base md:text-xl text-white max-w-2xl mx-auto">
              Connecting Indian spices with global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 border border-white/20 rounded-xl hover:shadow-xl transition-shadow text-center md:text-left"
              >
                <div className="w-16 h-16 bg-brand-brown/10 rounded-lg flex items-center justify-center text-brand-brown mb-4 mx-auto md:mx-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white text-sm md:text-base">{feature.description}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Himalayan Black Cardamom
              </h3>
              <ul className="space-y-4 mb-8">
                <ScrollReveal delay={0}>
                  <li className="flex items-start gap-3">
                    <Leaf className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div className="text-white/80">Naturally processed and traditionally smoke-cured for global culinary use.</div>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <li className="flex items-start gap-3">
                    <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div className="text-white/80">Himalayan Black Cardamom with authentic smoky aroma & rich flavor.</div>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <li className="flex items-start gap-3">
                    <Users className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div className="text-white/80">Handcrafted with cultural heritage and supports rural livelihoods.</div>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <li className="flex items-start gap-3">
                    <Globe2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div className="text-white/80">Ideal for stews, broths, braised, and slow-cooked dishes.</div>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <li className="flex items-start gap-3">
                    <Droplet className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div className="text-white/80">Small batches are processed under controlled humidity & moisture stabilized (8-12%).</div>
                  </li>
                </ScrollReveal>
              </ul>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-[#A35C10] text-white rounded-lg font-semibold hover:bg-[#A35C10]/90 transition-colors text-sm md:text-base"
              >
                View More <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              <ImageWithFallback
                src="/images/ChatGPT Image May 19, 2026, 11_39_19 PM.png"
                alt="M R EXIM Product View 1"
                className="w-full aspect-square object-cover rounded-lg"
              />
              <ImageWithFallback
                src="/images/ChatGPT Image May 23, 2026, 01_23_08 AM.png"
                alt="M R EXIM Product View 3"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 md:py-4 pb-12 md:pb-16 bg-brand-grey shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Partner <span className="text-[#A35C10]">With Us</span>?
          </h2>
          <p className="text-base md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Get in touch today to discuss your specialty agricultural commodity needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-brown text-white rounded-lg font-semibold hover:opacity-90 transition-colors text-sm md:text-base"
          >
            Contact Us Now <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
