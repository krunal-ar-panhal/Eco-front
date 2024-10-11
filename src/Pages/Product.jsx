import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Motion from "../Components/Motion";
import RelatedProducts from "../Components/RelatedProducts";
import { addToCart } from "../Redux/Shop/ShopSlice";
import axios from "axios";

const Product = () => {
  const { productId } = useParams();
  const { currency } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`/api/product/single/${productId}`);
        console.log("single product response", response.data);
        setProductData(response.data.product);
        setImage(response.data.product.image[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  const imagesToDisplay = Array.isArray(productData?.image)
    ? productData.image
    : [productData?.image].filter(Boolean);

  return productData ? (
    <Motion>
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/* PRODUCT DATA */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* DISPLAYING PRODUCT SIDEBAR IMAGE */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-hidden justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {imagesToDisplay.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt="product image"
                />
              ))}
            </div>
            {/* DISPLAYING PRODUCT SINGLE IMAGE */}
            <div className="w-full sm:w-[80%]">
              <img src={image} alt="single image" className="w-full h-auto" />
            </div>
          </div>
          {/* PRODUCT INFORMATION */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name} </h1>
            <div className="flex items-center gap-1 mt-2">
              <img src="/assets/star_icon.png" alt="star_icon" />
              <img src="/assets/star_icon.png" alt="star_icon" />
              <img src="/assets/star_icon.png" alt="star_icon" />
              <img src="/assets/star_icon.png" alt="star_icon" />
              <img src="/assets/star_dull_icon.png" alt="star_icon" />
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>SELECT SIZE</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border-black border py-2 px-4 bg-gray-100 ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(addToCart({ product: productData, size }));
              }}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>

            <hr className="mt-8 sm:w-4/5 bg-slate-500" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original</p>
              <p>Cash on delivery available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
        {/* DESCRIPTION AND REVIEWS */}
        <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm cursor-pointer">
              Description
            </b>
            <p className="border px-5 py-3 text-sm cursor-pointer">
              Reviews (122)
            </p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              inventore fugiat quia odit iste...
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              ex temporibus placeat! Possimus, nam iure.
            </p>
          </div>
        </div>
        {/* RELATED PRODUCTS */}
        <div>
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
    </Motion>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
