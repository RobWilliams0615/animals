// React Imports

import { useState } from 'react';

// CSS Imports

import './App.css';

// Component Imports

import AnimalShow from './AnimalShow';

// Takes initial animals array and geneerates new array with random animal

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

// Sets initial state of animals array to empty array

function App() {
  const [animals, setAnimals] = useState([]);

  // updates state of setAnimals when button is clicked

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  // Renders AnimalShow component

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  // JSX

  return (
    <div className="app">
      <button onClick={handleClick}>Add an Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
