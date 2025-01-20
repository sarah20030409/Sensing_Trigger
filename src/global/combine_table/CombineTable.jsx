import React, { useEffect, useRef } from "react";
import floorImg from "@/assets/bodyImg/floor.webp";
import floorSticker01 from "@/assets/bodyImg/floorSticker01.webp";
import floorSticker02 from "@/assets/bodyImg/floorSticker02.webp";
import { useLocation } from "react-router-dom";
import HeaderDesktop from "../header/HeaderDesktop";
import BodyDrawer from "../body/BodyDrawer";

/* RWD_MODE: Desktop(-1250px) | Tablet(1250px-740px)  | Mobile(740px-420px) */
export default function CombineTable() {
  return (
    <div>
      <CombineTableFunc />
    </div>
  );
}

export function CombineTableFunc({}) {
  const targetRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") return;
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div
      className=" bg-contain bg-center"
      style={{ backgroundImage: `url(${floorImg})` }}
    >
      <div className="relative z-50">
        <HeaderDesktop />
      </div>
      <div className="w-full absolute  z-1">
        <div className="h-svh px-[5%] py-[10%] max-md:py-[30%] flex justify-between ">
          <div className="flex items-start">
            <img
              className="max-m_md:h-28 max-md:h-20"
              src={floorSticker01}
              alt="感受觸發"
            />
          </div>
          <div className="flex items-end">
            <img
              className="max-m_md:h-36 max-md:h-20 "
              src={floorSticker02}
              alt="感受觸發"
            />
          </div>
        </div>
      </div>
      <div className=" relative z-40">
        <BodyDrawer ref={targetRef} />
      </div>
    </div>
  );
}
