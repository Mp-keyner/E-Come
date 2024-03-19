import React, { useState } from "react";
import ProductApi from "../api/Product";

const UseProduct = () => {
  const [data, setData] = useState([]);

  const GetAllProducts = async (pages = 0) => {
    try {
      const resques = await ProductApi.get(`?limit=20&skip=${pages}`);
      setData(resques.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const GetProducts = async (id) => {
    console.log(id);
    try {
      const resques = await ProductApi.get(`${id}`);
      setData(resques.data);
    } catch (error) {
      console.log(error);
    }
  };
  const GetProductsCategory = async (category) => {
    console.log(category);
    try {
      const resques = await ProductApi.get(`/category/${category}`);
      setData(resques.data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    GetAllProducts,
    data,
    GetProducts,
    GetProductsCategory
  };
};

export default UseProduct;
