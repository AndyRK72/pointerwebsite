'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const rewardCategories = [
  'Travel',
  'Dining',
  'Groceries',
  'Gas',
  'Office Supplies',
  'Entertainment',
  'Other'
];

export default function AddCard() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    bank: '',
    rewards: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to save card
    console.log('Saving card:', formData);
    router.push('/dashboard');
  };

  const handleRewardToggle = (reward: string) => {
    setFormData(prev => ({
      ...prev,
      rewards: prev.rewards.includes(reward)
        ? prev.rewards.filter(r => r !== reward)
        : [...prev.rewards, reward]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Card</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Card Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="block w-full rounded-2xl border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="bank" className="block text-sm font-medium text-gray-700">
                Bank Name (Optional)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="bank"
                  value={formData.bank}
                  onChange={(e) => setFormData(prev => ({ ...prev, bank: e.target.value }))}
                  className="block w-full rounded-2xl border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reward Categories
              </label>
              <div className="grid grid-cols-2 gap-2">
                {rewardCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleRewardToggle(category)}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      formData.rewards.includes(category)
                        ? 'bg-green-100 text-green-800 border-2 border-green-500'
                        : 'bg-gray-100 text-gray-800 border-2 border-transparent hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 border border-gray-300 rounded-2xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-2xl text-sm font-medium text-white bg-green-500 hover:bg-green-600 transition-all duration-300"
              >
                Add Card
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 