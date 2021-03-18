import React, { useState } from 'react'
import './App.css';

const Form = ({addIdea}) => {
  const [title, setTitle] = useState()
  const [idea, setIdea] = useState()

  const handleTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleIdea = (event) => {
    setIdea(event.target.value);
  }
 
  return (
    <div className="Form">
      <input 
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleTitle}
      />
      <input 
        type="text"
        name="idea"
        placeholder="Idea"
        value={idea}
        onChange={handleIdea}
      />
      <button onClick={() => addIdea(title, idea)}>HOOKS!</button>
    </div>
  );
}

export default Form;