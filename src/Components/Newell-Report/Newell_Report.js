import Navbar from "../Navbar/Navbar"

export default function Newell_Report()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <div className="container" style={{fontFamily : 'western'}}>
                <br></br>
                <h3>SPEECH-UNDERSTANDING SYSTEMS: <br/>Final Report of a Study Group, Allen Newell, et al, CMU CSD report, May 1971</h3>
                <br/>
                {/* "http://www.rr.cs.cmu.edu/SUR.pdf" */}
                <h5>Link to the&nbsp;<a href="http://www.rr.cs.cmu.edu/SUR.pdf" target={"_blank"}>Report</a></h5>
                <h5>Click to download the report &nbsp;<a href="/Files/SUR.pdf"  download><button className="btn btn-outline-secondary">Download</button></a></h5>
                <br></br>
            </div>
        </div>
    )
}