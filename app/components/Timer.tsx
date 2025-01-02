"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
export default function Timer() {
  return (
    <div className="h-screen">
      <Canvas
        orthographic
        style={{ background: "black" }}
        camera={{ position: [0, 0, 1], zoom: 800 }}
      >
        <Model />
      </Canvas>
    </div>
  );
}
