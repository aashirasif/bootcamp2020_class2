import React,{useState} from 'react';
import './App.css';
import Context from './Context/Context.js';
import { Parent } from './Parent';
import State from './State';

function App() {
  let n_value = useState(0)
  return (
    <div>
    <Context.Provider value={n_value}>
      <State/>
    </Context.Provider>
    </div>
  );
 
}

export default App;
