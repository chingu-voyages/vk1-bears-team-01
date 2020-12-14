import React from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBarTwo.css";
import { Link } from "react-router-dom";
function NavBarTwo() {
  return (
    <div>
      <Container>
        <Navbar
          className="border border-light"
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant="light"
        >
          <Navbar.Brand href="#home">
            <p className="brand">
              <span className="brandLeft">LEX</span>
              <span className="brandRight">SELL</span>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {/* <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/newItems">
                New Items
              </Nav.Link>
              <Nav.Link as={Link} to="/sellers">
                Sellers
              </Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Sign In
              </Nav.Link>
              <Button
                as={Link}
                to="/register"
                className="nav__register__button"
              >
                Register
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavBarTwo;
