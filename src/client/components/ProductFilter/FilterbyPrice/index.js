import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import React, { useState } from "react";

FilterByPrice.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  range: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "&>span": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyle();
  const [price, setPrice] = useState({
    price_gte: 0,
    price_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    //e.persist()
    setPrice({
      ...price,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    if (onChange) onChange(price);
    setPrice({
      price_gte: 0,
      price_lte: 0,
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtittle2">Giá</Typography>
      <Box className={classes.range}>
        <TextField
          name="price_gte"
          value={price.price_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          name="price_lte"
          value={price.price_lte}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
