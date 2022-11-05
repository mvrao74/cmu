import Navbar from "../Navbar/Navbar"
// import './Videos.css'

export default function Videos()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <div className="flexbox" style={{fontFamily : 'western'}}>
                    <br></br>
                    <div className="table-responsive-sm table-borderless">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><h4>1968</h4></td>
                                    <td><h4>Hear Here (from Stanford)</h4></td>
                                    <td><h4><a href="https://www.youtube.com/watch?v=JJ_zlj4pFV0&t=3s" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>

                                <tr>
                                    <td><h4>1973</h4></td>
                                    <td><h4>Hearsay</h4></td>
                                    <td><h4><a href="https://www.youtube.com/embed/kJ9WekPYaXQ" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>

                                <tr>
                                    <td><h4>1977</h4></td>
                                    <td><h4>Harpy</h4></td>
                                    <td><h4><a href="https://www.youtube.com/embed/NiiDe2n-GeQ" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>

                                <tr>
                                    <td><h4>1988</h4></td>
                                    <td><h4>Sphinx</h4></td>
                                    <td><h4><a href="https://youtu.be/djXx8bmY8x8" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>

                                <tr>
                                    <td><h4>1994</h4></td>
                                    <td><h4>Voice Dictation</h4></td>
                                    <td><h4><a href="https://youtu.be/5T6m8I8Sh4M" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>

                                <tr>
                                    <td><h4>1994</h4></td>
                                    <td><h4>Unrehearsed Spontaneous Speech Recognition</h4></td>
                                    <td><h4><a href="https://youtu.be/ag2J444WIdg" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>

                                <tr>
                                    <td><h4>1995</h4></td>
                                    <td><h4>Voice mail</h4></td>
                                    <td><h4><a href="https://youtu.be/1R9cK69f4uQ" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>
                                <tr>
                                    <td><h4>-</h4></td>
                                    <td><h4>Speech Spectrogram</h4></td>
                                    <td><h4><a href="https://youtu.be/RdXs6elVWLM" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>
                                <tr>
                                    <td><h4>2022</h4></td>
                                    <td><h4>Recollections of CMU Speech Group: 1980s </h4></td>
                                    <td><h4><a href="https://drive.google.com/file/d/1f6nGQZH9hOnlNeoOn-WXntGLgeWliAiU/view?usp=share_link" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>
                                <tr>
                                    <td><h4>2022</h4></td>
                                    <td><h4>Recollections of CMU Speech Group: 1990s and beyond </h4></td>
                                    <td><h4><a href="https://drive.google.com/file/d/1YlNyynUw7qPTjaBEcobZojTCEVJ5GKYc/view?usp=share_link" target={"_blank"}>Click here for the video</a></h4></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}