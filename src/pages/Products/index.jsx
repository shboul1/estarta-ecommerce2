import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/prodcuts/action";
import styles from "./styles.module.css";
import ProductCard from "../../components/ProductCard";
import { MoonLoader } from "react-spinners";
export default function Products() {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts());
  }, []);

  if (loading) return <MoonLoader size={30} color={"#eee"} />;
  return (
    <div className={styles.productsContainer}>
      {products?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
}
