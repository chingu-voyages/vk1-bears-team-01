import React, { useState } from "react";
import MainLayout from "./MainLayout";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  //useState for Login Form
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  //deconstruct loginInfo state for easy use
  const { email, password } = loginInfo;

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", loginInfo)
      .then((res) => {
        //res.data holds the object result of API
        console.log(`Response is: ${JSON.stringify(res.data)}`);
      })
      .catch((err) => {
        //err.reponse.data holds the object result of API
        console.log(`Error is: ${JSON.stringify(err.response.data)}`);
      });
  };

  const responseSuccessGoogle = (res) => {
    console.log(res);
    //storing the tokenId from google response.
    const user = { tokenId: res.tokenId };
    axios
      .post("http://localhost:5000/api/auth/googleLogin", user)
      .then((res) => {
        //res.data holds the object result of API
        console.log(`Google Login Response is: ${JSON.stringify(res.data)}`);
      })
      .catch((err) => {
        //err.reponse.data holds the object result of API
        console.log(`Error is: ${JSON.stringify(err.response.data)}`);
      });
  };

  const responseErrorGoogle = (res) => {
    console.log(res);
  };

  return (
    <MainLayout>
      <Container>
        <Row className="login__row">
          <Col className="left__column d-none d-lg-block">
            <h2 className="login__h2">
              Hello, <br /> Welcome Back!
            </h2>

            <hr className="login__hr " />

            <p className="login__p">
              Enter your Email and Password <br />
              to continue
            </p>
            <Row>
              <Col>
                <img
                  className="shopping__image"
                  src="/images/login_shopping_one.png"
                />
              </Col>
              <Col>
                <img
                  className="web__shopping__image"
                  src="/images/login_webshopping_two.png"
                />
              </Col>
            </Row>
          </Col>

          <Col className="right__column ">
            <h2 className="right__column__h2">SIGN IN</h2>
            <p className="right__column__p">TO ACCESS YOUR ACCOUNT</p>

            <Form onSubmit={handleSubmit} className="center__block">
              <Form.Group controlId="formBasicEmail">
                <InputGroup className="mb-3 email__inputgroup">
                  <InputGroup.Prepend>
                    <InputGroup.Text className="email__inputgroup">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="email__field"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text className="email__inputgroup">
                      <FontAwesomeIcon icon={faKey} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="password__field"
                  />
                </InputGroup>
              </Form.Group>
              <Container>
                <Row>
                  <Col xs={6}>
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      class="form-check-label"
                      for="exampleCheck1"
                      className="remember__me"
                    >
                      Remember me
                    </label>
                  </Col>
                  <Col xs={6}>
                    <a href="#" className="float-right forgot__password">
                      Forgot Password?
                    </a>
                  </Col>
                </Row>
              </Container>

              <GoogleLogin
                clientId="999962597242-3rbqhpsghmjo9bk3ouihcdr6u3ddqegq.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
                className="google__button"
              />

              <Button
                variant="primary"
                type="submit"
                className="login__button  float-right"
              >
                Login
              </Button>

              <p className="create__account">
                Don’t have an account yet?{" "}
                <a href="#" className="create__account__link ">
                  Create your account
                </a>
                , it takes <br />
                less than a minute
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
