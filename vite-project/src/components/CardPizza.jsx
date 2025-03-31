import React from 'react';
import '../assets/style/CardPizza.css'; 

function CardPizza({ pizza }) {
  return (
    <div className="card-pizza">
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <h3 className="pizza-name">{pizza.name}</h3>
      <p className="pizza-description">{pizza.desc}</p>
      <p className="pizza-price">Precio: ${pizza.price}</p>
      <div className="ingredients-container">
        <strong>Ingredientes:</strong>
        <ul className="ingredients-list">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <button className="add-to-cart">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default CardPizza;