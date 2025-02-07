import React, { useState, useContext, useEffect } from "react";
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
        <div>
          <CompResolver />
        </div>
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
  return (
    <div>
      <h1>AboutInfomation</h1>
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
