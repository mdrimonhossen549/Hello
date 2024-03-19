// CardList.js
import React from 'react';
import Card from './Card';

const CardList = ({ cards, onDelete, onUpdate }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card._id} card={card} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default CardList;
