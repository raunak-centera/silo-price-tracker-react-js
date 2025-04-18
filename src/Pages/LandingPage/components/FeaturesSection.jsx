// components/FeaturesSection.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import searchImg from "../assets/search.png";
// import compareImg from "../assets/compare.png";
// import fastImg from "../assets/fast.png";

const FeaturesSection = () => (
  <div className="py-5 bg-white">
    <Container>
      <h2 className="text-center mb-4">Why Use Silo?</h2>
      <Row>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            {/* <Card.Img variant="top" src={searchImg} /> */}
            <Card.Body>
              <Card.Title>Smart Search</Card.Title>
              <Card.Text>
                Search real product listings with our integrated API.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            {/* <Card.Img variant="top" src={compareImg} /> */}
            <Card.Body>
              <Card.Title>Compare Instantly</Card.Title>
              <Card.Text>
                Flipkart vs Amazon dummy prices at a glance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm">
            {/* <Card.Img variant="top" src={fastImg} /> */}
            <Card.Body>
              <Card.Title>Fast & Simple</Card.Title>
              <Card.Text>
                Bootstrap-powered UI for quick and clean interaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default FeaturesSection;
