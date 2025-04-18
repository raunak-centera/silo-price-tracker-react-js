// components/HeroSection.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImg from "../../../assets/img/spt1.png";

const HeroSection = () => {
  return (
    <div className="bg-light">
      <Container>
        <Row className="align-items-center p-5">
          <Col md={7} className="text-center text-md-start ">
            <h1 className="display-4 fw-bold">Silo Price Tracker</h1>
            <p className="lead mt-3">
              Instantly compare Amazon and Flipkart prices with real product
              data and smart dummy pricing.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="mt-3"
              onClick={() => {
                const el = document.getElementById("search-section");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Start Searching
            </Button>
          </Col>
          <Col md={5}>
            <img src={heroImg} alt="Product comparison" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
