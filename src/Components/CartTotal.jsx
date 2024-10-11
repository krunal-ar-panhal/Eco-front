import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const { totalItems, totalPrice } = useSelector((state) => state.shop);

  return (
    <div className="container mx-auto py-10 px-4 lg:px-0">
      {/* Cart Summary */}
      <div className="max-w-md mx-auto bg-white  p-6">
        <h2 className="text-xl font-semibold text-gray-800">Cart Total</h2>
        <div className="mt-4">
          <div className="flex justify-between items-center border-b py-2">
            <span className="text-gray-600">Total Items:</span>
            <span className="font-medium text-gray-800">{totalItems}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Total Price:</span>
            <span className="font-semibold text-lg text-gray-900">
              ₹{totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Proceed to Checkout Button */}
        <div className="mt-6 ">
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
