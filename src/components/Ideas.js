import React from 'react'
import './App.css';
import Card from './Card'

const Ideas = ({ideas, deleteIdea}) => {
  const ideasToDisplay = ideas.map(idea => <Card key={idea.id} id={idea.id} title={idea.title} idea={idea.idea} deleteIdea={deleteIdea}/>)
  return (
    <div className="Ideas">
      { ideasToDisplay }
    </div>
  );
}

export default Ideas;