import React from "react";
import style from "./ProductModel.module.css";

function ProductModal({ product, onClose }) {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={onClose}>
          ×
        </button>

        {/* Product Image */}
        <img
          src={product.src}
          alt={product.title}
          className={style.productImage}
        />

        {/* Product Details */}
        <div className={style.detailsContainer}>
          <h2>{product.title}</h2>
          <p className={style.description}>{product.desc}</p>
          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand || "N/A"}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating || "4.5"}/5
          </p>
          <p>
            <strong>Stock:</strong>{" "}
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* Specifications Table */}
          {product.specifications && (
            <div className={style.specsContainer}>
              <h3>Specifications</h3>
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>🔹 {spec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className={style.buttonContainer}>
            <button className={style.addToCart}>Add to Cart</button>
            <button className={style.buyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
