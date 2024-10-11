import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const [related, setRelated] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/product/list");
        console.log("API Response:", response.data);
        const productList = response.data.products;
        let filteredProducts = productList.filter(
          (item) => category === item.category
        );
        filteredProducts = filteredProducts.filter(
          (item) => subCategory === item.subCategory
        );
        setRelated(filteredProducts.slice(0, 5));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={item._id}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
