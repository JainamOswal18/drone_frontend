import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Compass as CompassIcon } from 'lucide-react';

interface CompassProps {
  heading: number;
}

export function Compass({ heading }: CompassProps) {
  const directions = [
    { label: 'N', angle: 0 },
    { label: 'NE', angle: 45 },
    { label: 'E', angle: 90 },
    { label: 'SE', angle: 135 },
    { label: 'S', angle: 180 },
    { label: 'SW', angle: 225 },
    { label: 'W', angle: 270 },
    { label: 'NW', angle: 315 }
  ];
  
  const rotation = useMotionValue(heading);
  const smoothRotation = useSpring(rotation, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });

  useEffect(() => {
    const currentRotation = rotation.get() % 360;
    const targetRotation = heading % 360;
    let delta = targetRotation - currentRotation;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    rotation.set(currentRotation + delta);
  }, [heading]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
    
      <div className="relative w-48 h-48 mx-auto">
        <div className="absolute inset-0">
          {/* Main border circle with directions */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700">
            {directions.map(({ label, angle }) => {
              const isMainDirection = label.length === 1;
              const radian = (angle - 90) * (Math.PI / 180);
              const radius = 80;  // Increased radius to match your reference
              const x = radius * Math.cos(radian);
              const y = radius * Math.sin(radian);
              
              return (
                <div
                  key={label}
                  className={`absolute ${
                    isMainDirection 
                      ? 'text-lg font-bold text-gray-800 dark:text-white' 
                      : 'text-sm font-medium text-gray-600 dark:text-gray-400'
                  }`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  {label}
                </div>
              );
            })}
          </div>
          
          <div className="absolute inset-2 rounded-full border border-gray-100 dark:border-gray-600" />
          
          {/* Tick marks */}
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = i * 5;
            const radian = (angle - 90) * (Math.PI / 180);
            const isMainMark = i % 18 === 0;
            const radius = 22;
            const x = radius * Math.cos(radian);
            const y = radius * Math.sin(radian);
            
            return (
              <div
                key={angle}
                className={`absolute ${
                  isMainMark 
                    ? 'w-0.5 h-2.5 bg-gray-400 dark:bg-gray-500' 
                    : 'w-px h-1.5 bg-gray-300 dark:bg-gray-600'
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${angle}deg)`,
                }}
              />
            );
          })}

          {/* Rotating needle */}
          <motion.div
            className="absolute inset-0"
            style={{ rotate: smoothRotation }}
          >
            <div className="absolute left-1/2 top-1/2 w-1 h-20 bg-gradient-to-b from-red-500 to-transparent origin-bottom -translate-x-1/2 -translate-y-full" />
          </motion.div>

          {/* Center heading display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-xl font-mono font-semibold text-gray-800 dark:text-white"
              key={heading}
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {Math.round(heading)}°
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}