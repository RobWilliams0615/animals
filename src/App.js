import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['lizard', 'dog', 'moose', 'elk', 'hawk', 'goat'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add an Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
