import React, { useEffect } from "react";
import { URL, URL_PRODUCT, FORWARD_SLASH, CATEGORY } from "./../constants";
import axios from "axios";

const Category = (props) => {
  let product = [];
  const category = "food";
  useEffect(() => {
    axios
      .get(
        URL + URL_PRODUCT + FORWARD_SLASH + CATEGORY + FORWARD_SLASH + category
      )
      .then((response) => {
        const status = response.status;
        if (status === 200) {
          product = response.data;
        } else {
          console.log("no data");
        }
      })
      .catch(console.log);
  });
  return (
    <>
      <h1>this is caegory</h1>
    </>
  );
};

export default Category;
