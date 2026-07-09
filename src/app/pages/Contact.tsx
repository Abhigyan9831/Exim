import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { fetchPageBySlug } from "../wordpress";

export function Contact() {
  const [wpData, setWpData] = useState<any>(null);

  useEffect(() => {
    fetchPageBySlug("contact").then((page) => {
      if (page && page.acf) {
        setWpData(page.acf);
      }
    });
  }, []);

  const d = {
    heroTitle: wpData?.hero_title || "Contact Us",
    heroSubtitle: wpData?.hero_subtitle || "Get in touch with our team for inquiries, quotes, and partnerships",
    formTitle: wpData?.form_title || "Send Us a Message",
    infoTitle: wpData?.info_title || "Contact Information",
    address: wpData?.address || "P 209, Lake Town - Block B\nKolkata - 700089\nWest Bengal, India",
    phone: wpData?.phone || "+91 8334049664",
    email: wpData?.email || "info.mrexim@gmail.com",
    quickConnectTitle: wpData?.quick_connect_title || "Quick Connect",
    quickConnectDesc: wpData?.quick_connect_desc || "Have an urgent inquiry? Chat with us directly on WhatsApp for quick responses.",
    leadershipTitle: wpData?.leadership_title || "Leadership Contact",
    leaderName: wpData?.leader_name || "Shoshi Mitra",
    leaderRole: wpData?.leader_role || "Available for partnership discussions",
    locationTitle: wpData?.location_title || "Our Location",
    locationSubtitle: wpData?.location_subtitle || "Visit us at our office in Kolkata",
    mapQuery: wpData?.map_query || "P 209, Lake Town - Block B, Kolkata - 700089, West Bengal, India",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "general",
    message: ""
  });

  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      const element = document.getElementById("contact-form");
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://darkgray-curlew-850665.hostingersite.com/wp-json/mrexim/v1/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: formData.name.split(" ")[0],
            last_name: formData.name.split(" ").slice(1).join(" ") || "-",
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            subject: formData.inquiryType,
            message: formData.message,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", inquiryType: "general", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = "Hello M R EXIM, I would like to inquire about your products.";
    const whatsappUrl = `https://wa.me/${d.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

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

      <section id="contact-form" className="scroll-mt-20 py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{d.formTitle}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="+xx - ......."
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-white mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="quote">Request a Quote</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="export">Export Services</option>
                      <option value="import">Import Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  {submitted && <p className="text-green-400 text-sm">Thank you! We'll get back to you soon.</p>}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-brand-brown text-white rounded-lg font-semibold hover:bg-brand-brown transition-colors flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-white mb-4">{d.infoTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Address</div>
                      <div className="text-white/80 text-sm whitespace-pre-line">
                        {d.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Phone</div>
                      <a href={`tel:${d.phone}`} className="text-brand-brown hover:underline text-sm">
                        {d.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <a href={`mailto:${d.email}`} className="text-brand-brown hover:underline text-sm">
                        {d.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{d.quickConnectTitle}</h3>
                </div>
                <p className="text-center sm:text-left mb-4 text-green-50">
                  {d.quickConnectDesc}
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">{d.leadershipTitle}</h3>
                <div className="space-y-2">
                  <div className="text-white font-medium">{d.leaderName}</div>
                  <div className="text-sm text-brand-brown">{d.leaderRole}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{d.locationTitle}</h2>
            <p className="text-sm md:text-lg text-white/80">{d.locationSubtitle}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden h-64 md:h-96">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(d.mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="M R EXIM Office Location"
              className="w-full h-full grayscale invert opacity-80 hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
