import React from "react";
import styles from "./styles.module.css";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { isAuth } = useSelector((state) => state.authReducer);
  return (
    <nav>
      <Link to="/" className={styles.logo}>
        Estarta E-commerce
      </Link>
      {!isAuth && (
        <div>
          <Link to="/login">
            <button className={styles.loginBtn}>
              Login <BsArrowRightShort size={20} />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
