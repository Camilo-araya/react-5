import React, { useState } from "react";
import pizzaCart from "../components/pizzas";
import "../assets/style/Cart.css"; 

function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, quantity: Math.max(0, pizza.quantity - 1) }
        : pizza
    );
    setCart(updatedCart.filter((pizza) => pizza.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Detalles del pedido:</h2>
      <div className="cart-items">
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <div className="pizza-name">{pizza.name}</div>
            <div className="pizza-price">${pizza.price}</div>
            <button
              onClick={() => decreaseQuantity(pizza.id)}
              className="quantity-button decrease"
            >
              -
            </button>
            <div className="quantity-display">{pizza.quantity}</div>
            <button
              onClick={() => increaseQuantity(pizza.id)}
              className="quantity-button increase"
            >
              +
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">Total: ${calculateTotal()}</div>
      <button className="pay-button">Pagar</button>
    </div>
  );
}

export default Cart;