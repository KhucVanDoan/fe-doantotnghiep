import React from "react";
import Footer from "../../components/Footer";
import Hearder from "../../components/Header";
import ClockMen from "./Clockmen.js";
import FeatureProduct from "./FeatureProduct";
import SlideHome from "./SlideHome";

const HomePage = () => {
  return (
    <>
      <Hearder />
      <SlideHome />
      <FeatureProduct />
      <ClockMen />
      <Footer />
    </>
  );
};

export default HomePage;
