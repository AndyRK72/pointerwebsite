import React, { useState, useEffect } from 'react';
import { Update } from '../entities/Update';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ArrowRight, Calendar, User } from 'lucide-react';
// import { Skeleton } from '../components/ui/skeleton'; // Placeholder for loading skeleton

export default function Updates() {
  const [updates, setUpdates] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUpdates() {
      setIsLoading(true);
      // Replace with real fetch logic
      const data = await Update.list('-created_date');
      setUpdates(data);
      setIsLoading(false);
    }
    fetchUpdates();
  }, []);

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Latest from
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Printer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Stay up-to-date with our latest product announcements, company news, and feature releases.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-1 gap-12">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
                {/* <Skeleton className="w-full h-80 rounded-2xl" /> */}
                <div className="w-full h-80 rounded-2xl bg-slate-100 animate-pulse" />
                <div>
                  <div className="h-4 w-1/3 mb-4 bg-slate-100 animate-pulse" />
                  <div className="h-8 w-full mb-4 bg-slate-100 animate-pulse" />
                  <div className="h-20 w-full mb-6 bg-slate-100 animate-pulse" />
                  <div className="h-10 w-1/2 bg-slate-100 animate-pulse" />
                </div>
              </div>
            ))
          ) : (
            updates.map((update, index) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center group"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img 
                    src={update.cover_image} 
                    alt={update.title} 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(update.created_date), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{update.author}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {update.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 line-clamp-3">
                    {update.summary}
                  </p>
                  <a href="#" className="font-semibold text-blue-600 flex items-center gap-2">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 