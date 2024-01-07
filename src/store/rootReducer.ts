import { combineReducers } from "redux";
import { cartItemReducer } from "./reducers/CartItemReducer";

export const rootReducer = combineReducers({
  cartItem: cartItemReducer,
});

