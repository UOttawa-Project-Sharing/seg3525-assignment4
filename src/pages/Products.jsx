import { useParams, Link } from "react-router";
import products from "../Data/products";
import ProductCard from "../components/ProductCard";
import categories from "../Data/categories";
import { Breadcrumb } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router';
import { useNavigate } from "react-router";
import { ArrowLeft } from 'react-bootstrap-icons';

export default function ProductsByCategory() {
    const { category } = useParams();
    const navigate = useNavigate();

    // Normalize category for comparison (case-insensitive)
    const normalizedCategory = category?.toLowerCase();

    // Find this category's details in the db
    const categoryInfo = categories.find(
        (c) => c.name.toLowerCase() === normalizedCategory
    );

    // Get products in this category
    const categoryProducts = products.filter(
        (p) => p.category && p.category.toLowerCase() === normalizedCategory
    );

    // Sort by discount, then by price ascending (featured logic)
    const featuredProducts = [...categoryProducts].sort((a, b) => {
        if (b.discount !== a.discount) return b.discount - a.discount;
        return a.price - b.price;
    });

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
                <ArrowLeft className="me-2" /> Previous page
            </button>
            <Breadcrumb className="mb-4">
                <Breadcrumb.Item linkAs={RouterLink} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={RouterLink} linkProps={{ to: '/products' }} active={!categoryInfo}>
                    Products
                </Breadcrumb.Item>
                {categoryInfo && (
                    <Breadcrumb.Item active>{categoryInfo.displayName}</Breadcrumb.Item>
                )}
            </Breadcrumb>

            {categoryInfo && (
                <div className="mb-5 row align-items-center flex-md-row flex-column-reverse">
                    <div className="col-md-7">
                        <h1 className="fw-bold mb-2">{categoryInfo.displayName}</h1>
                        <p className="lead text-muted mb-2">{categoryInfo.description}</p>
                        <div className="mb-3 text-primary">{categoryInfo.speciality}</div>
                    </div>
                    <div className="col-md-5 text-center mb-3 mb-md-0">
                        <img
                            src={categoryInfo.image}
                            alt={categoryInfo.displayName}
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: 260, objectFit: "cover", width: "100%" }}
                        />
                    </div>
                </div>
            )}
            {!categoryInfo && (
                <div className="alert alert-info mb-4">
                    No details available for this category.
                </div>
            )}

            <div className="mb-4 d-flex align-items-center justify-content-between flex-wrap">
                <h2 className="fw-bold mb-0">
                    {categoryInfo ? `Featured ${categoryInfo.displayName} Products` : "Featured Products"}
                </h2>
                <Link to="/products" className="btn btn-outline-primary btn-sm">
                    Back to All Products
                </Link>
            </div>

            {featuredProducts.length === 0 ? (
                <div className="alert alert-warning">
                    No products found in the <b>{categoryInfo?.displayName || category}</b> category.
                </div>
            ) : (
                <div className="row g-4">
                    {featuredProducts.map((product) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}