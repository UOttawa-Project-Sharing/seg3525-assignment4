import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BagFill, TagFill, StarFill } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import products from '../Data/products';
import { addToCart } from '../Data/cartSlice';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router';

export default function Home() {
  const dispatch = useDispatch();
  const handleAddToCart = (productId) => {
    dispatch(addToCart({ productId, quantity: 1 }));
  };

  // Get top 3 discounted products
  const topDiscountedProducts = [...products]
    // .filter(p => p.discount && p.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 3);

  return (
    <Container className="py-5">
      <Row className="mb-4 align-items-center">
        <Col md={8}>
          <h1 className="display-4 fw-bold mb-3">Welcome to StyleNest!</h1>
          <p className="lead">Discover the latest trends in fashion. Shop quality clothing for every style and season. Enjoy exclusive offers and a seamless shopping experience!</p>
          <Button variant="primary" size="lg" className="me-2" as={Link} to="/products">
            <BagFill className="me-2" /> Start Shopping
          </Button>
          <Button variant="outline-secondary" size="lg" href="#survey">
            <StarFill className="me-2" /> Give Feedback
          </Button>
        </Col>
        <Col md={4} className="text-center">
          <img src="/vite.svg" alt="StyleNest Logo" style={{ maxWidth: '180px' }} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <TagFill size={40} className="text-primary mb-3" />
              <Card.Title>Special Offers</Card.Title>
              <Card.Text>
                Save up to 30% on summer collections! Don’t miss out on our limited-time deals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <BagFill size={40} className="text-success mb-3" />
              <Card.Title>Easy Shopping</Card.Title>
              <Card.Text>
                Browse, filter, and find your perfect outfit with our intuitive search and faceted filters.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 text-center border-0 shadow-sm">
            <Card.Body>
              <StarFill size={40} className="text-warning mb-3" />
              <Card.Title>We Value You</Card.Title>
              <Card.Text>
                Tell us about your experience! Complete our quick survey and help us improve.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Product Showcase Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="fw-bold mb-4 text-center">Featured Products</h2>
        </Col>
      </Row>
      <Row className="g-4 justify-content-center">
        {topDiscountedProducts.map(product => (
          <Col key={product.id} md={4} sm={6} xs={12}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}