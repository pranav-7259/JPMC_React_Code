import React, { useState } from 'react'

export default function Counter() {
    var [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter + 1)
    }

    function decrement(){
        setCounter(counter--)
    }

    function reset(){
        setCounter(0)
    }

  return (
    <>
        <h1>Counter</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <h1 className='text-primary'>{counter}</h1>
    </>
  )
}
