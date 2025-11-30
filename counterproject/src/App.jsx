import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter,setCounter]=useState(0);


// let counter=5;

const addvalue =()=>{

  console.log("value  added",counter);
  counter=counter+1;
  setCounter (counter);
  }

const removeValue=()=>{
  
  counter=counter-1;
  setCounter(counter);
}

  return (
    <>
    <h1>react padho!</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
