import * as actionTypes from "../Modals/modal-types";

export const openCartModalAction = (product) => {
  return {
    type: actionTypes.OPEN_CART_MODAL,
    payload: product,
  };
};
export const closeCartModalAction = () => {
  return {
    type: actionTypes.CLOSE_CART_MODAL
  };
};
export const openFavoritesModalAction = (product) => {
  return {
    type: actionTypes.OPEN_FAVORITES_MODAL,
    payload: product,
  };
};
export const closeFavoritesModalAction = () => {
  return {
    type: actionTypes.CLOSE_FAVORITES_MODAL
  };
};
