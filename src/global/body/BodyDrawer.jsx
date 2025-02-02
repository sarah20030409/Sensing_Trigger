import React, { useState, useEffect, forwardRef } from "react";
import bodyDrawer from "@/assets/bodyImg/bodyDrawer.webp";
import InsideDrawer from "./components/InsideDrawer";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

/* RWD_MODE: Desktop(-1250px) | Tablet(1250px-740px)  | Mobile(740px-420px) */
const BodyDrawer = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const CLOSE_TIME = 300;
  const OPEN_TIME = 1000 + CLOSE_TIME;
  const DRAWER_ANIMATION = {
    initial: { translateY: "-97%" },
    animate: { translateY: isOpen ? -50 : "-97%" }, // true : false
    transition: { duration: 1, ease: [0.42, 0, 0.58, 1] },
  };
  const DRAWER_STYLE = () => {
    if (location.pathname == "/") return; // If home page , don't show drawer.
    return {
      backgroundImage: `url(${bodyDrawer})`,
      backgroundSize: "95% 100%",
    };
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, CLOSE_TIME);
    setTimeout(() => {
      setIsOpen(true);
    }, OPEN_TIME);
  }, [location.pathname]);

  return (
    <div className="h-svh" ref={ref}>
      <motion.div className=" FlexToCenter " {...DRAWER_ANIMATION}>
        <div
          className="bg-contain bg-no-repeat bg-center w-[100%]"
          style={DRAWER_STYLE()}
        >
          <InsideDrawer />
        </div>
      </motion.div>
    </div>
  );
});

export default BodyDrawer;
