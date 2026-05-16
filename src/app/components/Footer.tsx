import { Link } from "react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-brown text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">M R EXIM</div>
            <p className="text-black/80 text-sm">
              Indian firm trading in Himalayan Black Cardamom, catering to quality conscious markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black/80 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-black/80 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-black/80 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-black/80 hover:text-black transition-colors font-medium">About Us</Link></li>
              <li><Link to="/products" className="text-black/80 hover:text-black transition-colors font-medium">Products</Link></li>
              <li><Link to="/certifications" className="text-black/80 hover:text-black transition-colors font-medium">Certifications</Link></li>
              <li><Link to="/blog" className="text-black/80 hover:text-black transition-colors font-medium">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Focus</h3>
            <ul className="space-y-2 text-black/80 text-sm font-medium">
              <li>Sustainable Sourcing</li>
              <li>Farm-Linked Partnerships</li>
              <li>Community Farming</li>
              <li>Ethnic Spices</li>
              <li>Specialty Categories</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-black/80 text-sm font-medium">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>P 209, Lake Town - Block B, Kolkata - 700089</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:8334049664" className="hover:text-black transition-colors">+91 8334049664</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:mrexim2026@gmail.com" className="hover:text-black transition-colors">mrexim2026@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 mt-8 pt-8 text-center text-black/60 text-sm">
          <p>&copy; {new Date().getFullYear()} M R EXIM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
