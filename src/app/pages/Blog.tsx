import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, User, ArrowRight } from "lucide-react";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Spice Sourcing: Our Farm Partnership Model",
      excerpt: "Learn how our direct farm partnerships ensure quality while supporting sustainable agricultural practices and community development.",
      image: "https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGR8ZW58MXx8fHwxNzc3Mzc0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "April 15, 2026",
      author: "M R EXIM Team",
      category: "Sustainability"
    },
    {
      id: 2,
      title: "The Rise of Ethnic Spices in Global Markets",
      excerpt: "Exploring the growing demand for authentic ethnic spices and how quality-conscious consumers are reshaping the spice trade industry.",
      image: "https://images.unsplash.com/photo-1775769388716-d5507e86abc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZXMlMjBjb2xvcmZ1bCUyMG1hcmtldHxlbnwxfHx8fDE3NzczNzQ4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "April 10, 2026",
      author: "Shoshi Mitra",
      category: "Market Trends"
    },
    {
      id: 3,
      title: "Turmeric Quality: What to Look For",
      excerpt: "A comprehensive guide to understanding turmeric quality parameters including curcumin content, color value, and certification standards.",
      image: "https://images.unsplash.com/photo-1768729340925-2749ecdc211c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0dXJtZXJpYyUyMHNwaWNlJTIwcG93ZGVyfGVufDF8fHx8MTc3NzM3NDk5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "April 5, 2026",
      author: "M R EXIM Team",
      category: "Product Insights"
    },
    {
      id: 4,
      title: "Supporting Cooperative Farming in India",
      excerpt: "How community-based farming cooperatives are transforming agricultural practices and improving livelihoods in rural communities.",
      image: "https://images.unsplash.com/photo-1760635165251-5a3a81425a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwZmllbGR8ZW58MXx8fHwxNzc3Mzc0ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "March 28, 2026",
      author: "M R EXIM Team",
      category: "Community"
    },
    {
      id: 5,
      title: "Export Market Opportunities in South East Asia",
      excerpt: "Analyzing the growing demand for specialty agricultural commodities in South East Asian markets and emerging opportunities.",
      image: "https://images.unsplash.com/photo-1769614596747-860600b5f2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjYXJkYW1vbSUyMHNlZWRzJTIwc3BpY2V8ZW58MXx8fHwxNzc3Mzc0OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "March 20, 2026",
      author: "Shoshi Mitra",
      category: "Export Insights"
    },
    {
      id: 6,
      title: "Quality Certifications: Why They Matter",
      excerpt: "Understanding the importance of ISO, organic, and fair trade certifications in the global agricultural commodity trade.",
      image: "https://images.unsplash.com/photo-1769034283546-96ab6352ba45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzcGljZXMlMjBjb2xvcmZ1bCUyMG1hcmtldHxlbnwxfHx8fDE3NzczNzQ4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "March 15, 2026",
      author: "M R EXIM Team",
      category: "Quality Standards"
    }
  ];

  const categories = ["All", "Sustainability", "Market Trends", "Product Insights", "Community", "Export Insights", "Quality Standards"];

  return (
    <div>
      <section className="bg-brand-brown text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Blog & News</h1>
          <p className="text-xl text-black/80">
            Insights, updates, and stories from the world of specialty agricultural commodities
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-grey border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium bg-gray-100 text-gray-700 hover:bg-brand-brown hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-brand-grey rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-brand-brown text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-brown transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-brand-brown font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights on specialty agricultural commodities and sustainable trade practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-brand-brown text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
