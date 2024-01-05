import React from "react";
import "../App.css";
// import Cart from "./Cart";
const CartList = ({cart}) => {
  return (
    <div className="p-3">
      {
      cart.map((cartItem, cartIndex) => {
        return (
          <div className="p-3">
            <img src={cartItem.url} width={40} height={40} className="mr-2"/>
            <span>{cartItem.name}</span>
            <button>-</button>
            <span>{cartItem.quantity}</span>
            <button>+</button>

            <span>rs. {cartItem.price}/-</span>
          </div>
        );
      })}
      {/* <p>
        {
            cart.map(item=>item.price).reduce()
        }
      </p> */}
    </div>
  );
};
export default CartList;
