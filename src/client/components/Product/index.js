import { Box } from "@mui/material";
import { Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { formatMoney } from "../../common/common";

function Product({ product }) {
  const history = useNavigate();
  return (
    <Box
      padding={1}
      onClick={(e) => {
        e.preventDefault();
        history(`/product/${product.id}/detail`);
      }}
      to={`/product/${product.id}`}
    >
      <Box padding={1}>
        <img src={product.images} alt={product.name} width="100%" />
      </Box>
      <h3 style={{ padding: "5px 20px" }}>{product.name}</h3>
      <Typography
        variant="body2"
        style={{ textAlign: "center", color: "grey" }}
      >
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {formatMoney(product.price)}
        </Box>
      </Typography>
    </Box>
  );
}

export default Product;
