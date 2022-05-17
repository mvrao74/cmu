import Navbar from "../Navbar/Navbar"
import { useState } from 'react';
import './Registrations.css'
import { useNavigate } from "react-router-dom";

export default function Registrations()
{
    const [email, setEmail] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    let navigate = useNavigate();

    const handleSubmit= (e) => { 
        // console.log(email,fname,lname,phone)
        e.preventDefault();
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"method" : "POST",
                              "email" : email,
                              "fname" : fname,
                              "lname" : lname,
                              "phone" : phone})
        };
        fetch('https://f7jw5u68dg.execute-api.ap-south-1.amazonaws.com/stage1/', requestOptions)
        .then(response => response.json())
        .then(resp => {
            if(resp.statusCode == 200)
            {
                let path = `Acknowledgement`; 
                navigate(path);
            }
            else
            {

            }
        })
    }
      
    return(
        <div className="maindiv">
            <Navbar/>
            <div className="flex_container" style={{fontFamily : 'western'}}>
                <div><h4>P2Q4 Symposium</h4></div>
            </div>
            <div className = "form-bg">

            <form className='form'onSubmit={e => {handleSubmit(e)}}>
            <br></br>
            
        
            <div className="form-group">
            <label>Email Address<span>*</span></label>
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
            <button type="submit" className="btn btn-secondary">Register</button>
            </div> 
            <label>Fields marked with * are mandatory.</label>   
            </form>
    </div>
        </div>
    )
}
