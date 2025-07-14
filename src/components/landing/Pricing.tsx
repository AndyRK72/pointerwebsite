import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Check, Zap, Crown, Building } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "Free",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 500 pages/month",
      "3 team members",
      "Basic analytics",
      "Email support",
      "Standard security"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    icon: Crown,
    price: "$29",
    period: "/month",
    description: "For growing teams that need more power",
    features: [
      "Up to 5,000 pages/month",
      "Unlimited team members",
      "Advanced analytics",
      "Priority support",
      "Enhanced security",
      "Custom integrations",
      "Mobile apps"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    icon: Building,
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited pages",
      "Unlimited users", 
      "Enterprise analytics",
      "24/7 phone support",
      "SOC 2 compliance",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Simple, transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan for your team. Upgrade or downgrade at any time.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              <div className={`bg-white border-2 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}>
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                      : 'bg-slate-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-slate-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-600 text-lg">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-3 text-lg font-medium ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                      : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-full">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">
              30-day money-back guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 