import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../Redux/Shop/ShopSlice";
import CartTotal from "../Components/CartTotal";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const { cart } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const handleQuantityChange = (_id, size, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ _id, size, quantity }));
    }
  };

  return (
    <div className="container mx-auto py-10">
      {cart.length > 0 ? (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div
              key={`${item._id}-${item.size}`}
              className="flex flex-col md:flex-row items-center gap-6 p-4 border-b"
            >
              {/* Product Image */}
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-20 md:w-32 rounded-lg"
              />

              {/* Product Info */}
              <div className="flex-1">
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-sm text-center font-semibold items-center mt-1 bg-gray-200 hover:bg-gray-300 w-9 text-gray-700 p-2 rounded">
                  {item.size}
                </div>
              </div>

              {/* Main Price */}  
              <div className="text-lg font-semibold">₹{item.price}</div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.size, item.quantity - 1)
                  }
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded"
                >
                  <FaMinus />
                </button>
                <div className="w-10 text-center text-lg">{item.quantity}</div>
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.size, item.quantity + 1)
                  }
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Updated Price */}
              <div className="text-lg font-semibold">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Remove Button */}
              <button
                onClick={() =>
                  dispatch(removeFromCart({ _id: item._id, size: item.size }))
                }
                className="text-red-500 hover:underline ml-6"
              >
                X
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">Your cart is empty</p>
      )}

      {/* Cart Total Component */}
      <div className="mt-10">
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;
