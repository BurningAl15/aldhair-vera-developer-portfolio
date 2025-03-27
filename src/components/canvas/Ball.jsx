import React, { Suspense, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Preload,
  useTexture,
  useProgress,
  MeshDistortMaterial,
  Decal
} from "@react-three/drei";
import { useIsMobile } from "../../hooks/useIsMobile";
import { motion } from "framer-motion";

const BallModel = ({ icon }) => {
  const [rotation, setRotation] = useState(0);
  const [textureError, setTextureError] = useState(false);
  const [map] = useTexture([icon]);

  useFrame((state) => {
    setRotation((prev) => prev + 0.005);
  });

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
        <mesh
          castShadow
          receiveShadow
          scale={2.75}
          rotation={[0, rotation, 0]}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#3d1c56"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
          />
          {!textureError && map && (
            <Decal
              position={[0, 0, 1]}
              rotation={[2 * Math.PI, 0, 6.25]}
              scale={1}
              map={map}
            />
          )}
        </mesh>
      </Float>
    </mesh>
  );
};

const MobileFallback = ({ icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleInteraction = useCallback(() => {
    setIsHovered(true);
    setIsAnimating(true);
    setTimeout(() => {
      setIsHovered(false);
      setIsAnimating(false);
    }, 1000);
  }, []);

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative w-[180px] h-[180px] group cursor-pointer"
        style={{ height: 'inherit' }}
        onClick={handleInteraction}
      >
        <motion.div
          className="w-full h-full bg-tertiary rounded-xl flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 5 : 0,
            backgroundColor: isAnimating ? "#4a1f7a" : "#3d1c56"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 flex items-center justify-center"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 10 : 0,
              y: isAnimating ? -10 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={icon}
              alt="technology"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-primary/5 rounded-xl"
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isAnimating ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const BallCanvas = ({ icon }) => {
  const isMobile = useIsMobile();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [webglContext, setWebglContext] = useState(null);

  useEffect(() => {
    const checkWebGLSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl', {
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: true,
          preserveDrawingBuffer: true,
          alpha: true,
          antialias: true,
          desynchronized: true,
          xrCompatible: true
        }) || canvas.getContext('experimental-webgl');

        if (!gl) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
          console.log('WebGL Renderer:', renderer);
          console.log('WebGL Vendor:', vendor);
        }

        setWebglContext(gl);

        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
      } catch (error) {
        console.error('WebGL Support Check Error:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    checkWebGLSupport();
  }, []);

  if (isMobile || isError) {
    return <MobileFallback icon={icon} />;
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: true,
          failIfMajorPerformanceCaveat: true,
          alpha: true,
          desynchronized: true,
          xrCompatible: true
        }}
        onError={(error) => {
          console.error('Three.js Error:', error);
          setIsError(true);
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={isMobile ? 0.5 : 1}
            touchRotateSpeed={0.5}
            enablePan={false}
            enableRotate={true}
            minDistance={10}
            maxDistance={30}
          />
          <BallModel icon={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
    </div>
  );
};

export default BallCanvas;