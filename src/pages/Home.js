import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>음료 자판기</h1>
      <Link to="/select">주문하기</Link>
    </div>
  );
}

export default Home;
