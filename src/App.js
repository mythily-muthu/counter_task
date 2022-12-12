import React, { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0)

  let increment = (() => {
    setCounter(prevCount => prevCount + 1)
  });

  let decrement = (() => {
    setCounter(prevCount => prevCount - 1)
  });

  return (
    <div className="App">

      <button
        className='likes'
        onClick={increment}> LIKES
      </button >


      <span>{counter}</span>

      <button
        className='dislikes'
        onClick={decrement}> DISLIKES
      </button>

    </div >
  );
}

export default App;
