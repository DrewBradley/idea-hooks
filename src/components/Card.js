import React from 'react'
import './App.css';

const Card = ({title, idea}) => {
  return (
    <div className="Card">
      <h1>{title}</h1>
      <p>{idea}</p>
      <button> 🗑 </button>
    </div>
  );
}

export default Card;