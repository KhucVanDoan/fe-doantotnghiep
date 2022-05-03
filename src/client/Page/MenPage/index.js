import React, { useState } from "react";
import Footer from "../../components/Footer";
import Hearder from "../../components/Header";
import ProductFilter from "../../components/ProductFilter";
import ProductList from "../../components/ProductList";
import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import ProductSort from "../../components/ProductFilter/productSort/ProductSort";

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));
function MenWatch(props) {
  const classes = useStyle();
  const [filters, setFilters] = useState({ sort: "salePrice:ASC" });
  // useEffect(() => {
  //   history.push({
  //     path: history.location.path,
  //     search: queryString.stringify(fillter),
  //   });
  // }, [history, fillter]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await productApi.getAll(fillter);
  //       console.log(response.data);
  //       setProductList(response.data.data);
  //       setPanigation(response.pagination);
  //       console.log(response.pagination);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setloading(false);
  //   })();
  // }, [fillter]);
  // const handleChange = (e, page) => {
  //   setFillter((prevFillter) => ({
  //     ...prevFillter,
  //     _page: page,
  //   }));
  // };
  // const handleSortChange = (newSortValue) => {
  //   setFillter((prevFillter) => ({
  //     ...prevFillter,
  //     _sort: newSortValue,
  //   }));
  // };
  // const handleFilterChange = (newFilters) => {
  //   setFillter((prevFillter) => ({
  //     ...prevFillter,
  //     ...newFilters,
  //   }));
  // };
  // const setNewFilter = (newFilters) => {
  //   setFillter(newFilters);
  // };
  const data = [
    {
      id: 1,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 2,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 3,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 3,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 3,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 3,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
    {
      id: 3,
      name: "hihi",
      description: "mô tả",
      price: 12000,
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6TYyygFqRExAzfKhdkpeMFVVplL0SSNd2w&usqp=CAU",
    },
  ];
  const handleFilterChange = (newFilters) => {
    setFilters((prevFillter) => ({
      ...prevFillter,
      ...newFilters,
    }));
  };
  const handleSortChange = (newSortValue) => {
    setFilters((prevFillter) => ({
      ...prevFillter,
      sort: newSortValue,
    }));
  };
  return (
    <>
      <Hearder />
      <Box pt={3} style={{ backgroundColor: "#ebe7e7" }}>
        <Container>
          <Grid container spacing={0.5}>
            <Grid item className={classes.left}>
              <Paper elevation={0}>
                <ProductFilter
                  filters={filters}
                  onChange={handleFilterChange}
                />
              </Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elevation={1}>
                <ProductSort
                  currentSort={filters.sort}
                  onchange={handleSortChange}
                />
                <ProductList data={data} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default MenWatch;
