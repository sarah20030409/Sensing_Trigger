import React, { useEffect, useState } from "react";
const ST_Poster01 = "/posters/STposter01.webp";
const ST_Poster02 = "/posters/STposter02.webp";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 590) {
        setBackgroundImage(ST_Poster01);
        setIsMobile(true);
      } else {
        setBackgroundImage(ST_Poster02);
        setIsMobile(false);
      }
    };
    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);

    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);

  return (
    <div className="h-full FlexToCenter items-center">
      <img
        className="w-[75%] mx-auto rotate-3 border border-Cus_Blue"
        src={backgroundImage}
      />
    </div>
  );
}
