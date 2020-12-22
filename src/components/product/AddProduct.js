import React, { useState } from "react";
import axios from "axios";
import { URL, URL_PRODUCT } from "./../constants";

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
  const [file, setFile] = useState([]);
  const [filename, setFilename] = useState("Choose File");
  const onChange = (e) => {
    const samFile = file;
    samFile.push(e.target.files[0]);
    setFile(samFile);

    setFilename(e.target.files[0].name);
    console.log(file);
    console.log(filename);
  };
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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ0ZDhmNDVmMGM1ZjJkNDQyZjJmMzQiLCJpYXQiOjE2MDg2NDQxNzMsImV4cCI6MTYwOTI0ODk3M30.6o4j8aKBpN7-x1IqhYqX8pAUL3Eqwu7ztw63wN6hObM";
  const config = {
    "Content-Type": "multipart/form-data",
    headers: { Authorization: `Bearer ${token}` },
  };

  const addproduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(product)) {
      formData.append(key,value)
    }
    file.forEach((f, i) => {
      formData.append("file"+i, f);
    });

    try {
      const result = await axios.post(URL + URL_PRODUCT, formData, config);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
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
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
            multiple
            data-show-upload="true"
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
