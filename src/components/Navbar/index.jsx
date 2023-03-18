// React
import { useState } from "react";
// React Router Dom
import { Link, useNavigate, NavLink } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/auth/actions";
// Icons
import { BsArrowRightShort, BsCart4 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
// Styles
import styles from "./styles.module.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { isAuth, user } = useSelector((state) => state.authReducer);
  const [isLogoutBoxOpened, setIsLogoutBoxOpened] = useState(false);
  function handleLogout() {
    dispatch(Logout()).then((res) => {
      if (res) {
        nav("/");
      }
    });
  }

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

      {isAuth && (
        <div className={styles.navLinksContainer}>
          <div className={styles.displayFlex}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <Link to="/cart">
              <BsCart4 size={25} />
            </Link>
          </div>
          <div className={styles.logoutIcon}>
            <BiUserCircle
              onClick={() => setIsLogoutBoxOpened(!isLogoutBoxOpened)}
              size={30}
            />
            {isLogoutBoxOpened && (
              <div className={styles.logoutBox}>
                {user?.email}
                <a onClick={handleLogout} className={styles.logoutText}>
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

// clear the local storage
// \

// test@test.com ==> magic.login ==> true ( 1- localStorage 2- change Reducer 3- go to '/')
// magic.logout ==> Reset Reducer ==> localStorage.clear() ==> redirect
