import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TrendingUp, Users, Leaf, Award, ArrowRight, Globe2, ShieldCheck } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Sourcing",
      description: "Farm-linked partnerships ensuring quality and sustainability at every step."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Farming",
      description: "Supporting cooperative farming and empowering local communities."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving quality-conscious markets across South East Asia and beyond."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control and certifications for premium products."
    }
  ];

  const stats = [
    { value: "500+", label: "Farm Partners" },
    { value: "15+", label: "Countries Served" },
    { value: "20+", label: "Product Categories" },
    { value: "100%", label: "Quality Certified" }
  ];

  return (
    <div>
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1775769388716-d5507e86abc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZXMlMjBjb2xvcmZ1bCUyMG1hcmtldHxlbnwxfHx8fDE3NzczNzQ4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Colorful spices"
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
              Explore Products <ArrowRight className="w-5 h-5" />
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

      <section className="py-16 bg-brand-grey shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-brown mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose M R EXIM?
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Your trusted partner in specialty agricultural commodities trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      <section className="py-20 bg-brand-brown text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Farm-Centric Relationships
              </h2>
              <p className="text-xl text-black/90 mb-6">
                We believe in building lasting partnerships with farmers and communities. Our approach ensures sustainable practices, fair trade, and premium quality products that meet international standards.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Quality Conscious</div>
                    <div className="text-black/80">Meeting the highest international quality standards</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Professional Services</div>
                    <div className="text-black/80">Expert handling from farm to global markets</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg">Community Support</div>
                    <div className="text-black/80">Empowering farmers through cooperative initiatives</div>
                  </div>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGR8ZW58MXx8fHwxNzc3Mzc0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agricultural farm"
                className="w-full h-64 object-cover rounded-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761255240953-c571ba0b98d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGljZXMlMjBjb2xvcmZ1bCUyMG1hcmtldHxlbnwxfHx8fDE3NzczNzQ4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Colorful spices"
                className="w-full h-64 object-cover rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
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
