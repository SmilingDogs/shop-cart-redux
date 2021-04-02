import * as actionTypes from "../Modals/modal-types";

const INITIAL_STATE = {

  isCartModalOpen: false,
  isFavoritesModalOpen: false,
  currentProductId: null,
  currentProductTitle: "",
  currentFavoriteId: null,
  currentFavoriteTitle: ""

};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.OPEN_CART_MODAL:
      return {
        ...state,
        isCartModalOpen: true,
        currentProductId: action.payload.id,
        currentProductTitle: action.payload.title
      };
    case actionTypes.CLOSE_CART_MODAL:
      return {
        ...state,
        isCartModalOpen: false,
      };
    case actionTypes.OPEN_FAVORITES_MODAL:
      return {
        ...state,
        isFavoritesModalOpen: true,
        currentFavoriteId: action.payload.id,
        currentFavoriteTitle: action.payload.title

      };
    case actionTypes.CLOSE_FAVORITES_MODAL:
      return {
        ...state,
        isFavoritesModalOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
