import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Flame, Leaf, Sprout, MapPin, ClipboardList, FileText, Droplet, Building2, Globe, Package, Send, ArrowRight, X, User, Mail, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

// Easily swap these URLs with your custom product image paths once ready
const PRODUCT_IMAGES = {
  view1: "/images/view1.webp", // Primary View
  view2: "/images/view2.webp", // Alternative View 1
  view3: "/images/view3.webp", // Alternative View 2
  view4: "/images/grid4.webp",  // Alternative View 3
  view5: "/images/ChatGPT Image May 23, 2026, 01_23_08 AM.webp" // Alternative View 4
};

const COUNTRY_LIST = [
  "Afghanistan|93", "Albania|355", "Algeria|213", "Andorra|376", "Angola|244", "Argentina|54", "Armenia|374", "Australia|61", "Austria|43", "Azerbaijan|994", "Bahamas|1", "Bahrain|973", "Bangladesh|880", "Barbados|1", "Belarus|375", "Belgium|32", "Belize|501", "Benin|229", "Bhutan|975", "Bolivia|591", "Bosnia and Herzegovina|387", "Botswana|267", "Brazil|55", "Brunei|673", "Bulgaria|359", "Burkina Faso|226", "Burundi|257", "Cambodia|855", "Cameroon|237", "Canada|1", "Cape Verde|238", "Chad|235", "Chile|56", "China|86", "Colombia|57", "Comoros|269", "Congo|242", "Costa Rica|506", "Croatia|385", "Cuba|53", "Cyprus|357", "Czech Republic|420", "Denmark|45", "Djibouti|253", "Dominican Republic|1", "Ecuador|593", "Egypt|20", "El Salvador|503", "Equatorial Guinea|240", "Eritrea|291", "Estonia|372", "Eswatini|268", "Ethiopia|251", "Fiji|679", "Finland|358", "France|33", "Gabon|241", "Gambia|220", "Georgia|995", "Germany|49", "Ghana|233", "Greece|30", "Guatemala|502", "Guinea|224", "Haiti|509", "Honduras|504", "Hungary|36", "Iceland|354", "India|91", "Indonesia|62", "Iran|98", "Iraq|964", "Ireland|353", "Israel|972", "Italy|39", "Jamaica|1", "Japan|81", "Jordan|962", "Kazakhstan|7", "Kenya|254", "Kiribati|686", "Kuwait|965", "Kyrgyzstan|996", "Laos|856", "Latvia|371", "Lebanon|961", "Lesotho|266", "Liberia|231", "Libya|218", "Liechtenstein|423", "Lithuania|370", "Luxembourg|352", "Madagascar|261", "Malawi|265", "Malaysia|60", "Maldives|960", "Mali|223", "Malta|356", "Mauritania|222", "Mauritius|230", "Mexico|52", "Moldova|373", "Monaco|377", "Mongolia|976", "Montenegro|382", "Morocco|212", "Mozambique|258", "Myanmar|95", "Namibia|264", "Nepal|977", "Netherlands|31", "New Zealand|64", "Nicaragua|505", "Niger|227", "Nigeria|234", "North Korea|850", "Norway|47", "Oman|968", "Pakistan|92", "Palau|680", "Palestine|970", "Panama|507", "Papua New Guinea|675", "Paraguay|595", "Peru|51", "Philippines|63", "Poland|48", "Portugal|351", "Qatar|974", "Romania|40", "Russia|7", "Rwanda|250", "Samoa|685", "San Marino|378", "Saudi Arabia|966", "Senegal|221", "Serbia|381", "Seychelles|248", "Sierra Leone|232", "Singapore|65", "Slovakia|421", "Slovenia|386", "Somalia|252", "South Africa|27", "South Korea|82", "Spain|34", "Sri Lanka|94", "Sudan|249", "Sweden|46", "Switzerland|41", "Syria|963", "Taiwan|886", "Tajikistan|992", "Tanzania|255", "Thailand|66", "Togo|228", "Tonga|676", "Tunisia|216", "Turkey|90", "Turkmenistan|993", "Uganda|256", "Ukraine|380", "United Arab Emirates|971", "United Kingdom|44", "United States|1", "Uruguay|598", "Uzbekistan|998", "Vanuatu|678", "Vatican City|379", "Venezuela|58", "Vietnam|84", "Yemen|967", "Zambia|260", "Zimbabwe|263"
];

