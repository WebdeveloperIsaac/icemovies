import { useState } from "react";
import './App.css';

const Leaders = (props) => {
  return(
    <>
      <h1>Name : {props.name}</h1>
      <h2>Age : 20</h2>
   </>
  );
}

const App = () => {

const [counter, setCounter] = useState(1);
const name ={name:"isaac",age:20};
const [timer,setTimer]= useState(1)
  return (
    <div className="App">
      <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=>(prevCount)-1)}>-</button>
      <button onClick={()=>setTimer((prevCount)=>(prevCount)+1)}>{timer}
      </button>
      <h1>Hai {name.name}</h1>
      <Leaders name={name.name}/>
    </div>
  );
}

export default App;
