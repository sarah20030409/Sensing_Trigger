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
      className="bg-cover bg-no-repeat bg-center px-[2%] py-[2%] mx-[1.5%] rounded-2xl"
      style={TABLE_IMG}
    >
      <div className=" h-svh relative">
        <div className="w-full absolute px-[5%] z-30">
          <div className="flex justify-between">
            <img className="w-[5%] cursor-pointer" src={Logo01} />
            <img className="w-[8%] cursor-pointer" src={Logo02} />
          </div>
        </div>

        <div className="HeaderDeskDisplay z-1">
          <ToolGroupLeft />
        </div>

        <div className="FlexToCenter HeaderDeskDisplay z-20">
          <ButtonNav />
        </div>

        <div className="HeaderDeskDisplay z-2">
          <ToolGroupRight />
        </div>
        <div className="HeaderDeskDisplay bottom-0 right-0 z-2">
          <InfoDataBar />
        </div>
      </div>
    </div>
  );
}

export function ToolGroupLeft() {
  const TOOL_IMGS = [ToolScrewdriver01, ToolScrewGroup, ToolGroup01, Logo01];

  return (
    <div className="h-svh relative">
      <div className=""></div>
      {TOOL_IMGS.slice(0, 3).map((imgSrc, index) => {
        const imgClassName = [
          "absolute w-[20%] max-m_md:w-1/3  max-m_md:top-[10%]",
          "absolute top-1/3 left-[15%] w-[8%] max-m_md:w-1/5  max-m_md:top-[40%]",
          "absolute top-[50%] left-[5%] w-[20%] max-m_md:w-1/3  max-m_md:top-[60%]",
        ];

        return (
          <img
            key={index}
            className={imgClassName[index]}
            src={imgSrc}
            alt="感受觸發"
          />
        );
      })}
    </div>
  );
}

export function ToolGroupRight() {
  return (
    <div className="h-svh relative">
      <img className="absolute right-[20%] w-[12%]" src={ToolScrewdriver02} />
    </div>
  );
}

export function InfoDataBar() {
  return (
    <div className="absolute bottom-0 right-0">
      <h1 className="text-3xl">TESTTTT</h1>
    </div>
  );
}
