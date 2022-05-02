import React from "react";
import Slider from "react-slick";
import bannerII from "../../../assets/img/baner2.jpg";
import bannerIII from "../../../assets/img/baner3.jpg";
import "./style.scss";
function BannerSlide() {
  const bannerList = [
    {
      name: "anh 1",
      url: "https://thegioidongho.vip/thumb/crop/12140/1240/400/",
    },
    {
      name: "anh 2",
      url: "https://thegioidongho.vip/thumb/crop/12135/1240/400/",
    },
    {
      name: "anh 3",
      url: "https://thegioidongho.vip/thumb/crop/15785/1240/400/",
    },
    {
      name: "anh 4",
      url: bannerII,
    },
    {
      name: "anh 4",
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
          <img
            src="https://thegioidongho.vip/thumb/crop/15782/1240/400/"
            alt="hihi"
          />
        </div>
        {bannerList.map((item) => (
          <div key={item?.name} className="slider__item">
            <img src={item?.url} alt="hihi" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerSlide;
