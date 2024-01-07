import { ProductModel } from "../../models/responses/ProductModel";

// Define the action type
export interface AddToCartAction {
    type: "ADD_TO_CART";
    payload: ProductModel; 
  }

export interface IncreasingCartNumber{
  type: "INCREASING_CART_NUMBER",
  payload: number
}

// The action creators
export const increasingCartNumber = (amount: number): IncreasingCartNumber => {
  return {
    type: "INCREASING_CART_NUMBER",
    payload: amount
  }
}

export function addToCart(product: ProductModel): AddToCartAction {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}


  