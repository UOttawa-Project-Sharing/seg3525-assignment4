import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function NotFound() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh", background: "#f8f9fa" }}>
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="text-center shadow-lg border-0" style={{ background: "#fff", borderRadius: 24 }}>
            <Card.Body>
              <Card.Title as="div" style={{ fontSize: "7rem", fontWeight: "bold", color: "#dc3545", textShadow: "2px 2px 8px #fff" }}>404</Card.Title>
              <Card.Subtitle as="h2" className="mb-3" style={{ fontSize: "2.5rem", color: "#343a40" }}>Page Not Found</Card.Subtitle>
              <Card.Text style={{ fontSize: "1.2rem", color: "#6c757d" }}>
                The page you are looking for does not exist.<br />
                It might have been moved or deleted.
              </Card.Text>
              <Button href="/" variant="primary" size="lg">
                Go to Home
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
