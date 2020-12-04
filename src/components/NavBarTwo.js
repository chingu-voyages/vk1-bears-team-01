import React from "react";
import { Container, Col, Row, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBarTwo.css";

function NavBarTwo() {
  return (
    <div>
      <Container>
        <p className="brand">
          <span className="brandLeft">LEX</span>
          <span className="brandRight">SELL</span>
        </p>
      </Container>
    </div>
  );
}

export default NavBarTwo;
