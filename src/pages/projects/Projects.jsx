import React from "react";
import projectBG from "@/assets/projectImg/ProjectBgAll.webp";
import Clip from "@/assets/projectImg/Clip.webp";
import P01 from "@/assets/projectImg/Posters/P01.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          vertical: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto">
      <Slider {...settings}>
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
      </Slider>
    </div>
  );
}

export function SingleProject() {
  const RWD = [
    "max-Spec_RWD04:scale-90 max-md:scale-100 max-Spec_RWD01:scale-90",
  ];
  return (
    <div className={`${"border border-Cus_Blue mx-2"} ${RWD[0]}`}>
      <div
        className="h-[420px] bg-contain bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${projectBG})` }}
      >
        <div className="w-full border border-Cus_Orange -mb-11">
          <img className="w-52 mx-auto opacity-60" src={P01} alt="感受觸發" />
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
