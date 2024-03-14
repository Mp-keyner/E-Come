import React from 'react'

const UseProduct = () => {
  const GetAllProducts = () => {
    ProductApi.get('allproducts', {
        headers: {
          authorization: `Bearer ${TokenGoogle}`
        }
      })
  }
  return {
    GetAllProducts
  }
}

export default UseProduct