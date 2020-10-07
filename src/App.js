import React, {useState} from 'react';
import './App.css';

function App() {
  let [count,setCount] = useState(0);
  return (
   <div>
     <h2>Count = {count}</h2>
     <br/>
     <button onClick={()=> setCount(++count)}>+</button>
     <button onClick={()=> setCount(--count)}>-</button>
   </div>
  );
}

export default App;
