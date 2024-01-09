import { ProductModel } from '../../models/responses/ProductModel'
import { RootState } from '../ConfigureStore'
import { AddToCartAction, CartActions } from '../actions/cartActions'
import { CartProductState, initialCartDetailState } from '../initialValues/cartDetails'

type Props = {}

//Reach the state:?????
export const getCartDetail = (state: RootState) => state.cartDetail.cartProduct


const cartDetailReducer = (state: CartProductState = initialCartDetailState, action: CartActions): CartProductState => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cartProduct: [...state.cartProduct, action.payload],
                
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartProduct: state.cartProduct.filter(
                    (item: ProductModel) => item.id !==action.payload.id,
                ),
            };
        case 'CLEAR_CART':
            return{
                ...state,
                cartProduct: [],
            };

        default:
            return state;

        }
}
export default cartDetailReducer;