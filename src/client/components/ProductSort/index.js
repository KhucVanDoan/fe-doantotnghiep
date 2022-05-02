import { Tab, Tabs } from "@mui/material";
import React from "react";

function ProductSort({ currentSort, onchange }) {
  const handleSortChange = (e, newValue) => {
    if (onchange) onchange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      onChange={handleSortChange}
      textColor="primary"
      indicatorColor="primary"
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp đến cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá cao đến thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;
