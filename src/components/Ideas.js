import React from 'react'
import './App.css';
import Card from './Card'

const Ideas = ({ideas}) => {
  const ideasToDisplay = ideas.map(idea => <Card key={idea.id} title={idea.title} idea={idea.idea}/>)
  return (
    <div className="Ideas">
      { ideasToDisplay }
    </div>
  );
}

export default Ideas;