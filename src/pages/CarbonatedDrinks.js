import React from 'react';
import DrinkItem from '../components/DrinkItem';
import './CarbonatedDrinks.css';

const carbonatedDrinks = [
  { id: 1, name: '콜라', price: '1,500' },
  { id: 2, name: '제로콜라', price: '1,800' },
  { id: 3, name: '사이다', price: '1,500' },
  { id: 4, name: '환타', price: '1,600' },
];

function CarbonatedDrinks() {
  return (
    <div className="CarbonatedDrinks">
      <h1>탄산음료</h1>
      <ul>
        {carbonatedDrinks.map(drink => (
          <DrinkItem key={drink.id} name={drink.name} price={drink.price} />
        ))}
      </ul>
    </div>
  );
}

export default CarbonatedDrinks;
