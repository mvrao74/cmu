import { useState,useEffect } from "react";
import Navbar from "../Navbar/Navbar"

export default function Registered()
{
    const [rows,setRows] = useState([["jan","aseda","asdada"],["jan","aseda","asdada"],["jan","aseda","asdada"]])
    const getData=() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"method" : "GET"})
            };
            fetch('https://f7jw5u68dg.execute-api.ap-south-1.amazonaws.com/stage1/', requestOptions)
            .then(response => response.json())
            .then(resp => {
                if(resp.statusCode == 200)
                {
                    // console.log(resp.rows)
                    setRows(resp.rows)
                    console.log(rows)
                }
            })
        }

    return(
        <div className="maindiv">
            <Navbar/>
            <div className="container" style={{fontFamily : 'western'}}>
            {getData()}
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name </th>
                        <th>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((val,key) => 
                        <tr key={key}>{val.map(row=>
                            <td>{row}</td>)}
                        </tr>)}
                     {/* {rows.map((val,key) => 
                        <tr key={key}><td>{val[1]}</td><td>{val[2]}</td><td>{val[0]}</td></tr>)} */}
                </tbody>                
            </table>
            </div>
        </div>
    )
}