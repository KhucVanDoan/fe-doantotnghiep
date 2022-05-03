import React from "react";
import { Box } from "@material-ui/core";
import FilterByPrice from "./FilterbyPrice";
import FilterByCategory from "./Filtercaterogy";
const ProductFilter = ({ filters, onChange }) => {
  const handleCategoreChange = (values) => {
    if (!onChange) return;
    onChange(values);
  };
  const handlePriceChange = (values) => {
    if (!onChange) return;
    onChange(values);
  };
  return (
    <Box>
      <FilterByCategory filters={filters} onChange={handleCategoreChange} />
      <FilterByPrice onChange={handlePriceChange} />
    </Box>
  );
};
export default ProductFilter;
