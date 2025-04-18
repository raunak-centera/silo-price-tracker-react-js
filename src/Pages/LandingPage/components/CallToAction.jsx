// components/CallToAction.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";

const CallToAction = () => (
  <div className="bg-primary text-white text-center py-5">
    <Container>
      <h2 className="fw-bold mb-3">Ready to find the best price?</h2>
      <p className="fs-5">
        Start searching now and get ahead in smart shopping!
      </p>
      <Button
        variant="light"
        size="lg"
        onClick={() => {
          const el = document.getElementById("search-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Search Now
      </Button>
    </Container>
  </div>
);

export default CallToAction;
