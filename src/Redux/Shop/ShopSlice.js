import { createSlice } from '@reduxjs/toolkit'
import Product from '../../Data/ProductData.json'
console.log(Product);


const initialState = {
    Products: Product,
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