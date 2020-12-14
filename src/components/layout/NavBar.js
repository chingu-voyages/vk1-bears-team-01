import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const register = () => {
    console.log("REGISTER WAS CLICKED!");
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">
          LEXSELL
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/newItems">
            New Items
          </Nav.Link>
          <Nav.Link as={Link} to="/sellers">
            Sellers
          </Nav.Link>
        </Nav>
        <Button as={Link} to="/login" className="mr-2" variant="outline-light">
          Login
        </Button>
        <Button
          as={Link}
          to="/register"
          className="mr-2"
          variant="light"
          onClick={() => register()}
        >
          Register
        </Button>
      </Navbar>
    </>
  );
};

export default NavBar;
