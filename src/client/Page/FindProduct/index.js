import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Hearder from "../../components/Header";
import ProductList from "../../components/ProductList";
import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import ProductSort from "../../components/ProductSort";
import { useDispatch, useSelector } from "react-redux";
import { listItem } from "../../redux/actions/item.action";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import FilterByPrice from "../../components/ProductFilter/FilterbyPrice";
import FilterByCategory from "../../components/ProductFilter/Filtercaterogy";
const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));
function FindProduct(props) {
  const classes = useStyle();
  const [filters, setFilters] = useState({});
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.item);
  useEffect(() => {
    dispatch(listItem(filters));
  }, [filters]);
  const handlePriceChange = (newFilters) => {
    setFilters({
      ...filters,
      minPrice: newFilters?.minPrice,
      maxPrice: newFilters?.maxPrice,
    });
  };
  const handleBranchChange = (newFilters) => {
    console.log("newFilters", newFilters);
    setFilters({
      ...filters,
      branchId: newFilters,
    });
  };
  const handleSortChange = (newSortValue) => {
    setFilters({
      ...filters,
      orderPrice: newSortValue,
    });
  };
  return (
    <>
      <Hearder setFilters={setFilters} filters={filters} />
      <div
        style={{
          paddingTop: "20px",
          paddingLeft: "62px",
          backgroundColor: "rgb(235, 231, 231)",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Tìm kiếm sản phẩm
          </Link>
        </Breadcrumbs>
      </div>
      <Box pt={3} style={{ backgroundColor: "#ebe7e7" }}>
        <Container>
          <Grid container spacing={0.5}>
            <Grid item className={classes.left}>
              <Paper elevation={0}>
                <FilterByCategory onChange={handleBranchChange} />
                <FilterByPrice onChange={handlePriceChange} />
              </Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elevation={1}>
                <ProductSort
                  current={filters?.orderPrice}
                  onchange={handleSortChange}
                />
                <ProductList data={productList?.items} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default FindProduct;
