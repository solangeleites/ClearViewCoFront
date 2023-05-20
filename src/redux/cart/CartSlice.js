import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart } from './cartUtils';
import { SHIPPING_COST } from '../../components/utils/constantes';

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
    resetCart: (state) => {
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    },
  },
});


export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
