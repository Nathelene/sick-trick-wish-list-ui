import './App.css';
import React from 'react';
import { useEffect, useState } from 'react'
import Tricks from './Tricks'
import Form from './Form'

function App() {
  const [tricks, setTricks] = useState([])

  
useEffect(() => {
 
  fetch('http://localhost:3001/api/v1/tricks')
    .then(res => res.json())
    .then(data => setTricks(data))
    
},[])


function addNewTrick(newTrick) {
  setTricks([...tricks, newTrick])
}


  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addNewTrick={addNewTrick}/>
      <Tricks tricks={tricks}/>
    </div>
  );
}

export default App; 
