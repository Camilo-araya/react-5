import React, { useState, useEffect } from 'react';
import '../assets/style/Pizza.css'; 

function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error('Error fetching pizza:', error));
  }, []);

  if (!pizza) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="pizza-container">
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <h3 className="pizza-name">{pizza.name}</h3>
      <p className="pizza-price">Precio: {pizza.price}</p>
      <p className="pizza-ingredients">Ingredientes: {pizza.ingredients}</p>
      <p className="pizza-description">Descripción: {pizza.desc}</p>
      <button className="add-to-cart">Añadir al carrito</button>
    </div>
  );
}

export default Pizza;