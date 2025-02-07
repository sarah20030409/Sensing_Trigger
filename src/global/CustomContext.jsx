import React, { createContext, useState } from "react";

export const CustomContext = createContext(); //新增一個Context工具

export const CustomContextProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState(""); //用來判斷要選染哪個組件(about、projects、sponsors)
  const [projectGroupIndex, setProjectGroupIndex] = useState(""); //專題組別
  const [sponsorIndex, setSponsorIndex] = useState("");

  return (
    //之後解構賦值可以拿的東西
    <CustomContext.Provider
      value={{
        currentComponent,
        setCurrentComponent,
        projectGroupIndex,
        setProjectGroupIndex,
        sponsorIndex,
        setSponsorIndex,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};
