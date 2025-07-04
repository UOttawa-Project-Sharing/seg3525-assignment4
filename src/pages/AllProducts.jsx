import categories from "../Data/categories";
import { Link } from "react-router";
import { Breadcrumb } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router';

export default function AllCategories() {
    return (
        <div className="container py-5">
            <Breadcrumb className="mb-4">
                <Breadcrumb.Item linkAs={RouterLink} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Products</Breadcrumb.Item>
            </Breadcrumb>

            <div className="mb-4 d-flex align-items-center justify-content-between flex-wrap">
                <h1 className="fw-bold mb-0">Shop by Category</h1>
                {/*<Link to="/search" className="btn btn-outline-primary btn-sm">*/}
                {/*    Back to Search*/}
                {/*</Link>*/}
            </div>
            <div className="row g-4">
                {categories.map((cat) => (
                    <div className="col-12 col-md-6 col-lg-4" key={cat.name}>
                        <Link
                            to={`/products/${cat.name.toLowerCase()}`}
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100 shadow-sm border-0 hover-shadow-lg transition">
                                <img
                                    src={cat.image}
                                    className="card-img-top"
                                    alt={cat.displayName}
                                    style={{
                                        objectFit: "cover",
                                        height: 220,
                                        borderTopLeftRadius: "0.5rem",
                                        borderTopRightRadius: "0.5rem",
                                    }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title fw-bold mb-2">{cat.displayName}</h3>
                                    <p className="card-text text-muted">{cat.description}</p>
                                    <div className="text-primary small mb-2">{cat.speciality}</div>
                                </div>
                                <div className="card-footer bg-white border-0 text-end">
                                    <span className="btn btn-sm btn-outline-primary">View Products</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}