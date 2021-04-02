import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
  addToFavoritesAction,
} from "../../redux/Shopping/shopping-actions";

const Product = ({
  product,
  addToCart,
  loadCurrentItem,
  cart,
  favorites,
  addToFavorites,
}) => {
  const inCart = cart.find((item) => item.id === product.id);
  const inFavs = favorites.find((item) => item.id === product.id);
  return (
    <div className={styles.product}>
      <div className={styles.flex}>
        <img
          className={styles.product__image}
          src={product.image}
          alt={product.title}
        />

        <div className={styles.product__details}>
          <p className={styles.details__title}>{product.title}</p>
          <p className={styles.details__desc}>{product.description}</p>
          <p className={styles.details__price}>UAH {product.price}</p>
        </div>
      </div>
      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        {!inCart && (
          <button
            onClick={() => addToCart(product.id)}
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
          >
            Add To Cart
          </button>
        )}
        {inCart && (
          <button
            onClick={() => addToCart(product.id)}
            className={`${styles.buttons__btn} ${styles.buttons__incart}`}
          >
            In Cart
          </button>
        )}
        {!inFavs && (
          <button
            onClick={() => addToFavorites(product)}
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
          >
            Add To Favorites
          </button>
        )}
        {inFavs && (
          <button
            className={`${styles.buttons__btn} ${styles.buttons__incart}`}
          >
            In Favorites!
          </button>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    favorites: state.shop.favorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    addToFavorites: (product) => dispatch(addToFavoritesAction(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
