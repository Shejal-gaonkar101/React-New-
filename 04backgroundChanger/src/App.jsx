import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200'
      style = {{backgroundColor: color}}
      >
     <div className='fixed flex flex-wrap    
      justify-center bottom- 12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white'>
         test
        </div>
            </div>
     </div>
    </>
  )
}

export default App
