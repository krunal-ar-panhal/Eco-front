import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../Shop/ShopSlice'

export const store = configureStore({
  reducer: {
    shop : shopReducer ,
  },
})