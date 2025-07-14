import React from "react";
import Link from "next/link";
import { createPageUrl } from "../../utils/createPageUrl";
import { Button } from "../ui/button";
import { Printer } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", page: "Home" },
  { name: "About", page: "About" },
  { name: "Latest Updates", page: "Updates" },
];

export default function Header() {
  // Next.js does not have useLocation; use pathname if needed from next/navigation
  return (
    <header className="relative z-20 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link href={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Printer
              </span>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map(item => {
              const url = createPageUrl(item.page);
              // No isActive logic for now
              return (
                <Link 
                  key={item.name} 
                  href={url} 
                  className={`font-medium transition-colors text-slate-600 hover:text-slate-900`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Button variant="outline" className="border-slate-200 hover:border-slate-300">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
              Get Started
            </Button>
          </motion.div>
        </div>
      </nav>
    </header>
  );
} 