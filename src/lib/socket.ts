import { io } from "socket.io-client";

// ✅ Connect to the backend WebSocket
export const socket = io("http://localhost:5000"); // Ensure this matches your backend URL

// Define the expected telemetry structure
export interface DroneData {
  latitude: number;
  longitude: number;
  altitude: number;
  speed: number;
  battery: number;
  heading: number;
  satellites: number;
}

// ✅ Function to listen for real-time telemetry updates
export const connectSocket = (callback: (data: DroneData) => void) => {
  socket.on("droneData", (data: DroneData) => {
    console.log("📡 [Frontend WebSocket] Received Data:", data); // ✅ Debugging log
    callback(data); // Pass data to the frontend state
  });

  return () => {
    socket.off("droneData", callback);
  };
};
