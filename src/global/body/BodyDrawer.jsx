import React from "react";
import bodyDrawer from "@/assets/bodyImg/bodyDrawer.webp";
import InsideDrawer from "./components/InsideDrawer";

/* RWD_MODE: Desktop(-1250px) | Tablet(1250px-740px)  | Mobile(740px-420px) */
export default function BodyDrawer({ RWD_MODE }) {
  return (
    <div className="h-svh flex justify-center align-top ">
      <div
        className="bg-contain bg-no-repeat bg-center w-[100%]"
        style={{
          backgroundImage: `url(${bodyDrawer})`,
          backgroundSize: "80% 95%",
        }}
      >
        {/* <h1 className="text-3xl ">{RWD_MODE}</h1> */}
        <InsideDrawer NAV_PAGE={"AboutUs"} />
      </div>
    </div>
  );
}
