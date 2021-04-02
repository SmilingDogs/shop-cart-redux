import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart, favorites }) => {
  const [cartCount, setCartCount] = useState(0);
  const [favsCount, setFavsCount] = useState(0);

  useEffect(() => {
    let count1 = 0;
    let count2 = 0;
    cart.forEach((item) => {
      count1 += item.qty;
    });
    favorites.forEach((item) => {
      count2 += item.qty;
    })
    setCartCount(count1);
    setFavsCount(count2)
  }, [cart, cartCount, favsCount, favorites]);

  return (
    <header className={styles.navbar}>
      <NavLink exact to="/" className={styles.link} activeClassName={styles.link__active}>
        <h2>Sportify Shop Home</h2>
      </NavLink>
      <NavLink exact to="/cart" >
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </NavLink>
      <NavLink exact to="/favorites" >
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Favorites</h3>
          <img
            className={styles.cart__image}
            src="https://www.flaticon.com/svg/vstatic/svg/786/786432.svg?token=exp=1617123770~hmac=1e5d8a5d3c62885468619a9f046a41e2"
            alt="favorites"
          />
          <div className={styles.cart__counter}>{favsCount}</div>
        </div>
      </NavLink>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    favorites: state.shop.favorites
  };
};

export default connect(mapStateToProps)(Navbar);
