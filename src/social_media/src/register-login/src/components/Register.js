import React from 'react'

export default function Register() {
  return (
    <div>
        <h1>hello</h1>
        <form classNameName="form1">
  

  <div className="form-outline mb-4" >

  

  <label className="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" className="form-control" />
    
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" />
    
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>


  <button type="button" className="btn btn-primary btn-block mb-4" >Sign in</button>

 
  
</form>
      
      
    </div>
  )
}
