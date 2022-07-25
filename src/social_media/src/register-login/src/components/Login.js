import React,{useState} from 'react'
import { BrowserRouter , Routes ,
    Route, Redirect,Link} from "react-router-dom";

import './mystyle.css'

export default function Login() {
    
    const [user,setUser]=useState([]);
    const [text,setText]=useState("text area")

    const handleUserChange=(event)=> {
        setText(event.target.value)
        
    }

    const handleClickSign=()=> {
        console.log(text)
    }

  return (
    <div>
        <form className="form1">
  
  <div class="form-outline mb-4" >
  <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" onChange={handleUserChange}/>
    
  </div>

  
  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" />
    
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>


  <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleClickSign}>Sign in</button>

 
  <div class="text-center">
    <p>Not a member? <Link to={"/Register"}> Register </Link> </p>
   
  </div>
</form>
      
    </div>
  )
}
