"use client";

import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import HeartBeating from "./HeartBeating";

export default function Home() {
  return (
    <div className="h-screen">
      <Canvas>
        <CameraControls />
        <ambientLight intensity={0.05} />
        <directionalLight position={[-1, 1, 0]} />
        <HeartBeating />
      </Canvas>
    </div>
  );
}
