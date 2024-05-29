import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DrinkSelection from './pages/DrinkSelection';
import IonDrinks from './pages/IonDrinks';
import CarbonatedDrinks from './pages/CarbonatedDrinks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<DrinkSelection />} />
        <Route path="/ion-drinks" element={<IonDrinks />} />
        <Route path="/carbonated-drinks" element={<CarbonatedDrinks />} />
      </Routes>
    </div>
  );
}

export default App;
