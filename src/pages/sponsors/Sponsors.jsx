import React, { useState, useEffect } from "react";
import closeLetter from "@/assets/sponsorsImg/closeLetter.webp";
import openLetter01 from "@/assets/sponsorsImg/openLetter01.webp";
import openLetter02 from "@/assets/sponsorsImg/openLetter02.webp";
import sealingWax from "@/assets/sponsorsImg/SealingWax.webp";
import sponsorPaper from "@/assets/sponsorsImg/sponsorPaper.webp";
import tape01 from "@/assets/sponsorsImg/sponsorTape01.webp";
import tape02 from "@/assets/sponsorsImg/sponsorTape02.webp";
import testLogo from "@/assets/sponsorsImg/sponsorTest.webp";

export default function Sponsors() {
  const [openLetter, setOpenLetter] = useState(false);
  const handleOpen = () => {
    setOpenLetter(true);
  };

  const [showOpenLetter, setShowOpenLetter] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (openLetter) {
      timeoutId = setTimeout(() => {
        setShowOpenLetter(true);
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [openLetter]);

  return (
    <div className="h-full FlexToCenter items-center">
      <div>
        <img
          className="absolute h-[15%] top-[15%] left-[15%] opacity-90"
          src={tape01}
        />
        <img
          className="absolute h-[12%] right-[18%] bottom-[18%] opacity-90"
          src={tape02}
        />
      </div>
      <CloseLetter
        className={`${openLetter ? "hidden" : ""}`}
        onOpen={handleOpen}
        isOpen={openLetter}
      />
      {showOpenLetter && (
        <OpenLetter className={`${openLetter ? "" : "hidden"}`} />
      )}
    </div>
  );
}

export function CloseLetter({ onOpen, isOpen }) {
  return (
    <div className={`${"w-full absolute"} ${isOpen ? "animate-SlideUp" : ""}`}>
      <div
        className="h-[470px] w-full FlexToCenter bg-no-repeat bg-contain bg-center scale-90 rotate-3"
        style={{ backgroundImage: `url(${closeLetter})` }}
      >
        <img
          className="h-[35%] mt-40 cursor-pointer animate-Waving"
          src={sealingWax}
          onClick={onOpen}
        />
      </div>
    </div>
  );
}

export function OpenLetter() {
  return (
    <div className="w-full absolute animate-SlideDown">
      <div
        className="h-[470px] w-full FlexToCenter bg-no-repeat bg-contain bg-center scale-90 "
        style={{ backgroundImage: `url(${closeLetter})` }}
      ></div>
    </div>
  );
}
