import React from "react";

function Input(props){
    return ( 
      <input
        Type = {props.Type}
        Placeholder = {props.Placeholder}
        />
   )
  }
  function Login(props){
    return (     
    <form className="form">
      <Input 
        Type = "text"
        Placeholder = "Username" 
      />
      <Input 
        Type = "password"
        Placeholder = "Password"
      />
    <button type="submit">Login</button>
    </form>);
  }
  export default Login;