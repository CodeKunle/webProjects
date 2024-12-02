import { useState } from 'react'
import MyCounter from './MyCounter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyCounter/>
        
    </>
  )
}

export default App
