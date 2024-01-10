import { combineReducers } from "redux";
import { cartItemReducer } from "./reducers/CartItemReducer";
import cartDetailReducer from "./reducers/cartDetailReducer";


export const rootReducer = combineReducers({
  cartItem: cartItemReducer,
  cartDetail: cartDetailReducer,
});

