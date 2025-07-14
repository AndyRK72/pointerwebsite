"use client";
import React from 'react';
import Layout from "../../components/Layout";
import { motion } from 'framer-motion';
import { Target, History, Users, Heart } from 'lucide-react';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Founder & CEO', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face' },
  { name: 'Maria Garcia', role: 'Head of Product', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face' },
  { name: 'James Smith', role: 'Lead Engineer', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face' },
  { name: 'Priya Patel', role: 'UX Designer', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' }
];

export default function About() {
  return (
    <Layout>
      <div className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                We're making printing
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                simple and sustainable
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Printer was born from a simple idea: to create a printing solution that is powerful for businesses, easy for people, and better for the planet.
            </p>
          </motion.div>
          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-3xl">
              <Target className="w-16 h-16 text-blue-600 mb-6" />
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                To empower organizations with intelligent, secure, and eco-friendly printing solutions that save time, reduce costs, and minimize environmental impact. We believe technology can transform even the most traditional processes into something extraordinary.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Team discussing ideas" className="rounded-3xl shadow-xl" />
            </div>
          </motion.div>
          {/* Story Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <History className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
              Founded in 2020 by a team of frustrated office managers and brilliant engineers, Printer started in a small garage with a big goal. We saw firsthand how outdated, inefficient, and wasteful traditional printing was. We knew there had to be a better way. After years of development and countless cups of coffee, we launched the platform you see today—a testament to our dedication to innovation and simplicity.
            </p>
          </motion.div>
          {/* Team Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Users className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Meet the Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map(member => (
                <div key={member.name} className="text-center">
                  <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                  <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-slate-600">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 