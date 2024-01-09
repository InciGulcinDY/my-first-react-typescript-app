import { ProductModel } from "../../models/responses/ProductModel";


// ACTION TYPES:
export interface AddToCartAction {
  type: "ADD_TO_CART";
  payload: ProductModel;
}

export interface RemoveFromCartAction {
  type: "REMOVE_FROM_CART";
  payload: ProductModel;
}

export interface ClearCartAction {
  type: "CLEAR_CART",
  payload: ProductModel,
}

export interface IncreasingCartNumber {
  type: "INCREASING_CART_NUMBER";
  payload: number;
}

// Cart Actions Union Type
export type CartActions = AddToCartAction | RemoveFromCartAction | ClearCartAction | IncreasingCartNumber;

// ACTION CREATERS:

export const addToCart = (product: ProductModel): AddToCartAction => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCartAction = (product: ProductModel) : RemoveFromCartAction => {
  return{
    type:"REMOVE_FROM_CART",
    payload: product,
  }
}

export const clearCartAction = (product: ProductModel) : ClearCartAction => {
  return {
    type: "CLEAR_CART",
    payload: product,
  }
}

export const increasingCartNumber = (amount: number): IncreasingCartNumber => {
  return {
    type: "INCREASING_CART_NUMBER",
    payload: amount,
  };
};