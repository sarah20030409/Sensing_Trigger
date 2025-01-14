import React from "react";
import floorImg from "@/assets/bodyImg/floor.webp";
import HeaderDesktop from "../header/HeaderDesktop";
import BodyDrawer from "../body/BodyDrawer";

/* RWD_MODE: Desktop | Tablet | Mobile */
export default function CombineTable({ RWD_MODE }) {
  return (
    <div className="" style={{ backgroundImage: `url(${floorImg})` }}>
      <div className="relative z-50">
        <HeaderDesktop />
      </div>
      <div className=" relative z-40">
        <BodyDrawer RWD_MODE={RWD_MODE} />
      </div>
    </div>
  );
}
