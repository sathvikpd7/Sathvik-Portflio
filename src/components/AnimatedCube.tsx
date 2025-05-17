import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

function Cube() {
  const meshRef = React.useRef<Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#00f2fe"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

const AnimatedCube: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default AnimatedCube;