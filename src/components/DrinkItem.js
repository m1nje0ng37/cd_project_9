import React from 'react';
import './DrinkItem.css';

function DrinkItem({ name, price }) {
  return (
    <li>
      <span>{name}</span><span>{price}</span>
    </li>
  );
}

export default DrinkItem;
