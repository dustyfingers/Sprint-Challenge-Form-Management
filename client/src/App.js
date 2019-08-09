import React, { useState, useEffect } from 'react';
import Signup from './Signup';
import axios from 'axios';
import './App.sass';

function App() {
  const [stuff, setStuff] = useState([]);

  useEffect(() => {
    fetchStuff();
  }, []);

  const fetchStuff = async () => {
    let { data } = await axios.get('http://localhost:5000/api/restricted/data');
    setStuff([...data]);
  };

  console.log(stuff);

  return (
    <div className="App">
      <Signup />
      {stuff.map(thing => (
        <div className="recipe">
          <h2>{thing.name}</h2>
          {thing.ingredients.map(ingredient => (
            <p>{ingredient}</p>
          ))}
          <h3>{thing.technique}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;