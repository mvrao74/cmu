import Navbar from "../Navbar/Navbar"
import { useState } from 'react';
import Registrationscsv from './Registrations.csv'
import './Registrations.css'

export default function Registrations()
{
    const [email, setEmail] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
                                         
    const handleSubmit= (e) => { 
        console.log(email,fname,lname,phone)
        e.preventDefault();
        const data = email+", "+fname+", "+lname+", "+phone+"\n"
        // const fs = require('fs');
        // fs.appendFileSync({Registrationscsv}, data);
        // const requestOptions = {
        // method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({"for" : "student",
        //                       "email" : email,
        //                       "fname" : fname,
        //                       "lname" : lname,
        //                       "phone" : phone,
        //                       "qd" : qd,
        //                       "year" : year,
        //                       "status" : status})
        // };
        // fetch('http://127.0.0.1:5000/', requestOptions)
        // .then(response => response.json())
        // .then(resp => console.log(resp))
      }

    return(
        <div className="maindiv">
            <Navbar/>
            <div className = "form-bg">

            <form className='form'onSubmit={e => {handleSubmit(e)}}>
            <br></br>
            
        
            <div className="form-group">
            <label>Email Address <span>*</span></label>
            <input type="email" className="form-control" required onChange={e => setEmail(e.target.value)}></input>
            </div>
            <br/>

            <div className="row">
                <div className="form-group col">
                <label>First Name<span>*</span></label>
                <input type="text" className="form-control" required onChange={e => setFname(e.target.value)}></input>
                </div>

                <div className="form-group col">
                <label>Last Name<span>*</span></label>
                <input type="text" className="form-control" required onChange={e => setLname(e.target.value)}></input>
                </div>
            </div>
            <br/>
                
            <div className="form-group">
            <label>Phone Number<span>*</span></label>
            <input type="text" className="form-control" required onChange={e => setPhone(e.target.value)}></input>
            </div>
            <br/>
            <div className="button">
            <button type="submit" className="btn btn-secondary">Apply Now</button>
            </div> 
            </form>
    </div>
        </div>
    )
}