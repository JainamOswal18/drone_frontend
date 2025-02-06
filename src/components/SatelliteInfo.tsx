import React from 'react';
import { Satellite } from 'lucide-react';
import { motion } from 'framer-motion';

interface SatelliteInfoProps {
  satellites: number;
}

export function SatelliteInfo({ satellites }: SatelliteInfoProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Satellite className="w-5 h-5 text-blue-500" />
          <span className="font-semibold dark:text-white">Satellite Status</span>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
        >
          {satellites} Connected
        </motion.div>
      </div>
    </div>
  );
}