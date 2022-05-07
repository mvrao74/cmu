import Navbar from "../Navbar/Navbar"

export default function Apra_Internet()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <div className="container" style={{fontFamily : 'western'}}>
                <br></br>
                <h3>Brief History of the Internet</h3>
                <h5><a href="https://www.internetsociety.org/internet/history-internet/brief-history-internet/" target={"_blank"}>https://www.internetsociety.org/internet/history-internet/brief-history-internet/</a></h5>
                <br></br>
            </div>
        </div>
    )
}