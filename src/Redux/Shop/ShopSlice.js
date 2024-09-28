import { createSlice } from '@reduxjs/toolkit'
import Product from '../../Pages/Product'

const initialState = {
    Product,
    currency : "₹",
    delievery_fee : 10
};


const shopSlice = createSlice({
    name : "shop",
    initialState ,
    reducers : {

    }
})

export const {} = shopSlice.actions;
export default shopSlice.reducer