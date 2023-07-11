import React from 'react';
import Glow from './Glow';
import { Sparkles, Shadow, ContactShadows, Billboard, Environment, BakeShadows } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'


const Sphere = ({ size = 1000, color = 'white', emissive, glow, ...props }) => (
    <mesh {...props}>
      
      <meshPhysicalMaterial roughness={0} color={color} emissive={emissive || color} envMapIntensity={0.2} />
      <Glow scale={size * 1.2} near={-25} color={glow || emissive || color} />
      <Sparkles count={500} scale={size * 2} size={800} speed={0}  />
      <Shadow rotation={[-Math.PI / 2, 0, 0]} scale={size} position={[, 0, 0]} color={emissive} opacity={0.5} />
    </mesh>
  );

  export default Sphere;