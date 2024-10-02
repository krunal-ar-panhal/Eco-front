import React from "react";
import Motion from "../Components/Motion";
import { useSelector } from "react-redux";
import Title from "../Components/Title";

const Order = () => {
  const { currency, Products } = useSelector((state) => state.shop);

  return (
    <Motion>
      <div className="border-t pt-16">
        <div className="text-2xl">
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>
        <div>
          {Products.slice(1, 2).map((item, index) => (
            <div
              key={index}
              className="py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img
                  src={item.image[0]}
                  alt="order_image"
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700 ">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity : 1</p>
                    <p>Size : M</p>
                  </div>
                  <p className="mt-2">
                    Date : <span className="text-gray-400">25, Jul , 2024</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500 "></p>
                  <p className="text-sm md:text-base">Ready To Ship</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                  TRACK ORDER
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Motion>
  );
};

export default Order;
