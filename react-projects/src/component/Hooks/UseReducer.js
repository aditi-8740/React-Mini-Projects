import React, { useReducer } from 'react'
import './style.css'

const reducer = (state, action)=>{
    if (action.type === 'INCR') {
        state = state + 1
    }
    if (action.type === 'DECR') {
        state = state >0 ? --state : 0
    }
    return state;
}

const UseReducer = () => {
    // const [myNum , setMyNum] = React.useState(0);

    const initialData = 0;
    const [state , dispatch] = useReducer(reducer , initialData); //returns array of 2 elements [currentState, dispatch method] & takes 2 arguments(Reducer function, initialData)
    //ye jo initialData ha vo state ki current value kehalai jayegii, dispatch is used to trigger your Reducer function & reducer ke andar updated function hoga,jiske through 'state' ki value change hogii...
    return (
        <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={()=> dispatch( {type:"INCR"} )} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={ ()=>{ dispatch({type: "DECR"}) }}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
      );
}

export default UseReducer

// For small Tasks:- UseState is best option
// & to work with big projects:- usereducer is best option
