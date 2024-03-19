// Card.js
import React from 'react';

const Card = ({ card, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(card._id);
  };

  const handleUpdate = () => {
    onUpdate(card);
  };

  return (
    <div className="card">
      <img src={card.image} alt={card.title} />
      <div className="card-body">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <p>Price: ${card.price}</p>
        <button onClick={handleUpdate}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
