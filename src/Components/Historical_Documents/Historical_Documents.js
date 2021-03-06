import Navbar from "../Navbar/Navbar"
import arpa from '../../Files/ARPA.pdf'
import sur from '../../Files/SUR.pdf'
import Arpa from "../DisplayLinks/Arpa"

export default function Historical_Documents()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <div className="container" style={{fontFamily : 'western'}}>
                <br></br>
                <h4>Brief History of the Internet 1997</h4>
                <h5>Link to the&nbsp;<a href="https://www.internetsociety.org/internet/history-internet/brief-history-internet/" target={"_blank"}>Article</a></h5>
                <br></br>
                <h4>SPEECH-UNDERSTANDING SYSTEMS: <br/>Final Report of a Study Group, Allen Newell, et al, CMU CSD report, May 1971</h4>
                {/* "http://www.rr.cs.cmu.edu/SUR.pdf" */}
                <h5>Link to the&nbsp;<a href="http://www.rr.cs.cmu.edu/SUR.pdf" target={"_blank"}>Report</a></h5>
                {/* <h5>Click to download the report &nbsp;<a href={sur}  download><button className="btn btn-outline-secondary">Download</button></a></h5> */}
                
                <br/>
                <h4>Review of the ARPA Speech Understanding Project by Dennis H. Klatt 1977</h4>
                <h5>Link to the&nbsp;<a href="https://drive.google.com/file/d/1N7ClDctx3xb9sNPHbuKdAhfOqky2iSMG/view?usp=sharing" target={"_blank"}>Report</a></h5>
                
                <br/>
                {/* <h5>Click to download the report &nbsp;<a href={arpa}  download><button className="btn btn-outline-secondary">Download</button></a></h5> */}
                <h4>Reflections on being an AI System Architect : Victor Lesser 2008</h4>
                <h5>Link to the&nbsp;<a href="https://drive.google.com/file/d/1cNZP7B5KyJFferORWvv1KilD_PTbPqMB/view?usp=sharing" target={"_blank"}>Report</a></h5>
                <br></br>
            </div>
        </div>
    )
}