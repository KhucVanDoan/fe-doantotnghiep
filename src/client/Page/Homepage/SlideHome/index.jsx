import React from "react";
import BannerSlide from "../BannerSlide";
import "./style.scss";
function SlideHome() {
  return (
    <section className="banner-slide">
      <div className="banner-slide__content container">
        <BannerSlide />
      </div>
    </section>
  );
}

export default SlideHome;
