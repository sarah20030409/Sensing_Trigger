import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { M_CircleBTN } from "@/components/models/SingleButton/CircleBTN_HighColor";
// import { M_TriangleBTN } from "@/components/models/SingleButton/TriangleBTN_HighColor";
// import { M_SquareBTN } from "@/components/models/SingleButton/SquareBTN_HighColor";
// import { M_PentagonBTN } from "@/components/models/SingleButton/PentagonBTN_HighColor";

export default function Product() {
  const AllPosi = [0.1, -0.3, 0];
  const C_modelSetting = {
    position: [1.2 + AllPosi[0], 1.2 + AllPosi[1], 0.3 + AllPosi[2]],
    scale: 2,
  };
  const T_modelSetting = {
    position: [-0.1 + AllPosi[0], -0.1 + AllPosi[1], 0.8 + AllPosi[2]],
    scale: 1.9,
    rotation: [0, 0.3, 0.3],
  };
  const S_modelSetting = {
    position: [-0.1 + AllPosi[0], 2.5 + AllPosi[1], 0.6 + AllPosi[2]],
    scale: 1.9,
    rotation: [0, -0.28, -0.1],
  };
  const P_modelSetting = {
    position: [-1.3 + AllPosi[0], 2 + AllPosi[1], 0.7 + AllPosi[2]],
    scale: 1.9,
  };

  return (
    <div className="FlexToCenter">
      <div
        className="border border-Cus_Blue"
        style={{ width: "70vw", height: "70vh" }}
      >
        <Canvas flat linear>
          <M_CircleBTN {...C_modelSetting} />
          <M_TriangleBTN {...T_modelSetting} />
          <M_SquareBTN {...S_modelSetting} />
          <M_PentagonBTN {...P_modelSetting} />
        </Canvas>
      </div>
    </div>
  );
}
