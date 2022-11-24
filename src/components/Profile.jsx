import React from 'react'
import './profile.css'
import studentImg from "./../img/21coa2bca2021.jpg";

const StudentName = 'Gill Bates';
const Course = 'BCA';
const StudentEnrollmentNo = '21COA2BCA';
const StudentEmail = "abc@gmail.com"
const StudentScholarNumber = 24578
const StudentSession = '2021 - 2024'
const StudentDateOfBirth = '29 Feb 2006'
const StudentPhoneNumber = '0001325746'

function Profile() {
  return (
    <>
      <div className="main-container">


        <div className='PersonalContainer' >
          <h2 className='PeronalDetailsHead'>Student Profile</h2>
          <div className="studentImage">
            <img src={studentImg} alt="Student" /></div>
          <div className="studentname">{StudentName}</div>
          <div className="Course">{Course}</div>
          <div className="card">
            <div>Enrollment No.</div>
            <div className="enrollmentNumber">{StudentEnrollmentNo}</div>
          </div>
          <div className="card" >
            <div>Scholar No.</div>
            <div className="StudentScholarNumber">{StudentScholarNumber}</div>
          </div>
          <div className="card">
            <div>Session</div>
            <div className="StudentSession">{StudentSession}</div>
          </div>
          <div className="card">
            <div>Date Of Birth</div>
            <div className="StudentDOB">{StudentDateOfBirth}</div>
          </div>
          <div className="card">
            <div>Email</div>
            <div className="StudentEmail">{StudentEmail}</div>
          </div>
          <div className="card">
            <div>Phone No.</div>
            <div className="StudentPhone">{StudentPhoneNumber}</div>
          </div>
        </div>

        <div className="main-details">
          <h1>Main Details</h1>
          <div className="Dcard">
            <label>Father's Name:</label>
            <input className='inputs' type="text" name="FName" size="15" /><br></br>
          </div>
          <div className="Dcard">

            <label> Father's Contact: </label>
            <input className='inputs'  type="text" name="Fcontact" size="15" /><br></br>
          </div>
          <div className="Dcard">


            <label> Occupation: </label>
            <input className='inputs'  type="text" name="Foccupation" size="15" /><br></br>
          </div>
          <div className="Dcard">

            <label> Designation </label>
            <input className='inputs'  type="text" name="Designation" size="15" /> <br></br>
          </div>
          <div className="Dcard">


            <label> Mother's Name: </label>
            <input className='inputs'  type="text" name="MName" size="15" /><br></br>
          </div>
          <div className="Dcard">


            <label> Mother's Contact: </label>
            <input className='inputs'  type="text" name="Mcontact" size="15" /><br></br>
          </div>
          <div className="Dcard">


            <label> Mother's Occupation:</label>
            <input className='inputs'  type="text" name="MOccupation" size="15" /><br></br>
          </div>
          <div className="Dcard">


            <label> Designation </label>
            <input className='inputs'  type="text" name="Designation" size="15" /><br></br>
          </div>
          <div className="Dcard">


            <label>Permanent Address:</label>
            <input className='inputs'  type="text" name="PermaAddress" size="15" ></input><br></br>

          </div>
          <div className="Dcard">


            <label>Pin Code:</label>
            <input className='inputs'  type="text" name="Pincode" size="15" /><br></br>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile