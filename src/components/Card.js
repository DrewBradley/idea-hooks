import React from 'react'
import './App.css';

const Card = ({id, title, idea, deleteIdea}) => {
  return (
    <div className="Card">
      <h1>{title}</h1>
      <p>{idea}</p>
      <button onClick={() => deleteIdea(id)}> 🗑 </button>
    </div>
  );
}

export default Card;