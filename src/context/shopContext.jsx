import { createContext, useState } from "react";
import {products} from '../Data/ProductData'

export const ShopContext = createContext() 

const ShopContextProvider = (props) =>{

    const currency = "₹" ;
    const delivery_fee = 10 ;
    const [search , setaSearch] = useState("")
    const [showSearch, setShowSearch] = useState(true);


    const value = {
        products , currency , delivery_fee ,search , setaSearch, showSearch , setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider