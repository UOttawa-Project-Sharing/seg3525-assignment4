import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router";
import productsData from "../Data/products";
import ProductCard from "../components/ProductCard";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Fuse from "fuse.js";

// Helper to get unique values with sorting
const sortedUnique = (arr) => Array.from(new Set(arr)).sort();

export default function Search() {
  // Find min and max discounted price from products
  const discountedPrices = productsData.map((p) =>
    p.discount ? p.price * (1 - p.discount / 100) : p.price
  );
  const minPrice = Math.floor(Math.min(...discountedPrices));
  const maxPrice = Math.ceil(Math.max(...discountedPrices));

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
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Helper to parse array params from query string
  const parseArrayParam = (param) => {
    const val = searchParams.get(param);
    return val ? val.split(",") : [];
  };

  // Initialize state from URL params
  useEffect(() => {
    setPriceRange([
      Number(searchParams.get("minPrice")) || minPrice,
      Number(searchParams.get("maxPrice")) || maxPrice,
    ]);
    setSelectedSizes(parseArrayParam("sizes"));
    setSelectedColors(parseArrayParam("colors"));
    setInStockOnly(searchParams.get("inStock") === "1");
    setDiscountedOnly(searchParams.get("discounted") === "1");
    setSortOption(searchParams.get("sort") || "featured");
    setSearchQuery(searchParams.get("query") || "");
    setSelectedCategory(searchParams.get("category") || "");
    // eslint-disable-next-line
  }, []);

  // Update URL when filters/search change
  useEffect(() => {
    const params = {};
    if (priceRange[0] !== minPrice) params.minPrice = priceRange[0];
    if (priceRange[1] !== maxPrice) params.maxPrice = priceRange[1];
    if (selectedSizes.length) params.sizes = selectedSizes.join(",");
    if (selectedColors.length) params.colors = selectedColors.join(",");
    if (inStockOnly) params.inStock = "1";
    if (discountedOnly) params.discounted = "1";
    if (sortOption !== "featured") params.sort = sortOption;
    if (searchQuery) params.query = searchQuery;
    if (selectedCategory) params.category = selectedCategory;
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line
  }, [priceRange, selectedSizes, selectedColors, inStockOnly, discountedOnly, sortOption, searchQuery, selectedCategory]);

  // Fuzzy search setup
  const fuse = new Fuse(productsData, {
    keys: [
      { name: "name", weight: 0.5 },
      { name: "description", weight: 0.3 },
      { name: "category", weight: 0.2 },
    ],
    threshold: 0.4, // Lower = stricter
    includeScore: true,
  });

  function getFuzzyResults(query) {
    if (!query.trim()) return productsData.map((p) => ({ item: p, score: 0 }));
    const words = query.trim().split(/\s+/);
    let results = productsData.map((p) => ({ item: p, score: 0 }));
    for (const word of words) {
      const fuseResults = fuse.search(word);
      const ids = new Set(fuseResults.map((r) => r.item.id || r.item.name));
      results = results.filter((r) => ids.has(r.item.id || r.item.name));
      results = results.map((r) => {
        const found = fuseResults.find(
          (fr) => (fr.item.id || fr.item.name) === (r.item.id || r.item.name)
        );
        return found ? { item: r.item, score: r.score + found.score } : r;
      });
    }
    return results;
  }

  const suggestions = (() => {
    if (!searchQuery.trim()) return [];
    const names = productsData.map((p) => p.name);
    const categories = productsData.map((p) => p.category);
    const stopwords = new Set(["the","and","a","an","of","in","on","for","to","with","is","it","at","by","from","as","that","this","these","those","are","be","or","but","if","then","so","than","too","very","can","will","just"]);
    const descriptionKeywords = productsData
      .flatMap(p => (p.description || "").split(/\W+/))
      .map(word => word.trim().toLowerCase())
      .filter(word => word.length > 2 && !stopwords.has(word));
    const allPhrases = Array.from(new Set([...names, ...categories, ...descriptionKeywords]));
    const fuseSuggest = new Fuse(allPhrases, { threshold: 0.4 });
    let suggestionsArr = fuseSuggest.search(searchQuery).map(r => r.item);
    const words = searchQuery.trim().split(/\s+/);
    if (words.length > 1) {
      const fullQuery = searchQuery.trim();
      if (!suggestionsArr.includes(fullQuery)) {
        suggestionsArr.push(fullQuery);
      }
    }
    if (searchQuery.endsWith(' ')) {
      const lastPhrase = searchQuery.trim();
      const nextWords = new Set();
      productsData.forEach(p => {
        const desc = (p.description || "");
        const idx = desc.toLowerCase().indexOf(lastPhrase.toLowerCase());
        if (idx === 0 || (idx > 0 && /\s/.test(desc[idx - 1]))) {
          const after = desc.slice(idx + lastPhrase.length).trimStart();
          const next = after.split(/\s+/)[0];
          if (next && next.length > 1 && !stopwords.has(next.toLowerCase())) {
            nextWords.add(next);
          }
        }
      });
      nextWords.forEach(word => {
        const suggestion = (lastPhrase + ' ' + word).trim();
        if (!suggestionsArr.includes(suggestion)) {
          suggestionsArr.push(suggestion);
        }
      });
    }
    return suggestionsArr.slice(0, 8);
  })();

  // Helper to check stock for selected size/color
  function hasStock(p) {
    if (!p.stock || typeof p.stock !== "object") return !!p.stock;
    if (selectedSizes.length && selectedColors.length) {
      return selectedSizes.some((size) =>
        p.stock[size] && selectedColors.some((color) => p.stock[size][color] > 0)
      );
    }
    if (selectedSizes.length) {
      return selectedSizes.some((size) =>
        p.stock[size] && Object.values(p.stock[size]).some((qty) => qty > 0)
      );
    }
    if (selectedColors.length) {
      return Object.keys(p.stock).some((size) =>
        selectedColors.some((color) => p.stock[size][color] > 0)
      );
    }
    return Object.values(p.stock).some((sizeObj) =>
      Object.values(sizeObj).some((qty) => qty > 0)
    );
  }

  // Filter products by price, size, color, stock, discount, and search query
  const fuzzyResults = getFuzzyResults(searchQuery);
  const filteredProducts = fuzzyResults
    .map((r) => r.item)
    .filter(
      (p) => {
        const discounted = p.discount ? p.price * (1 - p.discount / 100) : p.price;
        return (
          discounted >= priceRange[0] &&
          discounted <= priceRange[1] &&
          (selectedSizes.length === 0 || p.sizes.some((size) => selectedSizes.includes(size))) &&
          (selectedColors.length === 0 || p.colors.some((color) => selectedColors.includes(color))) &&
          (!inStockOnly || hasStock(p)) &&
          (!discountedOnly || p.discount > 0) &&
          (selectedCategory === "" || p.category === selectedCategory)
        );
      }
    );

  // Sort filtered products
  let sortedProducts = fuzzyResults
    .filter((r) => filteredProducts.includes(r.item));

  switch (sortOption) {
    case "featured":
      // For featured, sort by fuzzy score (best match first), then by discount
      sortedProducts = sortedProducts.sort((a, b) => a.score - b.score || b.item.discount - a.item.discount);
      break;
    case "price-asc":
      sortedProducts = sortedProducts.sort((a, b) => a.item.price - b.item.price || a.score - b.score);
      break;
    case "price-desc":
      sortedProducts = sortedProducts.sort((a, b) => b.item.price - a.item.price || a.score - b.score);
      break;
    case "name-asc":
      sortedProducts = sortedProducts.sort((a, b) => a.item.name.localeCompare(b.item.name) || a.score - b.score);
      break;
    case "name-desc":
      sortedProducts = sortedProducts.sort((a, b) => b.item.name.localeCompare(a.item.name) || a.score - b.score);
      break;
    default:
      sortedProducts = sortedProducts.sort((a, b) => a.score - b.score);
  }
  sortedProducts = sortedProducts.map(r => r.item);

  // Helper to highlight search terms in a string
  function highlightText(text, query) {
    if (!query.trim()) return text;
    const words = query.trim().split(/\s+/).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (!words.length) return text;
    const regex = new RegExp(`(${words.join('|')})`, 'gi');
    return text.split(regex).map((part, i) =>
      regex.test(part)
        ? <mark key={i} style={{ background: '#ffe066', padding: 0 }}>{part}</mark>
        : part
    );
  }

  // Helper to determine if any filter is active (excluding searchQuery)
  const isFilterActive = () => {
    return (
      priceRange[0] !== minPrice ||
      priceRange[1] !== maxPrice ||
      selectedSizes.length > 0 ||
      selectedColors.length > 0 ||
      inStockOnly ||
      discountedOnly ||
      selectedCategory !== ""
    );
  };

  // Clear all filters (but not searchQuery)
  const clearFilters = () => {
    setPriceRange([minPrice, maxPrice]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setInStockOnly(false);
    setDiscountedOnly(false);
    setSelectedCategory("");
  };

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
                  {allSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`btn btn-sm ${selectedSizes.includes(size) ? "btn-primary" : "btn-outline-secondary"}`}
                      onClick={() =>
                        setSelectedSizes(selectedSizes.includes(size)
                          ? selectedSizes.filter((s) => s !== size)
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
                  {allColors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={`btn btn-sm ${selectedColors.includes(color) ? "btn-primary" : "btn-outline-secondary"}`}
                      onClick={() =>
                        setSelectedColors(selectedColors.includes(color)
                          ? selectedColors.filter((c) => c !== color)
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
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {allCategories.map((cat) => (
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
                  onChange={(e) => setInStockOnly(e.target.checked)}
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
                  onChange={(e) => setDiscountedOnly(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="discountedOnly">
                  Discounted Only
                </label>
              </div>

              {/* Clear Filters Button */}
              <div className="mt-4">
                <button
                  className="btn btn-outline-danger w-100"
                  onClick={clearFilters}
                  disabled={!isFilterActive()}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="col-lg-9">
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
              <h1 className="mb-3 mb-md-0 fw-bold">Search Products</h1>
              <div className="d-flex align-items-center gap-3" style={{ position: "relative" }}>
                <div className="input-group" style={{ minWidth: 220 }}>
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search by name or description..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                    style={{ minWidth: 0 }}
                  />
                  {/* Suggestions dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <ul className="list-group position-absolute w-100 shadow-sm" style={{ top: "100%", zIndex: 10 }}>
                      {suggestions.map((word, idx) => (
                        <li
                          key={word + idx}
                          className="list-group-item list-group-item-action"
                          style={{ cursor: "pointer" }}
                          onMouseDown={() => {
                            setSearchQuery(word);
                            setShowSuggestions(false);
                            inputRef.current && inputRef.current.blur();
                          }}
                        >
                          {word}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label htmlFor="sortSelector" className="mb-0 me-1 fw-semibold">Sort by:</label>
                  <select
                    id="sortSelector"
                    className="form-select"
                    style={{ width: 180 }}
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
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
                    <ProductCard product={{
                      ...product,
                      name: highlightText(product.name, searchQuery),
                      description: highlightText(product.description || '', searchQuery),
                      category: highlightText(product.category, searchQuery)
                    }} filterState={{
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
