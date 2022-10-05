import Navbar from "../Navbar/Navbar"
import './Program.css'
export default function Program()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <br/>
            <div className="flex_container">
                    <div><h4>Tentative P2Q4 Symposium Program</h4></div>
                    <div><h4>Oct 14, 2022</h4></div>
                    <div><h4><a href="https://www.p2q4.org/">https://www.p2q4.org/</a></h4></div>
                    <div><h4><a href="https://cmu.zoom.us/j/94924923595?pwd=RFZaVWRXbVN1T2wxNk9WeHhKK01KZz09">Join via zoom</a></h4></div>
            <div className="table-responsive-sm">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>0900</td>
                            <td>0945</td>
                            <td>GHC 4405<br/>
                                Gates and Hillman Centers</td>
                            <td>Introduction DARPA and Creation of SUS Program (Chair: Raj Reddy) <br/>
                            Steve Crocker, Allen Sears</td>
                        </tr>
                        <tr>
                            <td>0945</td>
                            <td>1015</td>
                            <td>GHC 4405<br/>
                                Gates and Hillman Centers</td>
                            <td>Coffee Break</td>
                        </tr>
                        <tr>
                            <td>1015</td>
                            <td>1200</td>
                            <td>GHC 4405<br/>
                                Gates and Hillman Centers</td>
                            <td>Recollections of Early Pioneers: 1970s (Chair: Reddy)<br/>
                            Lee Erman, Victor Lesser, Rick Roth, Jim Baker, Janet Baker, Mark Fox, Jack Mostow, Fil Alleva</td>
                        </tr>

                        <tr>
                            <td>1200</td>
                            <td>1300</td>
                            <td>GHC 4405<br/>
                                Gates and Hillman Centers</td>
                            <td>Lunch</td>
                        </tr>

                        <tr>
                            <td>1300</td>
                            <td>1430</td>
                            <td>GHC 4405<br/>
                                Gates and Hillman Centers</td>
                            <td>Recollections of CMU Speech Group: 1980s (Chair: Richard Stern)<br/>
                                Richard Stern, Ronald Cole, Wayne Ward, Alex Waibel, Roberto Bisiani, Hsiao-Wuen Hon, Roni Rosenfeld, Alex Acero,Bhiksha Raj</td>
                        </tr>

                        <tr>
                            <td>1430</td>
                            <td>1600</td>
                            <td>GHC 4405<br/>
                                Gates and Hillman Centers</td>
                            <td>Recollections of CMU Speech:1990s and beyond (Chair: Alex Rudnicky)
                                <br/>
                                Lin Chase, Jahanzeb Sherwani, Agha Ali Raza, Dan Bohus, Rita Singh, Zhou Yu, Michael Finke, Tanja Schultz, Florian Metze, Matt Marge</td>
                        </tr>

                        <tr>
                            <td>1600</td>
                            <td>1630</td>
                            <td>Rashid Auditorium<br/>
                                Gates and Hillman Centers</td>
                            <td>Move to Rashid Auditorium and Coffee Break</td>
                        </tr>

                        <tr>
                            <td>1630</td>
                            <td>1830</td>
                            <td>Rashid Auditorium<br/>
                                Gates and Hillman Centers</td>
                            <td>Raj Reddy AI Lecture and Panel Discussion<br/>
                                Impact of CMU Speech Group (Chair: Harry Shum and Hsiao Wuen Hon)
                                <br/>Janet Baker, Jim Baker, KaiFu Lee by Zoom, Alex Waibel, Xuedong Huang, Alex Acero</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}
		





