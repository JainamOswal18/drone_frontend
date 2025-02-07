import { useState, useEffect, Suspense } from "react";
import { MapPin, Zap, Leaf, Award, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
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

  const teamMembers = [
    {
      name: "Jainam",
      role: "Full Stack Developer",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEpXkBtS1RIvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727941261098?e=1744243200&v=beta&t=SDPcGc0gZud7PrpIm-6O-_n6PyXMIwnFG2-KTSsgBVU",
      social: {
        github: {
          url: "https://github.com/JainamOswal18",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        linkedin: {
          url: "https://www.linkedin.com/in/jainam-oswal/",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        twitter: {
          url: "#",
          target: "_self"
        }
      }
    },
    {
      name: "Rahul",
      role: "Frontend Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFIZjc05hzhSQ/profile-displayphoto-shrink_400_400/B56ZSuneBrGoAg-/0/1738096370272?e=1744243200&v=beta&t=OEoSe0UGp_4TIMdFFdE4fLiWTftiNVL5PesxUbpWTVo",
      social: {
        github: {
          url: "https://github.com/rahulYUV",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        linkedin: {
          url: "https://www.linkedin.com/in/r%C3%A3h%C5%ABl-kumar-214468268/",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        twitter: {
          url: "#",
          target: "_self"
        }
      }
    },
    {
      name: "Harsh",
      role: "Drone Engineer",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGpevItyeWInA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723918816794?e=1744243200&v=beta&t=rpRIBI9vd1Q_ssaODAN6ctRIFWvlWgF-zugnJq4t9l8",
      social: {
        github: {
          url: "#",
          target: "_self"
        },
        linkedin: {
          url: "https://www.linkedin.com/in/harsh167/",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        twitter: {
          url: "#",
          target: "_self"
        }
      }
    },
    {
      name: "Harshit",
      role: "Ml Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGm4_-Er5VLCA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704630144891?e=1744243200&v=beta&t=scg-a3kqDEx9y8Sy0MjwTfaiQlfkOWdnXMRs2XXVnW0",
      social: {
        github: {
          url: "#",
          target: "_self"
        },
        linkedin: {
          url: "https://www.linkedin.com/in/harshit-singh-a830b3285/",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        twitter: {
          url: "#",
          target: "_self"
        }
      }
    }
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
            <Canvas
              className="w-full h-full"
              onCreated={(state) => {
                // Optional: Only allow pointer events on visible objects
                state.setEvents({
                  filter: (intersections) =>
                    intersections.filter((i) => i.object.visible)
                });
              }}
            >
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
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800/50 backdrop-blur-lg border-green-500/20 rounded-lg text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-4 bg-gray-700/50 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-32 py-20 bg-gray-800/50 backdrop-blur-sm relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("/api/placeholder/1920/1080")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-green-500 ring-offset-4 ring-offset-gray-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-300 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.github.url}
                      target={member.social.github.target}
                      rel={member.social.github.rel}
                      className="p-2 rounded-full hover:bg-green-500/20 text-green-500"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.linkedin.url}
                      target={member.social.linkedin.target}
                      rel={member.social.linkedin.rel}
                      className="p-2 rounded-full hover:bg-green-500/20 text-green-500"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={member.social.twitter.url}
                      target={member.social.twitter.target}
                      className="p-2 rounded-full hover:bg-green-500/20 text-green-500"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Innerve 9 Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,175,80,0.1),transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.img
            src="https://aitoss.club/static/media/logo.1921dff9.svg"
            alt="Innerve 9 Hackathon"
            className="h-24 mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h2 
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Visit Innerve 9
            <span className="inline-block animate-bounce ml-4">🎮</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join us at ABES Institute of Technology's premier hackathon and be part of the future!
          </motion.p>
          <motion.div 
            className="group relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
            <motion.a
              href="https://www.innerve.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-12 py-6 bg-black rounded-full leading-none text-white text-lg font-semibold hover:text-white/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Adventure
              <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-8">
        <p className="text-center text-gray-400 text-lg">
          Made with <span className="inline-block text-red-500 animate-pulse">❤</span> by Team Straw Hats
        </p>
      </div>

      {/* Particle Effects Background */}
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

      {/* <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
      `}</style> */}
    </div>
  );
}

export default Landing;
