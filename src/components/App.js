import React, { useState } from 'react'
import './App.css';
import Form from './Form'
import Ideas from './Ideas'

const App = () => {
  const [ideas, setIdeas] = useState([]);

  const addIdea = (title, idea) => {
    const newIdea = {
      id: Date.now(),
      title: title,
      idea: idea,
    }
    setIdeas(ideas => [...ideas, newIdea]);
  }

  const deleteIdea = (id) => {
    const newIdeasArray = ideas.filter(ideas => {
      return ideas.id !== id
    })
    setIdeas(newIdeasArray)
  }

  return (
    <div className="App">
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </div>
  );
}

export default App;
