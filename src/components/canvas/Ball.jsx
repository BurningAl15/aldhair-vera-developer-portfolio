import React, { Suspense, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from "@react-three/drei";
import MobileBackground from "./MobileBackground";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  const [isError, setIsError] = useState(false);

  if (isError) {
    return (
      <div className="w-28 h-28 bg-tertiary rounded-full flex items-center justify-center">
        <img src={icon} alt="technology" className="w-16 h-16 object-contain" />
      </div>
    );
  }

  return (
    <div className="w-28 h-28">
      <Canvas
        frameloop='demand'
        dpr={[1, 2]}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: true
        }}
        onError={() => setIsError(true)}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
            touchRotateSpeed={0.5}
          />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
      {isError && (
        <div className="w-28 h-28 bg-tertiary rounded-full flex items-center justify-center">
          <img src={icon} alt="technology" className="w-16 h-16 object-contain" />
        </div>
      )}
    </div>
  );
};

export default BallCanvas