import { useState } from 'react'
import './App.css'
// import DynamicValue from "./components/DynamicValue/DynamicValue.jsx"
import Looping from "./components/Looping/Looping.jsx";



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <DynamicValue/> */}
      <Looping />


    </>
  )
}

export default App
