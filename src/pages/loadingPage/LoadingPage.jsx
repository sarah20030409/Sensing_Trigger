import React, { useEffect } from "react";

const loadingSVG = "/loadingSvg.svg";
const headerTable = "/assets/headerImg/headerTable.webp";

export default function LoadingPage() {
  const TABLE_IMG = { backgroundImage: `url(${headerTable})` };

  return (
    <div>
      <div
        className="w-full h-svh flex justify-center items-center bg-cover bg-no-repeat bg-center "
        style={TABLE_IMG}
      >
        <div className="w-full">
          <img
            className="w-[25%] mx-auto 
            max-Spec_RWD03:w-[35%] max-Spec_RWD05:w-[45%] max-Spec_RWD02:w-[55%] animate-bounceWithPause"
            src={loadingSVG}
            alt="感受觸發互動按鈕公司，致力於設計充滿創意與情感的「按鈕」"
          />
          <div className="mt-10 max-Spec_RWD02:mt-6">
            <p className="text-center LoadingTitle animate-pulse">
              - LOADING -
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
