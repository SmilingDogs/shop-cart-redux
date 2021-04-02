import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  isLoading: "",
  products: [],
  cart: [],
  favorites: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      return {...state, isLoading: action.payload };

    case actionTypes.SET_PRODUCTS:
      return  { ...state, products: action.payload };

    case actionTypes.ADD_TO_CART:
      // Get Item-to-add data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if an Item is in cart already
      const inCart = state.cart.find(item=> item.id === action.payload.id ? true : false);

      return { ...state,
        cart: inCart ? state.cart.map((item) => item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item)
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };

    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return { ...state, currentItem: action.payload};

    case actionTypes.ADD_TO_FAVORITES:
      const inFavs = state.favorites.find(item => item.id === action.payload.id);
      if (inFavs) return state
      return {...state, favorites: [...state.favorites, {...action.payload, qty: 1}]};

    case actionTypes.REMOVE_FROM_FAVORITES:
      return { ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default shopReducer;
