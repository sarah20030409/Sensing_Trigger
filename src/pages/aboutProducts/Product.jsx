import React from "react";
// import circleSVG from "@/assets/productImg/Circle2D.svg";
// import triangle from "@/assets/productImg/Triangle2D.svg";
// import square from "@/assets/productImg/Square2D.svg";
// import pentagon from "@/assets/productImg/Pentagon2D.svg";
// import TextSvg01 from "@/assets/productImg/TextSvg01.webp";
// import TextSvg02 from "@/assets/productImg/TextSvg02.webp";
// import TextSvg03 from "@/assets/productImg/TextSvg03.webp";
// import TextSvg04 from "@/assets/productImg/TextSvg04.webp";

const circleSVG = "/assets/productImg/Circle2D.svg";
const triangle = "/assets/productImg/Triangle2D.svg";
const square = "/assets/productImg/Square2D.svg";
const pentagon = "/assets/productImg/Pentagon2D.svg";
const TextSvg01 = "/assets/productImg/TextSvg01.webp";
const TextSvg02 = "/assets/productImg/TextSvg02.webp";
const TextSvg03 = "/assets/productImg/TextSvg03.webp";
const TextSvg04 = "/assets/productImg/TextSvg04.webp";

export default function Product() {
  // const
  const Style = [
    "FlexToCenter ",
    "w-[30%] px-[5%] py-[2%] FlexToCenter items-end",
    "absolute -mb-[1%]",
  ];
  const RWD_Style = [
    "max-Spec_RWD01:w-[100%] max-md:justify-around max-Spec_RWD01:block ",
    "max-Spec_RWD04:w-[30%] max-Spec_RWD03:w-[40%] max-m_md:px-[3%] max-m_md:w-[30%] max-md:w-[40%] max-md:py-[7%] max-Spec_RWD01:block max-Spec_RWD01:py-[10%] max-Spec_RWD01:px-0 max-Spec_RWD01:w-[100%] max-Spec_RWD01:mx-auto",
    "max-Spec_RWD04:scale-90 max-m_md:scale-[85%] max-md:mx-0 max-md:-mb-[8%] max-md:scale-75 max-Spec_RWD01:scale-[85%]  max-Spec_RWD01:static ",
  ];
  const ImgStyle = ["max-Spec_RWD01:w-[60%] max-Spec_RWD01:mx-auto"];

  return (
    <div className="h-full max-Spec_RWD01:h-full max-Spec_RWD01:overflow-y-scroll max-Spec_RWD01:overflow-x-hidden max-Spec_RWD01:ScrollBarStyle">
      <div className="h-full FlexToCenter items-center">
        <div className="w-full">
          <div className={`${Style[0]} ${RWD_Style[0]} `}>
            <div
              className={`${Style[1]} ${
                RWD_Style[1]
              } ${"max-Spec_RWD01:pt-[240%]"}`}
            >
              <a
                href="https://www.instagram.com/reel/DB75UdDi2wm/"
                target="_blank"
              >
                <img
                  className={`${ImgStyle} ${"animate-smallRotate "}`}
                  src={circleSVG}
                />
              </a>
              <div className={`${Style[2]} ${RWD_Style[2]} ${"mr-[15%]"}`}>
                <InfoLittleCard Type="circle" />
              </div>
            </div>
            <div className={`${Style[1]} ${RWD_Style[1]}`}>
              <a
                href="https://www.instagram.com/reel/DC1ilmEznlJ/"
                target="_blank"
              >
                <img
                  className={`${ImgStyle} ${"animate-bounceWithPause"}`}
                  src={triangle}
                />
              </a>
              <div className={`${Style[2]} ${RWD_Style[2]} ${"-mr-[15%]"}`}>
                <InfoLittleCard Type="triangle" />
              </div>
            </div>
          </div>

          <div className={`${Style[0]} ${RWD_Style[0]}`}>
            <div className={`${Style[1]} ${RWD_Style[1]}`}>
              <a
                href="https://www.instagram.com/reel/DDHaMB_zb38/"
                target="_blank"
              >
                <img
                  className={`${ImgStyle} ${"animate-Yscale"}`}
                  src={square}
                />
              </a>
              <div className={`${Style[2]} ${RWD_Style[2]} ${"mr-[15%]"}`}>
                <InfoLittleCard Type="square" />
              </div>
            </div>
            <div className={`${Style[1]} ${RWD_Style[1]}`}>
              <a
                href="https://www.instagram.com/reel/DCln03cCAv8/"
                target="_blank"
              >
                <img
                  className={`${ImgStyle} ${"animate-Waving"}`}
                  src={pentagon}
                />
              </a>
              <div className={`${Style[2]} ${RWD_Style[2]} ${"-mr-[15%]"}`}>
                <InfoLittleCard Type="pentagon" />
              </div>
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
  const ImgAlt = [
    "2025北科大互動設計系：展覽的代表物，圓形按鈕，佛性爆發、正面能量。",
    "2025北科大互動設計系：展覽的代表物，三角形按鈕，勇敢直率、只說真話。",
    "2025北科大互動設計系：展覽的代表物，方形按鈕，忍氣吞聲、和氣平穩。",
    "2025北科大互動設計系：展覽的代表物，五角形按鈕，高度敏感，小心謹慎。",
  ];

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
      className={`${borderColors} ${"bg-white bg-opacity-70 border rounded-2xl px-5 py-4  hover:opacity-30 max-Spec_RWD01:mx-[5%] max-Spec_RWD01:flex max-Spec_RWD01:justify-center"}`}
    >
      <div>
        <div className="FlexToCenter items-center mb-2 max-Spec_RWD01:justify-start ">
          <img src={BtnImgs[currentType]} alt={ImgAlt[currentType]} />
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
