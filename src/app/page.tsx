'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* HERO Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="text-8xl mb-8 animate-bounce">🗼</div>
        <h1 className="text-7xl md:text-9xl font-extrabold mb-6 tracking-tight">
          Pointer
        </h1>
        <p className="text-3xl font-light text-gray-600 max-w-2xl mb-12">
          Optimize every purchase. Maximize every reward.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-12 rounded-full text-2xl transition-all duration-300 shadow-xl">
          Get Started
        </button>
      </section>

      {/* FEATURES Section */}
      <section id="features" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Why Choose Pointer?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 duration-300">
              <div className="text-green-500 text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-3">Smart Card Matching</h3>
              <p className="text-gray-600">
                Instantly choose the best credit card for every purchase.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 duration-300">
              <div className="text-green-500 text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold mb-3">Maximized Rewards</h3>
              <p className="text-gray-600">
                Earn more cashback, points, and miles automatically.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 duration-300">
              <div className="text-green-500 text-6xl mb-4">🔗</div>
              <h3 className="text-2xl font-semibold mb-3">Transfer Optimization</h3>
              <p className="text-gray-600">
                Plan point transfers across loyalty programs like a pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER Section */}
      <footer className="py-8 bg-white text-gray-400 text-center text-xs">
        © 2025 Pointer. All rights reserved.
      </footer>
      
    </div>
  );
}
