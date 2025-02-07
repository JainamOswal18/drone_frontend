import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function DroneMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load the local model
  const { scene } = useGLTF('/models/scene.gltf');

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    // Gentle rotation
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]}>
      <primitive object={scene} />
    </mesh>
  );
}

// Ensure to preload the model for better performance
useGLTF.preload('/models/scene.gltf');
