import './App.css';
import React from 'react';
import { useEffect, useState } from 'react'
import getData from './ApiCalls'
import Tricks from './Tricks'

function App() {

  const [tricks, setTricks] = useState([])

useEffect(() => {
  // getData()
  fetch('http://localhost:3001/api/v1/tricks')
    .then(res => res.json())
    .then(data => setTricks(data))
})



  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks tricks={tricks}/>
    </div>
  );
}

export default App; 
