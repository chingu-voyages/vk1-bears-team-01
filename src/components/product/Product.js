import React, { useState, useEffect } from "react";
import "./../css/style.css";
import { URL, URL_PRODUCT, FORWARD_SLASH, DIR_DB_IMAGE } from "../constants";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./../css/style.css";

const Product = (props) => {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([])
  const [products, setProducts] = useState([]);
  const { productId } = useParams();

  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const [product, setProduct] = useState({});
  useEffect(async () => {
    const response = await axios.get(
      URL + URL_PRODUCT + FORWARD_SLASH + productId
    );
    const status = response.status;
    const data = response.data;
    if (status === 200) {
      setProduct(data);
      setImages(data.images);
    } else {
      console.log("no data");
    }

    const res = await axios.get(URL + URL_PRODUCT);
    const s = res.status;
    const d = res.data;
    if (s === 200) {
      setProducts(d);
    } else {
      console.log("no data");
    }
  },[products]);

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <div className="curv-border p-4">
              <Row className="mt-3 mb-3">
                <Col md={6} className="h-100">
                  <Row>
                    <Col>
                      <Row>
                        <Col md={12}>
                          <div>
                            <img
                              src={`${URL}${URL_PRODUCT}${DIR_DB_IMAGE}/${images[0]}`}
                              alt="Testing Image"
                              className="product-pic-prim"
                            />
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="mt-5">
                            <img
                              src={`${URL}${URL_PRODUCT}${DIR_DB_IMAGE}/${images[0]}`}
                              alt="Testing Image"
                              className="product-pic-home"
                            />
                          </div>
                        </Col>

                        <Col md={4}>
                          <div className="mt-5">
                            <img
                              src={`${URL}${URL_PRODUCT}${DIR_DB_IMAGE}/${images[0]}`}
                              alt="Testing Image"
                              className="product-pic-home"
                            />
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="mt-5">
                            <img
                              src={`${URL}${URL_PRODUCT}${DIR_DB_IMAGE}/${images[0]}`}
                              alt="Testing Image"
                              className="product-pic-home"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className=" h-100">
                  <Row>
                    <Col>
                      <div>
                        <h5>seller name</h5>
                        <p className="prod-title">{product.title}</p>
                        <p className="product-desc">{product.description}</p>
                        <p className="prod-meeting mb-5 mt-5">
                          {product.meetingPlace}
                        </p>
                        <div className="curv-border p-4">
                          <p>Contact Seller</p>
                          <textarea
                            name="description"
                            placeholder="description"
                            value={description}
                            onChange={handleChange}
                            className="form-control mt-2 mb-5"
                            rows="5"
                          />
                          <button className="btn-send p-2 ">Send</button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="curv-border p-4 mt-5 mb-5">
                <h2>You May Also Like</h2>
                <Row>
                {products.map((product, i) => {
                  return (
                    <>
                      <Col md={3} className="mt-3 mb-3">
                        <div className="curv-border h-100">
                          <div className="pt-3">
                            <img
                              src={`${URL}${URL_PRODUCT}${DIR_DB_IMAGE}/${product.images[0]}`}
                              alt="Testing Image"
                              className="product-pic-home"
                            />
                          </div>

                          <div className="p-3">
                            <p className="product-title">{product.title}</p>
                            <p className="product-price">{product.price}</p>
                            <p className="product-desc">
                              {product.description.length > 45
                                ? product.description.slice(0, 42) + "..."
                                : product.description}
                            </p>
                          </div>
                        </div>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
