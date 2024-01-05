import React, { useState } from "react";
import "../App.css";
// import Cart from "./Cart";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="p-4" key={item.id}>
      <img src={item.url} width={40} height={40} className="m-2" />
      <span>{item.name}</span>
      <button className="p-2 m-2 btn-cart" onClick={handleDecrement}>
        -
      </button>
      <span className="m-2">{quantity}</span>
      <button className="p-2 m-2 btn-cart" onClick={handleIncrement}>
        +
      </button>
      <span>Rs. {item.price * quantity}/-</span>
    </div>
  );
};

const CartList = ({ cart }) => {
  return (
    <div className="p-3">
      {cart.map((cartItem) => (
        <CartItem item={cartItem} />
      ))}
    </div>
  );
};

export default CartList;
