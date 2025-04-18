// components/Header.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../../assets/img/logo.png";

const Header = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={() => scrollToSection("hero")}
          className="d-flex align-items-center gap-2"
        >
          <img
            src={logo}
            alt="Silo Logo"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="fw-bold text-dark">Silo Price Tracker</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection("features")}>
              Features
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("how-it-works")}>
              How It Works
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("search-section")}>
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
