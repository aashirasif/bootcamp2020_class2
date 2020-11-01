import React,{useState} from 'react';
import './App.css';
import Context from './Context/Context.js';
import { Parent } from './Parent';
import State from './State';
import I_Reducer from './I_Reducer';

function App() {
  let n_value = useState(0)
  return (
    <div>
    <Context.Provider value={n_value}>
      <I_Reducer/>
    </Context.Provider>
    </div>
  );
 
}

export default App;
