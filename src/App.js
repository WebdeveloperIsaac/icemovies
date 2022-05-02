import { useState, useEffect } from "react";
import './App.css';

const App = () => {

const [counter, setCounter] = useState(1);
 

//the useEffect Hook actually is a function returning a Function and have to pass the second parameter empty array to work fine
// and also we have the setCounter not just change the state directly with code
useEffect(()=>{
  alert('You changed the COunter to')
},[counter]);

return (
    <div className="App">
      <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
      <h1 onClick={() => alert("The Counter is Working Fine")}>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>(prevCount)-1)}>-</button>
    </div>
  );
}

export default App;
