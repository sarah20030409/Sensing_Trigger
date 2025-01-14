import React from "react";
import bodyDrawer from "@/assets/bodyImg/bodyDrawer.webp";

/* RWD_MODE: Desktop | Tablet | Mobile */
export default function BodyDrawer({ RWD_MODE }) {
  if (RWD_MODE === "Tablet") {
    return (
      <>
        <div
          className="h-svh bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bodyDrawer})` }}
        >
          <h1 className="text-3xl ">Tablet</h1>
        </div>
      </>
    );
  } else if (RWD_MODE === "Mobile") {
    return (
      <>
        <div
          className="h-svh bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bodyDrawer})` }}
        >
          <h1 className="text-3xl ">Mobile</h1>
        </div>
      </>
    );
  } else if (RWD_MODE === "Desktop") {
    return (
      <>
        <div
          className="h-svh bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bodyDrawer})` }}
        >
          <h1 className="text-3xl ">Desktop</h1>
        </div>
      </>
    );
  }
}
