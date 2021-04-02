import * as actionTypes from "./shopping-types";
import axios from "axios";

export const loadData = () => (dispatch) => {

  dispatch({ type: actionTypes.IS_LOADING, payload: true })
  setTimeout(() => {
    axios("/products.json").then((res) => {
      console.log(res.data);
      dispatch({ type: actionTypes.SET_PRODUCTS, payload: res.data });
      dispatch({ type: actionTypes.IS_LOADING, payload: false })
    });
  }, 3000)
};

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { id: itemID },
  };
};

export const removeFromCartAction = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {id: itemID},
  };
};

export const addToFavoritesAction = (product) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: product,
  };
};

export const removeFromFavoritesAction = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
