'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Lighthouse + Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-yellow-300 rounded-full shadow-lg animate-sweep" />
          <h1 className="text-6xl font-extrabold tracking-tight">POINTER</h1>
        </div>

        {/* Subtitle */}
        <p className="text-2xl text-gray-600 mb-8 max-w-xl">
          Optimize every purchase. Maximize your rewards.
        </p>

        {/* CTA Button */}
        <Link
          href="#features"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300"
        >
          Start Optimizing
        </Link>
      </section>

      {/* FEATURES Section */}
      <section id="features" className="py-20 bg-gray-50 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Pointer?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-green-500 text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-3">Smart Card Matching</h3>
              <p className="text-gray-600">
                Automatically choose the best card for every purchase to maximize your rewards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-green-500 text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold mb-3">Reward Maximization</h3>
              <p className="text-gray-600">
                Get more cashback, miles, or points with zero effort.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-green-500 text-5xl mb-4">🔗</div>
              <h3 className="text-2xl font-semibold mb-3">Future Insights</h3>
              <p className="text-gray-600">
                Plan point transfers across loyalty programs like a currency trader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-white text-gray-400 text-center text-sm">
        © 2025 Pointer. All rights reserved.
      </footer>
    </div>
  );
}
