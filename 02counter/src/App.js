import { useState } from 'react';
import './App.css';

function App() {
  let[counter, setCounter] = useState(0)
  //let counter = 5;
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }
  
  const removeValue = () => {
    if(counter>1){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>
      
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
