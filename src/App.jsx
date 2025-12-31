import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicValue from "./components/DynamicValue/DynamicValue.jsx"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <DynamicValue/>

    </>
  )
}

export default App
