import { Container, Row, Col, Card } from 'react-bootstrap';
import { BagFill, TagFill, StarFill, PeopleFill, EnvelopeFill, ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';

export default function About() {
  const navigate = useNavigate();
  return (
    <Container className="py-5">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        <ArrowLeft className="me-2" /> Previous page
      </button>
      <Row className="mb-4 align-items-center justify-content-center">
        <Col md={8} className="text-center mx-auto">
          <img src="logo.png" alt="Store Logo" style={{ maxWidth: '180px' }} className="mb-3" />
          <h1 className="display-5 fw-bold mb-2 text-primary">About StyleNest</h1>
          <p className="lead mb-4">Your destination for the latest trends, quality products, and a seamless shopping experience.</p>
        </Col>
      </Row>
      <Row className="mb-5 g-4 justify-content-center">
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <TagFill size={40} className="text-primary mb-3" />
              <Card.Title>Our Story</Card.Title>
              <Card.Text>
                Founded in 2025 by a passionate team, StyleNest was created to make online shopping easy, fun, and accessible for everyone. We now serve customers nationwide with a curated selection of top products.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <BagFill size={40} className="text-success mb-3" />
              <Card.Title>What We Offer</Card.Title>
              <Card.Text>
                <ul className="list-unstyled mb-0">
                  <li><BagFill className="me-2 text-success" />Wide selection of trusted brands</li>
                  <li><i className="bi bi-shield-lock me-2 text-primary" />Secure, easy checkout</li>
                  <li><i className="bi bi-truck me-2 text-info" />Fast, reliable shipping</li>
                  <li><i className="bi bi-chat-dots me-2 text-secondary" />Responsive support</li>
                  <li><i className="bi bi-gift me-2 text-warning" />Exclusive deals</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <StarFill size={40} className="text-warning mb-3" />
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                <ul className="list-unstyled mb-0">
                  <li><StarFill className="me-2 text-warning" /><strong>Customer First:</strong> Your satisfaction is our top priority.</li>
                  <li><i className="bi bi-patch-check me-2 text-success" /><strong>Quality:</strong> Only the best products.</li>
                  <li><i className="bi bi-shield-check me-2 text-primary" /><strong>Integrity:</strong> Honest, transparent business.</li>
                  <li><i className="bi bi-lightbulb me-2 text-info" /><strong>Innovation:</strong> Always improving for you.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5 justify-content-center">
        <Col md={6}>
          <Card className="text-center border-0 shadow-sm">
            <Card.Body>
              <PeopleFill size={32} className="text-info mb-2" />
              <Card.Title>Meet the Team</Card.Title>
              <Card.Text>
                Our dedicated team of tech, logistics, and customer service pros work together to deliver the best for you.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="text-center border-0 shadow-sm">
            <Card.Body>
              <EnvelopeFill size={32} className="text-danger mb-2" />
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Have questions or feedback? Email <a href="mailto:support@ecommercestore.com">support@ecommercestore.com</a> or use our contact form.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p className="fw-semibold text-success" style={{ fontSize: '1.1rem' }}>
            Thank you for choosing StyleNest. We look forward to serving you!
          </p>
        </Col>
      </Row>
    </Container>
  );
}