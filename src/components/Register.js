import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  DropdownButton,
} from "react-bootstrap";
import MainLayout from "./MainLayout";
import "./Register.css";

const Register = () => {
  const { register, watch, errors } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  //useState for Register Form
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    country: "",
    region: "",
    password: "",
  });

  //deconstruct user state for easy use
  const {
    firstName,
    lastName,
    email,
    gender,
    country,
    region,
    password,
  } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register", user)
      .then((res) => {
        //res.data holds the object result of API
        console.log(`Response is: ${JSON.stringify(res.data)}`);
      })
      .catch((err) => {
        //err.reponse.data holds the object result of API
        console.log(`Error is: ${JSON.stringify(err.response.data)}`);
      });
  };

  return (
    <MainLayout>
      <Container>
        <Row className="reg__row">
          <Col lg={4} className="reg__left__column  d-none d-lg-block">
            <img
              src="/images/register_profile_pic.png"
              className="profile__pic center__block"
            />
            <h2 className="reg__h2">Let’s get you set up</h2>
            <p className="reg__p">
              It should only take less than a minute to set up your account
            </p>

            <hr className="reg__hr" />
          </Col>
          <Col lg={8} className="reg__right__column">
            <div className="reg__right__column__header__container">
              <h2 className="reg__right__column__h2">Register</h2>
              <p className="reg__right__column__p">
                Use the form below to create your account
              </p>
            </div>
            <Form onSubmit={handleSubmit} className="reg__form">
              <Row>
                <Col>
                  {errors.firstName && (
                    <span className="reg__error__message">
                      This field is required
                    </span>
                  )}
                  <Form.Group controlId="formBasicFirstname">
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                      className="reg__field"
                      ref={register({ required: true })}
                    />
                  </Form.Group>
                  {errors.gender && (
                    <span className="reg__error__message">
                      This field is required
                    </span>
                  )}
                  <Form.Group controlId="formBasicGender">
                    <Form.Control
                      type="text"
                      placeholder="Gender"
                      name="gender"
                      value={gender}
                      onChange={handleChange}
                      className="reg__field"
                      ref={register({ required: true })}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {errors.lastName && (
                    <span className="reg__error__message">
                      This field is required
                    </span>
                  )}
                  <Form.Group controlId="formBasicLastname">
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                      className="reg__field"
                      ref={register({ required: true })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  {errors.country && (
                    <span className="reg__error__message">
                      This field is required
                    </span>
                  )}
                  <Form.Group controlId="formBasicCountry">
                    <Form.Control
                      type="text"
                      placeholder="Country"
                      name="country"
                      value={country}
                      onChange={handleChange}
                      className="reg__field"
                      ref={register({ required: true })}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {errors.region && (
                    <span className="reg__error__message">
                      This field is required
                    </span>
                  )}
                  <Form.Group controlId="formBasicRegion">
                    <Form.Control
                      type="text"
                      placeholder="Region"
                      name="region"
                      value={region}
                      onChange={handleChange}
                      className="reg__field"
                      ref={register({ required: true })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  {errors.email && (
                    <span className="reg__error__message">
                      This field is required
                    </span>
                  )}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className="reg__field"
                      ref={register({ required: true })}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {errors.password && (
                    <span className="reg__error__message">
                      This field is required
                    </span>
                  )}
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      className="reg__field"
                      ref={register({ required: true })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                className="reg__submit__button center__block"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
export default Register;
