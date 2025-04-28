'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data - replace with actual data from your backend
const mockCards = [
  { id: 1, name: 'Chase Sapphire Reserve', bank: 'Chase', rewards: ['Travel', 'Dining', 'Other'] },
  { id: 2, name: 'Amex Gold', bank: 'American Express', rewards: ['Dining', 'Groceries', 'Travel'] },
];

export default function Dashboard() {
  const [cards] = useState(mockCards);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Cards</h1>
          <Link
            href="/cards/add"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-2xl text-white bg-green-500 hover:bg-green-600 transition-all duration-300"
          >
            Add New Card
          </Link>
        </div>

        {/* Recommendation Module */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Recommendation</h2>
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-green-800">
              Based on your cards, your best card for <span className="font-semibold">Restaurants</span> is{' '}
              <span className="font-semibold">Chase Sapphire Reserve</span> (3x points)
            </p>
          </div>
        </div>

        {/* Card List */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {cards.map((card) => (
              <li key={card.id} className="p-6 hover:bg-gray-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{card.name}</h3>
                    <p className="text-sm text-gray-500">{card.bank}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {card.rewards.map((reward) => (
                        <span
                          key={reward}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                        >
                          {reward}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Edit</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                      <span className="sr-only">Delete</span>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 