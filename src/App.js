import { useState } from 'react';

function getRandomAnimal() {
  const animals = ['lizard', 'dog', 'moose', 'elk', 'hawk', 'goat'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add an Animal</button>
      <div>{animals}</div>
    </div>
  );
}

export default App;
