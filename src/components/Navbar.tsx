import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Map,
  Settings,
  Activity,
  Camera,
  Radio,
  Battery,
  AlertCircle,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItem {
  icon: React.ElementType;
  label: string;
  badge?: number;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Dashboard' },
  { icon: Map, label: 'Map View' },
  { icon: Activity, label: 'Telemetry' },
  { icon: Camera, label: 'Camera Feed' },
  { icon: Radio, label: 'Controls', badge: 2 },
  { icon: Battery, label: 'Power' },
  { icon: Settings, label: 'Settings' },
  { icon: AlertCircle, label: 'Emergency' },
];

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className="fixed left-0 top-0 z-50">
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 text-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back Home</span>
      </Link>

      <motion.div
        initial={{ width: 240 }}
        animate={{ width: isExpanded ? 240 : 72 }}
        className="h-screen fixed left-0 top-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-3 top-8 bg-blue-500 text-white rounded-full p-1 shadow-lg"
        >
          {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </motion.button>

        <div className="p-4">
          <AnimatePresence>
            {isExpanded && (
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-lg font-semibold dark:text-white mb-6"
              >
                Navigation
              </motion.h2>
            )}
          </AnimatePresence>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.label}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveItem(item.label)}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    activeItem === item.label
                      ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="ml-3"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {item.badge && isExpanded && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs font-medium px-2 py-0.5 rounded-full"
                    >
                      {item.badge}
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </nav>
        </div>
      </motion.div>
    </div>
  );
}