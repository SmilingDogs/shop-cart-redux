import { combineReducers } from "redux";
import modalReducer from "./Modals/modal-reducer";
import shoppingReducer from "./Shopping/shopping-reducer";


const reducer = combineReducers({
  shop: shoppingReducer,
  modal: modalReducer
});

export default reducer;
