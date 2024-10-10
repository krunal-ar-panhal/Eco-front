import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Title from './Title';
import ProductItem from './ProductItem'

const RelatedProducts = ({ category, subCategory }) => {
  const { Products } = useSelector((state) => state.shop);
  
  const [related, setRelated] = useState([]);

  useEffect(() => {
    
    if (Products.length > 0) {
      let productCopy = Products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      console.log(productCopy.slice(0, 5));
      setRelated(productCopy.slice(0, 5));
    }
  }, [Products,category,subCategory]);

  return (
    <div className="my-24">
        <div className="text-center text-3xl py-2">
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
    
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {related.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item.id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
    </div>
  );
};

export default RelatedProducts;
