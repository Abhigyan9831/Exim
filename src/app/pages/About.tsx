import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Eye, Award, Users, Leaf, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every product we source and deliver."
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
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Professional Service",
      description: "Expert handling and reliable delivery to meet global market demands."
    }
  ];

  return (
    <div>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1628884187093-55e511036c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGR8ZW58MXx8fHwxNzc3Mzc0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Agricultural field"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About M R EXIM</h1>
          <p className="text-xl text-gray-100">
            Indian firm trading in specialty agricultural commodities
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                M R EXIM is a leading Indian firm specializing in the trade of specialty agricultural commodities. Based in Kolkata, we serve quality-conscious markets across South East Asia and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our business is built on three core pillars: sustainable sourcing, professional services, and farm-centric relationships. We work directly with farmers and farming communities to ensure the highest quality products while promoting sustainable agricultural practices.
              </p>
              <p className="text-lg text-gray-600">
                As both importers and exporters, we bridge the gap between local producers and global markets, ensuring that quality ethnic spices and specialty agricultural products reach consumers worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769034283546-96ab6352ba45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcGljZXMlMjBjb2xvcmZ1bCUyMG1hcmtldHxlbnwxfHx8fDE3NzczNzQ4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Spices display"
                className="w-full h-48 object-cover rounded-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1699210260087-347545f89de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzcGljZXMlMjBjb2xvcmZ1bCUyMG1hcmtldHxlbnwxfHx8fDE3NzczNzQ4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Colorful spice powders"
                className="w-full h-48 object-cover rounded-lg mt-8"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1702057830533-2afff81a57f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzcGljZXMlMjBjb2xvcmZ1bCUyMG1hcmtldHxlbnwxfHx8fDE3NzczNzQ4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Spices in bags"
                className="w-full h-48 object-cover rounded-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1688278526565-5bb028024473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGR8ZW58MXx8fHwxNzc3Mzc0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wheat field"
                className="w-full h-48 object-cover rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-brand-grey p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-brand-brown rounded-lg flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To connect premium specialty agricultural commodities from sustainable farms to quality-conscious global markets, while empowering farming communities and promoting ethical trade practices.
              </p>
            </div>
            <div className="bg-brand-grey p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-brand-brown rounded-lg flex items-center justify-center text-white mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the most trusted partner in specialty agricultural commodity trading, recognized for our commitment to quality, sustainability, and community-driven growth across global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-brand-grey border border-gray-200 rounded-xl hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center text-brand-brown mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-brown text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">What Makes Us Unique</h2>
            <div className="space-y-6 text-lg text-amber-100">
              <p>
                <strong className="text-white">Quality Conscious Markets:</strong> We cater exclusively to markets that value premium quality and sustainable sourcing.
              </p>
              <p>
                <strong className="text-white">Professional Services:</strong> Our team brings decades of expertise in agricultural commodity trading, ensuring smooth transactions and reliable delivery.
              </p>
              <p>
                <strong className="text-white">Farm-Centric Relationships:</strong> We work directly with farming communities, fostering long-term partnerships that benefit both producers and consumers.
              </p>
              <p>
                <strong className="text-white">Specialty Focus:</strong> Our expertise in ethnic spices and specialty agricultural categories sets us apart in the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-grey p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Leadership
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="w-24 h-24 bg-brand-olive rounded-full flex items-center justify-center text-white text-3xl font-bold">
                SM
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Shoshi Mitra</h3>
                <p className="text-lg text-brand-brown mb-2">Board of Directors</p>
                <p className="text-gray-600">
                  Leading M R EXIM with a vision for sustainable growth and global excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
