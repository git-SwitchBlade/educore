import React from "react";
import "./login.css"
export default function login(props) {
return (
  <>
    <div className="log-form">
    
      <div className="contents">
          <div className="pic">
            </div>
            <div className="details">
                <h1>LOGIN</h1>
                <form>
                
                  <input  type="number" placeholder="Enrollment" id="Enrollment" name="enrollment"></input>
                  <input  type="password" placeholder="Password" id="Password" name="password"></input>
                  <br></br>
                  <br></br>
                  <br></br>
                  <button className="Button">Login</button>
                </form>
                <button className="Option" >Don't have an account? Register here.</button>
            </div>
          </div>
        </div>
        
    </>
  )
}
