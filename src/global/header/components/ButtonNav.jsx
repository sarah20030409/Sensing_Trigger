import React, { useState, useRef, useEffect } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { M_AllProduct } from "@/components/models/AllProdu/M_ALLproduct_base_HighColor";
import { M_CircleBTN } from "@/components/models/SingleButton/CircleBTN_HighColor";
import { M_TriangleBTN } from "@/components/models/SingleButton/TriangleBTN_HighColor";
import { M_SquareBTN } from "@/components/models/SingleButton/SquareBTN_HighColor";
import { M_PentagonBTN } from "@/components/models/SingleButton/PentagonBTN_HighColor";
import { useNavigate } from "react-router-dom";
import {
  ButtonProvider,
  useButtonContext,
} from "@/global/combine_table/ButtonContext";
import { OrbitControls } from "@react-three/drei";

// Set Nav to Link path
export default function ButtonNav() {
  return (
    <ButtonProvider>
      <ButtonRotation />
    </ButtonProvider>
  );
}

export function ButtonRotation() {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const checkDevice = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsDesktop(!isTouchDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice); // Clean up the event listener
    };
  }, []);

  const ORBIT_OPTIONS = {
    enableZoom: false,
    enablePan: false,
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 2,
    minAzimuthAngle: -Math.PI / 3,
    maxAzimuthAngle: Math.PI / 3,
  };
  return (
    <Canvas>
      {isDesktop && <OrbitControls {...ORBIT_OPTIONS} />}
      <group>
        <M_AllProduct />
        <SingleButton singleComp="CircleBTN" NAV_PATH="/aboutUs" />
        <SingleButton singleComp="TriangleBTN" NAV_PATH="/product" />
        <SingleButton singleComp="SquareBTN" NAV_PATH="/projects" />
        <SingleButton singleComp="PentagonBTN" NAV_PATH="/sponsors" />
      </group>
    </Canvas>
  );
}

export function SingleButton({ singleComp, NAV_PATH }) {
  const BUTTON_COMPONENTS = {
    CircleBTN: M_CircleBTN,
    TriangleBTN: M_TriangleBTN,
    SquareBTN: M_SquareBTN,
    PentagonBTN: M_PentagonBTN,
  };

  let SingleComp = BUTTON_COMPONENTS[singleComp];
  const navigate = useNavigate();
  const buttonRef = useRef();
  const [clicked, setClicked] = useState(false);
  const [isRebounding, setIsRebounding] = useState(false); // Button Rebounding
  const { isAnyButtonAnimating, setIsAnyButtonAnimating } = useButtonContext(); // Record the state of the button (isn't clicked).

  const RESET_ANIMATION_DELAY = 1500;
  const PRESS_DEPTH = -0.2;
  const initialZ = 0;
  const btnPosition = [0, 0, initialZ];

  useFrame(() => {
    if (!buttonRef.current) return;

    if (
      !isRebounding &&
      clicked &&
      buttonRef.current.position.z > PRESS_DEPTH
    ) {
      buttonRef.current.position.z -= 0.01;

      if (buttonRef.current.position.z <= PRESS_DEPTH) {
        setClicked(false);
        setTimeout(() => {
          setIsRebounding(true); // Start Rebounding!!
        }, RESET_ANIMATION_DELAY);
      }
    }

    if (isRebounding && buttonRef.current.position.z < initialZ) {
      buttonRef.current.position.z += 0.01;

      if (buttonRef.current.position.z >= initialZ) {
        buttonRef.current.position.z = initialZ;
        setIsRebounding(false);
        setIsAnyButtonAnimating(false);
      }
    }
  });

  const handleClick = () => {
    // Prevent Double Click, when button is animating, can't be clicked again.
    if (isAnyButtonAnimating) return;

    setIsAnyButtonAnimating(true);
    setClicked(true);
    // When page switch , need wait for the animation to finish ↓
    navigate(NAV_PATH);
  };

  return (
    // ForwardRef problem, can't use onClick, but I don't want Change the content of the 3D model.
    <SingleComp
      ref={buttonRef}
      position={btnPosition}
      onClick={
        // setClicked(true); ---> Move to the handClick function
        handleClick
      }
    />
  );
}
