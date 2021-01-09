import React, { useState } from "react";
import axios from "axios";
import { URL, URL_PRODUCT } from "./../constants";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import "./../css/style.css";

const AddProduct = (props) => {
  const [image, setImage] = useState({ preview: "", raw: "" });
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
    if (e.target.files[0]) {
      const samFile = file;
      samFile.push(e.target.files[0]);
      setFile(samFile);
      setFilename(e.target.files[0].name);

      setImage({
        preview: window.URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
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

  {/*
    useeffect() //get localhost token
    token below is already use as setToken

  */}

  const [token,setToken] = useState("");
    
  const config = {
    "Content-Type": "multipart/form-data",
    headers: { Authorization: `Bearer ${token}` },
  };

  const addproduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(product)) {
      formData.append(key, value);
    }
    file.forEach((f, i) => {
      formData.append("file" + i, f);
    });

    try {
      const result = await axios.post(URL + URL_PRODUCT, formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form id="addproduct" onSubmit={addproduct}>
        <Container className="mt-5 mb-5" style={{ marginRight: "100px" }}>
          <Row>
            <Col md={5} className="text-center">
              <div className="curv-border p-5 h-100">
                <div className="customFile mb-4">
                  <label htmlFor="customFile">
                    <>
                      <span className="text-center button-style-2">
                        Select Photo
                      </span>
                    </>
                  </label>
                  <input
                    type="file"
                    className="custom-file-input w-100"
                    id="customFile"
                    onChange={onChange}
                    multiple
                    data-show-upload="true"
                    style={{ display: "none" }}
                  />
                </div>
                <div>
                  <Row>
                    {file.length === 0 ? (
                      <>
                        <Col md={4} className="mt-4">
                          <div className="photoAvatar">Photo</div>
                        </Col>
                        <Col md={4} className="mt-4">
                          <div className="photoAvatar">Photo</div>
                        </Col>
                        <Col md={4} className="mt-4">
                          <div className="photoAvatar">Photo</div>
                        </Col>
                      </>
                    ) : file.length === 2 ? (
                      <>
                        <Col md={4} className="mt-4">
                          <img
                            src={window.URL.createObjectURL(file[0])}
                            alt="dummy"
                            width="100%"
                            height="100"
                          />
                        </Col>
                        <Col md={4} className="mt-4">
                          <img
                            src={window.URL.createObjectURL(file[1])}
                            alt="dummy"
                            width="100%"
                            height="100"
                          />
                        </Col>
                        <Col md={4} className="mt-4">
                          <div className="photoAvatar">Photo</div>
                        </Col>
                      </>
                    ) : (
                      file
                        .slice(0)
                        .reverse()
                        .map((el, i) => {
                          if (file.length === 1) {
                            return (
                              <>
                                <Col md={4} className="mt-4">
                                  <img
                                    src={window.URL.createObjectURL(el)}
                                    alt="dummy"
                                    width="100%"
                                    height="100"
                                  />
                                </Col>
                                <Col md={4} className="mt-4">
                                  <div className="photoAvatar">Photo</div>
                                </Col>
                                <Col md={4} className="mt-4">
                                  <div className="photoAvatar">Photo</div>
                                </Col>
                              </>
                            );
                          } else {
                            return i < 3 ? (
                              <Col md={4} className="mt-4">
                                <img
                                  src={window.URL.createObjectURL(el)}
                                  alt="dummy"
                                  width="100%"
                                  height="100"
                                />
                              </Col>
                            ) : null;
                          }
                        })
                    )}
                  </Row>
                </div>
              </div>
            </Col>
            <Col md={7} className="text-center">
              <div className="curv-border  p-5">
                <select
                  className="form-control"
                  value={category}
                  name="category"
                  onChange={handleChange}
                >
                  <option selected>Category</option>
                  <option value="phone">phone</option>
                  <option value="food">food</option>
                  <option value="service">service</option>
                </select>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={handleChange}
                  className="form-control mt-2"
                />
                <input
                  type="number"
                  placeholder="price"
                  name="price"
                  value={price}
                  onChange={handleChange}
                  className="form-control mt-2"
                />
                <textarea
                  name="description"
                  placeholder="description"
                  value={description}
                  onChange={handleChange}
                  className="form-control mt-2 mb-5"
                  rows="5"
                />
              </div>
            </Col>
            <Col>
              <div className="mt-3">
                {" "}
                <button type="submit" className="float-right button-style-1">
                  Sell
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
};

export default AddProduct;