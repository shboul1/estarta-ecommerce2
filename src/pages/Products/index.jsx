import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/prodcuts/action";
import styles from "./styles.module.css";
import ProductCard from "../../components/ProductCard";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.productsContainer}>
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
