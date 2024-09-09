import React, { useState, useEffect } from 'react'
import './style.css'

const UseEffect = () => {
  const [myNum , setMyNum] = useState(0); //jab bi hum hooks use karte ha,to TOP LEVEL hierarchy me hona chaiye,Component me sabse TOP pr hona chahiye.....
   
  useEffect(() => { //ye first render pr,and then any update pr(render) ye automatic call hohota rahega..
    document.title= `Chats(${myNum})`

  }); //array dependency (jab chaho tab run nahi kr sakte,sirf first time hiuseeffect chalegaa..)
  
  return (
        <>
          <div className="center_div">
            <p>{myNum}</p>
            <div class="button2" onClick={()=> setMyNum(myNum+1)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              INCR
            </div>
          </div>
        </>
      );
}

export default UseEffect
