import React, { useEffect } from "react";
import UseProduct from "../hooks/UseProduct";

const HomeScreeen = () => {
  const {GetAllProducts} = UseProduct()
  useEffect(() => {
    GetAllProducts()
  }, [])
  
  return <div>hello</div>;
};

export default HomeScreeen;
