# Drone Tracker Dashboard 🚁

A modern, real-time drone tracking dashboard built with React, TypeScript, and WebSocket integration.

![Drone Tracker](https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000)

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
  - Smooth animations
  - Dark mode support
  - Responsive design
  - Real-time data updates
  - Visual feedback for data changes

- **Navigation**:
  - Collapsible sidebar
  - Quick access to different views
  - Active state indicators
  - Notification badges
  - Emergency controls

- **Advanced Features**:
  - Compass rose with cardinal directions
  - Satellite connection monitoring
  - Signal strength visualization
  - Battery status with color coding
  - Altitude and speed gauges

## Tech Stack 💻

- React + TypeScript
- TailwindCSS
- Socket.IO
- React Leaflet
- Framer Motion
- Lucide Icons
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

## Usage 📱

1. **Dark Mode**: Toggle between light and dark themes
2. **Navigation**: 
   - Use the collapsible sidebar for quick access
   - Monitor active sections
   - Check notification badges
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

## Project Structure 📁

```
src/
├── components/
│   ├── Dashboard.tsx    # Stats and metrics
│   ├── MapComponent.tsx # OpenStreetMap integration
│   ├── Navbar.tsx      # Vertical navigation
│   ├── Compass.tsx     # Heading indicator
│   ├── SatelliteInfo.tsx # Satellite status
│   └── ThemeToggle.tsx # Dark mode switch
├── lib/
│   └── socket.ts       # WebSocket connection
└── App.tsx            # Main application
```

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License 📄

MIT License