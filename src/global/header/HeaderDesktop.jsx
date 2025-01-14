import React from "react";
import ButtonNav from "./components/ButtonNav";
import headerTable from "@/assets/headerImg/headerTable.webp";

export default function HeaderDesktop() {
  return (
    <div
      className="h-svh bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${headerTable})` }}
    >
      <ButtonNav />
    </div>
  );
}
