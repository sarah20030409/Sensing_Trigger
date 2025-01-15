import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import AboutUs from "@/pages/aboutUs/AboutUs";
import Product from "@/pages/aboutProducts/Product";
import Projects from "@/pages/projects/Projects";
import Sponsors from "@/pages/sponsors/Sponsors";

//Get Nav from LocalStorage
export default function InsideDrawer({}) {
  const routes = useRoutes([
    { path: "/", element: <AboutUs /> },
    { path: "/aboutUs", element: <AboutUs /> },
    { path: "/product", element: <Product /> },
    { path: "/projects", element: <Projects /> },
    { path: "/sponsors", element: <Sponsors /> },
  ]);
  return <div className="h-svh flex justify-center items-center">{routes}</div>;
}
