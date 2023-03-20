import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/actions";
import styles from "./styles.module.css";
export default function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log({ cartItems });
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }
  function handleRemoveFromCart(item) {
    dispatch(removeFromCart(item));
  }

  const total = cartItems.reduce((total, current) => {
    return total + current?.price * current?.quantity;
  }, 0);

  return (
    <div className={styles.cartItemsContainer}>
      {cartItems.length > 0 ? (
        <>
          Total : ${total}
          {cartItems.map((item) => (
            <div key={item?.id} className={styles.cartItem}>
              <img src={item?.image_link} />
              <div className={styles.cartItemsDesc}>
                <div> {item?.name} </div>
                <div> ${item?.price} </div>
                <div className={styles.quantityContainer}>
                  <button onClick={() => handleRemoveFromCart(item)}>-</button>
                  <input
                    className={styles.quantityInput}
                    type="text"
                    value={item?.quantity}
                  />{" "}
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>No items in cart</div>
      )}
    </div>
  );
}
