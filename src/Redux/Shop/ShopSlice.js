import { createSlice } from '@reduxjs/toolkit'
import Product from '../../Data/ProductData.json'


const initialState = {
    Products: Product,
    currency : "₹",
    delievery_fee : 10,
    search : "",
    showSearch : false,
};


const shopSlice = createSlice({
    name : "shop",
    initialState ,
    reducers : {
        setSearch : (state , action) => {
            state.search = action.payload;
        },
        setShowSearch : (state) => {
            state.showSearch = !state.showSearch
        }
    }
})

export const {setSearch,setShowSearch} = shopSlice.actions;
export default shopSlice.reducer