import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { CircleAll } from "../components/models/CircleBtn/CircleAll";
import { CircleUpPart } from "../components/models/CircleBtn/CircleUpPart";
import { CircleBasePart } from "../components/models/CircleBtn/CircleBasePart";
import { Timeline } from "gsap/gsap-core";

export const TestBtn = ({ btnScale }) => {
  const circleRef = useRef(); // Like a fishing rod,Ref lets us can control the obj dynamicly.
  const [clicked, setClicked] = useState(false);
  const btnPosition = [0, 0, 0];

  // Update every frame of the animation.
  useFrame(() => {
    if (clicked && circleRef.current) {
      circleRef.current.position.y -= 0.01;
      if (circleRef.current.position.y <= 0.1) {
        setClicked(false);
        setTimeout(() => {
          circleRef.current.position.y = 0.25;
        }, 1500);
      }
    }
  });

  return (
    <>
      <Lighting />
      <OrbitControls enableZoom={false} enablePan={false} />
      {/* <ScrollControls pages={2} damping={0.5}> */}
      {/* <CircleAll scale={2.5} /> */}
      {/* </ScrollControls> */}

      <CircleUpPart
        ref={circleRef}
        scale={btnScale}
        position={btnPosition}
        onClick={() => setClicked(true)}
      />
      <CircleBasePart scale={btnScale} />
    </>
  );
};

export const Lighting = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[4, 2, 2]} />
    </>
  );
};
