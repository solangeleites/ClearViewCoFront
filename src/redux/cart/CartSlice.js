import { createSlice } from '@reduxjs/toolkit';
import { DeleteItem, addItemToCart } from './cartUtils';
import { SHIPPING_COST } from '../../utils/constants';

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) =>{
        return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload),
            shippingCost: SHIPPING_COST,
        }
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        cartItems: DeleteItem(state.cartItems, action.payload),
         shippingCost: 0,
      };
    },
  },
});


export const { addToCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
