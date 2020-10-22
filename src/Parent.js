import React,{useContext} from 'react';
import Context from './Context/Context.js';

export const Parent = () => {
    let counterValue = useContext(Context);
    return (
        <div>
            <h1>
            Context Number : {counterValue[0]}
            </h1>
            <button onClick={() => (counterValue[1](++counterValue[0]))}>
            Counter
            </button>
        </div>
    );
}
