
import Form from "./Form";
import Login from "./Login";

import React,{useState} from "react";
function App() {
const [getUserText,setUserText] = useState("");
const [headingText,setHeadingText] = useState("Hello");
const [getColor,setColor] = useState("white");

function handleInput(event){
  console.log("User entered"+event.target.value);
  setUserText(event.target.value);
}
function handleClick(){
  setHeadingText("Hello "+getUserText);
}
function handleHover(){
  setColor("black");
}
function handleMouseOut(){
  setColor("white");
}
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" onChange={handleInput} placeholder="What's your name?" />
      <button style={{backgroundColor : getColor}} onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleMouseOut}>Submit</button>
    </div>
  );
}

// var isLoggedIn = true;

// function App() {
//   return (
//     <div className="container">
//       {
//           isLoggedIn
//           ?
//           <h1>Hello</h1>
//           :
//           <Login          
//           />
//       }
//     </div>
//   );
// }

///////////////////////////////////////////////
// var userIsRegistered = false;

// function App() {
//   return (
//     <div className="container">
//       {userIsRegistered ? <Login /> : <Form />}
//     </div>
//   );
// }
export default App;
