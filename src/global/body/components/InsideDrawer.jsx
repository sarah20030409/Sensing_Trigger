import React, { useState, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import AboutUs from "@/pages/aboutUs/AboutUs";
import Product from "@/pages/aboutProducts/Product";
import Projects from "@/pages/projects/Projects";
import Sponsors from "@/pages/sponsors/Sponsors";
// import circleLabel from "@/assets/bodyImg/CircleLabel.svg";
// import triangleLabel from "@/assets/bodyImg/TriangleLabel.svg";
// import squareLabel from "@/assets/bodyImg/SquareLabel.svg";
// import pentagonLabel from "@/assets/bodyImg/PentagonLabel.svg";

const circleLabel = "/assets/bodyImg/CircleLabel.svg";
const triangleLabel = "/assets/bodyImg/TriangleLabel.svg";
const squareLabel = "/assets/bodyImg/SquareLabel.svg";
const pentagonLabel = "/assets/bodyImg/PentagonLabel.svg";

//Get Nav from LocalStorage
export default function InsideDrawer({}) {
  const [crrentRouter, setCrrentRouter] = useState(<></>);
  const Location = useLocation();
  const CLOSE_TIME = 500;

  const routes = useRoutes([
    { path: "/", element: <></> },
    { path: "/aboutUs", element: <AboutUs /> },
    { path: "/product", element: <Product /> },
    { path: "/projects", element: <Projects /> },
    { path: "/sponsors", element: <Sponsors /> },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setCrrentRouter(routes);
    }, CLOSE_TIME);
  }, [Location.pathname]);

  const styleClassName = [
    "w-full flex justify-between items-center px-[8%] ",
    "w-[5%] ",
    "h-svh w-full py-[7%] mx-2 overflow-y-hidden pr-[5%] ", // <-- (pr-[5%] is to offset the width of the label sticker and keep the left and right sides equal.)
  ];
  const RWD_styleClassName = [
    "max-md:px-[5%]",
    "max-m_md:w-[7%] max-md:w-[10%]",
    "max-m_md:py-[12%] max-md:pr-[7%] max-md:py-[15%] max-Spec_RWD01:py-[20%]",
  ];

  return (
    <div className={`${styleClassName[0]} ${RWD_styleClassName[0]}`}>
      <div className={`${styleClassName[1]} ${RWD_styleClassName[1]}`}>
        <LabelSticker />
      </div>
      <div className={`${styleClassName[2]} ${RWD_styleClassName[2]}`}>
        {crrentRouter}
      </div>
    </div>
  );
}

export function LabelSticker() {
  const path = useLocation().pathname;
  if (path === "/") return;
  const CURRENT_LABEL = {
    "/aboutUs": 0, //Circle
    "/product": 1, //Triangle
    "/projects": 2, //Square
    "/sponsors": 3, //Pentagon
  };
  const currentLabel = CURRENT_LABEL[path];
  const images = [circleLabel, triangleLabel, squareLabel, pentagonLabel];
  const titles = ["關於我們", "產品介紹", "專案部門", "企業贊助"];
  const imgAlt = [
    "2025國立臺北科技大學互動設計系：第一層抽屜，關於我們的展覽資訊。",
    "2025國立臺北科技大學互動設計系：第二層抽屜，感受觸發按鈕的介紹。",
    "2025國立臺北科技大學互動設計系：第三層抽屜，各組專題的作品介紹。",
    "2025國立臺北科技大學互動設計系：第四層抽屜，企業贊助的介紹。",
  ];

  const styleClassName = [
    "bg-white bg-opacity-80 border border-Cus_Blue rounded-full py-4 px-2",
  ];
  // const RWD_styleClassName = ["max-m_md:w-[7%] max-m_md:scale-90 max-md:w-[11%] max-md:scale-75 max-md:ml-1"];

  return (
    <div className={`${styleClassName}`}>
      {titles.map(
        (title, index) =>
          currentLabel === index && (
            <div key={index}>
              <div className="FlexToCenter">
                <img className="mb-2" src={images[index]} alt={imgAlt[index]} />
              </div>
              <div className="FlexToCenter">
                <h1 className="SectionTitle">{title}</h1>
              </div>
            </div>
          )
      )}
    </div>
  );
}
