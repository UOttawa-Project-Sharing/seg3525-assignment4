import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NotImplemented() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Container fluid className="flex-grow-1 d-flex flex-column justify-content-center align-items-center bg-gradient p-0" style={{background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)'}}>
        <Row className="justify-content-center align-items-center flex-grow-1 w-100 m-0">
          <Col md={8} className="text-center">
            <h1 className="display-4 fw-bold mb-3 text-primary">Feature Not Implemented</h1>
            <p className="lead mb-4">
              <span className="fw-semibold">Sorry, this feature is not available.</span><br />
              <span className="text-secondary">This website is a demonstration project and does not have a backend.</span>
            </p>
            <Button variant="primary" size="lg" href="/" className="shadow-sm px-4 py-2">
               Back To Home
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center w-100 mb-5">
          <Col md={6}>
            <Card className="text-center border-0 shadow-lg rounded-4 bg-white bg-opacity-75">
              <Card.Body>
                <Card.Title as="h4" className="mb-3 text-info">Why am I seeing this?</Card.Title>
                <Card.Text className="fs-5">
                  This feature is not available because this website was created as part of a university assignment for SEG3525 at the University of Ottawa.<br /><br />
                  The site is a mockup and does not have a backend or real user accounts. Its purpose is to demonstrate front-end development skills, UI/UX design, and integration with modern web technologies.<br /><br />
                  If you have questions about the project or want to learn more, please contact the course instructor or the student developer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotImplemented;
