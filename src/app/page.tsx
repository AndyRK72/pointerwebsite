'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Lighthouse Animation */}
          <div className="relative w-32 h-32 mb-6">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Lighthouse Base */}
              <path 
                d="M30,80 L70,80 L65,40 L35,40 Z" 
                fill="#4B5563" 
                className="shadow-md"
              />
              {/* Lighthouse Tower */}
              <path 
                d="M40,40 L60,40 L55,20 L45,20 Z" 
                fill="#6B7280" 
                className="shadow-md"
              />
              {/* Light Beam */}
              <path 
                d="M50,20 L30,0 L70,0 Z" 
                fill="#FCD34D" 
                className="opacity-50 animate-sweep"
                style={{
                  animation: 'sweep 3s infinite ease-in-out',
                  transformOrigin: '50% 100%'
                }}
              />
            </svg>
          </div>
          
          {/* Title and Subtitle */}
          <h1 className="text-5xl font-bold text-gray-800 mb-4">POINTER</h1>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
            Optimize every purchase. Maximize your rewards.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/optimize" 
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-2xl shadow-md transition-all duration-300 ease-in-out"
          >
            Start Optimizing
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Card Matching</h3>
              <p className="text-gray-600">Get the best card for every purchase</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Reward Maximization</h3>
              <p className="text-gray-600">Maximize cashback, miles, or points</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Future Insights</h3>
              <p className="text-gray-600">Plan points transfers like a forex trader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2025 Pointer. All rights reserved.
      </footer>
    </div>
  );
}
