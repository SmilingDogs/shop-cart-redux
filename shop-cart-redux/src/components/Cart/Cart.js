import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let quantity = 0;
    let price = 0;

    // const total = basketItems.reduce((a, item) => a + item.qty * item.price, 0);
    // cart.forEach((item) => {
    //   items += item.qty;
    //   price += item.qty * item.price;
    // });

    price = cart.reduce((a, item) => a + item.qty * item.price, 0);
    quantity = cart.forEach((item) => (quantity += item.qty));
    setTotalItems(quantity);
    setTotalPrice(price);
  }, [cart]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {!cart.length && <h3>Nothing in Cart now...</h3>}
        {cart.length > 0 && <h2> You are in Cart section...</h2>}
        {cart.length > 0 && cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>UAH {totalPrice}</span>
        </div>
        <button
          className={styles.summary__checkoutBtn}
          onClick={() => console.log("Click!")}
          disabled={cart.length === 0}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
