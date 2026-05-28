import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export function Contact() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "general",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    const message = "Hello M R EXIM, I would like to inquire about your products.";
    const whatsappUrl = `https://wa.me/918334049664?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <section className="bg-brand-brown text-black py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-sm md:text-xl text-black/80">
            Get in touch with our team for inquiries, quotes, and partnerships
          </p>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-20 py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Send Us a Message</h2>
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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
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
                        placeholder="+91 12345 67890"
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

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-brand-brown text-white rounded-lg font-semibold hover:bg-brand-brown transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Address</div>
                      <div className="text-white/80 text-sm">
                        P 209, Lake Town - Block B<br />
                        Kolkata - 700089<br />
                        West Bengal, India
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Phone</div>
                      <a href="tel:8334049664" className="text-brand-brown hover:underline text-sm">
                        +91 8334049664
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <a href="mailto:info.mrexim@gmail.com" className="text-brand-brown hover:underline text-sm">
                        info.mrexim@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Quick Connect</h3>
                </div>
                <p className="text-center sm:text-left mb-4 text-green-50">
                  Have an urgent inquiry? Chat with us directly on WhatsApp for quick responses.
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
                <h3 className="text-lg font-bold text-white mb-3">Leadership Contact</h3>
                <div className="space-y-2">
                  <div className="text-white font-medium">Shoshi Mitra</div>
                  <div className="text-sm text-brand-brown">Available for partnership discussions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Location</h2>
            <p className="text-sm md:text-lg text-white/80">Visit us at our office in Kolkata</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden h-64 md:h-96">
            <iframe
              src="https://maps.google.com/maps?q=P%20209,%20Lake%20Town%20-%20Block%20B,%20Kolkata%20-%20700089,%20West%20Bengal,%20India&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
