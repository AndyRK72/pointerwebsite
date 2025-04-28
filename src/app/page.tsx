'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
        {/* Lighthouse and Title */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Placeholder for animated lighthouse */}
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 animate-sweep rounded-full shadow-md"></div>
          
          {/* Pointer Title */}
          <h1 className="text-5xl font-extrabold text-gray-900">POINTER</h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8">
          Optimize every purchase. Maximize your rewards.
        </p>

        {/* Call-to-Action Button */}
        <Link 
          href="/optimize" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300"
        >
          Start Optimizing
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Pointer?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-green-500 text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-2">Smart Card Matching</h3>
              <p className="text-gray-600">Automatically pick the best card for every purchase to maximize points.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-green-500 text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold mb-2">Reward Maximization</h3>
              <p className="text-gray-600">Get more cashback, miles, and rewards with every transaction.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="text-green-500 text-5xl mb-4">🔗</div>
              <h3 className="text-2xl font-semibold mb-2">Future Insights</h3>
              <p className="text-gray-600">Visualize points transfers and optimize across loyalty programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white text-gray-500 text-center text-sm">
        © 2025 Pointer. All rights reserved.
      </footer>
    </div>
  );
}
