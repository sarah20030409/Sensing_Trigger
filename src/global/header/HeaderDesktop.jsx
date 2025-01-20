import React, { useState } from "react";
import ButtonNav from "./components/ButtonNav";
import headerTable from "@/assets/headerImg/headerTable.webp";
import ToolScrewdriver01 from "@/assets/headerImg/ToolScrewdriver01.webp";
import ToolScrewGroup from "@/assets/headerImg/ToolScrewGroup.webp";
import ToolGroup01 from "@/assets/headerImg/ToolGroup01.webp";
import ToolScrewdriver02 from "@/assets/headerImg/ToolScrewdriver02.webp";
import APRimg from "@/assets/headerImg/APR.webp";
import MAYimg from "@/assets/headerImg/MAY.webp";
import Logo01 from "@/assets/LogoFav.svg";
import Logo02 from "@/assets/SensingTriggerOrange.svg";

export default function HeaderDesktop() {
  const TABLE_IMG = { backgroundImage: `url(${headerTable})` };

  return (
    // Desk padding
    <div
      className="bg-cover bg-no-repeat bg-center px-[2%] py-[2%] mx-[1.5%] rounded-2xl max-md:rounded-xl"
      style={TABLE_IMG}
    >
      <div className=" h-svh relative">
        <div className="w-full absolute px-[5%] z-30 max-m_md:pt-[4%]">
          <div className="flex justify-between">
            <a href="https://www.instagram.com/ntut.ixd" target="_blank">
              <img
                className="w-[29%] cursor-pointer hover:-rotate-[360deg] max-md:w-[20%]"
                alt="感受觸發"
                src={Logo01}
              />
            </a>
            <a
              className="flex justify-end"
              href="https://www.facebook.com/NTUT110IXD/"
              target="_blank"
            >
              <img
                className="w-[110%] cursor-pointer hover:-rotate-[360deg] max-md:w-[75%]"
                src={Logo02}
              />
            </a>
          </div>
        </div>

        <div className="HeaderDeskDisplay z-1">
          <ToolGroupLeft />
        </div>

        <div className="FlexToCenter HeaderDeskDisplay z-20 ">
          <ButtonNav />
        </div>

        <div className="HeaderDeskDisplay z-2">
          <ToolGroupRight />
        </div>
        <div className="HeaderDeskDisplay bottom-0 right-0 z-2 max-md:hidden">
          <InfoDataBar />
        </div>
      </div>
      <p className="text-center HintText text-Cus_Blue ml-8 -translate-y-14 animate-pulse ">
        ↑觸發任一按鈕瀏覽頁面↑
      </p>
      <div className="hidden max-md:block">
        <InfoDataBar />
      </div>
    </div>
  );
}

export function ToolGroupLeft() {
  const TOOL_IMGS = [ToolScrewdriver01, ToolScrewGroup, ToolGroup01, Logo01];

  return (
    <div className="h-svh relative">
      {TOOL_IMGS.slice(0, 3).map((imgSrc, index) => {
        const imgClassName = [
          "absolute w-[23%]  animate-smallBounce3 ",
          "absolute top-1/3 left-[18%] w-[9%] animate-smallBounce1 ",
          "absolute top-[50%] left-[5%] w-[23%] animate-smallBounce2 ",
        ];

        const RWD_imgClassName = [
          "max-m_md:w-1/3  max-m_md:top-[10%] ",
          "max-m_md:w-[13%] max-m_md:left-[13%]  max-m_md:top-[50%] max-md:left-[5%] max-md:top-[45%] ",
          "max-m_md:w-1/4  max-m_md:top-[67%] max-md:top-[65%] max-md:w-[40%]",
        ];

        return (
          <img
            key={index}
            className={`${imgClassName[index]} ${RWD_imgClassName[index]}`}
            src={imgSrc}
            alt="感受觸發"
          />
        );
      })}
    </div>
  );
}

export function ToolGroupRight() {
  const imgClassName = [
    "absolute -top-10 right-[15%] w-[13%] animate-smallBounce3 ",
  ];

  const RWD_imgClassName = [
    "max-m_md:w-[18%]  max-m_md:top-[10%] max-md:top-[15%] max-md:w-[22%] max-md:right-0 max-Spec_RWD:w-[30%]",
  ];

  return (
    <div className="h-svh relative">
      <img
        className={`${imgClassName} ${RWD_imgClassName}`}
        src={ToolScrewdriver02}
      />
    </div>
  );
}

export function InfoDataBar() {
  const NormalDisplay = "absolute bottom-0 right-0";
  const MobileDisplay =
    "max-md:static max-md:flex max-md:justify-around max-md:align-top ";

  return (
    <div className={`${NormalDisplay} ${MobileDisplay}`}>
      {[0, 1, 2].map((index) => {
        const InfoTitle = ["校內展", "新一代設計展", "放視大賞"];
        const InfoStyle = [
          "InfoSmText ml-3",
          "InfoSmText tracking-widest ",
          "InfoSmText ml-3",
        ];
        const RWD_InfoStyle = ["max-m_md:ml-0 max-m_md:text-base"];
        const InfoStartDate = ["18", "09", "15"];
        const InfoEndDate = ["22", "12", "17"];
        const InfoImg = [APRimg, MAYimg, MAYimg];
        return (
          <div
            className="my-10 max-md:scale-[80%] max-md:mb-5 max-md:-mt-5"
            key={index}
          >
            <h2 className={`${InfoStyle[index]} ${RWD_InfoStyle}`}>
              {InfoTitle[index]}
            </h2>
            <img className="mt-2 " src={InfoImg[index]} alt="感受觸發" />
            <div className="flex justify-center align-middle">
              <p className="DateSmText">{InfoStartDate[index]}</p>
              <div className="h-[2px] w-4 bg-Cus_Orange my-[10%] mx-2"></div>
              <p className="DateSmText">{InfoEndDate[index]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
