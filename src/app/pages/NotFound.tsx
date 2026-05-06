import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2C2C2C] px-4">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-bold text-brand-brown mb-4">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-xl text-white/80 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 bg-brand-brown text-white rounded-lg font-semibold hover:opacity-90 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            to="/products"
            className="px-8 py-4 bg-white/10 text-white border-2 border-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
