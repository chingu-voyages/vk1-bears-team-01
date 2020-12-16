import React, { useState } from "react";
import axios from "axios";
import {URL,URL_PRODUCT} from "./../constants";

const AddProduct = (props) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    meetingPlace: "",
    brand: "",
    condition: "",
  });



  const { title, description, price, category, meetingPlace, brand, condition } = product;

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ0ZDhmNDVmMGM1ZjJkNDQyZjJmMzQiLCJpYXQiOjE2MDgxMzEzMzMsImV4cCI6MTYwODczNjEzM30._QxEmHnypxA91oauvprcVF3P55x5_5ccztW4Wt0HIK4";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  

  const addproduct = (e) => {
    e.preventDefault();
    axios.post(URL+URL_PRODUCT, product, config).then(console.log).catch(console.log);
  };

  return (
    <>
      <form id="addproduct" onSubmit={addproduct}>
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
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default AddProduct;
