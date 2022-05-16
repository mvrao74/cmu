import Navbar from "../Navbar/Navbar"
import './Acknowledgement.css'
export default function Acknowledgement()
{
    return(
        <div   className="maindiv" style={{fontFamily : 'western'}}>
            <Navbar/>
            <br></br>
            <div className="flex_container">
                <div><h3>Thanks for Registering to P2Q4 Symoposium.</h3></div>
            </div>
        </div>
    )
}