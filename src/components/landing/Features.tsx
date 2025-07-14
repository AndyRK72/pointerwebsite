import React from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Smartphone,
  Lock,
  Globe,
  Cpu
} from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Cloud-First Architecture",
    description: "Print from anywhere with our robust cloud infrastructure. No more VPN headaches or location restrictions.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and advanced access controls keep your documents secure.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Print jobs process 3x faster with our optimized queue management and intelligent routing.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless sharing, approval workflows, and real-time collaboration features for modern teams.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Detailed insights into printing patterns, costs, and usage optimization recommendations.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Native mobile apps with full functionality. Print directly from your phone or tablet.",
    color: "from-rose-500 to-red-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Powered by AI</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Everything you need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              revolutionize printing
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive platform transforms how organizations handle printing, 
            from small teams to enterprise deployments.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <div className="flex justify-center gap-4 mb-6">
                <Lock className="w-8 h-8" />
                <Globe className="w-8 h-8" />
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Reduce printing costs by up to 40%
              </h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Our intelligent optimization algorithms automatically reduce waste, 
                suggest cost-effective alternatives, and provide detailed cost tracking.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 