
import React, { useState } from "react";

const Login=()=>{
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [allEntry,setAllEntry]=useState([]);

    const submitForm=(e)=> {
        e.preventDefault();
        
        const newEntry={email:email,password:password};
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry)
        
    }

    return(
        <div>
        <h1>Sign In</h1>
        <form action="" onSubmit={submitForm}>
            <label>Username</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off">
                </input><br/><br/>
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}>
                </input><br/><br/>
            <button type="submit">Login</button><br/><br/>
            <a href="www.google.com">Sign Up</a>


        </form>
        </div>
    )
}
export default Login;
