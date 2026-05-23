import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Eye, Award, Users, Leaf, TrendingUp } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

export function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: <>We maintain the highest standards in every product we source and <br />deliver.</>
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Committed to sustainable farming practices and environmental responsibility."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focus",
      description: "Empowering farmers and local communities through fair partnerships."
    }
  ];

  return (
    <div>
      <section className="relative h-[100dvh] md:h-96 flex items-center justify-center overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="/images/ChatGPT Image May 23, 2026, 01_41_36 AM.png"
          alt="Black Cardamom Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">About M R EXIM</h1>
          <p className="text-sm md:text-xl text-gray-100">
            Indian firm trading in naturally grown spices
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Who We <span className="text-[#A35C10]">Are</span>
              </h2>
              <p className="text-center sm:text-left text-sm md:text-lg text-white">
                At M R Exim we are essentially focussed on trading in high-quality organic black cardamom from India. In order to meet the quality expectations of our clientele, we select the batches through vigorous quality control procedures, ethical sourcing strategies and thereby providing the desired certifications. Our farm-centric relationships with the growers in the remote areas enable us to maintain the authenticity of our product and a steady supply of traceable ingredients throughout the year. In addition to this, we have adopted a customer-centric approach to navigate the market demand to the growers, thus positively impacting rural livelihoods. Our product is applicable across various industries and we provide different grades of black cardamom suited to customized and specific requirements. M R EXIM offers worldwide delivery with FOB, CIF, CNF shipping terms and other flexible node of payments. We emphasize on transperent communications, quick response times and customised service to build strong and lasting business relationships.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-[584px] aspect-square overflow-hidden rounded-xl shadow-lg border border-white/10">
                <ImageWithFallback
                  src="/images/black_cardamom_harvesting_square_584x584.png"
                  alt="Who We Are - M R EXIM"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 shadow-sm text-center md:text-left">
              <div className="w-16 h-16 bg-brand-brown rounded-lg flex items-center justify-center text-white mb-6 mx-auto md:mx-0">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-center sm:text-left text-sm md:text-lg text-white">
                To deliver mountain-grown, authentic spices from India to global markets, while empowering rural livelihoods.
              </p>
            </div>
            <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 shadow-sm text-center md:text-left">
              <div className="w-16 h-16 bg-brand-brown rounded-lg flex items-center justify-center text-white mb-6 mx-auto md:mx-0">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-center sm:text-left text-sm md:text-lg text-white">
                To connect high altitude spices farms directly with international buyers through sustainability, quality-focused processing and fair trade practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Our Core <span className="text-[#A35C10]">Values</span></h2>
            <p className="text-sm md:text-xl text-white max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-brand-brown/10 rounded-lg flex items-center justify-center text-brand-brown mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-[#030303] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">What Makes Us <span className="text-[#A35C10]">Unique</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-sm md:text-lg text-white text-center sm:text-left order-2 lg:order-1">
              <ScrollReveal delay={0}>
                <div>
                  <strong className="text-[#A35C10]">Farm-Centric Relationships</strong>: Cultivation and production by trusted farmer cooperatives from the eastern Himalayas of India.
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div>
                  <strong className="text-[#A35C10]">Low-Smoke Curing</strong>: Low-smoke curing techniques used to preserve the smoke aroma and authenticity of the product.
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div>
                  <strong className="text-[#A35C10]">Customer Friendly Approach</strong>: We offer reliable, customized solutions and maintain product uniformity for long-term business partnership.
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div>
                  <strong className="text-[#A35C10]">Specialty Focus</strong>: Our expertise in ethnic spices and artisanal commodities enables us to make a distinct position in the market.
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div>
                  <strong className="text-[#A35C10]">Traceable Quality</strong>: Promoting naturally cultivated Himalayan Cardamom with traceability and export-quality standards.
                </div>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full order-1 lg:order-2">
              <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-lg border border-white/10 bg-white/5">
                <ImageWithFallback
                  src="/images/ChatGPT Image May 23, 2026, 01_52_40 AM.png"
                  alt="Unique Feature 1"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-lg border border-white/10 bg-white/5">
                <ImageWithFallback
                  src="/images/ChatGPT Image May 23, 2026, 02_06_02 AM.png"
                  alt="Unique Feature 2"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
