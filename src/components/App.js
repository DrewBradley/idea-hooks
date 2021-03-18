import React, { useState } from 'react'
import './App.css';
import Form from './Form'
import Ideas from './Ideas'

const App = () => {
  const [ideas, setIdeas] = useState([]);

  const addIdea = (title, idea) => {
    // event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title: title,
      idea: idea,
    }
    console.log(ideas)
    setIdeas(ideas => [...ideas, newIdea]);
  }

  return (
    <div className="App">
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} />
    </div>
  );
}

export default App;
