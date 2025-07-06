import { useState } from "react";
import productsData from "../Data/products";
import ProductCard from "../components/ProductCard";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// Helper to get unique values with sorting
const sortedUnique = (arr) => Array.from(new Set(arr)).sort();

export default function Search() {
  // Find min and max price from products
  const prices = productsData.map((p) => p.price);
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  // Collect all unique sizes and colors from products
  const allSizes = sortedUnique(productsData.flatMap((p) => p.sizes));
  const allColors = sortedUnique(productsData.flatMap((p) => p.colors));
  const allCategories = sortedUnique(productsData.map((p) => p.category));

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Helper to check stock for selected size/color
  function hasStock(p) {
    if (!p.stock || typeof p.stock !== "object") return !!p.stock;
    // If both size and color are selected, check those combos
    if (selectedSizes.length && selectedColors.length) {
      return selectedSizes.some(size =>
        p.stock[size] && selectedColors.some(color => p.stock[size][color] > 0)
      );
    }
    // If only size is selected
    if (selectedSizes.length) {
      return selectedSizes.some(size =>
        p.stock[size] && Object.values(p.stock[size]).some(qty => qty > 0)
      );
    }
    // If only color is selected
    if (selectedColors.length) {
      return Object.keys(p.stock).some(size =>
        selectedColors.some(color => p.stock[size][color] > 0)
      );
    }
    // No size/color selected: check any stock
    return Object.values(p.stock).some(sizeObj =>
      Object.values(sizeObj).some(qty => qty > 0)
    );
  }

  // Filter products by price, size, color, stock, discount, and search query
  const filteredProducts = productsData.filter((p) =>
      p.price >= priceRange[0] &&
      p.price <= priceRange[1] &&
      (selectedSizes.length === 0 || p.sizes.some((size) => selectedSizes.includes(size))) &&
      (selectedColors.length === 0 || p.colors.some((color) => selectedColors.includes(color))) &&
      (!inStockOnly || hasStock(p)) &&
      (!discountedOnly || p.discount > 0) &&
      (selectedCategory === "" || p.category === selectedCategory) &&
      (
          searchQuery.trim() === "" ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
  );

  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "featured":
        return b.discount - a.discount;
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
      <div className="bg-light" style={{ minHeight: "100vh" }}>
        <div className="container-fluid py-4">
          <div className="row">
            {/* Sidebar */}
            <aside className="col-lg-3 mb-4 mb-lg-0">
              <div className="bg-white rounded shadow-sm p-4 sticky-top z-0" style={{ top: 100 }}>
                <h4 className="mb-3 border-bottom pb-2">Filters</h4>

                <div className="mb-4">
                  <label className="fw-semibold mb-2 d-block">Price Range</label>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted small">${minPrice}</span>
                    <Slider
                        range
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange}
                        onChange={setPriceRange}
                        allowCross={false}
                        trackStyle={[{ background: "#0d6efd" }]}
                        handleStyle={[{ borderColor: "#0d6efd" }, { borderColor: "#0d6efd" }]}
                        railStyle={{ background: "#e9ecef" }}
                        style={{ flex: 1, marginRight: 8 }}
                    />
                    <span className="text-muted small">${maxPrice}</span>
                  </div>
                  <div className="mt-2 text-center text-primary fw-bold">
                    ${priceRange[0]} &ndash; ${priceRange[1]}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="fw-semibold mb-2">Size</div>
                  <div className="d-flex flex-wrap gap-2">
                    {allSizes.map(size => (
                        <button
                            key={size}
                            type="button"
                            className={`btn btn-sm ${selectedSizes.includes(size) ? "btn-primary" : "btn-outline-secondary"}`}
                            onClick={() =>
                                setSelectedSizes(selectedSizes.includes(size)
                                    ? selectedSizes.filter(s => s !== size)
                                    : [...selectedSizes, size])
                            }
                        >
                          {size}
                        </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="fw-semibold mb-2">Color</div>
                  <div className="d-flex flex-wrap gap-2">
                    {allColors.map(color => (
                        <button
                            key={color}
                            type="button"
                            className={`btn btn-sm ${selectedColors.includes(color) ? "btn-primary" : "btn-outline-secondary"}`}
                            onClick={() =>
                                setSelectedColors(selectedColors.includes(color)
                                    ? selectedColors.filter(c => c !== color)
                                    : [...selectedColors, color])
                            }
                        >
                          {color}
                        </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="fw-semibold mb-2 d-block">Category</label>
                  <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {allCategories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="form-check mb-2">
                  <input
                      className="form-check-input"
                      type="checkbox"
                      checked={inStockOnly}
                      id="inStockOnly"
                      onChange={e => setInStockOnly(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="inStockOnly">
                    In Stock Only
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                      className="form-check-input"
                      type="checkbox"
                      checked={discountedOnly}
                      id="discountedOnly"
                      onChange={e => setDiscountedOnly(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="discountedOnly">
                    Discounted Only
                  </label>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="col-lg-9">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
                <h1 className="mb-3 mb-md-0 fw-bold">Search Products</h1>
                <div className="d-flex align-items-center gap-3">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Search by name or description..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      style={{ minWidth: 220 }}
                  />
                  <div className="d-flex align-items-center gap-2">
                    <label htmlFor="sortSelector" className="mb-0 me-1 fw-semibold">Sort by:</label>
                    <select
                        id="sortSelector"
                        className="form-select"
                        style={{ width: 180 }}
                        value={sortOption}
                        onChange={e => setSortOption(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="name-asc">Name: A-Z</option>
                      <option value="name-desc">Name: Z-A</option>
                    </select>
                  </div>
                </div>
              </div>
              {sortedProducts.length === 0 ? (
                  <div className="alert alert-warning text-center">No products found matching your filters.</div>
              ) : (
                  <div className="row g-4">
                    {sortedProducts.map((product) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                          <ProductCard product={product} filterState={{
                            selectedSizes,
                            selectedColors
                          }} />
                        </div>
                    ))}
                  </div>
              )}
            </main>
          </div>
        </div>
      </div>
  );
}