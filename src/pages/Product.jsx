import { useParams } from 'react-router';
import products from '../Data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Data/cartSlice';
import { BagFill, Star, StarFill } from 'react-bootstrap-icons';
import { Card, Button, Badge, Accordion, Form, Toast, ToastContainer, OverlayTrigger, Tooltip, Breadcrumb } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router';

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => String(p.id) === String(id));
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [showToast, setShowToast] = useState(false);
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewBody, setReviewBody] = useState('');
    const [reviewRating, setReviewRating] = useState(5);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);

    if (!product) {
        return (
            <div className="text-center py-5">
                <h2 className="display-5 text-danger">Product not found: {id}</h2>
                <p className="lead text-muted">Sorry, we couldn't find the product you were looking for.</p>
            </div>
        );
    }

    // Get stock for selected size and color
    const variantStock = product.stock?.[selectedSize]?.[selectedColor] ?? 0;

    const discounted = product.discount > 0;
    const finalPrice = discounted
        ? (product.price * (1 - product.discount / 100)).toFixed(2)
        : product.price.toFixed(2);

    const handleAddToCart = () => {
        dispatch(addToCart({ productId: product.id, quantity, size: selectedSize, color: selectedColor }));
        setShowToast(true);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        // Add the review to the product's reviews array in the products DB
        const newReview = {
            reviewer: 'Anonymous', // You can replace with user info if available
            avatar: 'https://randomuser.me/api/portraits/lego/1.jpg', // Placeholder avatar
            rating: reviewRating,
            title: reviewTitle,
            body: reviewBody,
            date: new Date().toLocaleDateString()
        };
        const prod = products.find(p => String(p.id) === String(id));
        if (prod) {
            prod.reviews = [newReview, ...(prod.reviews || [])];
        }
        setReviewSubmitted(true);
        setShowReviewForm(false);
        setReviewTitle('');
        setReviewBody('');
        setReviewRating(5);
        setTimeout(() => setReviewSubmitted(false), 2000);
    };

    // Calculate average rating for stars display
    const avgRating = product.reviews && product.reviews.length
        ? (product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length)
        : 0;
    const roundedAvg = Math.round(avgRating);

    return (
        <div className="container py-5">
            <Breadcrumb className="mb-4">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/products' }}>Products</Breadcrumb.Item>
                {product.category && (
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/products/${product.category.toLowerCase()}` }}>
                        {product.category}
                    </Breadcrumb.Item>
                )}
                <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
            </Breadcrumb>

            <div className="row g-5">
                <div className="col-md-6">
                    <div className="position-relative border rounded overflow-hidden shadow">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-100"
                            style={{ objectFit: 'cover', height: '420px', borderRadius: '12px', background: '#f6f7f9' }}
                        />
                        {discounted && (
                            <Badge
                                bg="danger"
                                className="position-absolute top-0 end-0 m-3 px-3 py-2 fs-6 rounded-pill"
                                style={{ letterSpacing: '1px' }}
                            >
                                SALE
                            </Badge>
                        )}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="pb-3 mb-3 border-bottom">
                        <h2 className="fw-bold mb-2">{product.name}</h2>
                        <div className="d-flex align-items-center mb-2">
                            {[...Array(5)].map((_, i) =>
                                i < roundedAvg
                                    ? <StarFill key={i} className="text-warning me-1" />
                                    : <Star key={i} className="text-secondary me-1" />
                            )}
                            <span className="text-muted ms-2" style={{ fontSize: '0.95em' }}>
                                ({product.reviews?.length || 0} review{product.reviews?.length === 1 ? '' : 's'})
                            </span>
                        </div>
                        <div className="mb-2">
                            {discounted ? (
                                <>
                                    <span className="text-decoration-line-through text-muted me-2 fs-5">${product.price.toFixed(2)}</span>
                                    <span className="fw-bold fs-3 text-success">${finalPrice}</span>
                                    <Badge bg="danger" className="ms-2 align-middle">-{product.discount}%</Badge>
                                </>
                            ) : (
                                <span className="fw-bold fs-3 text-dark">${finalPrice}</span>
                            )}
                        </div>
                        {variantStock > 10 ? (
                            <Badge bg="success" className="me-2">In Stock</Badge>
                        ) : variantStock > 0 ? (
                            <Badge bg="warning" className="me-2">Only {variantStock} left</Badge>
                        ) : (
                            <Badge bg="secondary" className="me-2">Out of Stock</Badge>
                        )}
                    </div>

                    <p className="lead text-muted">{product.description}</p>

                    <div className="row mb-3">
                        <div className="col-6">
                            <Form.Label>Size</Form.Label>
                            <Form.Select
                                value={selectedSize}
                                onChange={e => setSelectedSize(e.target.value)}
                                aria-label="Select size"
                            >
                                {product.sizes.map(size => (
                                    <option key={size}>{size}</option>
                                ))}
                            </Form.Select>
                        </div>
                        <div className="col-6">
                            <Form.Label>Color</Form.Label>
                            <Form.Select
                                value={selectedColor}
                                onChange={e => setSelectedColor(e.target.value)}
                                aria-label="Select color"
                            >
                                {product.colors.map(color => (
                                    <option key={color}>{color}</option>
                                ))}
                            </Form.Select>
                        </div>
                    </div>

                    <div className="row mb-4 align-items-end">
                        <div className="col-4">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={variantStock || 99}
                                value={quantity}
                                onChange={e => setQuantity(Number(e.target.value))}
                                style={{ width: '100px' }}
                                disabled={variantStock === 0}
                            />
                        </div>
                        <div className="col-8 d-grid">
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Add this product to your cart</Tooltip>}
                            >
                                <Button
                                    variant="dark"
                                    className="btn-lg"
                                    disabled={variantStock === 0}
                                    onClick={handleAddToCart}
                                >
                                    <BagFill className="me-2" /> Add to Cart
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </div>

                    <Accordion alwaysOpen className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Product Care</Accordion.Header>
                            <Accordion.Body>
                                {product.productCare && product.productCare.length > 0 ? (
                                    <ul>
                                        {product.productCare.map((tip, idx) => (
                                            <li key={idx}>{tip}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No care instructions available for this product.</p>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Shipping & Returns</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Free shipping for orders over $50.</li>
                                    <li>30-day hassle-free returns.</li>
                                    <li>Express delivery options available at checkout.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

            <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1050 }}>
                <Toast show={showToast} onClose={() => setShowToast(false)} delay={2000} autohide bg="success">
                    <Toast.Body className="text-white">
                        <BagFill className="me-2" /> Added <b>{product.name}</b> to cart!
                    </Toast.Body>
                </Toast>
            </ToastContainer>

            <div className="mt-5">
                <h4 className="mb-4 fw-semibold">Latest reviews</h4>
                <div className="row g-4">
                    {product.reviews && product.reviews.length > 0 ? (
                        product.reviews.slice(0, 3).map((review, i) => (
                            <div className="col-md-4" key={i}>
                                <Card className="h-100 shadow-sm border-0">
                                    <Card.Body>
                                        <div className="mb-2">
                                            {[...Array(5)].map((_, j) =>
                                                j < review.rating
                                                    ? <StarFill key={j} className="text-warning" />
                                                    : <Star key={j} className="text-secondary" />
                                            )}
                                        </div>
                                        <Card.Title className="mb-1">{review.title}</Card.Title>
                                        <Card.Text>
                                            {review.body}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="d-flex align-items-center bg-light border-0">
                                        <img
                                            src={review.avatar}
                                            alt={review.reviewer}
                                            className="rounded-circle me-2"
                                            width="40"
                                            height="40"
                                        />
                                        <div>
                                            <div className="fw-semibold">{review.reviewer}</div>
                                            <div className="text-muted" style={{ fontSize: '0.85em' }}>
                                                {review.date}
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <div className="col">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body>
                                    <Card.Title>No reviews yet</Card.Title>
                                    <Card.Text>
                                        Be the first to review this product!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </div>
                <div className="mt-4 text-center">
                    <Button variant="primary" onClick={() => setShowReviewForm(true)}>Review this item</Button>
                </div>
                {showReviewForm && (
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="d-flex justify-content-center align-items-center w-100 h-100">
                            <Card style={{ maxWidth: 500, width: '100%', boxShadow: '0 2px 16px #0002', borderRadius: 16 }}>
                                <Card.Body>
                                    <Card.Title className="mb-3 text-center" style={{ fontWeight: 600, fontSize: '1.4rem' }}>Write a Review</Card.Title>
                                    <Form onSubmit={handleReviewSubmit}>
                                        <Form.Group className="mb-3" controlId="reviewTitle">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" value={reviewTitle} onChange={e => setReviewTitle(e.target.value)} required placeholder="Give your review a title..." style={{ borderRadius: 8 }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="reviewBody">
                                            <Form.Label>Review</Form.Label>
                                            <Form.Control as="textarea" rows={3} value={reviewBody} onChange={e => setReviewBody(e.target.value)} required placeholder="Share your experience..." style={{ borderRadius: 8 }} />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="reviewRating">
                                            <Form.Label>Rating</Form.Label>
                                            <div>
                                                {[1,2,3,4,5].map(n => (
                                                    <Button
                                                        key={n}
                                                        variant={reviewRating >= n ? 'warning' : 'outline-secondary'}
                                                        size="sm"
                                                        className="me-1 px-2"
                                                        style={{ fontSize: 22, borderRadius: 6, transition: 'all 0.15s' }}
                                                        onClick={e => { e.preventDefault(); setReviewRating(n); }}
                                                        aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
                                                    >
                                                        ★
                                                    </Button>
                                                ))}
                                            </div>
                                        </Form.Group>
                                        <div className="d-flex justify-content-end gap-2">
                                            <Button variant="secondary" onClick={() => setShowReviewForm(false)} type="button">Cancel</Button>
                                            <Button variant="success" type="submit">Submit Review</Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                )}
                {reviewSubmitted && (
                    <ToastContainer position="bottom-end" className="p-3">
                        <Toast show={reviewSubmitted} onClose={() => setReviewSubmitted(false)} delay={2000} autohide bg="success">
                            <Toast.Body className="text-white">Thank you for your review!</Toast.Body>
                        </Toast>
                    </ToastContainer>
                )}
            </div>
        </div>
    );
}