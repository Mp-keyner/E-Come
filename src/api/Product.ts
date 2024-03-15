import axios from "axios";

const ProductApi = axios.create({
  //  baseURL: 'http://localhost:3000/',
  // baseURL: 'https://e-come-back-rho.vercel.app/',
  baseURL: "https://dummyjson.com/products",
  timeout: 1000,
});

export default ProductApi;
