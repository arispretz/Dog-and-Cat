import "./styles/styles.css";
import React, { useState } from 'react';

const catImgUrl = 'https://cdn.glitch.global/d85dc994-ed5d-4667-916a-203be8cd4f91/thumbnails%2Fcat.jpg?1718217108894';
const dogImgUrl = 'https://cdn.glitch.global/d85dc994-ed5d-4667-916a-203be8cd4f91/thumbnails%2Fdog.jpg?1718217129891';

const App = () => {
  const [image, setImage] = useState(catImgUrl);

  const changeAnimal = () => {
    const result = image === catImgUrl ? dogImgUrl : catImgUrl;
    setImage(result);
  };

  return (
    <>
    <div className='App'>
      <h1>Dog and Cat</h1>
      <div className='animal'>
        <img src={image} alt='animal' />
      </div>

      <button onClick={changeAnimal} className='btn btn-add'>
        Change
      </button>
    </div>
    <footer className="footer">
      <p>Created by Ariana Spretz</p>
    </footer>
    </>
  );
};

export default App;
