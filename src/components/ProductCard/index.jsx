import React from "react";
import styles from "./styles.module.css";

export default function ProductCard({ product }) {
  return (
    <div key={product?.id} className={styles.card}>
      <img src={product?.image_link} />
      <p>{product?.name}</p>
      <p>{product?.price}$</p>
      <p>
        {new Array(product?.rating).fill("⭐").map((star) => (
          <span>{star}</span>
        ))}
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
