import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0)
  let [name, setName] = useState("keo")


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
    setCounter(counter + 1)
  });

  let handleDecrement = (() => {
    setCounter(counter - 1)
  });

  let handleName = (() => {
    name == "keo" ? setName("jaxx") : setName("keo")
    alert("hi my name is " + name)
  })

  return (
    <div className="App">


      <div className='countValue'>
        <button
          className='likes'
          onClick={handleIncrement}> LIKES
        </button >


        <span>{counter}</span>

        <button
          className='dislikes'
          onClick={handleDecrement}> DISLIKES
        </button>
      </div>

      <div className='names'>
        <p>{name}</p>
        <button className='clickme'
          onClick={handleName}
        >clickme!</button>
      </div>











    </div >

  );
}

export default App;
