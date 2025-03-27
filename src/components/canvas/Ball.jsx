import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Sphere,
  MeshDistortMaterial,
  useProgress
} from "@react-three/drei";
import MobileBackground from "./MobileBackground";
import { useIsMobile } from "../../hooks/useIsMobile";

import CanvasLoader from "../Loader";

const Ball = ({ icon }) => {
  const isMobile = useIsMobile();
  const [isError, setIsError] = useState(false);
  const [decal] = useTexture([icon]);

  if (isMobile || isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-[280px] h-[280px] group">
          <img
            src={icon}
            alt="technology"
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={0.5}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <Float speed={1.75} rotationIntensity={1} floatIntensity={0.5}>
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#3d1c56"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </Sphere>
      </Float>
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  const isMobile = useIsMobile();
  const [isError, setIsError] = useState(false);
  const { progress } = useProgress();

  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl', {
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: true,
      preserveDrawingBuffer: true
    }) || canvas.getContext('experimental-webgl');

    if (!gl) {
      setIsError(true);
    }
  }, []);

  if (isMobile || isError) {
    return <Ball icon={icon} />;
  }

  return (
    <div className="w-28 h-28">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: true,
          failIfMajorPerformanceCaveat: true
        }}
        onError={() => setIsError(true)}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={isMobile ? 0.5 : 1}
            touchRotateSpeed={0.5}
          />
          <Ball icon={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
      {progress < 100 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default BallCanvas;