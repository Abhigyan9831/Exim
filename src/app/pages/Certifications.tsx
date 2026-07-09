import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Award, ShieldCheck, Leaf, ArrowRight } from "lucide-react";
import { fetchPageBySlug } from "../wordpress";

export function Certifications() {
  const [wpData, setWpData] = useState<any>(null);

  useEffect(() => {
    fetchPageBySlug("certifications").then((page) => {
      if (page && page.acf) {
        setWpData(page.acf);
      }
    });
  }, []);

  const d = {
    heroTitle: wpData?.hero_title || "Certifications",
    heroSubtitle: wpData?.hero_subtitle || "Committed to the highest standards of quality, safety, and sustainability",
    title: wpData?.title || "Our Certifications",
    subtitle: wpData?.subtitle || "We maintain rigorous certifications to ensure our products meet international quality and safety standards",
    partnerTitle: wpData?.partner_title || "Ready to Partner With Us?",
    partnerSubtitle: wpData?.partner_subtitle || "Get in touch today to discuss your specialty agricultural commodity needs",
  };

  const certifications = [
    {
      icon: <Award className="w-12 h-12" />,
      name: wpData?.cert_1_name || "ISO 22000:2018",
      status: wpData?.cert_1_status || "Certified"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      name: wpData?.cert_2_name || "APEDA",
      status: wpData?.cert_2_status || "Certified"
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      name: wpData?.cert_3_name || "FSSAI",
      status: wpData?.cert_3_status || "Active"
    }
  ];

  return (
    <div>
      <section className="bg-brand-brown text-black py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{d.heroTitle}</h1>
          <p className="text-sm md:text-xl text-black/80">
            {d.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {d.title}
            </h2>
            <p className="text-sm md:text-xl text-white max-w-3xl mx-auto">
              {d.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 hover:border-brand-brown hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-brown/10 rounded-lg flex items-center justify-center text-brand-brown mb-6">
                  {cert.icon}
                </div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {cert.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-3 md:py-4 pb-12 md:pb-16 bg-brand-grey shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            {d.partnerTitle.includes("With Us") ? (
              <>
                {d.partnerTitle.split("With Us")[0]}
                <span className="text-[#A35C10]">With Us</span>
                {d.partnerTitle.split("With Us")[1]}
              </>
            ) : (
              d.partnerTitle
            )}
          </h2>
          <p className="text-sm md:text-xl text-white mb-8 max-w-2xl mx-auto">
            {d.partnerSubtitle}
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
