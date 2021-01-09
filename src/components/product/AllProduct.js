import React, { useState, useEffect } from "react";
import "./../css/style.css";
import { URL, URL_PRODUCT, DIR_DB_IMAGE } from "../constants";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./../css/style.css";
import sampleImg from "./../images/catss.jfif";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const response = await axios.get(URL + URL_PRODUCT);
    const status = response.status;
    const data = response.data;
    if (status === 200) {
      setProducts(data);
    } else {
      console.log("no data");
    }
  }, [products]);

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <div className="curv-border p-4">
              <h2>Explore</h2>
              <div className="mt-3 mt3">
                <Row className="text-center">
                  <Col md={2}>
                    <img src={sampleImg} alt="sample" className="img-explore" />
                    <h5>Cars</h5>
                  </Col>
                  <Col md={2}>
                    <img src={sampleImg} alt="sample" className="img-explore" />
                    <h5>Phones</h5>
                  </Col>
                  <Col md={2}>
                    <img src={sampleImg} alt="sample" className="img-explore" />
                    <h5>Mens</h5>
                  </Col>
                  <Col md={2}>
                    <img src={sampleImg} alt="sample" className="img-explore" />
                    <h5>Womens</h5>
                  </Col>
                  <Col md={2}>
                    <img src={sampleImg} alt="sample" className="img-explore" />
                    <h5>Foods and Drinks</h5>
                  </Col>
                  <Col md={2}>
                    <img src={sampleImg} alt="sample" className="img-explore" />
                    <h5>Video Games</h5>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="curv-border p-4 mt-4">
              <h2>Daily Picks</h2>
              <Row>
                {products.map((product, i) => {
                  return i < 4 ? (
                    <>
                      <Col md={3} className="mt-3 mb-3">
                        <Link to={`/product/${product._id}`}>
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
                        </Link>
                      </Col>
                    </>
                  ) : null;
                })}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="curv-border p-4 mt-4">
              <h2>Fresh Find</h2>
              <Row>
                {products.map((product, i) => {
                  return (
                    <>
                      <Col md={3} className="mt-3 mb-3">
                        <Link to={`/product/${product._id}`}>
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
                        </Link>
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

export default AllProduct;
