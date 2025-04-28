'use client';

import React from 'react';

function AnimatedLighthouse() {
  return (
    <svg width="120" height="120" viewBox="0 0 64 64" fill="none" className="mx-auto drop-shadow-2xl">
      {/* Animated rays */}
      <g className="animate-pulse">
        <path d="M32 6 L32 0" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 12 L10 6" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
        <path d="M48 12 L54 6" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
      </g>
      {/* Lighthouse body */}
      <ellipse cx="32" cy="60" rx="16" ry="4" fill="#E0E7EF"/>
      <rect x="28" y="36" width="8" height="20" rx="3" fill="#F3F4F6"/>
      <rect x="24" y="28" width="16" height="10" rx="3" fill="#3B82F6"/>
      <rect x="28" y="16" width="8" height="12" rx="2" fill="#F3F4F6"/>
      <rect x="26" y="10" width="12" height="6" rx="2" fill="#3B82F6"/>
      <rect x="30" y="4" width="4" height="6" rx="2" fill="#F3F4F6"/>
      <rect x="24" y="26" width="16" height="2" fill="#9CA3AF"/>
    </svg>
  );
}

function FeatureIconCard({icon, bg, children}: React.PropsWithChildren<{icon: React.ReactNode, bg: string}>) {
  return (
    <div className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 hover:scale-105 duration-300 flex flex-col items-center group border border-blue-100">
      <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 ${bg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>{icon}</div>
      {children}
    </div>
  );
}

function HowItWorksStep({icon, title, text}: {icon: React.ReactNode, title: string, text: string}) {
  return (
    <div className="flex flex-col items-center text-center px-6">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4 text-3xl">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-500 text-base">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 bg-gradient-to-b from-blue-100 via-white to-blue-50 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-green-100 rounded-full blur-2xl opacity-20 animate-pulse-slow" />
        {/* Glassy Card */}
        <div className="relative z-10 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl px-14 py-20 flex flex-col items-center max-w-2xl mx-auto border border-blue-100">
          <div className="mb-8 animate-bounce-slow">
            <AnimatedLighthouse />
          </div>
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-4 text-gray-900 drop-shadow-lg">Pointer</h1>
          <div className="w-20 h-1 bg-blue-300 rounded-full mb-8" />
          <p className="text-3xl font-light text-gray-700 max-w-xl mb-12">Optimize every purchase.<br className="hidden md:block"/>Maximize every reward.</p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-20 rounded-full text-2xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200">Get Started</button>
        </div>
        {/* SVG Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0" style={{height:'80px'}}>
          <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 C150,80 350,0 500,80 L500,00 L0,0 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-32 bg-[#F8FAFC] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20 text-gray-900">Why Choose Pointer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            <FeatureIconCard bg="bg-green-100" icon={<svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#D1FAE5"/><path d="M28 14L18 26l-6-6" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="20" cy="20" r="18" stroke="#10B981" strokeWidth="2" fill="none"/></svg>}>
              <h3 className="text-2xl font-semibold mb-3">Smart Card Matching</h3>
              <p className="text-gray-600 text-base">Instantly know the best credit card for any purchase.</p>
            </FeatureIconCard>
            <FeatureIconCard bg="bg-yellow-100" icon={<svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#FEF9C3"/><path d="M20 10v10l7 4" stroke="#F59E42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="20" cy="20" r="18" stroke="#F59E42" strokeWidth="2" fill="none"/></svg>}>
              <h3 className="text-2xl font-semibold mb-3">Maximized Rewards</h3>
              <p className="text-gray-600 text-base">Earn more cashback, points, and miles effortlessly.</p>
            </FeatureIconCard>
            <FeatureIconCard bg="bg-blue-100" icon={<svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#DBEAFE"/><path d="M12 28C18 18 22 22 28 12" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/><circle cx="20" cy="20" r="18" stroke="#2563EB" strokeWidth="2" fill="none"/></svg>}>
              <h3 className="text-2xl font-semibold mb-3">Transfer Optimization</h3>
              <p className="text-gray-600 text-base">Visualize and maximize loyalty program point transfers.</p>
            </FeatureIconCard>
          </div>
        </div>
        {/* SVG Wave Divider */}
        <div className="w-full overflow-hidden leading-0 -mb-1" style={{height:'80px'}}>
          <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,80 C150,0 350,80 500,0 L500,80 L0,80 Z" fill="#F1F5F9" />
          </svg>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-28 bg-[#F1F5F9] border-t border-blue-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">How Pointer Works</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20">
            <HowItWorksStep icon={<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="16" rx="4" fill="#3B82F6"/><rect x="4" y="14" width="24" height="3" fill="#2563EB"/></svg>} title="Add Your Cards" text="Securely connect your credit cards in seconds." />
            <HowItWorksStep icon={<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M8 24L24 8" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/><circle cx="8" cy="24" r="3" fill="#10B981"/><circle cx="24" cy="8" r="3" fill="#10B981"/></svg>} title="Shop Anywhere" text="Pointer tells you which card to use for every purchase." />
            <HowItWorksStep icon={<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#F59E42"/><path d="M16 10v6l4 2" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>} title="Maximize Rewards" text="Watch your points and cashback grow automatically." />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-white text-gray-400 text-center text-xs border-t border-gray-100">
        © 2025 Pointer. All rights reserved.
      </footer>
    </div>
  );
}

// Add to globals.css:
// .animate-bounce-slow { animation: bounce 3s infinite; }
// .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
