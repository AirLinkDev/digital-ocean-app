
//import Form from "./Form";
//import Login from "./Login";

import React,{useState} from "react";
function App() {
//const [getUserText,setUserText] = useState("");
//const [headingText,setHeadingText] = useState("Hello");
const [getColor,setColor] = useState("white");
const [getRegistered,setRegistered]=useState("Submit");
const [getFullName,setFullName] = useState({
  fName : "",
  lName : ""
})
//const [getFirstName,setFirstName]=useState("");
//const [getLastName,setLastName]=useState("");
function handleFirstname(event){
  setFullName({
    fName : event.target.value,
    lName : getFullName.lName
  });
  //setFirstName(event.target.value);
}
function handleLastname(event){
  setFullName({
    fName : getFullName.fName,
    lName : event.target.value
  });
  //setLastName(event.target.value);
}
function handleHover(){
  setColor("black");
}
function handleMouseOut(){
  setColor("white");
}
function clickHandler(){
  setRegistered("Registered");
}
  return (
    <div className="container">
      <h1>{"Hello "+getFullName.fName+" "+getFullName.lName}</h1>
      <input name="fName" onChange={handleFirstname} placeholder="First Name" />
      <input name="lName" onChange={handleLastname} placeholder="Last Name" />
      <button style={{backgroundColor : getColor}} onClick = {clickHandler} onMouseOver={handleHover} onMouseOut={handleMouseOut}>{getRegistered}</button>
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
