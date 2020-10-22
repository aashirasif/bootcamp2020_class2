import React, {useState} from 'react';


function State() {
  let [Day,setDay] = useState(true);
  return (
   <div className={`${Day ? 'Morning' : 'Night'}`}>
     <h2>Time = {Day ? 'Morning' : 'Night'}</h2>
     <br/>
     <button onClick={()=>setDay(true)}>Day</button>
     <button onClick={()=>setDay(false)}>Night</button>
   </div>
  );
 
}

export default State;
