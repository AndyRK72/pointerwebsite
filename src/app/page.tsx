'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 bg-gradient-to-b from-white to-blue-50">
        {/* Lighthouse Icon */}
        <div className="mb-6">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="animate-bounce">
            <path d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 16.27L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z" fill="#3B82F6"/>
          </svg>
        </div>
        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-6">
          Pointer
        </h1>
        {/* Subtitle */}
        <p className="text-3xl font-light text-gray-600 max-w-2xl mb-12">
          Optimize every purchase. Maximize every reward.
        </p>
        {/* CTA Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-12 rounded-full text-2xl shadow-xl transition-all duration-300">
          Get Started
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-5xl font-bold mb-20">
            Why Choose Pointer?
          </h2>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300">
              <div className="text-green-500 text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold mb-4">Smart Card Matching</h3>
              <p className="text-gray-600">
                Instantly choose the best credit card for every purchase.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300">
              <div className="text-green-500 text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-semibold mb-4">Maximized Rewards</h3>
              <p className="text-gray-600">
                Earn more cashback, points, and miles automatically.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300">
              <div className="text-green-500 text-6xl mb-6">🔗</div>
              <h3 className="text-2xl font-semibold mb-4">Transfer Optimization</h3>
              <p className="text-gray-600">
                Plan points transfers across loyalty programs like a pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-white text-gray-400 text-center text-xs">
        © 2025 Pointer. All rights reserved.
      </footer>

    </div>
  );
}
