import React from 'react';
import { Link } from 'react-router-dom';
import './DrinkSelection.css';

function DrinkSelection() {
  return (
    <div className="DrinkSelection">
      <h1>어떤 음료를 마실 건가요?</h1>
      <Link to="/ion-drinks">이온음료</Link>
      <br />
      <Link to="/carbonated-drinks">탄산음료</Link>
    </div>
  );
}

export default DrinkSelection;
