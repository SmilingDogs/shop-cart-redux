import React from "react";
import { connect } from "react-redux";
import styles from "./Favorites.module.css";
import { openFavoritesModalAction } from "../../redux/Modals/modal-actions";

function Favorites({ favorites, openFavoritesModal }) {

  return (
    <div>
      {!favorites.length && <h2 className={styles.center}>Favorites is empty!</h2>}
      {favorites.length > 0 && <h2 className={styles.center}>You are in Favorites section:</h2>}
      {favorites.map((item) => (
        <div className={styles.cartItem} key={item.id}>
          <img
            className={styles.cartItem__image}
            src={item.image}
            alt={item.title}
            
          />
          <div className={styles.cartItem__details}>
            <p className={styles.details__title}>{item.title}</p>
            <p className={styles.details__desc}>{item.description}</p>
            <p className={styles.details__price}>UAH {item.price}</p>
          </div>
          <button
            onClick={() => openFavoritesModal(item)}
            className={styles.actions__deleteItemBtn}
          >
            <img
              src="https://image.flaticon.com/icons/svg/709/709519.svg"
              alt="delete icon"
            />
          </button>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    favorites: state.shop.favorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openFavoritesModal: (item) => dispatch(openFavoritesModalAction(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
