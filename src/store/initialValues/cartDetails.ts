import { ProductModel } from "./../../models/responses/ProductModel";

//Define state onject
export interface CartProductState {
  cartProduct: ProductModel[];
}

//initialize the state object
export const initialCartDetailState: CartProductState = {
  cartProduct:[] 
};
