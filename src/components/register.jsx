import React from 'react'
import './reg.css'

export default function register(props) {
  return (
    <div className='reg-form'>
      <div className="contents">
          <div className="pic">
          </div>
            <div className="details">
              <h1>SIGN UP</h1>
             <form>
                <input   type="text" placeholder="First Name" id="fname" name="fname"></input>
                <input   type="text" placeholder="Last Name" id="lname" name="lname"></input>
                <input  type="number" placeholder="Enrollment" id="enrollment" name="enrollment"></input>
                <input   type="password" placeholder="Password" id="password" name="password"></input>
                <input   type="password" placeholder="Confirm Password" id="cpd" name="cpd"></input>
      
              <button className="button">Register</button>
            </form>
            <button className="option1">Already have an account? Login here.</button>
          </div>
        </div>
    </div>

  )
}
