import React, { useState, useEffect, useContext } from "react";
import AbImg01 from "@/assets/aboutUsImg/aboutImg01.webp";
import AbImg03 from "@/assets/aboutUsImg/aboutImg03.webp";
import AbImg05 from "@/assets/aboutUsImg/aboutImg05.webp";
import { CustomContext } from "@/global/CustomContext";
//這裡的Context作用是"賦值"

export default function AboutUs() {
  return (
    <div className="h-full FlexToCenter items-center">
      {/* scale-110 rotate-3 overflow-hidden */}
      <InsideBook />
    </div>
  );
}

export function InsideBook() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const { setCurrentComponent } = useContext(CustomContext); //因為是用來賦值的所以用set

  const handleClick = () => {
    setCurrentComponent("about");
  };

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 1024) {
        setBackgroundImage(`url(${AbImg05})`);
        setIsMobile(true);
      } else {
        setBackgroundImage(`url(${AbImg01})`);
        setIsMobile(false);
      }
    };
    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);

    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);

  const CardStyle = ["animate-bounceWithPause cursor-pointer "];

  // For >= 1024 device.
  if (!isMobile) {
    return (
      <div
        className="w-[900px] h-[580px] mb-[4%] flex items-end bg-contain bg-no-repeat bg-left-bottom 
          max-lg:scale-90"
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="w-[35%] mb-[5%] ml-[5%]">
          <img
            className={`${CardStyle}`}
            src={AbImg03}
            alt="2025國立臺北科技大學互動設計系：展覽的理念，感受觸發股份有限公司"
            onClick={handleClick}
          />
        </div>
      </div>
    );
  }

  // For < 1024 device.
  return (
    <div
      className="w-[450px] h-[700px] scale-[80%] bg-contain bg-no-repeat 
      max-Spec_RWD02:w-[260px] max-Spec_RWD02:h-[400px] max-Spec_RWD02:scale-100
      max-Spec_RWD01:w-[290px] max-Spec_RWD01:h-[450px]"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="w-[50%] mt-[45%] ml-[5%]">
        <img
          className={`${CardStyle}`}
          src={AbImg03}
          alt="2025國立臺北科技大學互動設計系：展覽的理念，感受觸發股份有限公司"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
