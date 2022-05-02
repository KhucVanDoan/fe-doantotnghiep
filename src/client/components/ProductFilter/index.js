import { Box } from "@mui/material";
import React from "react";
import FilterByPrice from "./FilterbyPrice";
import FilterByCategory from "./Filtercaterogy";
const handleCategoreChange = () => {};
const handleFilterChange = () => {};
const ProductFilter = () => {
  return (
    <Box>
      <FilterByCategory onChange={handleCategoreChange} />
      <FilterByPrice onChange={handleFilterChange} />
    </Box>
  );
};
export default ProductFilter;
