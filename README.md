# SwiftAir - Drone Tracker Dashboard 🚁

A modern, real-time drone tracking dashboard built with React, TypeScript, and WebSocket integration.

## Features 🌟

- **Real-time GPS Tracking**:
  - Live drone position on OpenStreetMap
  - Dynamic compass with heading indicator
  - Satellite connection status
  - Signal strength monitoring

- **Live Statistics**: 
  - Battery Level with color indicators
  - Altitude with progress bar
  - Speed monitoring
  - Precise GPS coordinates
  - Number of connected satellites
  - Signal strength meter

- **Interactive UI**:
  - Modern landing page with 3D drone model
  - Smooth animations with Framer Motion
  - Responsive design
  - Real-time data updates
  - Visual feedback for data changes

- **Navigation**:
  - Collapsible sidebar
  - Quick access to different views
  - Active state indicators
  - Emergency controls
  - Seamless page transitions

- **Advanced Features**:
  - Compass rose with cardinal directions
  - Satellite connection monitoring
  - Signal strength visualization
  - Battery status with color coding
  - Altitude and speed gauges
  - Interactive 3D drone visualization

## Tech Stack 💻

- React + TypeScript
- TailwindCSS
- Socket.IO
- React Leaflet
- Framer Motion
- Lucide Icons
- React Three Fiber
- React Circular Progressbar

## Getting Started 🚀

1. **Clone the repository**
```bash
git clone <repository-url>
cd drone-tracker
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure WebSocket**
- Open `src/lib/socket.ts`
- Update the WebSocket URL to your backend server

4. **Start the development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## Project Structure 📁

```
src/
├── components/
│   ├── Dashboard.tsx     # Stats and metrics
│   ├── MapComponent.tsx  # OpenStreetMap integration
│   ├── Navbar.tsx       # Vertical navigation
│   ├── Compass.tsx      # Heading indicator
│   ├── SatelliteInfo.tsx # Satellite status
│   └── DroneMesh.tsx    # 3D drone model
├── pages/
│   ├── Landing.tsx      # Landing page with 3D visualization
│   └── Dashboard.tsx    # Main dashboard view
├── lib/
│   └── socket.ts        # WebSocket connection
└── App.tsx             # Main application
```

## Usage 📱

1. **Landing Page**:
   - View 3D drone visualization
   - Explore team and features
   - Navigate to dashboard

2. **Dashboard**:
   - Use the collapsible sidebar for navigation
   - Monitor real-time drone statistics
   - View live map tracking
   - Check satellite connections
   - Monitor battery and speed

3. **Map Controls**: 
   - Zoom in/out using the mouse wheel
   - Pan by dragging
   - Click markers for additional information

4. **Live Updates**: 
   - Watch for the pulsing indicator
   - Monitor satellite connections
   - Check signal strength

5. **Compass**: 
   - View real-time heading
   - Reference cardinal directions
   - Monitor orientation changes

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License 📄

MIT License