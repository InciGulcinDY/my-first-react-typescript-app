import { IncreasingCartNumber } from '../actions/cartActions';
import { CartItemState, initialCartState } from '../initialValues/cartItems';

export function cartItemReducer(state: CartItemState = initialCartState, action: IncreasingCartNumber): CartItemState {
  switch (action.type) {
    case 'INCREASING_CART_NUMBER':
      return {
        ...state,
        value: (state.value) + action.payload,
      };

    default:
      return state;
  }
}
