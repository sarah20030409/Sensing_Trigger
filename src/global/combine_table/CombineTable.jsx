import React from "react";
import floorImg from "@/assets/bodyImg/floor.webp";
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
  return (
    <div
      className=" bg-contain bg-center"
      style={{ backgroundImage: `url(${floorImg})` }}
    >
      <div className="relative z-50">
        <HeaderDesktop />
      </div>
      <div className=" relative z-40">
        <BodyDrawer />
      </div>
    </div>
  );
}
