import React, { useState, useEffect } from "react";
import bodyDrawer from "@/assets/bodyImg/bodyDrawer.webp";
import InsideDrawer from "./components/InsideDrawer";
import { motion, transform } from "motion/react";
import { useLocation } from "react-router-dom";

/* RWD_MODE: Desktop(-1250px) | Tablet(1250px-740px)  | Mobile(740px-420px) */
export default function BodyDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const CLOSE_TIME = 1500;
  const DRAWER_ANIMATION = {
    initial: { translateY: "-97%" },
    animate: { translateY: isOpen ? -50 : "-97%" }, // true : false
    transition: { duration: 3.2, ease: [0.42, 0, 0.58, 1] },
  };
  const DRAWER_STYLE = {
    backgroundImage: `url(${bodyDrawer})`,
    backgroundSize: "95% 100%",
  };
  useEffect(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(true);
    }, CLOSE_TIME);
  }, [location.pathname]);

  return (
    <div className="h-svh">
      <motion.div className=" FlexToCenter " {...DRAWER_ANIMATION}>
        <div
          className="bg-contain bg-no-repeat bg-center w-[100%]"
          style={DRAWER_STYLE}
        >
          <InsideDrawer />
        </div>
      </motion.div>
    </div>
  );
}
