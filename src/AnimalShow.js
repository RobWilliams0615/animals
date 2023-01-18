// React Imports

import { useState } from 'react';

// CSS Imports

import './AnimalShow.css';

// Image Imports

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
};

// Sets inital State for like img

function AnimalShow({ type }) {
  const [likes, setLikes] = useState(0);

  // Updates state for setLikes when like img clicked

  const handleClick = () => {
    setLikes(likes + 1);
  };

  // JSX

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="like"
        alt="like"
        src={heart}
        style={{ width: 10 + 10 * likes + 'px' }}
      />
    </div>
  );
}
export default AnimalShow;
