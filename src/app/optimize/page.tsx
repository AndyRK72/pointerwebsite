'use client';

import { useState } from 'react';

const purchaseTypes = [
  'Restaurants',
  'Groceries',
  'Gas',
  'Travel',
  'Shopping',
  'Entertainment',
  'Other'
];

export default function Optimize() {
  const [formData, setFormData] = useState({
    purchaseType: '',
    amount: ''
  });

  const [recommendation, setRecommendation] = useState<{
    card: string;
    points: number;
    value: number;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual API call
    // Mock recommendation
    setRecommendation({
      card: 'Chase Sapphire Reserve',
      points: 150,
      value: 3
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Optimize Your Purchase</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="purchaseType" className="block text-sm font-medium text-gray-700">
                Purchase Type
              </label>
              <div className="mt-1">
                <select
                  id="purchaseType"
                  value={formData.purchaseType}
                  onChange={(e) => setFormData(prev => ({ ...prev, purchaseType: e.target.value }))}
                  className="block w-full rounded-2xl border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  required
                >
                  <option value="">Select a purchase type</option>
                  {purchaseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount ($)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="amount"
                  value={formData.amount}
                  onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                  className="block w-full rounded-2xl border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent rounded-2xl text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition-all duration-300"
            >
              Get Recommendation
            </button>
          </form>

          {recommendation && (
            <div className="mt-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Best Card for Your Purchase</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Recommended Card:</span>
                    <span className="font-medium text-gray-900">{recommendation.card}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Points Earned:</span>
                    <span className="font-medium text-gray-900">{recommendation.points} points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Reward Rate:</span>
                    <span className="font-medium text-gray-900">{recommendation.value}x</span>
                  </div>
                  <div className="pt-4 border-t border-green-200">
                    <p className="text-sm text-gray-600">
                      This recommendation is based on your card's reward structure and current promotions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 