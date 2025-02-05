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
  const [timeOpenLetter, setTimeOpenLetter] = useState(false);
  const handleOpen = () => {
    setOpenLetter(true);
  };

  const handleClose = () => {
    setOpenLetter(false);
  };

  useEffect(() => {
    let showTimeoutId, hideTimeoutId;

    if (openLetter) {
      showTimeoutId = setTimeout(() => {
        setTimeOpenLetter(true);
      }, 1000);
    }

    if (!openLetter) {
      showTimeoutId = setTimeout(() => {
        setTimeOpenLetter(false);
      }, 1000);
    }
    return () => {
      clearTimeout(showTimeoutId);
      clearTimeout(hideTimeoutId);
    };
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
      {!timeOpenLetter && (
        <CloseLetter
          className={`${openLetter ? "hidden" : ""}`}
          onOpen={handleOpen}
          isOpen={openLetter}
        />
      )}
      {timeOpenLetter && (
        <OpenLetter
          className={`${openLetter ? "" : "hidden"}`}
          onOpen={handleClose}
          isOpen={openLetter}
        />
      )}
    </div>
  );
}

export function CloseLetter({ onOpen, isOpen }) {
  return (
    <div
      className={`${"w-full absolute"} ${
        isOpen ? "animate-SlideUp" : "animate-SlideDown"
      }`}
    >
      <div
        className="h-[470px] w-full FlexToCenter bg-no-repeat bg-contain bg-center scale-90 rotate-3
        max-m_md:scale-75 max-Spec_RWD05:scale-[60%]"
        style={{ backgroundImage: `url(${closeLetter})` }}
      >
        <img
          className="h-[35%] mt-40 cursor-pointer animate-Waving
          max-Spec_RWD01:h-[25%] max-Spec_RWD01:mt-44"
          src={sealingWax}
          onClick={onOpen}
        />
      </div>
    </div>
  );
}

export function OpenLetter({ onOpen, isOpen }) {
  return (
    <div
      className={`${"w-full absolute"} ${
        isOpen ? "animate-SlideDown" : "animate-SlideUp"
      }`}
    >
      <div
        className="h-[580px] w-[540px] FlexToCenter items-end bg-no-repeat bg-contain bg-bottom mx-auto 
        max-m_md:scale-90 max-Spec_RWD05:scale-75 max-Spec_RWD01:scale-[70%]"
        style={{ backgroundImage: `url(${openLetter01})` }}
      >
        <div className="h-full w-full relative ">
          <div className="h-full w-full absolute -top-[10%] ">
            <SponsorPaper />
          </div>
          <div className="absolute bottom-0 center w-full">
            <img className="w-[540px]" src={openLetter02} alt="letter" />
          </div>
        </div>
      </div>
      <div>
        <div className="absolute top-[60%] right-[18%] ">
          <img
            className="h-[130px] cursor-pointer animate-Waving
          max-Spec_RWD05:h-[100px]"
            src={sealingWax}
            onClick={onOpen}
          />
        </div>
      </div>
    </div>
  );
}

export function SponsorPaper() {
  const images = Array(20).fill(testLogo);

  return (
    <div className="h-full">
      <div
        className="h-full bg-no-repeat bg-contain bg-bottom "
        style={{ backgroundImage: `url(${sponsorPaper})` }}
      >
        <div className="h-full FlexToCenter flex-wrap overflow-y-scroll mx-[2%] px-[2%] pl-[5%] pt-[10%] pb-[45%] ScrollBarStyle">
          {images.map((src, index) => (
            <img
              key={index}
              className="h-fit w-[87px] m-[1.2%] cursor-pointer hover:scale-105 
              max-Spec_RWD05:w-[95px] max-md:w-[100px] max-md:m-[2%]"
              src={src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
