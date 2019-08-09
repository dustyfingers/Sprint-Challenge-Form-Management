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
    console.log(data);
    setStuff(data);
    console.log(stuff);
  };

  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
