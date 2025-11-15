import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15) // it gives 2 things in array format 
  //let counter = 5

  const addValue=()=>{
    console.log(counter); //here the counter is updated but not reflected on UI 
    
    setCount(counter+1)
  }

  const removeValue=()=>{
    if (counter<=0)return
    setCount(counter-1)
  }

  
  return (
    <>
    <h1>Test and code </h1>
    <h2>Counter value {counter} </h2>
    <button
    onClick={addValue}
    >counter + </button>
    <button
    onClick={removeValue}
    >counter - </button>

    </>
  )
}

export default App
