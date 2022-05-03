import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

FilterByCategory.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    "& > li": {
      marginTop: theme.spacing(1),
      transition: "all .25s",
      "&:hover": {
        color: theme.palette.primary.dark,
        cursor: "pointer",
      },
    },
  },
}));

function FilterByCategory({ filters, onChange }) {
  // const [categoryList, setCategoryList] = useState([]);

  const categoryList = [
    {
      id: 1,
      name: "hihi",
    },
    {
      id: 2,
      name: "haha",
    },
    {
      id: 3,
      name: "hehe",
    },
  ];
  const classes = useStyle();
  // useEffect(() => {
  //   (async () => {
  //     const response = await categoryApi.getAll();
  //     setCategoryList(response.data.map((x) => ({ id: x.id, name: x.name })));
  //   })();
  // }, []);
  const handleCategoryClick = (category) => {
    // if (onChange) {
    //   onChange(category.id);
    // }
  };
  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;

    if (onChange) onChange({ [name]: checked });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Danh mục sản phẩm</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[category.id])}
                  onChange={handleChange}
                  name={category.id}
                  color="primary"
                />
              }
              label={category.name}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
