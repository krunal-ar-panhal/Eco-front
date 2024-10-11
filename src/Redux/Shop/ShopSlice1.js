// Redux/Shop/ShopSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  currency: '$', 
  search : "",
  showSearch: false,
  products:[],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setProducts: (state, action) => {
        state.products = action.payload; 
      },
    setSearch: (state, action) => {
        state.search = action.payload;
      },
      setShowSearch: (state) => {
        state.showSearch = !state.showSearch;
      },
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.itemId === action.payload.itemId && item.size === action.payload.size);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1; // Increase quantity if item already exists
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); // Add new item to cart
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.itemId !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const getCartCount = (state) => {
  let totalCount = 0;
  for (const item in state.shop.cartItems) {
    for (const size in state.shop.cartItems[item]) {
      totalCount += state.shop.cartItems[item][size];
    }
  }
  return totalCount;
};

export const { setSearch,setShowSearch,addToCart, removeFromCart, clearCart,setProducts  } = shopSlice.actions;
export default shopSlice.reducer;
