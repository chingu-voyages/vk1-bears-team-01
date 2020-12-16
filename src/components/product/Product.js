import React, { useState, useEffect } from "react";
import { URL, URL_PRODUCT } from "./../constants";
import axios from "axios";

const Product = () => {
  let product = [];
  useEffect(() => {
    axios
      .get(URL + URL_PRODUCT)
      .then((response) => {
        const status = response.status;
        const data = response.data;
        if (status == 200) {
          product = data;
          console.log(product)
        } else {
          console.log("no data");
        }
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <h1>get product</h1>
    </>
  );
};

export default Product;
