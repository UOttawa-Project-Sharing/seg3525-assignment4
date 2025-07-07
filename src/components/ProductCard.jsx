import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BagFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';

const cardStyle = {
  transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s cubic-bezier(0.4,0,0.2,1)'
};
const cardHoverStyle = {
  transform: 'translateY(-8px) scale(1.03)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 1.5px 6px rgba(0,0,0,0.10)',
  zIndex: 2
};

function ProductCard({ product, filterState }) {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/product/${product.id}`, { state: filterState });
  };
  return (
    <Card
      className="h-100 d-flex flex-column position-relative"
      style={hover ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleCardClick(e)}
    >
      <Card.Img
        variant="top"
        src={product.images ? product.images[0] : product.image}
        alt={product.name}
        style={{ objectFit: 'cover', width: '100%', height: '220px' }}
      />
      <Card.Body className="d-flex flex-column flex-grow-1">
        {product.discount > 0 && (
          <div className="badge bg-danger position-absolute" style={{ top: 10, right: 10, zIndex: 1 }}>
            -{product.discount}%
          </div>
        )}
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div className="mt-auto">
        <div className="mb-2 fw-bold">
          {product.discount > 0 ? (
            <>
              <span className="text-decoration-line-through text-muted me-2">${product.price.toFixed(2)}</span>
              <span>${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
            </>
          ) : (
            <>${product.price.toFixed(2)}</>
          )}
        </div>
          <Button variant="primary" size="sm">
            <BagFill className="me-1" /> More Info
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
