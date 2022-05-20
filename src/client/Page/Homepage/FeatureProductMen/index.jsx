import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../../components/ProductList";
import { listItem } from "../../../redux/actions/item.action";
import "./style.css";

const FeatureProductMen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.item);
  useEffect(() => {
    dispatch(listItem({ isView: -1, limit: 8 }));
  }, [dispatch]);
  return (
    <Box style={{ maxWidth: "1200px", marginLeft: "80px", marginTop: "-30px" }}>
      <h2 style={{ alignItems: "center", textAlign: "center" }}>
        SẢN PHẨM XEM NHIỀU
      </h2>
      <Grid>
        <ProductList data={productList?.items} />
      </Grid>
    </Box>
  );
};

export default FeatureProductMen;
