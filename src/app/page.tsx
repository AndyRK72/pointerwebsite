'use client';

import React from 'react';

function LighthouseIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="drop-shadow-xl">
      <ellipse cx="32" cy="60" rx="16" ry="4" fill="#E0E7EF"/>
      <rect x="28" y="36" width="8" height="20" rx="3" fill="#F3F4F6"/>
      <rect x="24" y="28" width="16" height="10" rx="3" fill="#F87171"/>
      <rect x="28" y="16" width="8" height="12" rx="2" fill="#F3F4F6"/>
      <rect x="26" y="10" width="12" height="6" rx="2" fill="#F87171"/>
      <rect x="30" y="4" width="4" height="6" rx="2" fill="#F3F4F6"/>
      <rect x="24" y="26" width="16" height="2" fill="#9CA3AF"/>
    </svg>
  );
}

function FeatureIconCard({icon, bg, children}: React.PropsWithChildren<{icon: React.ReactNode, bg: string}>) {
  return (
    <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 duration-300 flex flex-col items-center group">
      <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 ${bg} transition-all duration-300 group-hover:scale-110`}>{icon}</div>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 bg-gradient-radial from-blue-50 via-white to-blue-100">
        {/* Radial background accent */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-40" />
        </div>
        {/* Glassy Card */}
        <div className="relative z-10 bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl px-12 py-16 flex flex-col items-center max-w-2xl mx-auto">
          <div className="mb-6 animate-bounce-slow">
            <LighthouseIcon />
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 text-gray-900">POINTER</h1>
          <div className="w-16 h-1 bg-blue-200 rounded-full mb-6" />
          <p className="text-2xl md:text-3xl font-light text-gray-700 max-w-xl mb-10">Optimize every purchase. Maximize every reward.</p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-16 rounded-full text-2xl shadow-xl transition-all duration-300 transform hover:scale-105">Get Started</button>
        </div>
        {/* SVG Section Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180" style={{height:'60px'}}>
          <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C150,60 350,0 500,60 L500,00 L0,0 Z" fill="#EFF6FF" />
          </svg>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-28 bg-blue-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20">Why Pointer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            <FeatureIconCard bg="bg-green-100" icon={<svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="5" y="10" width="30" height="20" rx="5" fill="#34D399"/><rect x="5" y="16" width="30" height="4" fill="#10B981"/><rect x="10" y="24" width="10" height="3" rx="1.5" fill="#F3F4F6"/><circle cx="30" cy="26" r="2" fill="#F59E42"/><circle cx="34" cy="26" r="2" fill="#F59E42"/></svg>}>
              <h3 className="text-2xl font-semibold mb-3">Smart Card Matching</h3>
              <p className="text-gray-600 text-base">Instantly choose the best credit card for every purchase.</p>
            </FeatureIconCard>
            <FeatureIconCard bg="bg-yellow-100" icon={<svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#FDE68A"/><path d="M20 10v10l7 4" stroke="#F59E42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>}>
              <h3 className="text-2xl font-semibold mb-3">Maximized Rewards</h3>
              <p className="text-gray-600 text-base">Earn more cashback, points, and miles automatically.</p>
            </FeatureIconCard>
            <FeatureIconCard bg="bg-blue-100" icon={<svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="12" cy="28" r="5" fill="#60A5FA"/><circle cx="28" cy="12" r="5" fill="#2563EB"/><circle cx="28" cy="28" r="5" fill="#10B981"/><path d="M16 24L24 16" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round"/><path d="M17 28H23" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round"/><path d="M28 17V23" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round"/></svg>}>
              <h3 className="text-2xl font-semibold mb-3">Transfer Optimization</h3>
              <p className="text-gray-600 text-base">Plan points transfers across loyalty programs like a pro.</p>
            </FeatureIconCard>
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

// Custom slow bounce animation
// Add this to your globals.css:
// .animate-bounce-slow { animation: bounce 3s infinite; }
