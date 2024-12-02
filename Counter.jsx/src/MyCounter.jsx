import React from 'react'

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
    <div>
        <p className='display'>{count}</p>
        <button className='count-button'>Increament</button>
        <button className='count-button'>Decrement</button>
        <button className='count-button'>Reset</button>

      
    </div>
  )
}

export default MyCounter
