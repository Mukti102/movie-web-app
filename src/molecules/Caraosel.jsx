import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Caraosel() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slideStyle = {
    width: "100%",
  };
  return (
    <div className="w-full h-80 bg-green-500">
      <Slider {...settings}>
        <div className="w-full h-80 overflow-hidden">
          <img
            src="https://www.kome-world.com/media/image/2020-03/_16-9_10255.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-80 overflow-hidden">
          <img
            src="https://wallpapercave.com/wp/wp11517547.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Caraosel;
