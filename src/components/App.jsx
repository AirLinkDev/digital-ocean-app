
//import Form from "./Form";
//import Login from "./Login";

import React,{useState} from "react";
function App() {
//const [getUserText,setUserText] = useState("");
//const [headingText,setHeadingText] = useState("Hello");
const [getColor,setColor] = useState("white");

const [getFirstName,setFirstName]=useState("");
const [getLastName,setLastName]=useState("");
function handleFirstname(event){
  setFirstName(event.target.value);
}
function handleLastname(event){
  setLastName(event.target.value);
}
function handleHover(){
  setColor("black");
}
function handleMouseOut(){
  setColor("white");
}
  return (
    <div className="container">
      <h1>{"Hello "+getFirstName+" "+getLastName}</h1>
      <input name="fName" onChange={handleFirstname} placeholder="First Name" />
      <input name="lName" onChange={handleLastname} placeholder="Last Name" />
      <button style={{backgroundColor : getColor}} onMouseOver={handleHover} onMouseOut={handleMouseOut}>Submit</button>
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
