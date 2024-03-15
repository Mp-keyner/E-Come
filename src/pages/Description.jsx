import React, { useEffect } from "react";
import UseProduct from "../hooks/UseProduct";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "../components/Card";

const Description = () => {
  const { GetProducts, data } = UseProduct();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    GetProducts(id);
  }, []);
  console.log(data);
  return (
    <div>
      <RecipeReviewCard
        name={data.title}
        description={data.description}
        thumbnail={data.thumbnail}
      />
    </div>
  );
};

export default Description;
