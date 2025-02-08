import React, { useState, useContext, useEffect } from "react";
import conceptCard from "@/assets/aboutUsImg/conceptCard.webp";
import conceptCardPhone from "@/assets/aboutUsImg/conceptCardPhone.webp";
import conceptImage from "@/assets/aboutUsImg/conceptImage.webp";
import { CustomContext } from "../CustomContext";
//這裡的Context作用是"取值"

export default function BlackCanvas() {
  const [canvasState, setCanvasState] = useState(false);
  const { currentComponent, setCurrentComponent } = useContext(CustomContext); //用來偵測currentComponent的改變並開啟黑布，而且黑布關掉之後還要復原currentComponent狀態

  useEffect(() => {
    if (currentComponent) {
      setCanvasState(true);
    }
  }, [currentComponent]);

  const handleClose = () => {
    setCanvasState(false);
    setCurrentComponent("");
  };

  if (!canvasState) return null;
  return (
    <div className="absolute h-s w-full z-[100]">
      <div
        className="h-svh bg-black bg-opacity-45 cursor-pointer "
        onClick={handleClose}
      >
        <div className="h-full">
          <CompResolver />
        </div>
        <p className="absolute w-full bottom-[3%] text-center HintText text-white">
          觸碰任一地方離開檢視
        </p>
      </div>
    </div>
  );
}

export function CompResolver() {
  //用Context判斷要選染哪個
  const { currentComponent, projectGroupIndex, sponsorIndex } =
    useContext(CustomContext); //取值、取組別數、取贊助商號碼

  switch (currentComponent) {
    case "about":
      return <AboutInfomation />;
    case "projects":
      return <ProjectsInfomation group={projectGroupIndex} />;
    case "sponsors":
      return <SponsorsInfomation sponsorNum={sponsorIndex} />;

    default:
      return null;
  }
}

export function AboutInfomation() {
  const [backgroundImage, setBackgroundImage] = useState("");

  // For >= 790 device.
  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 790) {
        setBackgroundImage(`url(${conceptCardPhone})`);
      } else {
        setBackgroundImage(`url(${conceptCard})`);
      }
    };
    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);

    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);

  const CONCEPT_TITLE = [
    "按鈕 = 觸發",
    "「喀」按下按鈕的瞬間，即是觸發",
    "合作創造，觸發感受",
  ];

  const CONCEPT_CONTENT = [
    "本公司將觸發使用者不同的感受視為唯一宗旨，在設計師與工程師的合作之下，每一個互動設計的作品，都是為了觸發使用者的感受。觸發的過程，我們喻為「按鈕」的體驗",
    "0與1、開始與結束、科技與傳統、戰爭與和平......按鈕，主宰著人類的命運，按下的瞬間，注定將觸發感受，無論喜怒哀樂、愛恨情仇，豐富的情緒體驗是互動設計想帶給你的。",
    "而每一個作品的誕生，都是一次次合作的結果。設計師Ｘ工程師Ｘ使用者 三者之間的合作，創造了一個個不同的「按鈕」，觸發形形色色的感受。",
  ];

  return (
    <div className="h-full FlexToCenter items-center animate-SlideDown">
      <div
        className="h-[450px] w-[760px] bg-contain bg-center bg-no-repeat scale-110
        max-lg:scale-100 max-Spec_RWD03:scale-95
        max-md:scale-95 max-md:h-[700px] max-md:w-[480px] 
        max-Spec_RWD01:scale-[75%] max-Spec_RWD02:scale-[65%] 
        "
        style={{ backgroundImage: backgroundImage }}
      >
        <div
          className="h-full FlexToCenter items-center ml-28
         max-md:mt-12 max-md:block max-md:ml-24 max-sm:ml-[75px] max-sm:mt-[75px]
         max-sm:scale-95"
        >
          <div
            className="w-3/5
           max-md:w-full"
          >
            {CONCEPT_TITLE.map((title, index) => {
              return (
                <div
                  className="my-[5%] pr-5 max-md:my-[8%] max-md:pr-11 max-sm:pr-5"
                  key={index}
                >
                  <h2 className="HeavyTitle">{title}</h2>
                  <p className="LittleText font-semibold">
                    {CONCEPT_CONTENT[index]}
                  </p>
                </div>
              );
            })}
          </div>
          <img
            className="w-52 mx-auto max-md:ml-12 max-Spec_RWD02:w-44  max-sm:w-28 max-sm:ml-[80px]"
            src={conceptImage}
            alt="conceptImage"
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectsInfomation({ group }) {
  const PROJECT_IMAGE = [];
  const PROJECT_CONCEPT = [];
  const MEMBER_PHOTOS = [];
  const MEMBER_NAME = [];
  const MEMBER_JOBS = [];

  return (
    <div>
      <h1>ProjectsInfomation{group}</h1>
    </div>
  );
}

export function SponsorsInfomation({ sponsorNum }) {
  const SPONSOR_LOGO = [];
  const SPONSOR_NAME = [];
  const SPONSOR_CONCEPT = [];

  return (
    <div>
      <h1>SponsorsInfomation{sponsorNum}</h1>
    </div>
  );
}
