import { ArrowRight, ShoppingBag, Globe, Shield, Truck, Package, Store } from 'lucide-react';
import { INDIANET_EXPRESS_NAME, PRODUCT_URLS } from '../constants/site';
import ProductScreenshot from '../components/ProductScreenshot';

export default function ProductIndianetExpress() {
  return (
    <div className="pt-20 bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {INDIANET_EXPRESS_NAME} —{' '}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Shop Industrial Products
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              India's industrial e-commerce store — browse machinery and parts, order online with secure payment,
              sign in to track orders, and get reliable shipping across India and worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PRODUCT_URLS.indianetExpress}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-rose-500/30"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={PRODUCT_URLS.indianetExpress}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-rose-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-900/50"
              >
                Sell Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProductScreenshot
        src="/image.png"
        alt="Indianet Express industrial e-commerce homepage with product categories, secure checkout, and verified sellers"
        title={`${INDIANET_EXPRESS_NAME} — Industrial e-commerce`}
        description="Browse CNC machines, packaging lines, spare parts, and heavy equipment from verified sellers. Order online, pay securely, and get reliable shipping across India and worldwide."
        accentClass="from-rose-400 to-orange-400"
      />

      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why shop on {INDIANET_EXPRESS_NAME}</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Built for buyers who need industrial products with transparent pricing, verified sellers, and
                professional support from browse to delivery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <ShoppingBag className="w-12 h-12 text-rose-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Browse & Buy</h3>
                <p className="text-gray-400 text-sm">Explore all categories, compare products, and place orders online in minutes</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Shield className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
                <p className="text-gray-400 text-sm">Pay safely at checkout and sign in to track every order from purchase to delivery</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Truck className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Worldwide Delivery</h3>
                <p className="text-gray-400 text-sm">Fast, secure shipping across India and international destinations</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Verified Sellers</h3>
                <p className="text-gray-400 text-sm">Source from verified manufacturers and distributors built for industry buyers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How {INDIANET_EXPRESS_NAME} Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Browse Categories',
                  text: 'Explore machinery, parts, and industrial equipment from verified sellers across India',
                },
                {
                  step: '2',
                  title: 'Order Online',
                  text: 'Add products to your cart, pay securely, and confirm your purchase in one flow',
                },
                {
                  step: '3',
                  title: 'Track Your Order',
                  text: 'Sign in to your account to follow shipments from dispatch through delivery',
                },
                {
                  step: '4',
                  title: 'Sell on the Platform',
                  text: 'Manufacturers and distributors can register as vendors and list products for buyers worldwide',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-600 to-orange-600 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <Package className="w-10 h-10 text-rose-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">For Buyers</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Discover industrial products, compare options, and order with secure checkout and order tracking.
                </p>
                <a
                  href={PRODUCT_URLS.indianetExpress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 font-semibold text-sm"
                >
                  Start Shopping <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <Store className="w-10 h-10 text-orange-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">For Sellers</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Join as a vendor, list your catalogue, and reach buyers looking for machinery, parts, and equipment.
                </p>
                <a
                  href={PRODUCT_URLS.indianetExpress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm"
                >
                  Register as Vendor <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href={PRODUCT_URLS.indianetExpress}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <ShoppingBag className="w-5 h-5" />
                Visit {INDIANET_EXPRESS_NAME}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
