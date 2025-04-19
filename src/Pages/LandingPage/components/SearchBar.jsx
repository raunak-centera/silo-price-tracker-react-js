import React, { useEffect, useState, useRef } from "react";
import { Spinner } from "react-bootstrap";
import swal from "sweetalert";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);
  const isButtonTriggeredRef = useRef(false);

  const slugify = (str) =>
    str
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const generateDummyPrices = (basePrice) => {
    const price = Number(basePrice.toString().replace(/,/g, ""));
    const amazonPrice = price * (1 + (Math.random() * 0.05 - 0.025));
    const flipkartPrice = price * (1 + (Math.random() * 0.04 - 0.02));
    const predictedPrice = price * (1 + (Math.random() * 0.07 - 0.02));
    return {
      amazonPrice: Math.round(amazonPrice),
      flipkartPrice: Math.round(flipkartPrice),
      predictedPrice: Math.round(predictedPrice),
    };
  };

  const fetchProducts = async (searchTerm) => {
    try {
      setLoading(true);

      const postBody = {
        category_id: "",
        sub_category_id: "",
        store_id: "",
        search: searchTerm || "a",
        sort: "",
        limit: 10,
        offset: "0",
        min_price: "",
        max_price: "",
      };

      const response = await fetch(
        "https://api.silocloud.io/api/v1/marketplace/store-filters",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postBody),
        }
      );

      if (!response.ok) throw new Error("Product not available");

      const data = await response.json();

      const fetchedProducts = data?.data?.product_data || [];

      const updatedProducts = fetchedProducts.map((p) => {
        const { amazonPrice, flipkartPrice, predictedPrice } =
          generateDummyPrices(p.price);
        return {
          ...p,
          amazonPrice,
          flipkartPrice,
          predictedPrice,
        };
      });

      setProducts(updatedProducts);
    } catch (err) {
      console.error("API error:", err);
      swal("", "Product not available", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isButtonTriggeredRef.current = true;
    fetchProducts(query);
  };

  useEffect(() => {
    if (isButtonTriggeredRef.current) {
      isButtonTriggeredRef.current = false;
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      fetchProducts(query);
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  useEffect(() => {
    fetchProducts("a");
  }, []);

  return (
    <div className="container py-5">
      <h4 className="text-center mb-4">Search Products</h4>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center gap-3"
      >
        <div className="w-75 d-flex">
          <input
            type="text"
            className="form-control border border-secondary"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
          />
          <button
            type="submit"
            className="btn btn-success ms-2"
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Search"}
          </button>
        </div>
      </form>

      {products.length > 0 && (
        <div className="mt-5">
          {query && <h5 className="text-center mb-3">Results for “{query}”</h5>}
          <div className="row">
            {products.map((product) => {
              const slug = slugify(product.product_name);
              const siloLink = `https://store.silocloud.io/${
                product.id
              }/${encodeURIComponent(product.product_name)}`;

              return (
                <div className="col-md-4 mb-4" key={product.id}>
                  <div className="card shadow-sm h-100">
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <img
                        src={product.thumbnail}
                        className="card-img-top"
                        alt={product.product_name}
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.product_name}</h5>

                      <p className="fw-bold">
                        Silo Price: $
                        {Number(product.price).toFixed(2).toLocaleString()}
                        <a
                          href={siloLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-primary ms-3"
                        >
                          View Product
                        </a>
                      </p>

                      <p>
                        Amazon Price: ${product.amazonPrice.toLocaleString()}{" "}
                        <a
                          href={`https://www.amazon.in/s?k=${slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary ms-2"
                        >
                          View
                        </a>
                      </p>
                      <p>
                        Flipkart Price: $
                        {product.flipkartPrice.toLocaleString()}{" "}
                        <a
                          href={`https://www.flipkart.com/search?q=${slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-info ms-2"
                        >
                          View
                        </a>
                      </p>
                      <hr />
                      <p className="text-muted mb-0">
                        <strong>Next Week Predicted Price:</strong> $
                        {product.predictedPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
