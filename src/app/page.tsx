import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-400 to-green-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Maximize Your Points
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose the best credit card for every purchase
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/optimize"
                  className="rounded-2xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out"
                >
                  Start Optimizing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Step Process */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md">
                <div className="text-4xl mb-4">{step.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-sm text-gray-500">Trusted by thousands of users</p>
            <div className="mt-4 flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-600">4.9/5 Rating</span>
              </div>
              <div className="text-sm text-gray-600">10,000+ Cards Optimized</div>
              <div className="text-sm text-gray-600">$2M+ Rewards Earned</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const steps = [
  {
    emoji: "1️⃣",
    title: "Add your cards",
    description: "Input your credit cards and their rewards programs"
  },
  {
    emoji: "2️⃣",
    title: "Get your best card recommendation",
    description: "Receive instant recommendations for your purchases"
  },
  {
    emoji: "3️⃣",
    title: "Maximize rewards",
    description: "Earn more points and rewards with every purchase"
  }
];
