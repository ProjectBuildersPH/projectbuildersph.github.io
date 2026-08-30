import React, { useMemo, useState } from "react";
import "./sellingproducts.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Character Search",
    category: "PROJECT",
    creator: "ProjectBuildersPH",
    duration: "4h 20m",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Build a Python character search program that finds a specific character, displays its index positions, and counts its total occurrences.",
    level: "BEGINNER",
    popular: true,
  },
  {
    id: 2,
    title: "File Organizer",
    category: "PROJECT Automation",
    creator: "ProjectBuildersPH",
    duration: "4h 20m",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Build a Python character search program that finds a specific character, displays its index positions, and counts its total occurrences.",
    level: "BEGINNER",
    popular: true,
  },
  
];

function SellingProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const visibleProducts = 4;

  // Filter products based on search
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return products;
    }

    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.creator.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.level.toLowerCase().includes(query)
      );
    });
  }, [search]);

  // Autocomplete suggestions
  const suggestions = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return products
      .filter((product) =>
        product.title.toLowerCase().includes(query)
      )
      .slice(0, 5);
  }, [search]);

  // Reset carousel when search changes
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [search]);

  const nextProducts = () => {
    if (filteredProducts.length <= visibleProducts) return;

    setCurrentIndex((prev) =>
      prev + 1 >= filteredProducts.length - visibleProducts + 1
        ? 0
        : prev + 1
    );
  };

  const previousProducts = () => {
    if (filteredProducts.length <= visibleProducts) return;

    setCurrentIndex((prev) =>
      prev === 0
        ? filteredProducts.length - visibleProducts
        : prev - 1
    );
  };

  const handleSuggestionClick = (product) => {
    setSearch(product.title);
    setShowSuggestions(false);
    setCurrentIndex(0);
  };

  const clearSearch = () => {
    setSearch("");
    setShowSuggestions(false);
    setCurrentIndex(0);
  };

  return (
    <section className="selling-page">

      <div className="selling-container">

        <section className="selling-section">

          <div className="selling-heading">

            <div>
              <span className="selling-label">
                FEATURED PROJECTS
              </span>

              <h2>
                Top picks for
                <strong> builders</strong>
              </h2>
            </div>

            {/* SEARCH */}
            <div className="selling-search-wrapper">

              <div className="selling-search">

                <span className="search-icon">
                  ⌕
                </span>

                <input
                  type="text"
                  value={search}
                  placeholder="Search projects..."
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => {
                    if (search.trim()) {
                      setShowSuggestions(true);
                    }
                  }}
                />

                {search && (
                  <button
                    type="button"
                    className="search-clear"
                    onClick={clearSearch}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}

              </div>

              {/* AUTOCOMPLETE */}
              {showSuggestions && suggestions.length > 0 && (

                <div className="search-suggestions">

                  {suggestions.map((product) => (

                    <button
                      type="button"
                      key={product.id}
                      className="search-suggestion"
                      onClick={() => handleSuggestionClick(product)}
                    >

                      <div className="suggestion-image">
                        <img
                          src={product.image}
                          alt=""
                        />
                      </div>

                      <div className="suggestion-info">

                        <strong>
                          {product.title}
                        </strong>

                        <span>
                          {product.category} · {product.level}
                        </span>

                      </div>

                      <span className="suggestion-arrow">
                        →
                      </span>

                    </button>

                  ))}

                </div>

              )}

            </div>

            <div className="selling-arrows">

              <button
                type="button"
                onClick={previousProducts}
                aria-label="Previous products"
                disabled={filteredProducts.length <= visibleProducts}
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextProducts}
                aria-label="Next products"
                disabled={filteredProducts.length <= visibleProducts}
              >
                ›
              </button>

            </div>

          </div>

          {/* SEARCH RESULT COUNT */}

          {search && (
            <div className="search-results-info">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "project"
                : "projects"}{" "}
              found for <strong>"{search}"</strong>
            </div>
          )}

          {/* CAROUSEL */}

          <div className="selling-carousel">

            {filteredProducts.length > 0 ? (

              <div
                className="selling-track"
                style={{
                  transform: `translateX(calc(-${currentIndex} * (100% / 4)))`,
                }}
              >

                {filteredProducts.map((product) => (

<article
  className="selling-card"
  key={product.id}
  onClick={() => {
    if (product.id === 1) {
      navigate("/character-search");
      return;
    }

    if (product.id === 2) {
    navigate("/file-organizer");
    return;
  }

    setSelectedProduct(product);
  }}
>

                    <div className="selling-image">

                      <img
                        src={product.image}
                        alt={product.title}
                      />

                      {product.popular && (
                        <span className="popular-badge">
                          Popular
                        </span>
                      )}

                      <span className="duration-badge">
                        {product.duration}
                      </span>

                    </div>

                    <div className="selling-card-body">

                      <span className="selling-category">
                        {product.category}
                      </span>

                      <h3>
                        {product.title}
                      </h3>

                      <p className="selling-creator">
                        By: <strong>{product.creator}</strong>
                      </p>

                      <p className="selling-description">
                        {product.description}
                      </p>

                      <div className="selling-card-footer">

                        <span className="selling-level">
                          {product.level}
                        </span>

                        <span className="selling-view">
                          View Project →
                        </span>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              <div className="no-search-results">

                <span>⌕</span>

                <h3>
                  No projects found
                </h3>

                <p>
                  Try searching for Python, React, PHP, Java, or C++.
                </p>

                <button
                  type="button"
                  onClick={clearSearch}
                >
                  Show all projects
                </button>

              </div>

            )}

          </div>

        </section>

      </div>

      {/* MODAL */}

      {selectedProduct && (

        <div
          className="selling-modal"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="selling-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="selling-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal-image">

              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
              />

            </div>

            <div className="modal-body">

              <span className="selling-category">
                {selectedProduct.category}
              </span>

              <h2>
                {selectedProduct.title}
              </h2>

              <p className="modal-creator">
                By {selectedProduct.creator}
              </p>

              <p>
                {selectedProduct.description}
              </p>

              <div className="modal-meta">

                <span>
                  {selectedProduct.level}
                </span>

                <span>
                  {selectedProduct.duration}
                </span>

              </div>

              <button
                type="button"
                className="modal-start-button"
                onClick={() => setSelectedProduct(null)}
              >
                Start Building →
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default SellingProducts;
