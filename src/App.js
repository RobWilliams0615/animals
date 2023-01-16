import { useState } from 'react';

function getRandomAnimal() {
  const animals = ['lizard', 'dog', 'moose', 'elk', 'hawk', 'goat'];

  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add an Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
