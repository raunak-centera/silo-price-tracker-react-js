// components/HowItWorks.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import stepImg from "../assets/how-it-works.png";

const HowItWorks = () => (
  <div className="bg-light py-5">
    <Container>
      <h2 className="text-center mb-4">How It Works</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <ul className="fs-5">
            <li className="mb-3">🔍 Type a product name in the search bar</li>
            <li className="mb-3">
              📡 Our system fetches product data in real time
            </li>
            <li className="mb-3">
              🧠 Dummy Amazon/Flipkart prices are generated
            </li>
            <li className="mb-3">📊 You get instant price comparison</li>
          </ul>
        </Col>
        <Col md={6}>
          {/* <img src={stepImg} alt="Steps" className="img-fluid" /> */}
        </Col>
      </Row>
    </Container>
  </div>
);

export default HowItWorks;
