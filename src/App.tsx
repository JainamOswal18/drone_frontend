import { useState, useEffect, Suspense } from 'react';
import { Rocket } from 'lucide-react';
import { MapComponent } from './components/MapComponent';
import { Dashboard } from './components/Dashboard';
import { Navbar } from './components/Navbar';
import { connectSocket, DroneData } from './lib/socket';
import { motion } from 'framer-motion';
import { debounce } from 'lodash';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const initialDroneData: DroneData = {
  latitude: 18.51957000,
  longitude: 73.85535000,
  altitude: 0,
  speed: 0,
  battery: 100,
  heading: 100,
  satellites: 0,
};

function App() {
  const [droneData, setDroneData] = useState<DroneData>(initialDroneData);
  const [hasNewData, setHasNewData] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const debouncedUpdate = debounce((data: DroneData) => {
      setDroneData(data);
      setHasNewData(true);
      setTimeout(() => setHasNewData(false), 1000);
    }, 100);

    const cleanup = connectSocket((data) => {
      console.log("Updating state with new data:", data);
      debouncedUpdate(data);
    });
  
    return () => {
      cleanup();
      debouncedUpdate.cancel();
    };
  }, []);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black relative"
        >
          <Navbar />
          <div className="ml-[72px] lg:ml-[240px] flex flex-col min-h-screen">
            <nav className="bg-gray-800/50 backdrop-blur-sm shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-16">
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Rocket className="h-8 w-8 text-green-500" />
                    <span className="ml-2 text-xl font-bold text-white">Drone Tracker</span>
                  </motion.div>
                </div>
              </div>
            </nav>

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 h-[600px]">
                  <MapComponent
                    latitude={droneData.latitude}
                    longitude={droneData.longitude}
                    altitude={droneData.altitude}
                    hasNewData={hasNewData}
                  />
                </div>
                <div className="lg:col-span-1">
                  <Dashboard data={droneData} hasNewData={hasNewData} />
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="mt-auto">
              <div className="border-t border-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <p className="text-center text-gray-400 text-lg">
                    Made with <span className="inline-block text-red-500 animate-pulse">❤</span> by Team Straw Hats
                  </p>
                </div>
              </div>
            </footer>
          </div>

          {/* Stars Background */}
          <div className="absolute inset-0 pointer-events-none">
            <Canvas style={{ pointerEvents: "none" }}>
              <Stars
                radius={300}
                depth={50}
                count={2000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
              />
            </Canvas>
          </div>
        </motion.div>
      } />
    </Routes>
  );
}

export default App;