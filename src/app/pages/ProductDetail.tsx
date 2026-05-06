import { useParams, Link, useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft, Package, MapPin, Award, FileText, Mail } from "lucide-react";
import { products } from "../data/products";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <Link to="/products" className="text-amber-700 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div>
      <section className="bg-brand-grey border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </button>
        </div>
      </section>

      <section className="py-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-white mb-6">
                {product.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Origin</div>
                    <div className="text-white/80">{product.origin}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <Package className="w-6 h-6 text-brand-brown flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white">Packaging</div>
                    <div className="text-white/80">{product.packaging.join(", ")}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {product.specifications && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-brand-brown" />
                      Specifications
                    </h2>
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                      <table className="w-full">
                        <tbody className="divide-y divide-gray-200">
                          {product.specifications.map((spec, index) => (
                            <tr key={index}>
                              <td className="py-3 font-medium text-white">{spec.label}</td>
                              <td className="py-3 text-white/80 text-right">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-brand-brown" />
                    Certifications
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium"
                      >
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-brown text-white rounded-lg font-semibold hover:opacity-90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Request a Quote
                </Link>
                <p className="mt-4 text-sm text-white/60">
                  Contact us for pricing, availability, and custom packaging options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-brand-grey border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.category}/${relatedProduct.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-brown transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {relatedProduct.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
