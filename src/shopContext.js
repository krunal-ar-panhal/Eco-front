import { createContext, useState } from "react"
import toast from "react-hot-toast";

export const ShopContext = createContext();

 const getProductData = async (props) => {

    const [products , setProducts] = useState([])

    const getProductsData = async () => {
        try {
            const response = await axios.get("/api/product/lis")
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }


}