//CREATING My First React COMPONENT :- It should have one functional component

import React from 'react'   //We can write 'JSX' with the help of react...

const App = () => {   //App is Functional Component (it should always return JSX..)
  return (            //returns JSX - In JSX, here all these tags- div, img, p are Objects & className, alt, src are the properties of these objects.. (Do PARENT Ek JSX ke ander return nahi ho sakte haa..)
    // can also use blank tag here i.e. <></>
    <>
    <MyName/>
    <MyName/>
    <MyName/>
    <h1>
      Hello World {2+3  }
    </h1>
    </>
  )
}

function MyName() {
  return (
    <h1>I am Aditi Sharma</h1>
  )
}
// function App(){
//   return (
//     React.createElement('h1',{},'Hello World')
//   )
// }

//jitne bi humare components hote ha, vo ek Modular structure me hote ha..
export default App    //Exporting the component that we made here, so that we can use it in other files..
