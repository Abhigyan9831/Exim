import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Eye, Award, Users, Leaf, TrendingUp } from "lucide-react";

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
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1628884187093-55e511036c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGR8ZW58MXx8fHwxNzc3Mzc0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Agricultural field"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About M R EXIM</h1>
          <p className="text-xl text-gray-100">
            Indian firm trading in naturally grown spices
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Who We <span className="text-[#A35C10]">Are</span>
              </h2>
              <p className="text-lg text-white">
                At M R Exim we are essentially focussed on trading in high-quality organic black cardamom from India. In order to meet the quality expectations of our clientele, we select the batches through vigorous quality control procedures, ethical sourcing strategies and thereby providing the desired certifications. Our farm-centric relationships with the growers in the remote areas enable us to maintain the authenticity of our product and a steady supply of traceable ingredients throughout the year. In addition to this, we have adopted a customer-centric approach to navigate the market demand to the growers, thus positively impacting rural livelihoods. Our product is applicable across various industries and we provide different grades of black cardamom suited to customized and specific requirements. M R EXIM offers worldwide delivery with FOB, CIF, CNF shipping terms and other flexible node of payments. We emphasize on transperent communications, quick response times and customised service to build strong and lasting business relationships.
              </p>
            </div>
            <div className="relative h-64 md:h-[432px] w-full">
              <ImageWithFallback
                src="/images/who_we.png"
                alt="Who We Are - M R EXIM"
                className="w-full h-full object-cover rounded-xl shadow-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 shadow-sm">
              <div className="w-16 h-16 bg-brand-brown rounded-lg flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-white">
                To deliver mountain-grown authentic Himalayan Black Cardamom from India to global markets, at the same time empowering rural livelihoods.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 shadow-sm">
              <div className="w-16 h-16 bg-brand-brown rounded-lg flex items-center justify-center text-white mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-white">
                To connect high altitude black cardamom farms directly with international buyers through sustainability, quality focussed processing and fair trade practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Our Core <span className="text-[#A35C10]">Values</span></h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
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
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#030303] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">What Makes Us <span className="text-[#A35C10]">Unique</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-white">
              <p>
                <strong className="text-white">Customer Friendly Approach:</strong> We offer reliable, customized solutions and maintain product uniformity for long-term business partnership.
              </p>
              <p>
                <strong className="text-white">Specialty Focus:</strong> Our expertise in ethnic spices and artisanal commodities enables us to make a distinct position in the market.
              </p>
              <p>
                <strong className="text-white">Low-Smoke Curing:</strong> Low-smoke curing techniques used to preserve the smoke aroma and authenticity of the product.
              </p>
              <p>
                <strong className="text-white">Traceable Quality:</strong> Promoting naturally cultivated Himalayan Cardamom with traceability and export-quality standards.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="/images/unique.png"
                alt="What Makes Us Unique"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
