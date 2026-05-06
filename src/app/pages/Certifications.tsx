import { Award, ShieldCheck, FileCheck, Leaf, Users, Globe2 } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      icon: <Award className="w-12 h-12" />,
      name: "ISO 22000:2018",
      description: "Food Safety Management System certification ensuring the highest standards in food safety throughout our supply chain.",
      status: "Certified"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      name: "Organic Certification",
      description: "Certified organic products sourced from farms following sustainable and chemical-free farming practices.",
      status: "Certified"
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      name: "FSSAI License",
      description: "Food Safety and Standards Authority of India certification for safe and quality food products.",
      status: "Active"
    },
    {
      icon: <Users className="w-12 h-12" />,
      name: "Fair Trade",
      description: "Commitment to fair pricing and ethical trading practices that benefit farming communities.",
      status: "Certified"
    },
    {
      icon: <Globe2 className="w-12 h-12" />,
      name: "Export License",
      description: "Authorized to export agricultural commodities to international markets with full compliance.",
      status: "Active"
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      name: "GMP Certified",
      description: "Good Manufacturing Practices certification ensuring quality control in processing and packaging.",
      status: "Certified"
    }
  ];

  const qualityStandards = [
    {
      title: "Quality Assurance",
      points: [
        "Rigorous quality checks at every stage",
        "Laboratory testing for purity and safety",
        "Regular audits and inspections",
        "Traceability from farm to delivery"
      ]
    },
    {
      title: "Sustainable Practices",
      points: [
        "Support for organic farming methods",
        "Reduction of environmental impact",
        "Water conservation initiatives",
        "Biodiversity preservation"
      ]
    },
    {
      title: "Ethical Trading",
      points: [
        "Fair prices to farmers",
        "Community development programs",
        "Transparent supply chains",
        "Worker welfare and safety"
      ]
    }
  ];

  return (
    <div>
      <section className="bg-brand-brown text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Certifications & Quality</h1>
          <p className="text-xl text-black/80">
            Committed to the highest standards of quality, safety, and sustainability
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
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
                <h3 className="text-2xl font-bold text-white mb-3">
                  {cert.name}
                </h3>
                <p className="text-white/80">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Quality Standards
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Beyond certifications, we follow comprehensive quality and ethical standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {standard.title}
                </h3>
                <ul className="space-y-3">
                  {standard.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-brown rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-brown text-black rounded-2xl p-12 text-center shadow-lg">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Our certifications and quality standards ensure that every product we deliver meets the highest international benchmarks for safety, sustainability, and ethical sourcing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-black/70 font-medium">Quality Tested</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6+</div>
                <div className="text-black/70 font-medium">Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-black/70 font-medium">Farm Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
