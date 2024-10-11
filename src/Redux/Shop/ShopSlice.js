import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  currency: "₹",
  search: "", 
  showSearch: false, 
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setShowSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    addToCart: (state, action) => {
      const { product, size } = action.payload;
      const existingProduct = state.cart.find(
        (item) => item._id === product._id && item.size === size
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, size, quantity: 1 });
      }
      state.totalItems = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    updateQuantity: (state, action) => {
      const { _id, size, quantity } = action.payload;
      const product = state.cart.find((item) => item._id === _id && item.size === size);
      if (product) {
        product.quantity = quantity;
      }
      state.totalItems = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const { _id, size } = action.payload;
      state.cart = state.cart.filter(
        (item) => !(item._id === _id && item.size === size)
      );
      state.totalItems = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const getCartCount = (state) => {
  return state.shop.cart.reduce((totalCount, item) => totalCount + item.quantity, 0);
};

export const { addToCart, updateQuantity, removeFromCart, setSearch, setShowSearch } = shopSlice.actions;
export default shopSlice.reducer;
