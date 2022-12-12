import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0)


  useEffect(() => {
    // if (counter > 9) {
    //   alert('you have reached 10')
    // }
    console.log("counter value chnage:", counter);
  }, [counter]);



  let handleIncrement = (() => {
    console.log("counter:", counter)
    if (counter > 9 && counter < 17) {
      alert("limit reacthed 15")
    }
    setCounter(prevCount => prevCount + 1)
  });

  let handleDecrement = (() => {
    setCounter(prevCount => prevCount - 1)
  });



  return (
    <div className="App">

      <button
        className='likes'
        onClick={handleIncrement}> LIKES
      </button >


      <span>{counter}</span>

      <button
        className='dislikes'
        onClick={handleDecrement}> DISLIKES
      </button>

    </div >
  );
}

export default App;
