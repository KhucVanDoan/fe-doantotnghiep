import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    //e.persist()
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box className="root">
      <Typography variant="subtittle2">Giá</Typography>
      <Box className="range">
        <TextField
          id="standard-basic"
          variant="standard"
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />

        <span>-</span>
        <TextField
          id="standard-basic"
          variant="standard"
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleSubmit}
        style={{ marginTop: "5px" }}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
