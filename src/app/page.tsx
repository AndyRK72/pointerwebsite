'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* HERO Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-blue-50 via-white to-blue-100">
        <div className="mb-8">
          {/* Lighthouse SVG */}
          <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto drop-shadow-lg">
            <rect x="28" y="40" width="8" height="16" rx="2" fill="#E5E7EB"/>
            <rect x="24" y="32" width="16" height="12" rx="3" fill="#F87171"/>
            <rect x="26" y="24" width="12" height="10" rx="2" fill="#F3F4F6"/>
            <rect x="28" y="12" width="8" height="12" rx="2" fill="#F87171"/>
            <rect x="26" y="8" width="12" height="6" rx="2" fill="#F3F4F6"/>
            <rect x="30" y="4" width="4" height="4" rx="2" fill="#F87171"/>
            <rect x="24" y="30" width="16" height="2" fill="#9CA3AF"/>
          </svg>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-gray-900">
          Pointer
        </h1>
        <p className="text-2xl md:text-3xl font-light text-gray-700 max-w-2xl mb-10">
          Optimize every purchase. <br className="hidden md:block" />Maximize every reward.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-14 rounded-full text-xl md:text-2xl transition-all duration-300 shadow-lg">
          Get Started
        </button>
      </section>

      {/* FEATURES Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Why Choose Pointer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {/* Feature 1: Smart Card Matching */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 duration-300 border border-gray-100">
              <div className="flex justify-center mb-5">
                {/* Credit Card SVG */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="10" width="40" height="28" rx="6" fill="#34D399"/>
                  <rect x="4" y="18" width="40" height="4" fill="#10B981"/>
                  <rect x="10" y="28" width="12" height="4" rx="2" fill="#F3F4F6"/>
                  <circle cx="36" cy="30" r="2" fill="#F59E42"/>
                  <circle cx="40" cy="30" r="2" fill="#F59E42"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Card Matching</h3>
              <p className="text-gray-600 text-base">
                Instantly choose the best credit card for every purchase.
              </p>
            </div>

            {/* Feature 2: Sales Forecast */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 duration-300 border border-gray-100">
              <div className="flex justify-center mb-5">
                {/* Chart SVG */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="28" width="4" height="10" rx="2" fill="#60A5FA"/>
                  <rect x="20" y="20" width="4" height="18" rx="2" fill="#2563EB"/>
                  <rect x="30" y="14" width="4" height="24" rx="2" fill="#1D4ED8"/>
                  <path d="M10 38L20 28L30 18L38 10" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="38" cy="10" r="3" fill="#2563EB"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Sales Forecast</h3>
              <p className="text-gray-600 text-base">
                Visualize spending trends and forecast your rewards growth.
              </p>
            </div>

            {/* Feature 3: Points Routing */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 duration-300 border border-gray-100">
              <div className="flex justify-center mb-5">
                {/* Routing SVG */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="36" r="5" fill="#F59E42"/>
                  <circle cx="36" cy="12" r="5" fill="#60A5FA"/>
                  <circle cx="36" cy="36" r="5" fill="#10B981"/>
                  <path d="M16 32L32 16" stroke="#6B7280" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M17 36H31" stroke="#6B7280" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M36 17V31" stroke="#6B7280" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Points Routing</h3>
              <p className="text-gray-600 text-base">
                Route points from any card to your preferred loyalty destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER Section */}
      <footer className="py-8 bg-white text-gray-400 text-center text-xs border-t border-gray-100">
        © 2025 Pointer. All rights reserved.
      </footer>
      
    </div>
  );
}
