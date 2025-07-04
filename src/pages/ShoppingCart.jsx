import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Alert, Badge, Row, Col, Container } from "react-bootstrap";
import products from "../Data/products";
import { removeFromCart, updateQuantity, clearCart } from "../Data/cartSlice";
import SurveyPopup from "../components/SurveyPopup";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1); // 1: Cart, 2: User Info, 3: Payment, 4: Confirmation
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [paymentInfo, setPaymentInfo] = useState({ card: "", address: "" });
  const [showSurvey, setShowSurvey] = useState(false);
  const [survey, setSurvey] = useState({ rating: "", comment: "" });

  // Get product details for each cart item
  const getProduct = (id) => products.find((p) => p.id === id);
  const total = cartItems.reduce((sum, item) => {
    const product = getProduct(item.productId);
    if (!product) return sum;
    const price = product.discount ? product.price * (1 - product.discount / 100) : product.price;
    return sum + price * item.quantity;
  }, 0);

  // Handlers
  const handleRemove = (id, size, color) => dispatch(removeFromCart({ productId: id, size, color }));
  const handleQuantity = (id, qty, size, color) => dispatch(updateQuantity({ productId: id, quantity: qty, size, color }));
  const handleUserInfo = (e) => { e.preventDefault(); setStep(3); };
  const handlePayment = (e) => { e.preventDefault(); setStep(4); setShowSurvey(true); dispatch(clearCart()); };

  return (
    <Container className="py-4">
      <h1 className="mb-4">Shopping Cart</h1>
      {/* Stepper */}
      <div className="mb-4 d-flex justify-content-center gap-3">
        {["Cart", "User Info", "Payment", "Confirmation"].map((label, i) => (
          <span key={label} className={step === i + 1 ? "fw-bold text-primary" : step > i + 1 ? "text-success" : "text-secondary"}>
            {label} {i < 3 && <span className="mx-2">→</span>}
          </span>
        ))}
      </div>
      {/* Step 1: Cart */}
      {step === 1 && (
        <>
          {cartItems.length === 0 ? (
            <Alert variant="info">Your cart is currently empty.</Alert>
          ) : (
            <>
              <Row>
                <Col md={8}>
                  <ul className="list-group mb-3">
                    {cartItems.map((item) => {
                      const product = getProduct(item.productId);
                      if (!product) return null;
                      return (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={`${item.productId}-${item.size || ''}-${item.color || ''}`}>
                          <div className="d-flex align-items-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8, marginRight: 16 }}
                            />
                            <div>
                              <strong>{product.name}</strong>
                              <div className="small text-muted">{product.description}</div>
                              {/* Show size and color if available */}
                              {(item.size || item.color) && (
                                <div className="mb-1">
                                  {item.size && <span className="me-2">Size: <b>{item.size}</b></span>}
                                  {item.color && <span>Color: <b>{item.color}</b></span>}
                                </div>
                              )}
                              <div>
                                <Form.Control
                                  type="number"
                                  min={1}
                                  max={product.stock && item.size && item.color ? product.stock[item.size]?.[item.color] ?? 1 : 1}
                                  value={item.quantity}
                                  onChange={e => handleQuantity(item.productId, Number(e.target.value), item.size, item.color)}
                                  style={{ width: 70, display: "inline-block", marginRight: 8 }}
                                />
                                {product.discount ? (
                                  <>
                                    <span style={{ textDecoration: 'line-through', color: '#888', marginRight: 6 }}>
                                      {product.price.toFixed(2)} $
                                    </span>
                                    <span style={{ color: '#d9534f', fontWeight: 600 }}>
                                      {(product.price * (1 - product.discount / 100)).toFixed(2)} $
                                    </span>
                                    <span className="badge bg-danger ms-2">-{product.discount}%</span>
                                  </>
                                ) : (
                                  <span>x {product.price.toFixed(2)} $</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline-danger" size="sm" onClick={() => handleRemove(item.productId, item.size, item.color)}>
                            Remove
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                  <h5>Total: <Badge bg="success">{total.toFixed(2)} $</Badge></h5>
                </Col>
                <Col md={4} className="d-flex flex-column gap-2">
                  <Button variant="primary" disabled={cartItems.length === 0} onClick={() => setStep(2)}>
                    Checkout
                  </Button>
                  <Button variant="outline-secondary" disabled={cartItems.length === 0} onClick={() => dispatch(clearCart())}>
                    Clear Cart
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </>
      )}
      {/* Step 2: User Info */}
      {step === 2 && (
        <Form onSubmit={handleUserInfo} className="mb-4">
          <h3>User Information</h3>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control required value={userInfo.name} onChange={e => setUserInfo(u => ({ ...u, name: e.target.value }))} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required value={userInfo.email} onChange={e => setUserInfo(u => ({ ...u, email: e.target.value }))} />
          </Form.Group>
          <Button type="submit" variant="primary">Next</Button>
        </Form>
      )}
      {/* Step 3: Payment */}
      {step === 3 && (
        <Form onSubmit={handlePayment} className="mb-4">
          <h3>Payment</h3>
          <Form.Group className="mb-2">
            <Form.Label>Card Number</Form.Label>
            <Form.Control required value={paymentInfo.card} onChange={e => setPaymentInfo(p => ({ ...p, card: e.target.value }))} placeholder="XXXX XXXX XXXX XXXX" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control required value={paymentInfo.address} onChange={e => setPaymentInfo(p => ({ ...p, address: e.target.value }))} />
          </Form.Group>
          <Button type="submit" variant="success">Pay & Confirm</Button>
        </Form>
      )}
      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div className="text-center my-5">
          <h2>Thank you for your purchase, {userInfo.name}!</h2>
          <p>A confirmation has been sent to <strong>{userInfo.email}</strong>.</p>
          <Button variant="primary" onClick={() => setStep(1)}>Back to Shop</Button>
        </div>
      )}
      {/* Survey Popup */}
      <SurveyPopup
        show={showSurvey}
        survey={survey}
        setSurvey={setSurvey}
        onClose={() => setShowSurvey(false)}
        onSubmit={() => { setShowSurvey(false); setSurvey({ rating: "", comment: "" }); }}
      />
    </Container>
  );
}