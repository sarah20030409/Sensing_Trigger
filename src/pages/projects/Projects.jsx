import React, { useContext } from "react";
// import projectBG from "@/assets/projectImg/ProjectBgAll.webp";
// import P01 from "@/assets/projectImg/Posters/P01.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectContents from "@/pages/projects/projectContents.json";
import { CustomContext } from "@/global/CustomContext";
//這裡的Context作用是"賦值"

const projectBG = "/assets/projectImg/ProjectBgAll.webp";
const P01 = "/assets/projectImg/Posters/P01.webp";

export default function Projects() {
  return (
    <div className="h-full flex items-center px-2 max-Spec_RWD01:px-5">
      <ResponsiveSlider />
    </div>
  );
}

export function ResponsiveSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          // vertical: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // vertical: true,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto">
      <Slider {...settings}>
        <SingleProject Group={"01"} />
        <SingleProject Group={"02"} />
        <SingleProject Group={"03"} />
        <SingleProject Group={"04"} />
        <SingleProject Group={"05"} />
        <SingleProject Group={"06"} />
        <SingleProject Group={"08"} />
        <SingleProject Group={"09"} />
        <SingleProject Group={"10"} />
        <SingleProject Group={"11"} />
        <SingleProject Group={"12"} />
        <SingleProject Group={"13"} />
        <SingleProject Group={"14"} />
        <SingleProject Group={"15"} />
        <SingleProject Group={"16"} />
        <SingleProject Group={"17"} />
        <SingleProject Group={"18"} />
      </Slider>
    </div>
  );
}

export function SingleProject({ Group }) {
  const CONTENT = projectContents["PROJECT" + Group];
  const { poster, concept } = CONTENT;

  const { setCurrentComponent, setProjectGroupIndex } =
    useContext(CustomContext); //一個set當前組件，一個set組別數

  const handleClick = () => {
    setCurrentComponent("projects");
    setProjectGroupIndex(Group);
  };

  const RWD = [
    "max-Spec_RWD04:scale-90 max-md:scale-100 max-Spec_RWD01:scale-90",
  ];

  return (
    <div className={`${" mx-2"} ${RWD[0]}`}>
      <div
        className="h-[420px] bg-contain bg-center bg-no-repeat flex items-center hover:animate-Waving cursor-pointer"
        style={{ backgroundImage: `url(${projectBG})` }}
        onClick={handleClick}
      >
        <div className="w-full -mb-11">
          <img
            className="w-52 mx-auto max-Spec_RWD05:w-48 max-Spec_RWD02:w-[185px] max-sm:w-[150px] "
            src={poster}
            alt={concept}
          />
        </div>
      </div>
    </div>
  );
}

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", scale: "1.5" }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", scale: "1.5" }}
      onClick={onClick}
    />
  );
}
