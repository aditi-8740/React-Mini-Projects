import React, { useEffect, useState } from 'react'
// import './style.css'
import UseEffect from './UseEffect';

const UseEffect1 = () => {
    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(0)
   
  useEffect(() => {
    // setTimeout(() => {
    //     setCount(count+1)
    // }, 1000);
    setDoubleCount(count)

  },[count]);   //array dependency- depends on'count'

  return (
        <>
            <p>count: {count}</p>
            <button onClick= { ()=> {setCount((count) => count+1)}} >+</button>
            <p>double of count : {doubleCount}</p>
            <p> keeping calculation synchronized with count</p>
        </>
      );
}

export default UseEffect1
