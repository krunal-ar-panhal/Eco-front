import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,price,name}) => {

    console.log("product id",id);
    

    const { currency } = useSelector((state) => state.shop)
    console.log("currency",currency);
    const displayImage = Array.isArray(image) ? image[0] : image;
    

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className='overflow-hidden'>
            <img src={displayImage} alt="product_image" className='hover:scale-110 transition ease-in-out'/>
        </div>
        <div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem