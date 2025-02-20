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

// useEffect(() => {
//   if (lastRouter !== "/" && location.pathname !== "/") {
//     setTimeout(() => {
//       setIsOpen(false);
//     }, CLOSE_TIME);
//   }

//   setLastRouter(location.pathname);
//   setTimeout(() => {
//     setIsOpen(true);
//   }, OPEN_TIME);
// }, [location.pathname]);
