import { useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  latitude: number;
  longitude: number;
  altitude: number;
  hasNewData: boolean;
}

export function MapComponent({ latitude, longitude, altitude, hasNewData }: MapComponentProps) {
  const markerRef = useRef<L.Marker>(null);
  const mapRef = useRef<L.Map>(null);

  // Memoize the center position to prevent unnecessary re-renders
  const center = useMemo(() => [latitude, longitude] as [number, number], []);

  useEffect(() => {
    if (markerRef.current) {
      const marker = markerRef.current;
      marker.setLatLng([latitude, longitude]);
    }

    // Smoothly pan the map to new coordinates
    if (mapRef.current) {
      mapRef.current.panTo([latitude, longitude], {
        animate: true,
        duration: 0.5
      });
    }
  }, [latitude, longitude]);

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden shadow-lg dark:shadow-blue-500/20">
      <AnimatePresence>
        {hasNewData && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="absolute top-4 right-4 z-[1000] bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
          >
            Live Data
          </motion.div>
        )}
      </AnimatePresence>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="dark:brightness-75"
        ref={mapRef}
        preferCanvas={true}
        minZoom={3}
        maxZoom={18}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          updateWhenZooming={false}
          updateWhenIdle={true}
          keepBuffer={2}
          maxZoom={18}
          minZoom={3}
        />
        <Marker position={[latitude, longitude]} ref={markerRef}>
          <Popup>
            Altitude: {altitude}m
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}