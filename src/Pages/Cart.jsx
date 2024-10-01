import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../Components/Title";
import { updateQuantity } from "../Redux/Shop/ShopSlice";
import CartTotal from "../Components/CartTotal";
import Motion from "../Components/Motion";
import { Link } from "react-router-dom";

const Cart = () => {
  const { Products, currency, cartItems } = useSelector(
    (state) => state.shop
  );
  const dispatch = useDispatch();

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: parseInt(items),
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    console.log("tempData", tempData);
    setCartData(tempData);
  }, [cartItems]);

  return (
    <Motion>
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = Products.find(
            (Product) => Product.id === item.id
          );
          if (!productData) {
            return null;
          }
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-center gap-6">
                <img
                  src={productData.image[0]}
                  alt="product_image"
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-300">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="border border-e-black    max-w-20 px-1 sm:px-2 py-1 "
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        itemId: item.id,
                        size: item.size,
                        quantity: 0,
                      })
                    )
                  }
                  src="/assets/bin_icon.png"
                  alt="bin"
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                />
              </div>
            </div>
          );
        })}
        
      </div>
      <div className="flex flex-col justify-end mt-12">
            <CartTotal />
            <Link to='/place-order'>
            <div className="bg-black w-auto active:opacity-75 text-white text-sm my-8 px-8 py-3 text-center cursor-pointer">
              PROCEED TO CHECKOUT
            </div>
            </Link>
          </div>
     
    </div>
    </Motion>
  );
};

export default Cart;
