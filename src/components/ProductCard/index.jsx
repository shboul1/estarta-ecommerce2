import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/actions";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  return (
    <div className={styles.card}>
      <img src={product?.image_link} />
      <p>{product?.name}</p>
      <p>{product?.price}$</p>
      <p>
        {new Array(product?.rating).fill("⭐").map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
