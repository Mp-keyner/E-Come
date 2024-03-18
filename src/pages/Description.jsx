import React, { useEffect } from "react";
import UseProduct from "../hooks/UseProduct";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "../components/Card";
import { Stack, Typography } from "@mui/material";

const Description = () => {
  const { GetProducts, data } = UseProduct();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    GetProducts(id);
  }, []);
  console.log(data);
  return (
    <Stack spacing={4}>
      <Stack
        sx={{
          backgroundImage: `url(${data.thumbnail})`,
          height: "30pc",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Stack>
      <Stack padding="0 3pc">
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "40px",
            lineHeight: "1",
          }}
          color="primary"
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
          }}
        >
          {data.description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Description;
