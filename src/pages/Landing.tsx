import { useState, useEffect, Suspense } from "react";
import { 
  MapPin, Moon, Sun, Zap, Leaf, Award, ChevronDown, Boxes 
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera,
  Environment,
  Stars 
} from "@react-three/drei";
import { DroneMesh } from "../components/DroneMesh";

export function Landing() {

  const features = [
    {
      title: "Cost-Effective Custom Drones",
      description: "Tailored drone solutions that fit your budget without compromising on quality.",
      icon: <Zap className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Reducing Carbon Footprint",
      description: "Eco-friendly delivery solutions that help protect our environment.",
      icon: <Leaf className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Award-Winning Innovation",
      description: "Showcasing groundbreaking technology at Innerve 9.",
      icon: <Award className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 relative transition-all duration-500">

      {/* Innerve 9 Logo at Top Left */}
      <motion.img
        src="https://aitoss.club/static/media/logo.1921dff9.svg"
        alt="Innerve 9 Hackathon"
        className="h-16 absolute top-6 left-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="space-y-8"
          >
            <h1 className="text-6xl font-bold text-white leading-tight">
              Revolutionizing Aerial Logistics with{" "}
              <span className="text-green-500">SwiftAir</span>{" "}
              <span className="inline-block animate-bounce">🚀</span>
            </h1>

            <p className="text-xl text-gray-300">
              Experience next-gen drone monitoring with real-time tracking, AI-powered navigation, and live data insights.
            </p>

            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Dashboard
              <MapPin className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Right Side - 3D Drone Animation */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="w-full h-[500px] relative"
          >
            <Canvas className="w-full h-full">
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <Suspense fallback={null}>
                <Environment preset="sunset" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <DroneMesh />
                <Stars 
                  radius={100} 
                  depth={50} 
                  count={5000} 
                  factor={4} 
                  saturation={0} 
                  fade 
                  speed={1}
                />
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={1}
                />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800/50 backdrop-blur-lg border-green-500/20 rounded-lg text-center transition-all duration-300 hover:shadow-xl">
              <div className="p-4 bg-gray-700/50 rounded-lg inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join Innerve 9 Section */}
      <div className="mt-32 text-center pb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Join Innerve 9</h2>
        <p className="text-xl text-gray-300 mb-8">Be part of the biggest innovation hackathon and shape the future!</p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={() => window.open("https://www.innerve.tech/", "_blank")}
          className="px-8 py-4 text-lg font-medium rounded-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform shadow-lg"
        >
          Visit Innerve 9
        </motion.button>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-8">
        <p className="text-center text-gray-400 text-lg">
          Made with <span className="inline-block text-red-500 animate-pulse">❤️</span> by Team Straw Hat
        </p>
      </div>

      {/* Add some particle effects in the background */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas>
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

      {/* Animations */}
      {/* <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style> */}
    </div>
  );
}

export default Landing;
