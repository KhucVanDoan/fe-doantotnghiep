import React, { useState } from "react";
import Footer from "../../components/Footer";
import Hearder from "../../components/Header";
import ProductFilter from "../../components/ProductFilter";
import ProductList from "../../components/ProductList";
import { Modal } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import "./style.scss";
const MenWatch = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const data = [
    {
      id: 1,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 2,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 3,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 3,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
  ];

  return (
    <>
      <Hearder />
      <div className="menClock">
        <ProductFilter />
        <ProductList data={data} />
      </div>
      <Footer />
    </>
  );
};

export default MenWatch;
