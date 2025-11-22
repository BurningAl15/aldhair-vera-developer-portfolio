import React, { Suspense, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Preload,
  useProgress
} from "@react-three/drei";
import { useIsMobile } from "../../hooks/useIsMobile";
import { motion } from "framer-motion";

const ComputerModel = () => {
  const [rotation, setRotation] = useState(0);

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
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#3d1c56"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            metalness={0.5}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
      </Float>
    </mesh>
  );
};

const MobileFallback = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleInteraction = useCallback(() => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 1000);
  }, []);

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative w-[280px] h-[280px] group cursor-pointer"
        onClick={handleInteraction}
      >
        <motion.div
          className="w-full h-full bg-tertiary rounded-xl flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-white text-4xl"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 10 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            💻
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
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const ComputersCanvas = () => {
  const isMobile = useIsMobile();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dpr, setDpr] = useState([1, 2]);

  useEffect(() => {
    let timer;

    const checkWebGLSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl', {
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: true,
          preserveDrawingBuffer: true,
          alpha: true,
          antialias: true
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

        // adjust dpr based on device pixel ratio and mobile flag
        try {
          const devicePixelRatio = window.devicePixelRatio || 1;
          if (isMobile) {
            setDpr([1, Math.min(1.25, devicePixelRatio)]);
          } else {
            setDpr([1, Math.min(2, devicePixelRatio)]);
          }
        } catch (e) {
          setDpr([1, 1]);
        }

        // If we created a temporary context for detection, free it right away
        try {
          const loseExt = gl.getExtension('WEBGL_lose_context') || gl.getExtension('MOZ_WEBGL_lose_context') || gl.getExtension('WEBKIT_WEBGL_lose_context');
          if (loseExt && typeof loseExt.loseContext === 'function') {
            loseExt.loseContext();
          }
        } catch (e) {
          // ignore
        }

        timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('WebGL Support Check Error:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    checkWebGLSupport();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isMobile]);

  if (isMobile || isError) {
    return <MobileFallback />;
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        frameloop="demand"
        shadows
        dpr={dpr}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{
          // Do not preserve drawing buffer to reduce GPU/memory usage
          preserveDrawingBuffer: false,
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: true,
          failIfMajorPerformanceCaveat: true,
          alpha: true
        }}
        onError={(error) => {
          console.error('Three.js Error:', error);
          setIsError(true);
        }}
        onCreated={({ gl }) => {
          // Attach a DOM-level context lost listener to avoid React unknown-prop warnings
          try {
            if (gl && gl.domElement && typeof gl.domElement.addEventListener === 'function') {
              const handler = (ev) => {
                console.warn('WebGL context lost (DOM event) in ComputersCanvas', ev);
                setIsError(true);
              };
              gl.domElement.addEventListener('webglcontextlost', handler, false);
            }
          } catch (e) {
            // ignore
          }
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
          />
          {/* Add a small ambient light so models have base illumination */}
          <ambientLight intensity={0.35} />
          <ComputerModel />
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

export default ComputersCanvas;