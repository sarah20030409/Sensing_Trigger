import React, { useState } from "react";
import ButtonNav from "./components/ButtonNav";
// import headerTable from "@/assets/headerImg/headerTable.webp";
// import ToolScrewdriver01 from "@/assets/headerImg/ToolScrewdriver01.webp";
// import ToolScrewGroup from "@/assets/headerImg/ToolScrewGroup.webp";
// import ToolGroup01 from "@/assets/headerImg/ToolGroup01.webp";
// import ToolScrewdriver02 from "@/assets/headerImg/ToolScrewdriver02.webp";
// import APRimg from "@/assets/headerImg/APR.webp";
// import MAYimg from "@/assets/headerImg/MAY.webp";
// import Logo01 from "@/assets/LogoFav.svg";
// import Logo02 from "@/assets/SensingTriggerOrange.svg";

const headerTable = "/assets/headerImg/headerTable.webp";
const ToolScrewdriver01 = "/assets/headerImg/ToolScrewdriver01.webp";
const ToolScrewGroup = "/assets/headerImg/ToolScrewGroup.webp";
const ToolGroup01 = "/assets/headerImg/ToolGroup01.webp";
const ToolScrewdriver02 = "/assets/headerImg/ToolScrewdriver02.webp";
const APRimg = "/assets/headerImg/APR.webp";
const MAYimg = "/assets/headerImg/MAY.webp";
const Logo01 = "/LogoFav.svg";
const Logo02 = "/SensingTriggerOrange.svg";

export default function HeaderDesktop() {
  const TABLE_IMG = { backgroundImage: `url(${headerTable})` };

  return (
    // Desk padding
    <div
      className="bg-cover bg-no-repeat bg-center px-[2%] py-[3%] mx-[1.5%] rounded-2xl max-md:rounded-xl"
      style={TABLE_IMG}
    >
      {/* <TopNavList /> */}
      <div className=" h-svh relative">
        <div className="w-full absolute px-[5%] z-30 max-m_md:pt-[4%]">
          <div className="flex justify-between">
            <a href="https://www.instagram.com/ntut.ixd" target="_blank">
              <img
                src={Logo01}
                className="w-[29%] cursor-pointer hover:-rotate-[360deg] max-md:w-[20%]"
                alt="2025國立臺北科技大學互動設計系：展覽主題的Logo，感受觸發股份有限公司"
              />
            </a>
            <a
              className="flex justify-end"
              href="https://www.instagram.com/reel/DHA-my9zjlJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <img
                className="w-[110%] cursor-pointer hover:-rotate-[360deg] max-md:w-[75%]"
                src={Logo02}
                alt="2025國立臺北科技大學互動設計系：展覽主題的Logo，感受觸發股份有限公司"
              />
            </a>
          </div>
        </div>

        <div className="HeaderDeskDisplay z-1">
          <ToolGroupLeft />
        </div>

        <div className="FlexToCenter HeaderDeskDisplay z-20 -mt-9 max-Spec_RWD03:mt-0">
          <ButtonNav />
        </div>

        <div className="HeaderDeskDisplay z-2">
          <ToolGroupRight />
        </div>
        <div className="HeaderDeskDisplay bottom-0 right-0 z-2 max-md:hidden">
          <InfoDataBar />
        </div>
      </div>
      <p className="text-center HintText text-Cus_Blue ml-8 -translate-y-20 max-Spec_RWD03:-translate-y-14 animate-pulse max-md:ml-4">
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
          "max-m_md:w-[30%]  max-m_md:top-[8%] max-md:top-[10%] max-md:w-[30%] max-Spec_RWD01:w-[45%] max-Spec_RWD01:top-[5%]",
          "max-m_md:w-[13%] max-m_md:left-[13%]  max-m_md:top-[50%] max-md:left-[5%] max-md:top-[45%] max-Spec_RWD01:w-[20%] max-Spec_RWD01:top-[53%] max-Spec_RWD01:left-0",
          "max-m_md:w-1/4  max-m_md:top-[67%] max-md:top-[65%] max-md:w-[40%] max-Spec_RWD01:top-[70%] max-Spec_RWD01:w-[40%]",
        ];

        return (
          <img
            key={index}
            className={`${imgClassName[index]} ${RWD_imgClassName[index]}`}
            src={imgSrc}
            alt="2025國立臺北科技大學互動設計系：展覽的理念，感受觸發股份有限公司"
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
    "max-m_md:w-[16%]  max-m_md:top-[10%] max-md:top-[15%] max-md:w-[20%] max-md:right-0 max-Spec_RWD01:w-[30%]",
  ];

  return (
    <div className="h-svh relative">
      <img
        className={`${imgClassName} ${RWD_imgClassName}`}
        src={ToolScrewdriver02}
        alt="2025國立臺北科技大學互動設計系：展覽的理念，感受觸發股份有限公司"
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
        const ImgAlt = [
          "2025北科大互動設計系校內展：優秀學生作品展示，地點：台北市忠孝東路三段一號藝文中心濟慶館",
          "2025北科大互動設計系新一代設計展：創新互動科技展，地點：台北市南港展覽館",
          "2025北科大互動設計系放視大賞：數位互動設計展，地點：高雄展覽館",
        ];
        const InfoStartDate = ["18", "09", "15"];
        const InfoEndDate = ["22", "12", "17"];
        const InfoImg = [APRimg, MAYimg, MAYimg];
        return (
          <div
            className="my-10 max-m_md:scale-[77%] max-md:scale-[80%] max-md:mb-5 max-md:-mt-5"
            key={index}
          >
            <h2 className={`${InfoStyle[index]} ${RWD_InfoStyle}`}>
              {InfoTitle[index]}
            </h2>
            <img className="mt-2 " src={InfoImg[index]} alt={ImgAlt[index]} />
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

export function TopNavList() {
  return (
    <div className="bg-white h-11 w-full fixed top-0 left-0 z-50 opacity-75">
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
