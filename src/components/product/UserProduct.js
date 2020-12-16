import React, { useEffect } from "react";
import { URL, URL_PRODUCT, FORWARD_SLASH, USER_PRODUCT } from "./../constants";
import axios from "axios";

const UserProduct = (props) => {
  let product = [];
  const userId = "5fd4d8f45f0c5f2d442f2f34";
  useEffect(() => {
    axios.get(
      URL + URL_PRODUCT + FORWARD_SLASH + USER_PRODUCT + FORWARD_SLASH + userId
    ).then(response=>{
        const status = response.status;
        const data = response.data;
        if(status==200){
            product = data;
            console.log(product)
        }else{
            console.log("no data")
        }
    }).catch(console.log)
  }, []);
  return (
  <>
    <h1>this is user product</h1>
  </>
  )
};

export default UserProduct;