// ─── Inquiry Modal ────────────────────────────────────────────────────────────
function InquiryModal({ onClose }: { onClose: () => void }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://darkgray-curlew-850665.hostingersite.com/wp-json/mrexim/v1/inquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: emailAddress,
            phone: `${countryCode}${phoneNumber}`,
            company: companyName,
            country: country,
            address: address,
            message: message,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => { onClose(); }, 2200);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={overlayRef}
      id="inquiry-modal-overlay"
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Modal Card */}
      <div
        id="inquiry-modal-card"
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col lg:flex-row"
        style={{ backgroundColor: "#0a0a0a", animation: "modalSlideIn 0.32s cubic-bezier(0.34,1.4,0.64,1) both" }}
      >
        {/* Close Button */}
        <button
          id="inquiry-modal-close"
          onClick={onClose}
          aria-label="Close inquiry form"
          className="absolute top-4 right-4 z-20 p-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Left: Form ── */}
        <div className="flex-1 p-8 sm:p-10" style={{ animation: "fadeUp 0.38s 0.08s both" }}>
          {/* Origin badge */}
          <div className="flex items-center gap-2 mb-5">
            <MapPin className="h-3.5 w-3.5 text-[#A35C10] flex-shrink-0" />
            <span className="text-xs text-white/40 tracking-wide">Eastern Himalayas, IN</span>
            <span className="text-[10px] font-semibold text-[#A35C10] border border-[#A35C10]/50 rounded px-1.5 py-0.5 uppercase tracking-wider">Export Grade</span>
          </div>

          <h2 className="text-3xl sm:text-[2.6rem] font-bold text-white leading-tight mb-8">
            Inquire About<br />
            <span className="text-[#A35C10]">Black Cardamom</span>
          </h2>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-14 text-center" style={{ animation: "fadeUp 0.3s both" }}>
              <div className="w-14 h-14 rounded-full bg-[#A35C10]/15 border border-[#A35C10]/40 flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-[#A35C10]" />
              </div>
              <p className="text-white text-lg font-semibold mb-1">Inquiry Sent!</p>
              <p className="text-white/40 text-sm">Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Client Info Block */}
              <div
                className="relative rounded-xl flex flex-col"
                style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)", animation: "fadeUp 0.38s 0.16s both" }}
              >
                {/* Dashed vertical connector */}
                <div
                  className="absolute border-l border-dashed border-white/15"
                  style={{ left: "2.35rem", top: "3.6rem", bottom: "3.6rem", width: "1px" }}
                />

                {/* First Name & Last Name row */}
                <div className="relative flex items-center gap-3 px-4 py-3.5">
                  <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full border border-white/15 bg-[#0a0a0a] flex items-center justify-center">
                    <User className="h-3.5 w-3.5 text-[#A35C10]" />
                  </div>
                  <div className="flex flex-1 gap-3">
                    <input
                      id="inquiry-first-name"
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="w-1/2 bg-transparent text-white text-sm placeholder-white/25 focus:outline-none border-r border-white/10 pr-3"
                      aria-label="First name"
                    />
                    <input
                      id="inquiry-last-name"
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="w-1/2 bg-transparent text-white text-sm placeholder-white/25 focus:outline-none"
                      aria-label="Last name"
                    />
                  </div>
                </div>

                <div className="mx-14 border-t border-white/[0.07]" />

                {/* Email Address */}
                <div className="relative flex items-center gap-3 px-4 py-3.5">
                  <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full border border-white/15 bg-[#0a0a0a] flex items-center justify-center">
                    <Mail className="h-3.5 w-3.5 text-[#A35C10]" />
                  </div>
                  <input
                    id="inquiry-email"
                    type="email"
                    placeholder="Email address"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    required
                    className="flex-1 bg-transparent text-white text-sm placeholder-white/25 focus:outline-none"
                    aria-label="Email address"
                  />
                </div>

                <div className="mx-14 border-t border-white/[0.07]" />

                {/* Phone Number */}
                <div className="relative flex items-center gap-3 px-4 py-3.5">
                  <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full border border-white/15 bg-[#0a0a0a] flex items-center justify-center">
                    <Phone className="h-3.5 w-3.5 text-[#A35C10]" />
                  </div>
                  <div className="flex flex-1 items-center gap-2">
                    <div className="relative flex items-center gap-1 shrink-0">
                      <span className="text-white text-sm min-w-[1.75rem] text-center">{countryCode}</span>
                      <ChevronDown className="w-3 h-3 text-white/40" />
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        aria-label="Select Country Code"
                      >
                        {COUNTRY_LIST.map((c) => {
                          const [name, code] = c.split("|");
                          return <option key={name} value={`+${code}`} style={{ background: "#161616", color: "white" }}>{name} (+{code})</option>
                        })}
                      </select>
                    </div>
                    <div className="w-[1px] h-4 bg-white/10 shrink-0" />
                    <input
                      id="inquiry-phone"
                      type="tel"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      className="flex-1 min-w-0 bg-transparent text-white text-sm placeholder-white/25 focus:outline-none"
                      aria-label="Phone number"
                    />
                  </div>
                </div>

                <div className="mx-14 border-t border-white/[0.07]" />

                {/* Company Name (optional) */}
                <div className="relative flex items-center gap-3 px-4 py-3.5">
                  <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full border border-white/15 bg-[#0a0a0a] flex items-center justify-center">
                    <Building2 className="h-3.5 w-3.5 text-[#A35C10]" />
                  </div>
                  <input
                    id="inquiry-company"
                    type="text"
                    placeholder="Company name (optional)"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="flex-1 bg-transparent text-white text-sm placeholder-white/25 focus:outline-none"
                    aria-label="Company name"
                  />
                </div>

                <div className="mx-14 border-t border-white/[0.07]" />

                {/* Country (dropdown) */}
                <div className="relative flex items-center gap-3 px-4 py-3.5">
                  <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full border border-white/15 bg-[#0a0a0a] flex items-center justify-center">
                    <Globe className="h-3.5 w-3.5 text-[#A35C10]" />
                  </div>
                  <div className="flex-1 relative flex items-center">
                    <select
                      id="inquiry-country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      className={`w-full bg-transparent text-sm focus:outline-none appearance-none cursor-pointer pr-8 ${country ? 'text-white' : 'text-white/25'}`}
                      aria-label="Country"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <option value="" disabled style={{ background: "#161616", color: "rgba(255,255,255,0.25)" }}>Select your country</option>
                      {COUNTRY_LIST.map((c) => {
                        const [name] = c.split("|");
                        return <option key={name} value={name} style={{ background: "#161616", color: "white" }}>{name}</option>
                      })}
                    </select>
                    <ChevronDown className="absolute right-0 w-4 h-4 text-white/40 pointer-events-none" />
                  </div>
                </div>

                <div className="mx-14 border-t border-white/[0.07]" />

                {/* Address */}
                <div className="relative flex items-center gap-3 px-4 py-3.5">
                  <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full border border-white/15 bg-[#0a0a0a] flex items-center justify-center">
                    <MapPin className="h-3.5 w-3.5 text-[#A35C10]" />
                  </div>
                  <input
                    id="inquiry-address"
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="flex-1 bg-transparent text-white text-sm placeholder-white/25 focus:outline-none"
                    aria-label="Address"
                  />
                </div>
              </div>

              {/* Message Block */}
              <div
                className="relative rounded-xl"
                style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)", animation: "fadeUp 0.38s 0.22s both" }}
              >
                <div className="relative flex items-start gap-3 px-4 py-3.5">
                  <div className="z-10 flex-shrink-0 w-8 h-8 mt-1 rounded-full border border-white/15 bg-[#0a0a0a] flex items-center justify-center">
                    <MessageSquare className="h-3.5 w-3.5 text-[#A35C10]" />
                  </div>
                  <textarea
                    id="inquiry-message"
                    placeholder="Drop a message... please mention the quantity as well."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={3}
                    className="flex-1 bg-transparent text-white text-sm placeholder-white/25 focus:outline-none resize-none pt-2"
                    aria-label="Message"
                  />
                </div>
              </div>

              {/* Action row */}
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2" style={{ animation: "fadeUp 0.38s 0.28s both" }}>
                <button
                  id="inquiry-submit-btn"
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#A35C10] text-white text-sm font-semibold rounded-lg hover:bg-[#b8680f] transition-all duration-200 shadow-[0_4px_18px_rgba(163,92,16,0.45)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isLoading ? "Sending..." : "Send Inquiry"}
                </button>
                <Link
                  to="/contact#contact-form"
                  onClick={onClose}
                  className="text-sm text-white/35 hover:text-white/70 transition-colors flex items-center gap-1 group"
                >
                  Need detailed specs?
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </form>
          )}
        </div>

        {/* ── Right: Product Image ── */}
        <div
          className="hidden lg:block relative w-[42%] flex-shrink-0"
          style={{ animation: "fadeIn 0.45s 0.12s both" }}
        >
          <ImageWithFallback
            noAnimation
            src="/images/grid4.webp"
            alt="Pure Himalayan Black Cardamom"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 flex flex-col justify-end p-7">
            <p className="text-[#d8c2aa] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">M R Exim</p>
            <p className="text-white text-base font-semibold leading-snug">Pure Himalayan<br />Black Cardamom</p>
            <p className="text-white/40 text-xs mt-2">Eastern Himalayas · Export Grade · Smoke Cured</p>
          </div>
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.93) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─── Products Page ─────────────────────────────────────────────────────────────
export function Products() {
  const [activeImage, setActiveImage] = useState(PRODUCT_IMAGES.view4);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div>
      {/* Hero Section - Exact Match with About Page Design */}
      <section className="relative h-[100dvh] md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback noAnimation
          src="/images/probg.webp"
          alt="Our Products Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Our Product</h1>
          <p className="text-sm md:text-xl text-gray-100">
            Harvested in the Himalayas, crafted for global kitchens
          </p>
        </div>
      </section>

      {/* Interactive Single Product Section - "Who We Are" Style 2-Column Grid Layout */}
      <section className="py-8 md:py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start relative">

            {/* Left Column: Product Information */}
            <div className="flex flex-col h-full justify-center order-2 lg:order-1">

              <h2 className="text-2xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1]">
                Pure Himalayan <br /> Black Cardamom
              </h2>

              <div className="flex items-center mb-10">
                <div className="h-[1px] w-12 bg-white/10"></div>
                <div className="w-2 h-2 rotate-45 border border-[#A35C10] mx-2"></div>
                <div className="h-[1px] w-12 bg-white/10"></div>
              </div>

              <div className="space-y-6 mb-10">
                <ScrollReveal delay={0}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                      <svg className="w-7 h-7" width="100%" height="100%">
                        <defs>
                          <filter id="invertProduct">
                            <feColorMatrix type="matrix" values="-1 0 0 0 1   0 -1 0 0 1   0 0 -1 0 1   0 0 0 1 0" />
                          </filter>
                          <mask id="mountainMaskProduct">
                            <image href="/images/WhatsApp Image 2026-05-23 at 00.14.21.webp" width="100%" height="100%" filter="url(#invertProduct)" preserveAspectRatio="xMidYMid meet" />
                          </mask>
                        </defs>
                        <rect width="100%" height="100%" fill="currentColor" mask="url(#mountainMaskProduct)" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Himalayan Origin</h3>
                      <p className="text-white/70 text-base leading-relaxed">Sourced from high altitude farms (to maintain higher essential oil content) in the Eastern Himalayan regions of India.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                      <Flame className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Smoke Cured</h3>
                      <p className="text-white/70 text-base leading-relaxed">Processed under controlled conditions and dried over open fires.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                      <Leaf className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Rich, Smoky & Robust</h3>
                      <p className="text-white/70 text-base leading-relaxed">Authentic smoky aroma with rich, full-bodied flavour. Purely hand-selected pods with high essential oil content,  ideal for stews, broths, biryani masala, braised and slow-cooked dishes.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                      <Sprout className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Sustainably Grown</h3>
                      <p className="text-white/70 text-base leading-relaxed">Naturally cultivated by local farmers, supporting rural livelihoods and preserving forest ecosystems.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                      <Droplet className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Essential Oil Content</h3>
                      <p className="text-white/70 text-base leading-relaxed">High essential oil content (1.5 - 2.5%) is maintained for preserving the authentic aroma of the prod.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <div className="flex gap-5 pt-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                      <ClipboardList className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-[#d8c2aa] font-semibold text-lg mb-3">Product Specifications</h3>
                      <div className="px-6 py-2 rounded-xl border border-white/10 bg-black/20 shadow-inner">
                        <ul className="flex flex-col">
                          <ScrollReveal delay={500}>
                            <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                              <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Product Type</span>
                              <span className="text-white/90 font-medium text-sm sm:text-right">Pure Black Cardamom</span>
                            </li>
                          </ScrollReveal>
                          <ScrollReveal delay={600}>
                            <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                              <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Processing Method</span>
                              <span className="text-white/90 font-medium text-sm sm:text-right">Smoke Drying</span>
                            </li>
                          </ScrollReveal>
                          <ScrollReveal delay={700}>
                            <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                              <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Colour</span>
                              <span className="text-white/90 font-medium text-sm sm:text-right">Dark Brown</span>
                            </li>
                          </ScrollReveal>
                          <ScrollReveal delay={800}>
                            <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                              <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Quality</span>
                              <span className="text-white/90 font-medium text-sm sm:text-right">Export Grades</span>
                            </li>
                          </ScrollReveal>
                          <ScrollReveal delay={900}>
                            <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                              <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Moisture Content</span>
                              <span className="text-white/90 font-medium text-sm sm:text-right">8 - 12% (customizable)</span>
                            </li>
                          </ScrollReveal>
                          <ScrollReveal delay={1000}>
                            <li className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/5 last:border-0 gap-1 sm:gap-4">
                              <span className="text-white/50 text-xs font-bold tracking-wider uppercase">Essential Oil</span>
                              <span className="text-white/90 font-medium text-sm sm:text-right">1.5 - 2.5%</span>
                            </li>
                          </ScrollReveal>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={1100}>
                  <div className="flex gap-5 pt-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#A35C10]">
                      <FileText className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-[#d8c2aa] font-semibold text-lg mb-1.5">Product Description</h3>
                      <p className="text-left text-white/70 text-base leading-relaxed">As a spice supplier from India, our Black Cardamom is native to the Himalayan region and features a distinct smoky aroma that serves as a crucial ingredient for stews, broths, braised foods and slow-cooked dishes. Pure Black cardamom is naturally processed using traditional drying methods and smoke-cured to preserve its authentic smoky aroma and intense taste, ideal for international culinary standards. Grown in the wild Himalayan terrains, each pod of cardamom narrates a story of cultural richness and culinary delight. It begins with meticulous farming and the cultivation carries a cultural significance which impacts the rural livelihoods. The rough dark pods work in the background, creating a robust smoky flavour that perfumes slow-cooked dishes to perfection. We strictly source from high-altitude farms for their rich essential oil content that produces the desired flavour profiles.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="pt-6">
                <button
                  id="inquire-now-btn"
                  onClick={() => setIsInquiryOpen(true)}
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 md:px-10 md:py-4 bg-[#A35C10] text-white text-sm md:text-base font-semibold rounded-lg hover:bg-[#A35C10]/90 transition-all duration-300 uppercase tracking-wider shadow-[0_4px_14px_0_rgba(163,92,16,0.39)] hover:shadow-[0_6px_20px_rgba(163,92,16,0.23)] hover:-translate-y-0.5"
                >
                  <span className="mr-2">INQUIRE NOW</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>
            </div>

            {/* Right Column: Product Image Frame & 3-Grid Thumbnails */}
            <div className="flex flex-col lg:sticky lg:top-24 order-1 lg:order-2">
              <div className="relative w-full rounded-2xl shadow-2xl border border-white/10 overflow-hidden bg-[#0A0A0A]">
                <ImageWithFallback noAnimation
                  src={activeImage}
                  alt="Premium Himalayan Black Cardamom"
                  className="w-full h-auto object-cover transition-all duration-300"
                />
              </div>

              {/* Row of Small Grids Horizontally for Alternate Views */}
              <div className="flex overflow-x-auto gap-4 mt-6 w-full snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view4)}
                  className={`relative aspect-square flex-none w-[calc(25%-0.75rem)] snap-start rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${activeImage === PRODUCT_IMAGES.view4
                    ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                    : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  aria-label="View fourth angle"
                >
                  <ImageWithFallback noAnimation
                    src={PRODUCT_IMAGES.view4}
                    alt="Cardamom View 4"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>

                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view5)}
                  className={`relative aspect-square flex-none w-[calc(25%-0.75rem)] snap-start rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${activeImage === PRODUCT_IMAGES.view5
                    ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                    : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  aria-label="View fifth angle"
                >
                  <ImageWithFallback noAnimation
                    src={PRODUCT_IMAGES.view5}
                    alt="Cardamom View 5"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>

                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view2)}
                  className={`relative aspect-square flex-none w-[calc(25%-0.75rem)] snap-start rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${activeImage === PRODUCT_IMAGES.view2
                    ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                    : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  aria-label="View alternative angle"
                >
                  <ImageWithFallback noAnimation
                    src={PRODUCT_IMAGES.view2}
                    alt="Cardamom View 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>

                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view3)}
                  className={`relative aspect-square flex-none w-[calc(25%-0.75rem)] snap-start rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${activeImage === PRODUCT_IMAGES.view3
                    ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                    : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  aria-label="View third angle"
                >
                  <ImageWithFallback noAnimation
                    src={PRODUCT_IMAGES.view3}
                    alt="Cardamom View 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>

                <button
                  onClick={() => setActiveImage(PRODUCT_IMAGES.view1)}
                  className={`relative aspect-square flex-none w-[calc(25%-0.75rem)] snap-start rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer focus:outline-none ${activeImage === PRODUCT_IMAGES.view1
                    ? "border-brand-brown opacity-100 scale-[0.98] shadow-md"
                    : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  aria-label="View primary angle"
                >
                  <ImageWithFallback noAnimation
                    src={PRODUCT_IMAGES.view1}
                    alt="Cardamom View 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Custom Inquiry Section */}
      <section className="py-3 md:py-4 pb-12 md:pb-16 bg-brand-grey shadow-inner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Custom Sourcing & Bulk Orders
          </h2>
          <p className="text-sm md:text-lg text-white/80 mb-8">
            We partner with clients globally for specialty spices and custom grade sourcing.
          </p>
          <Link
            to="/contact#contact-form"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-brand-brown text-white rounded-lg font-semibold hover:bg-brand-brown/80 transition-colors shadow-md text-sm md:text-base"
          >
            Request custom specifications
          </Link>
        </div>
      </section>

      {/* Inquiry Popup Modal */}
      {isInquiryOpen && <InquiryModal onClose={() => setIsInquiryOpen(false)} />}
    </div>
  );
}
