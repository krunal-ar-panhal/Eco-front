import {  createSlice } from "@reduxjs/toolkit";
import Product from "../../Data/ProductData.json";
import toast from "react-hot-toast";

const initialState = {
  Products: Product,
  currency: "₹",
  delievery_fee: 10,
  search: "",
  showSearch: false,
  cartItems: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setShowSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    addToCart: (state, action) => {
      const { itemId, size } = action.payload;

      if (!size) {
        toast.error("Please Select a Size");
      }

      if (!state.cartItems[itemId]) {
        state.cartItems[itemId] = {};
      }
      if (!state.cartItems[itemId][size]) {
        state.cartItems[itemId][size] = 1;
      } else {
        state.cartItems[itemId][size] += 1;
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, size, quantity } = action.payload;
      if (state.cartItems[itemId]) {
        state.cartItems[itemId][size] = quantity;
      }
    },
   
  },
});

export const getCartTotalPrice = (state) => {
  let totalPrice = 0;
  for (const itemId in state.shop.cartItems) {
    const product = state.shop.Products.find((Product) => Product.id === parseInt(itemId));
    if (product) {
      for (const size in state.shop.cartItems[itemId]) {
        const quantity = state.shop.cartItems[itemId][size];
        totalPrice += product.price * quantity;
      }
    }
  }
  return totalPrice;
};


export const getCartCount = (state) => {
  let totalCount = 0;
  for (const item in state.shop.cartItems) {
    for (const size in state.shop.cartItems[item]) {
      totalCount += state.shop.cartItems[item][size];
    }
  }
  return totalCount;
};

export const { setSearch, setShowSearch, addToCart,updateQuantity } = shopSlice.actions;
export default shopSlice.reducer;
