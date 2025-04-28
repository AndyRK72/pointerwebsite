'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">POINTER</div>
          <div className="flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
            <Link 
              href="/optimize" 
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Maximize Your Rewards
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the perfect card for every purchase. 
            Never miss out on points, cashback, or miles again.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="/optimize" 
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all"
            >
              Start Optimizing
            </Link>
            <Link 
              href="#features" 
              className="text-gray-600 hover:text-gray-900 text-lg font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Pointer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold mb-4">Smart Card Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Instantly know which card to use for every purchase. 
                Our AI analyzes your cards and spending to maximize rewards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-6">💰</div>
              <h3 className="text-2xl font-semibold mb-4">Reward Maximization</h3>
              <p className="text-gray-600 leading-relaxed">
                Stop leaving money on the table. Get the best points, 
                cashback, or miles with every transaction.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-6">🔗</div>
              <h3 className="text-2xl font-semibold mb-4">Transfer Optimizer</h3>
              <p className="text-gray-600 leading-relaxed">
                Visualize and optimize points transfers across loyalty programs. 
                Make your points work harder for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-8">Ready to Maximize Your Rewards?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of smart shoppers who never miss out on rewards.
          </p>
          <Link 
            href="/optimize" 
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold">POINTER</div>
            <div className="flex items-center gap-8 text-gray-600">
              <Link href="#features" className="hover:text-gray-900">Features</Link>
              <Link href="/login" className="hover:text-gray-900">Login</Link>
              <Link href="/optimize" className="hover:text-gray-900">Get Started</Link>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400 text-sm">
            © 2025 Pointer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
