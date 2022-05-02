import { Box, Grid } from "@mui/material";
import React from "react";
import ProductList from "../../../components/ProductList";
import "./style.css";

const FeatureProduct = () => {
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
      id: 4,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 5,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
  ];
  return (
    <Box
      style={{ maxWidth: "1200px", padding: "10px 20px", marginLeft: "50px" }}
    >
      <h3>Sản phẩm nổi bật</h3>
      <Grid container>
        <ProductList data={data} />
      </Grid>
    </Box>
  );
};

export default FeatureProduct;
