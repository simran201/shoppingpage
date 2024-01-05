import React from "react";
import "../App.css";
export const ProductList = ({ product ,addToCart}) => {
  return (
    <div className="d-flex  row rg-40 p-5 text-center">
      {
        product.map((productItem, productIndex) => {
        return (
          <div style={{ width: "33%" }} >
            <div className="product-item ">
              <img src={productItem.url} width="90%" />
              <p>
                {productItem.name} | {productItem.category}
              </p>
              <p>{productItem.seller}</p>
              <p>Rs. {productItem.price}/-</p>
              <button onClick={()=> addToCart(productItem)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
