import React from 'react';
import DrinkItem from '../components/DrinkItem';
import './IonDrinks.css';

const ionDrinks = [
  { id: 1, name: '포카리스웨트', price: '1,500' },
  { id: 2, name: '파워에이드', price: '1,500' },
  { id: 3, name: '2%', price: '1,400' },
  { id: 4, name: '토레타', price: '1,500' },
];

function IonDrinks() {
  return (
    <div className="IonDrinks">
      <h1>이온음료</h1>
      <ul>
        {ionDrinks.map(drink => (
          <DrinkItem key={drink.id} name={drink.name} price={drink.price} />
        ))}
      </ul>
    </div>
  );
}

export default IonDrinks;
