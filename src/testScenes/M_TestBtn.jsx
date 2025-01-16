// import React, { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { M_CircleAll } from "../components/models/CircleBtn/M_CircleAll";
// import { M_LogoObjOne } from "../components/models/Logo/M_LogoObjOne";
// import { M_LogoObjTwo } from "../components/models/Logo/M_LogoObjTwo";
// import { Timeline } from "gsap/gsap-core";

// export const M_TestBtn = ({ btnScale }) => {
//   const circleRef = useRef(); // Like a fishing rod,Ref lets us can control the obj dynamicly.
//   const [clicked, setClicked] = useState(false);
//   const btnPosition = [0, 0, 0];

// //   Update every frame of the animation.
//   useFrame(() => {
//     if (clicked && circleRef.current) {
//       circleRef.current.position.y -= 0.01;
//       if (circleRef.current.position.y <= 0.1) {
//         setClicked(false);
//         setTimeout(() => {
//           circleRef.current.position.y = 0.25;
//         }, 1500);
//       }
//     }
//   });

//   return (
//     <>
//       {/* <Lighting /> */}
//       <OrbitControls enableZoom={false} enablePan={false} />
//       {/* <ScrollControls pages={2} damping={0.5}> */}
//       {/* <CircleAll scale={2.5} /> */}
//       {/* </ScrollControls> */}

//       {/* <LogoObjOne scale={btnScale} position={[-3, -1, 0]} /> */}
//       <M_LogoObjTwo scale={btnScale} position={[0, -1, 0]} />
//       <CircleUpPart
//         ref={circleRef}
//         scale={btnScale}
//         position={btnPosition}
//         onClick={() => setClicked(true)}
//       />
//       <CircleBasePart scale={btnScale} />
//     </>
//   );
// };

// export const Lighting = () => {
//   return (
//     <>
//       <ambientLight intensity={1} />
//       <directionalLight color="white" position={[4, 2, 2]} />
//     </>
//   );
// };

// ========================
// const NAV_ITEMS = {
//   AboutUs: "/aboutUs",
//   Product: "/product",
//   Projects: "/projects",
//   Sponsors: "/sponsors",
// }
// const NAV_ITEMS = [
//   { path: "/aboutUs", nav: "About Us" },
//   { path: "/product", nav: "Products" },
//   { path: "/projects", nav: "Projects" },
//   { path: "/sponsors", nav: "Sponsors" },
// ];

//   const NAV_COMPONENT = {
//     AboutUs: AboutUs,
//     Product: Product,
//     Projects: Projects,
//     Sponsors: Sponsors,
//   };
//   const NavPage = NAV_COMPONENT[NAV_PAGE];

// Click Test
// useEffect(() => {
//   console.log(clicked + "," + singleComp);
//   setTimeout(() => {
//     setClicked(false);
//   }, RESET_DELAY);
// }, [clicked]);

// Button Click animation
