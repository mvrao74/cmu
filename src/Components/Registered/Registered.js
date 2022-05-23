import { useState,useEffect } from "react";
import CsvDownloader from 'react-csv-downloader';
import './Registered.css'
import Navbar from "../Navbar/Navbar"

export default function Registered()
{
    const [rows,setRows] = useState([])
    
    useEffect(()=>{
        getData()
    },[])
    // const [flag, setFlag] = useState[true]

    const getData= async ()=> {
         
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"method" : "GET"})
            };
            const resp = await fetch('https://f7jw5u68dg.execute-api.ap-south-1.amazonaws.com/stage1/', requestOptions)
            // console.log(JSON.parse(JSON.stringify(await resp.json())));
            const data = JSON.parse(JSON.stringify(await resp.json()))
            // console.log(data["rows"])
            setRows(data["rows"])
        //     .then(response => response.json())
        //     .then(resp => {
        //         if(resp.statusCode == 200)
        //         {
        //             // console.log(resp.rows)
        //             setRows(resp.rows)
        //             // console.log(rows)
        //         }
        //     })
        }

    // const downloadCSV=(e)=>
    // {
    //     console.log(rows)
    //     e.preventDefault();
        // let csvData = makeCSV(rows)
        // console.log(csvData)
        // const blob = new Blob([csvData]);
        // const fileDownloadUrl = URL.createObjectURL(blob);
        // setFileDownloadUrl(fileDownloadUrl)
    // }

    // const makeCSV =(content)=> {
    //     let csv = '';
    //   content.forEach(value => {
    //       value.forEach((item, i) => {
    //       let innerValue = item === null ? '' : item.toString();
    //       let result = innerValue.replace(/"/g, '""');
    //       if (result.search(/("|,|\n)/g) >= 0) {
    //         result = '"' + result + '"'
    //       }
    //       if (i > 0) {csv += ','}
    //       csv += result;
    //     })
    //       csv += '\n';
    //     })
    //   return "First Name,Last Name,Email Address,Phone Number\n"+csv
    // }

    const getCsvData = () =>
    {
        let data = []
        if(rows !== [])
        {
            
            const l = rows.length
            for(let i = 0; i < rows.length; i++)
            {
                data.push({
                    "First Name" : rows[i][1],
                    "Last Name": rows[i][2],
                    "Email Address" : rows[i][0],
                    "Phone Number" : rows[i][3]
                })
            }    
        }
        return data
    }
    return(
        <div className="maindiv">
            <Navbar/>
            <div className="container">
                <br/>
            <div className="table-responsive-sm table-borderless">
                <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name </th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                     {rows.map((val,key) => 
                        <tr key={key}><td>{val[1]}</td><td>{val[2]}</td><td>{val[0]}</td><td>{val[3]}</td></tr>)}
                </tbody>                
            </table>
            <div className="download_button">
                <div><CsvDownloader
                    className="btn btn-secondary"
                    filename="P2Q4_Registrations"
                    extension=".csv"
                    datas={getCsvData}
                    text="Download" />
                </div>
            </div>
            {/* <a download={fileNames["csv"]} href={fileDownloadUrl}>
                <button className="btn btn-secondary" onClick={e=>downloadCSV(e)}>Export CSV</button>
            </a> */}
            </div>
            </div>
        </div>
    )
}