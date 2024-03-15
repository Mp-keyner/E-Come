import React, { useEffect, useState } from "react";
import UseProduct from "../hooks/UseProduct";
import { Button, Grid, Stack } from "@mui/material";
import RecipeReviewCard from "../components/Card";
import { Link } from "react-router-dom";

const HomeScreeen = () => {
  const { GetAllProducts, data } = UseProduct();
  const [pages, setPages] = useState(0);
  useEffect(() => {
    GetAllProducts(pages);
  }, [pages]);
  console.log(data);
  return (
    <Stack justifyContent="center" alignItems="center">
      <Grid container alignContent="center" justifyContent="center" spacing={2}>
        {data.map((item) => (
          <Grid item key={item.id}>
            <Link to={`/Description/${item.id}`}>
              <RecipeReviewCard
                name={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Button
        onClick={() => {
          setPages(pages + 20);
        }}
        disabled={pages == 80}
      >
        Next
      </Button>
    </Stack>
  );
};

export default HomeScreeen;
