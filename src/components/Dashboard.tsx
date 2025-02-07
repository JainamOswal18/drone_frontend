import { Battery, Compass as CompassIcon, Gauge, MapPin, Navigation, Satellite } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { DroneData } from '../lib/socket';
import { Compass } from './Compass';
import { SatelliteInfo } from './SatelliteInfo';

interface DashboardProps {
  data: DroneData;
  hasNewData: boolean;
}

export function Dashboard({ data, hasNewData }: DashboardProps) {
  const getBatteryColor = (level: number) => {
    if (level > 70) return '#22c55e';
    if (level > 30) return '#eab308';
    return '#ef4444';
  };

  const stats = [
    {
      label: 'Latitude',
      value: data.latitude.toFixed(6),
      icon: MapPin,
    },
    {
      label: 'Longitude',
      value: data.longitude.toFixed(6),
      icon: Navigation,
    },
    {
      label: 'Altitude',
      value: `${data.altitude.toFixed(1)}m`,
      icon: CompassIcon,
      showBar: true,
      maxValue: 500,
    },
    {
      label: 'Speed',
      value: `${data.speed.toFixed(1)}km/h`,
      icon: Gauge,
      showBar: true,
      maxValue: 100,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-white">Drone Statistics</h2>
        
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4">
            <CircularProgressbar
              value={data.battery}
              text={`${data.battery}%`}
              styles={buildStyles({
                pathColor: getBatteryColor(data.battery),
                textColor: getBatteryColor(data.battery),
                trailColor: '#374151',
                textSize: '22px',
              })}
            />
          </div>
          <p className="text-center text-gray-400">Battery Level</p>
        </div>

        <div className="space-y-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-gray-700/50 backdrop-blur-sm p-3 rounded-lg">
                  <stat.icon className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </div>
              </div>
              
              {stat.showBar && (
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(parseFloat(stat.value) / stat.maxValue) * 100}%`,
                    }}
                    transition={{ type: 'spring', stiffness: 120 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">Orientation</h3>
        <Compass heading={data.heading} />
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700">
        <SatelliteInfo satellites={data.satellites} />
      </div>

      <AnimatePresence>
        {hasNewData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center text-sm text-green-500"
          >
            ● Live Data
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}