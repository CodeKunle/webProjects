import React, {useState} from 'react'

function MyCounter() {

    const [count, setCount] = useState (0);
    
    const increament = () => {
        setCount(count + 1);
    }
    const decreament = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }
  return (
    <div className='counter-container'>
        <p className='display'>{count}</p>
        <button className='count-button' onClick={increament}>Increament</button>
        <button className='count-button' onClick = {decreament}>Decreament</button>
        <button className='count-button' onClick = {reset}>Reset</button>

      
    </div>
  )
}

export default MyCounter