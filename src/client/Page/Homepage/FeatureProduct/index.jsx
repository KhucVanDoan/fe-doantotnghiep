import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../../components/ProductList";
import { listItem } from "../../../redux/actions/item.action";
import "./style.css";

const FeatureProduct = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.item);
  useEffect(() => {
    dispatch(listItem({ isView: -1 }));
  }, []);
  const data = [
    {
      id: 1,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      salePrice: 10000,
      itemImages: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
        },
      ],
    },
    {
      id: 2,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      salePrice: 0,
      itemImages: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
        },
      ],
    },
    {
      id: 3,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      itemImages: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
        },
      ],
    },
    {
      id: 4,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      itemImages: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
        },
      ],
    },
    {
      id: 5,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      itemImages: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
        },
      ],
    },
  ];
  return (
    <Box style={{ maxWidth: "1200px", marginLeft: "80px" }}>
      <h2 style={{ alignItems: "center", textAlign: "center" }}>
        SẢN PHẨM NỔI BẬT
      </h2>
      <Grid>
        <ProductList data={productList?.items} />
      </Grid>
    </Box>
  );
};

export default FeatureProduct;
