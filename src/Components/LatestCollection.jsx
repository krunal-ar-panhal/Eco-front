import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { Products } = useSelector((state) => state.shop)
    console.log("latest collection products" , Products);

    const [latestProduct , setLatestProduct] = useState([]);
    console.log("latest Product",latestProduct);
    

    useEffect(() => {
      setLatestProduct(Products.slice(0,10))
    },[])
    

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"LATEST "} text2={" COLLECTIONS"}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, maiores pariatur doloribus aliquid molestias rerum.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProduct.map((item,index) => (
            <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection