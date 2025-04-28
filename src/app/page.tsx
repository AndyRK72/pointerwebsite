'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="pt-24 pb-32 flex flex-col items-center text-center bg-white">
        {/* Small Animated Lighthouse */}
        <div className="mb-6">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="animate-bounce mx-auto">
            <path d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 16.27L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z" fill="#3B82F6"/>
          </svg>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4">POINTER</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-600 max-w-2xl mb-10">Optimize every purchase. Maximize every reward.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-16 rounded-full text-2xl shadow-xl transition-all duration-300">Get Started</button>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-28 bg-blue-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20">Why Pointer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300 flex flex-col items-center">
              <div className="text-green-500 text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold mb-3">Smart Card Matching</h3>
              <p className="text-gray-600 text-base">Instantly choose the best credit card for every purchase.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300 flex flex-col items-center">
              <div className="text-yellow-400 text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-semibold mb-3">Maximized Rewards</h3>
              <p className="text-gray-600 text-base">Earn more cashback, points, and miles automatically.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300 flex flex-col items-center">
              <div className="text-blue-500 text-6xl mb-6">🔗</div>
              <h3 className="text-2xl font-semibold mb-3">Transfer Optimization</h3>
              <p className="text-gray-600 text-base">Plan points transfers across loyalty programs like a pro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-white text-gray-400 text-center text-xs border-t border-gray-100">
        © 2025 Pointer. All rights reserved.
      </footer>
    </div>
  );
}
