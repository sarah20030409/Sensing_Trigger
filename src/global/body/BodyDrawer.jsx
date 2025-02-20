import React, { useState, useEffect, forwardRef } from "react";
// import bodyDrawer from "@/assets/bodyImg/bodyDrawer.webp";
import InsideDrawer from "./components/InsideDrawer";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

const bodyDrawer = "/assets/bodyImg/bodyDrawer.webp";

/* RWD_MODE: Desktop(-1250px) | Tablet(1250px-740px)  | Mobile(740px-420px) */
const BodyDrawer = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [lastRouter, setLastRouter] = useState(location.pathname); // Record the last router
  const CLOSE_TIME = 300;
  const OPEN_TIME = 1000 + CLOSE_TIME;
  const DRAWER_ANIMATION = {
    initial: { translateY: "-97%" },
    animate: { translateY: isOpen ? -50 : "-97%" }, // true : false
    transition: { duration: 1, ease: [0.42, 0, 0.58, 1] },
  };

  const DRAWER_STYLE = () => {
    if (location.pathname == "/") return;
    // If home page , don't show drawer.
    return {
      backgroundImage: `url(${bodyDrawer})`,
      backgroundSize: "95% 100%",
    };
  };

  useEffect(() => {
    // If the last router is the same as the current router, don't do anything
    if (lastRouter === location.pathname) {
      setLastRouter(location.pathname);
      return;
    }

    // If not "/" ,can do close animation
    if (lastRouter !== "/" && location.pathname !== "/") {
      setIsOpen(false);
    }

    setLastRouter(location.pathname);

    // Open the drawer
    const timer = setTimeout(
      () => {
        setIsOpen(true);
      },
      location.pathname !== "/" ? OPEN_TIME : 0
    );

    return () => clearTimeout(timer);
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
