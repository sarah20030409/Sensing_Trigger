import React, { useState, useEffect } from "react";
import AbImg01 from "@/assets/aboutUsImg/aboutImg01.webp";
import AbImg03 from "@/assets/aboutUsImg/aboutImg03.webp";
import AbImg05 from "@/assets/aboutUsImg/aboutImg05.webp";

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
          <img className={`${CardStyle}`} src={AbImg03} alt="感受觸發" />
        </div>
      </div>
    );
  }
  // For < 1024 device.
  return (
    <div
      className="w-[450px] h-[700px] scale-[80%] bg-contain bg-no-repeat 
      max-Spec_RWD02:w-[260px] max-Spec_RWD02:h-[400px] max-Spec_RWD02:scale-100
      max-Spec_RWD01:w-[290px] max-Spec_RWD01:h-[450px] "
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="w-[50%] mt-[45%] ml-[5%]">
        <img className={`${CardStyle}`} src={AbImg03} alt="感受觸發" />
      </div>
    </div>
  );
}

// export default function AboutUs() {
//   const [backgroundImage, setBackgroundImage] = useState("");

//   useEffect(() => {
//     const updateBackgroundImage = () => {
//       if (window.innerWidth <= 1024) {
//         setBackgroundImage(`url(${AbImg05})`);
//       } else {
//         setBackgroundImage(`url(${AbImg01})`);
//       }
//     };
//     updateBackgroundImage();
//     window.addEventListener("resize", updateBackgroundImage);

//     return () => {
//       window.removeEventListener("resize", updateBackgroundImage);
//     };
//   }, []);

//   const styleClassName = [
//     "h-full p-[1%] pb-[3%] rotate-3 FlexToCenter", //outter
//     "h-full flex items-center bg-contain bg-no-repeat bg-center ", //book
//   ];
//   const RWD_styleClassName = ["max-md:rotate-0", "max-Spec_RWD03:block "];

//   return (
//     <div className={`${styleClassName[0]} ${RWD_styleClassName[0]}`}>
//       <div
//         className={`${styleClassName[1]} ${RWD_styleClassName[1]}`}
//         style={{ backgroundImage: backgroundImage }}
//       >
//         <InsideBook />
//       </div>
//     </div>
//   );
// }

// export function InsideBook() {
//   const styleClassName = [
//     " FlexToCenter border border-Cus_Orange max-Spec_RWD03:block max-Spec_RWD03:px-[10%]",
//     " w-[70%] cursor-pointer animate-bounceWithPause border border-green-400",
//   ];
//   return (
//     <div className={`${styleClassName[0]}`}>
//       <div
//         className="w-[55%] mt-[35%] flex justify-center
//         max-lg:w-[45%]  max-lg:pl-[5%] max-lg:mt-[25%]
//         max-Spec_RWD04:w-[50%] max-Spec_RWD04:mt-[30%]
//         max-m_md:pr-[2%] max-m_md:pl-0
//         "
//       >
//         <img className={`${styleClassName[1]}`} src={AbImg03} />
//       </div>
//       <div className="w-[50%] "></div>
//     </div>
//   );
// }
