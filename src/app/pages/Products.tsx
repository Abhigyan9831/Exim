import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, Filter } from "lucide-react";
import { products, productCategories } from "../data/products";

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="bg-brand-brown text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-black/80">
            Premium specialty agricultural commodities from sustainable sources
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-grey border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-white" />
              <span className="text-white">Filter by:</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-brand-brown text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              All Products
            </button>
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-brand-brown text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-white">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.category}/${product.id}`}
                  className="bg-brand-grey rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-brand-grey px-3 py-1 rounded-full text-sm font-medium text-brand-brown">
                      {productCategories.find(c => c.id === product.category)?.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-brand-brown transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">Origin: {product.origin}</span>
                      <span className="text-brand-brown font-medium group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-brand-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            We offer custom sourcing for specialty agricultural products. Contact us with your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-brand-brown text-white rounded-lg font-semibold hover:bg-brand-brown transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
