import React, { useState, useEffect, useContext } from "react";
import sponsorContents from "@/pages/sponsors/sponsorContents.json";
import { CustomContext } from "@/global/CustomContext";
//這裡的Context作用是"賦值"

const closeLetter = "/assets/sponsorsImg/closeLetter.webp";
const openLetter01 = "/assets/sponsorsImg/openLetter01.webp";
const openLetter02 = "/assets/sponsorsImg/openLetter02.webp";
const sealingWax = "/assets/sponsorsImg/SealingWax.webp";
const sponsorPaper = "/assets/sponsorsImg/sponsorPaper.webp";
const tape01 = "/assets/sponsorsImg/sponsorTape01.webp";
const tape02 = "/assets/sponsorsImg/sponsorTape02.webp";
const testLogo = "/assets/sponsorsImg/sponsorTest.webp";
const KP_Logo = "/assets/sponsorsImg/KP_logo.webp";

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
          className="absolute h-[15%] top-[15%] left-[15%] opacity-90 max-md:h-[10%]"
          src={tape01}
        />
        <img
          className="absolute h-[12%] right-[18%] bottom-[18%] opacity-90 max-md:h-[10%]"
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
      className={`${" absolute"} ${
        isOpen ? "animate-SlideDown" : "animate-SlideUp"
      }`}
    >
      <div
        className="h-[600px] w-[540px] mb-[5%] FlexToCenter items-end bg-no-repeat bg-contain bg-bottom scale-95 mx-auto 
        max-m_md:h-[750px] max-m_md:scale-90 max-Spec_RWD05:scale-75 max-Spec_RWD01:scale-[65%] max-Spec_RWD01:-mb-[10%] max-Spec_RWD02:scale-[50%] max-sm:scale-[45%]"
        style={{ backgroundImage: `url(${openLetter01})` }}
      >
        <div className="h-full w-full relative">
          <div
            className="h-full w-full absolute px-[3%]
           max-Spec_RWD05:-top-[5%] max-md:-top-[10%] max-Spec_RWD01:-top-[20%] max-Spec_RWD02:-top-[25%]"
          >
            <SponsorPaper />
          </div>
          <div className="absolute bottom-0 center w-full pointer-events-none">
            <img
              className="w-[540px]"
              src={openLetter02}
              alt="2025國立臺北科技大學互動設計系：贊助商的資訊，請點擊圖片查看更多資訊。"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="absolute top-[60%] right-[18%] max-Spec_RWD02:right-[25%]">
          <img
            className="h-[130px] cursor-pointer animate-Waving
          max-Spec_RWD05:h-[100px] max-md:h-[90px] max-Spec_RWD02:h-[80px] "
            src={sealingWax}
            onClick={onOpen}
            alt="2025國立臺北科技大學互動設計系：贊助商的資訊，點擊封蠟開啟信封。"
          />
        </div>
      </div>
    </div>
  );
}

export function SponsorPaper() {
  const CONTENT = sponsorContents["SPONSOR"];
  const { setCurrentComponent, setSponsorIndex } = useContext(CustomContext);

  const SPONSOR_LOGO = [KP_Logo];

  const handleClick = (index) => {
    setCurrentComponent("sponsors");
    setSponsorIndex(index);
  };

  return (
    <div className="h-full">
      <div
        className="h-full bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: `url(${sponsorPaper})` }}
      >
        {/* <p className="LoadingTitle font-normal text-[35px] pt-[30%] max-m_md:pt-[45%] max-Spec_RWD01:pt-[50%] max-Spec_RWD01:text-[50px]">
          敬請期待
        </p> */}
        <div className="h-full FlexToCenter flex-wrap overflow-y-scroll mx-[2%] px-[2%] pl-[5%] pt-[10%] pb-[45%] ScrollBarStyle">
          {SPONSOR_LOGO.map((src, index) => (
            <div className="m-[1.5%]">
              <img
                key={index}
                className="h-[110px] w-[110px] cursor-pointer hover:scale-105 
                max-Spec_RWD05:w-[110px] max-Spec_RWD05:h-[110px] max-md:w-[130px] max-md:h-[130px] max-md:m-[5%]"
                src={src}
                // onClick={() => handleClick("0" + index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
