import Header from "./components/Header";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { useState } from "react";
import CartList from "./components/CartList";

function App() {
  const [product, setProduct] = useState([
    {
      url: "https://i1.wp.com/www.muted.com/wp-content/uploads/2018/07/Epaulet-Tennis-Trainer-White-Leather-Sneaker-1.jpg?ssl=1",
      name: "White Shoes",
      category: "Shoes",
      seller: "Mamta Shoe",
      price: "1599",
    },
    {
      url: "https://i1.wp.com/www.muted.com/wp-content/uploads/2018/07/Epaulet-Tennis-Trainer-White-Leather-Sneaker-1.jpg?ssl=1",
      name: "White Shoes",
      category: "Shoes",
      seller: "Mamta Shoe",
      price: "1899",
    },
    {
      url: "https://i1.wp.com/www.muted.com/wp-content/uploads/2018/07/Epaulet-Tennis-Trainer-White-Leather-Sneaker-1.jpg?ssl=1",
      name: "White Shoes",
      category: "Shoes",
      seller: "Mamta Shoe",
      price: "1599",
    },
    {
      url: "https://i1.wp.com/www.muted.com/wp-content/uploads/2018/07/Epaulet-Tennis-Trainer-White-Leather-Sneaker-1.jpg?ssl=1",
      name: "White Shoes",
      category: "Shoes",
      seller: "Mamta Shoe",
      price: "1599",
    },
    {
      url: "https://i1.wp.com/www.muted.com/wp-content/uploads/2018/07/Epaulet-Tennis-Trainer-White-Leather-Sneaker-1.jpg?ssl=1",
      name: "White Shoes",
      category: "Shoes",
      seller: "Mamta Shoe",
      price: "1599",
    },
    {
      url: "https://i1.wp.com/www.muted.com/wp-content/uploads/2018/07/Epaulet-Tennis-Trainer-White-Leather-Sneaker-1.jpg?ssl=1",
      name: "White Shoes",
      category: "Shoes",
      seller: "Mamta Shoe",
      price: "1599",
    },
  ]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    console.log(cart);
    setCart([...cart, { ...data, quantity: 1 }]);
  };
  const handleShow=(value)=>{
setShowCart(value)
  }
  return (
    <div>
      <Header count={cart.length} 
      handleShow={handleShow} />
      {
        showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}

export default App;
