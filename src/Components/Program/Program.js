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
            <div className="table-responsive-sm">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>0900</td>
                            <td>0945</td>
                            <td>NSH 3305<br/>
                                Newell-Simon Hall</td>
                            <td>Introduction DARPA and Creation of SUS Program (Chair: Raj Reddy) <br/>
                            Steve Crocker, Allen Sears, ???</td>
                        </tr>
                        <tr>
                            <td>0945</td>
                            <td>1015</td>
                            <td>NSH 3305<br/>
                                Newell-Simon Hall</td>
                            <td>Coffee Break</td>
                        </tr>
                        <tr>
                            <td>1015</td>
                            <td>1200</td>
                            <td>NSH 3305<br/>
                                Newell-Simon Hall</td>
                            <td>Recollections of Early Pioneers: 1970s (Chair: Reddy)<br/>
                            Lee Erman,   Victor Lesser,   Rick Roth,   Jim Baker,   Janet Baker,   Mark Fox,   Jack Mostow(?),   Henry Goldberg(?),   Fil Alleva(?)</td>
                        </tr>

                        <tr>
                            <td>1200</td>
                            <td>1300</td>
                            <td>NSH 3305<br/>
                                Newell-Simon Hall</td>
                            <td>Lunch</td>
                        </tr>

                        <tr>
                            <td>1300</td>
                            <td>1430</td>
                            <td>NSH 3305<br/>
                                Newell-Simon Hall</td>
                            <td>Recollections of CMU Speech Group: 1980s (Chair: Rich Stern)<br/>
                                Stern, Bisiani, Hon, Ward, Waibel, Rosenfeld, B.Raj</td>
                        </tr>

                        <tr>
                            <td>1430</td>
                            <td>1600</td>
                            <td>NSH 3305<br/>
                                Newell-Simon Hall</td>
                            <td>Recollections of CMU Speech:1990s and beyond (Chair: Alex Rudnicky)
                                <br/>
                                Lin Chase, Jahanzeb Shirwani, Agha Ali Raza, Dan Bohus, Rita Singh, Zhou Yu, Matt Marge(?), Michael Finke(?)</td>
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
                                Impact of CMU Speech Group (Chair: Harry Shum)
                                <br/>Janet Baker, Jim Baker, KaiFu Lee(?), Alex Waibel, Xuedong Huang, Hsiao Wuen Hon, Alex Acero etc</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}
		





