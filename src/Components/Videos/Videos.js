import Navbar from "../Navbar/Navbar"
// import './Videos.css'

export default function Videos()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <div className="flexbox" style={{fontFamily : 'western'}}>
                    <br></br>
                    <div><h4>Hearsay&nbsp;-&nbsp;<a href="https://www.youtube.com/embed/kJ9WekPYaXQ" target={"_blank"}>Click here for the video</a></h4></div>
                    <p/>
                    {/* <div class="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/kJ9WekPYaXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> */}
                    <div><h4>Harpy&nbsp;-&nbsp;<a href="https://www.youtube.com/embed/NiiDe2n-GeQ" target={"_blank"}>Click here for the video</a></h4></div>
                    {/* <div class="embed-responsive embed-responsive-16by9">        
                        <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/NiiDe2n-GeQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> */}
                    <p/>
                    <div><h4>Chase&nbsp;-&nbsp;<a href="https://youtu.be/5T6m8I8Sh4M" target={"_blank"}>Click here for the video</a></h4></div>
                    <p/>
                    <div><h4>Sphinx&nbsp;-&nbsp;<a href="https://youtu.be/djXx8bmY8x8" target={"_blank"}>Click here for the video</a></h4></div>
                    <p/>
                    <div><h4>Voice mail&nbsp;-&nbsp;<a href="https://youtu.be/1R9cK69f4uQ" target={"_blank"}>Click here for the video</a></h4></div>
                    <p/>
                    <div><h4>Ward&nbsp;-&nbsp;<a href="https://youtu.be/ag2J444WIdg" target={"_blank"}>Click here for the video</a></h4></div>
                    <p/>
            </div>
        </div>
    )
}