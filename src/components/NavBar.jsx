import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import products from "../Data/products.js";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className="mb-4 shadow-sm py-2 sticky-top z-3">
            <Container fluid className="px-4">
                <div className="d-none d-lg-flex w-100 align-items-center justify-content-between position-relative" style={{ minHeight: '56px' }}>
                    <div className="d-flex gap-4">
                        <Nav.Link as={Link} to="/" className="text-dark fw-semibold">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="text-dark fw-semibold">About</Nav.Link>
                        <NavDropdown title="Products" id="products-dropdown" className="text-dark fw-semibold">
                            <NavDropdown.Item as={Link} to="/products" key="all-categories">
                                All Categories
                            </NavDropdown.Item>
                            {[...new Set(products.map(p => p.category))].map(category => (
                                <NavDropdown.Item as={Link} to={`/products/${encodeURIComponent(category)}`} key={category}>
                                    {category}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </div>
                    <Navbar.Brand as={Link} to="/" className="text-primary fw-bold fs-4 position-absolute start-50 top-50 translate-middle">
                        <span className="nav-logo-text">StyleNest</span>
                    </Navbar.Brand>
                    <div className="d-flex align-items-center gap-3">
                        <Nav.Link as={Link} to="/search" className="nav-icon text-dark px-2">
                            <i className="bi bi-search fs-5"></i>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart" className="nav-icon text-dark px-2">
                            <i className="bi bi-basket fs-5"></i>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/user" className="nav-icon text-dark px-2">
                            <i className="bi bi-person fs-5"></i>
                        </Nav.Link>
                    </div>
                </div>
                <div className="position-relative w-100 d-flex align-items-center justify-content-center d-lg-none" style={{ minHeight: '56px' }}>
                    <Navbar.Brand as={Link} to="/" className="position-absolute start-50 top-50 translate-middle text-primary fw-bold fs-4" style={{ zIndex: 2 }}>
                        <span className="nav-logo-text">StyleNest</span>
                    </Navbar.Brand>
                    <div className="d-flex align-items-center position-absolute end-0 top-50 translate-middle-y gap-3" style={{ zIndex: 2 }}>
                        <Nav.Link as={Link} to="/search" className="nav-icon text-dark px-2">
                            <i className="bi bi-search fs-5"></i>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cart" className="nav-icon text-dark px-2">
                            <i className="bi bi-basket fs-5"></i>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/user" className="nav-icon text-dark px-2">
                            <i className="bi bi-person fs-5"></i>
                        </Nav.Link>
                    </div>
                    <Navbar.Toggle aria-controls="main-navbar-nav" className="d-lg-none position-absolute start-0 top-50 translate-middle-y border-0 shadow-none" style={{ zIndex: 2 }} />
                </div>
            </Container>
            <div className="d-lg-none">
                <Navbar.Collapse id="main-navbar-nav" className="w-100 mt-2 vw-100">
                    <Nav className="flex-column align-items-end">
                        <Nav.Link as={Link} to="/" className="py-2 text-dark fw-semibold w-100">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="py-2 text-dark fw-semibold w-100">About</Nav.Link>
                        <NavDropdown title="Products" id="mobile-products-dropdown" className="w-100">
                            <NavDropdown.Item as={Link} to="/products" key="all-categories">
                                All Categories
                            </NavDropdown.Item>
                            {[...new Set(products.map(p => p.category))].map(category => (
                                <NavDropdown.Item as={Link} to={`/products/${encodeURIComponent(category)}`} key={category}>
                                    {category}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}