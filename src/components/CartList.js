import React from "react";
import "../App.css";
// import Cart from "./Cart";
const CartList = ({cart}) => {
  return (
    <div className="p-3">
      {
      cart.map((cartItem, cartIndex) => {
        return (
          <div className="p-4">
            <img src={cartItem.url} width={40} height={40} className="m-2"/>
            <span>{cartItem.name}</span>
            <button className="p-2 m-2 btn-cart">-</button>
            <span className="m-2">{cartItem.quantity}</span>
            <button className="p-2 m-2 btn-cart">+</button>

            <span>Rs. {cartItem.price}/-</span>
          </div>
        );
      })}

    </div>
  );
};
export default CartList;
