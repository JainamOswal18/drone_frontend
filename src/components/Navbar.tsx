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
      <motion.div
        initial={{ width: 240 }}
        animate={{ width: isExpanded ? 240 : 72 }}
        className="h-screen fixed left-0 top-0 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700 shadow-lg"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <ChevronLeft className="w-5 h-5 text-gray-300" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-300" />
              )}
            </motion.button>
          </div>

          <Link
            to="/"
            className="w-full flex items-center justify-center mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                flex items-center gap-3 px-4 py-3
                bg-gradient-to-r from-green-600 to-green-700
                hover:from-green-700 hover:to-green-800
                text-white rounded-lg shadow-md
                hover:shadow-lg transition-all duration-200
                ${isExpanded ? 'w-full' : 'w-[48px] justify-center'}
              `}
            >
              <ArrowLeft className="w-5 h-5" />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="font-medium"
                  >
                    Back to Home
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Link>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.label}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveItem(item.label)}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    activeItem === item.label
                      ? 'bg-green-900/50 text-green-500'
                      : 'text-gray-300 hover:bg-gray-700/50'
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
                      className="ml-auto bg-green-900/50 text-green-500 text-xs font-medium px-2 py-0.5 rounded-full"
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