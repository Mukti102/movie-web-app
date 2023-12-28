import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
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
    <div className="w-full h-80 mb-20">
      <Slider {...settings}>
        <div className="w-full h-96 overflow-hidden bg-[url('https://movieflix-web.vercel.app/pictures/swiper/1.jpg')] bg-cover bg-top"></div>
        <div className="w-full h-96 overflow-hidden bg-[url('https://wallpapercave.com/wp/wp5536421.jpg')] bg-cover bg-top"></div>
        <div className="w-full h-96 overflow-hidden bg-[url('https://wallpapercave.com/wp/wp6240532.jpg')] bg-cover bg-top"></div>
        <div className="w-full h-96 overflow-hidden bg-[url('https://www.nawpic.com/media/2020/blackpink-nawpic-48.jpg')] bg-center bg-cover"></div>
        <div className="w-full h-96 overflow-hidden bg-[url('https://wallpapercave.com/wp/wp12208903.jpg')] sm:bg-top  sm:bg-cover bg-cover bg-left"></div>
        <div className="w-full h-96 overflow-hidden bg-[url('https://wallpapercave.com/wp/wp12208903.jpg')] sm:bg-top sm:bg-cover   bg-cover sambung"></div>
        <div className="w-full h-96 overflow-hidden bg-[url('https://wallpapercave.com/wp/wp12567228.jpg')] sm:bg-center bg-right bg-cover"></div>
        <div className="w-full h-96 overflow-hidden bg-[url('https://movieflix-web.vercel.app/pictures/swiper/4.jpg')] bg-center bg-cover"></div>
      </Slider>
    </div>
  );
}

export default Caraosel;
