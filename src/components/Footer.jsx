import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/img/logo.png";

export default function Footer() {
  return (
    <div className="bg-light">
      <Container className="text-center pt-5 mt-5" style={{ fontSize: "10px" }}>
        <Row>
          <Col>
            <p>
              Silo Headquarters 4250 S 76th E Ave Tulsa, <br />
              OK 74145 United States
            </p>
          </Col>

          <Col>
            <img src={Logo} alt="Price tracker" width={150} />
          </Col>
        </Row>
        <p className="py-4">© 2025 SILOCLOUD |All Rights Reserved </p>
      </Container>
    </div>
  );
}
