import React from "react";
import { TestBtn } from "../pages/TestBtn";
import { Canvas } from "@react-three/fiber";
//hii

export default function HomeScene() {
  return (
    <>
      <div className="h-svh bg-white">
        <Canvas camera={{ position: [3, 3, 3] }}>
          <TestBtn btnScale={2.5} />
        </Canvas>
      </div>
    </>
  );
}
