import React, { useEffect, useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
import axios from 'axios'
import toast from 'react-hot-toast'

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([]);
    const [products, setProducts] = useState([])

    useEffect(()=>{
    const getBestSellerProducts = async () => {
      try {
        const response = await axios.get("/api/product/list")
        console.log("best seller rsponse",response);
        setProducts(response.data.products)
        
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }

    
      getBestSellerProducts();
    },[])

    useEffect(() => {
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLER'}/>
            <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus eligendi aliquid nostrum ipsa suscipit.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSeller.map((item) => (
            <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller