import React, { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { M_AllProduct } from "@/components/models/AllProdu/M_ALLproduct_base_HighColor";
import { M_CircleBTN } from "@/components/models/SingleButton/CircleBTN_HighColor";
import { M_TriangleBTN } from "@/components/models/SingleButton/TriangleBTN_HighColor";
import { M_SquareBTN } from "@/components/models/SingleButton/SquareBTN_HighColor";
import { M_PentagonBTN } from "@/components/models/SingleButton/PentagonBTN_HighColor";
import { Canvas } from "@react-three/fiber";
import { Circle, OrbitControls } from "@react-three/drei";

export default function ButtonNav() {
  return (
    <Canvas>
      <OrbitControls enablePan={false} enableZoom={false} />
      {/* Product group */}
      <group position={[0, 0, 0]}>
        <M_AllProduct />
        <SingleButton singleComp="CircleBTN" />
        <SingleButton singleComp="TriangleBTN" />
        <SingleButton singleComp="SquareBTN" />
        <SingleButton singleComp="PentagonBTN" />
      </group>
    </Canvas>
  );
}

export function SingleButton({ singleComp }) {
  const BUTTON_COMPONENTS = {
    CircleBTN: M_CircleBTN,
    TriangleBTN: M_TriangleBTN,
    SquareBTN: M_SquareBTN,
    PentagonBTN: M_PentagonBTN,
  };
  let SingleComp = BUTTON_COMPONENTS[singleComp];
  const buttonRef = useRef();
  const [clicked, setClicked] = useState(false);
  const RESET_DELAY = 1500;
  const PRESS_DEPTH = -0.2;
  const initialZ = 0;
  const btnPosition = [0, 0, initialZ];

  // Click Test
  useEffect(() => {
    console.log(clicked + "," + singleComp);
    setTimeout(() => {
      setClicked(false);
    }, RESET_DELAY);
  }, [clicked]);

  // Button Click animation
  useFrame(() => {
    if (clicked && buttonRef.current) {
      buttonRef.current.position.z -= 0.01;
      if (buttonRef.current.position.z <= PRESS_DEPTH) {
        setClicked(false);
        setTimeout(() => {
          buttonRef.current.position.z = 0;
        }, RESET_DELAY);
      }
    }
  });

  return (
    <SingleComp
      ref={buttonRef}
      position={btnPosition}
      onClick={() => setClicked(true)}
    />
  );
}
