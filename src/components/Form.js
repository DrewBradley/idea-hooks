import React from 'react'
import './App.css';

const Form = () => {
  return (
    <div className="Form">
      <input 
        type="text"
        name="title"
        placeholder="Title"
        value=""
      />
      <input 
        type="text"
        name="idea"
        placeholder="Idea"
        value=""
      />
      <button>HOOKS!</button>
    </div>
  );
}

export default Form;