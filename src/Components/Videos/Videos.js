import Navbar from "../Navbar/Navbar"

export default function Videos()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <div className="container">
                    <br></br>
                    <h3>Hearsay</h3>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/kJ9WekPYaXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <br></br>
                    <br></br>
                    <h3>Harpy</h3>
                    <div class="embed-responsive embed-responsive-16by9">        
                        <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/NiiDe2n-GeQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
            </div>
        </div>
    )
}