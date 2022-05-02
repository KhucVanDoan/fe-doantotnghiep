import React from "react";
import Slider from "react-slick";
import bannerI from "../../../assets/img/baner1.jpg";
import bannerII from "../../../assets/img/baner2.jpg";
import bannerIII from "../../../assets/img/baner3.jpg";
import "./style.scss";
function BannerSlide() {
  const bannerList = [
    {
      name: "anh 1",
      url: bannerI,
    },
    {
      name: "anh 2",
      url: bannerII,
    },
    {
      name: "anh 3",
      url: bannerIII,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider className="slider" {...settings}>
        <div className="slider__item">
          <img src={bannerI} alt="" />
        </div>
        {bannerList.map((item) => (
          <div key={item?.name} className="slider__item">
            <img src={item?.url} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerSlide;
