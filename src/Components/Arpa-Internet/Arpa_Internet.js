import Navbar from "../Navbar/Navbar"

export default function Apra_Internet()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <div className="container" style={{fontFamily : 'western'}}>
                <br></br>
                <h3>Brief History of the Internet</h3>
                <h5>Click on the button to download the report&nbsp;<a href="https://www.internetsociety.org/internet/history-internet/brief-history-internet/" target={"_blank"}><button className="btn btn-outline-secondary">Download</button></a></h5>
                <br></br>
            </div>
        </div>
    )
}