import React from "react";
import Footer from "../../components/Footer";
import Hearder from "../../components/Header";
import ClockMen from "./Clockmen.js";
import FeatureProduct from "./FeatureProduct";
import SlideHome from "./SlideHome";
import "./style.scss";
const HomePage = () => {
  return (
    <div className="main">
      <Hearder />
      <SlideHome />
      <FeatureProduct />
      <ClockMen />
      <Footer />
    </div>
  );
};

export default HomePage;
