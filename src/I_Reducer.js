import React,{useReducer} from 'react';
import counterReducer from './Reducer.js';

export default function I_Reducer() {
    let [state,dispatch] = useReducer(counterReducer,0);
    return (
        <div>
            <h3>Value Of Counter: {state}</h3>
            <button onClick={() => dispatch('Increment')}>Increment</button>
        </div>
    )
}
