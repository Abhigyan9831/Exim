import { Link } from "react-router";
import { Award, ShieldCheck, FileCheck, Leaf, Users, Globe2, ArrowRight } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      icon: <Award className="w-12 h-12" />,
      name: "ISO 22000:2018",
      status: "Certified"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      name: "Apeda",
      status: "Certified"
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      name: "FSSAI License",
      status: "Active"
    }
  ];

  return (
    <div>
      <section className="bg-brand-brown text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Certifications & Quality</h1>
          <p className="text-xl text-black/80">
            Committed to the highest standards of quality, safety, and sustainability
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We maintain rigorous certifications to ensure our products meet international quality and safety standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-brand-brown hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-brand-brown/10 rounded-lg flex items-center justify-center text-brand-brown mb-6">
                  {cert.icon}
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {cert.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-brand-grey shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
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
