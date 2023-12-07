import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("White");
   
  return (
    <div style={{backgroundColor:color, with:"100vw", height:"100vh"}}>
      <div className='fixed-bottom bg-white w-75 text-center mx-auto mb-3 rounded py-2 shadow'>
        <button className='btn btn-danger me-3' onClick={() => setColor("red")}>Red</button>
        <button className='btn btn-success me-3' onClick={() => setColor("green")}>Green</button>
        <button className='btn btn-secondary me-3' onClick={() => setColor("#999")}>Silver</button>
        <button className='btn btn-info me-3' onClick={() => setColor("#31D2F2")}>Tile</button>
        <button className='btn btn-warning me-3' onClick={() => setColor("yellow")}>Yellow</button>
      </div>
    </div>
  );
}

export default App;
