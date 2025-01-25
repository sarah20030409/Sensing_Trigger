import React from "react";
import circleSVG from "@/assets/productImg/Circle2D.svg";
import triangle from "@/assets/productImg/Triangle2D.svg";
import square from "@/assets/productImg/Square2D.svg";
import pentagon from "@/assets/productImg/Pentagon2D.svg";
import TextSvg01 from "@/assets/productImg/TextSvg01.webp";
import TextSvg02 from "@/assets/productImg/TextSvg02.webp";
import TextSvg03 from "@/assets/productImg/TextSvg03.webp";
import TextSvg04 from "@/assets/productImg/TextSvg04.webp";

export default function Product() {
  // const
  const ImgStyle = ["w-[30%] px-[5%] py-[2%] FlexToCenter items-end"];

  return (
    <div className="h-full FlexToCenter items-center">
      <div className="w-full">
        <div className="FlexToCenter max-Spec_RWD01:block">
          <div className={ImgStyle}>
            <img className="animate-smallRotate" src={circleSVG} />
            <div className="absolute mr-[15%] -mb-[1%]">
              <InfoLittleCard Type="circle" />
            </div>
          </div>
          <div className={ImgStyle}>
            <img className="animate-bounceWithPause" src={triangle} />
            <div className="absolute -mr-[15%] -mb-[1%]">
              <InfoLittleCard Type="triangle" />
            </div>
          </div>
        </div>

        <div className="FlexToCenter max-Spec_RWD01:block">
          <div className={ImgStyle}>
            <img className="animate-Yscale" src={square} />
            <div className="absolute mr-[15%] -mb-[1%]">
              <InfoLittleCard Type="square" />
            </div>
          </div>
          <div className={ImgStyle}>
            <img className="animate-Waving" src={pentagon} />
            <div className="absolute -mr-[15%] -mb-[1%]">
              <InfoLittleCard Type="pentagon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InfoLittleCard({ Type }) {
  const BTN_TYPES = { circle: 0, triangle: 1, square: 2, pentagon: 3 };
  const currentType = BTN_TYPES[Type];

  const colors = ["Orange", "Blue", "Blue", "Orange"];
  const borderColors = ["border-Cus_" + colors[currentType]];
  const TextStyles = ["ProductText_" + colors[currentType]];
  const smTextStyles = ["ProductSmText_" + colors[currentType]];
  const BtnImgs = [TextSvg01, TextSvg02, TextSvg03, TextSvg04];

  const Titles = [
    "佛性爆發、正面能量",
    "勇敢直率、只說真話",
    "忍氣吞聲、和氣平穩",
    "高度敏感，小心謹慎",
  ];

  const hints = [
    "*警告:缺乏危機意識",
    "*警告:死白目",
    "*警告:躁鬱症",
    "*警告:焦慮不安",
  ];

  return (
    <div
      className={`${borderColors} ${"bg-white bg-opacity-90 border rounded-2xl px-5 py-4 opacity-25 hover:opacity-100"}`}
    >
      <div>
        <div className="FlexToCenter items-center mb-2">
          <img src={BtnImgs[currentType]} alt="感受觸發" />
          <h3 className={TextStyles}> {Titles[currentType]}</h3>
        </div>
        <p className={smTextStyles}>{hints[currentType]}</p>
      </div>
    </div>
  );
}

// const borderColors = [
//     "border-Cus_Orange",
//     "border-Cus_Blue",
//     "border-Cus_Orange",
//     "border-Cus_Blue",
//   ];
//   const BtnImgs = [TextSvg01, TextSvg02, TextSvg03, TextSvg04];
//   const TextStyles = [
//     "ProductText_Orange",
//     "ProductText_Blue",
//     "ProductText_Orange",
//     "ProductText_Blue",
//   ];
//   const smTextStyles = [
//     "ProductSmText_Orange",
//     "ProductSmText_Blue",
//     "ProductSmText_Orange",
//     "ProductSmText_Blue",
//   ];
