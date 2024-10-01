import React from "react";
import { useSelector } from "react-redux";
import { getCartTotalPrice } from "../Redux/Shop/ShopSlice";
import Title from "./Title";

const CartTotal = () => {
  const totalPrice = useSelector(getCartTotalPrice);
  const { currency, delievery_fee } = useSelector((state) => state.shop);

  const finalTotal = totalPrice + delievery_fee;

  const isEmptyCart = totalPrice === 0;

  return (
    <div className="w-auto">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>
            {currency}
            {totalPrice}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping fees</p>
          <p>
            {currency}
            {delievery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {isEmptyCart ? "0.00" : finalTotal}.00
          </b>{" "}
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
