import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL, URL_PRODUCT, FORWARD_SLASH } from "./../constants";

const UpdateProduct = (props) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    meetingPlace: "",
    brand: "",
    condition: "",
  });
  const productId= "5fd4d90d5f0c5f2d442f2f35"

  const {
    title,
    description,
    price,
    category,
    meetingPlace,
    brand,
    condition,
  } = product;

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ0ZDhmNDVmMGM1ZjJkNDQyZjJmMzQiLCJpYXQiOjE2MDgxMzEzMzMsImV4cCI6MTYwODczNjEzM30._QxEmHnypxA91oauvprcVF3P55x5_5ccztW4Wt0HIK4";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    axios
      .get(URL + URL_PRODUCT + FORWARD_SLASH + productId)
      .then((response) => {
        const status = response.status;
        const data = response.data;
        if (status == 200) {
          console.log(data);
          setProduct(data);
        } else {
        }
      })
      .catch(console.log);
  }, []);

  const updateproduct = (e) => {
    e.preventDefault();

    e.preventDefault();
    console.log("title", title);
    console.log("description", description);
    console.log("price", price);
    console.log("category", category);
    console.log("meetingPlace", meetingPlace);
    console.log("brand", brand);
    console.log("condition", condition);

    {
      axios
        .put(
          URL + URL_PRODUCT + FORWARD_SLASH + productId,
          product,
          config
        )
        .then(console.log)
        .catch(console.log);
    }
  };

  return (
    <>
      <form id="updateproduct" onSubmit={updateproduct}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <select value={category} name="category" onChange={handleChange}>
          <option value="phone">phone</option>
          <option value="food">food</option>
          <option value="service">service</option>
        </select>
        <input
          type="text"
          placeholder="meetingPlace"
          name="meetingPlace"
          value={meetingPlace}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="brand"
          value={brand}
          onChange={handleChange}
        />
        <select value={condition} name="condition" onChange={handleChange}>
          <option value="brand new">Brand new</option>
          <option value="used">Used</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default UpdateProduct;
