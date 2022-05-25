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
                    <div><h4>NSH 13xx</h4></div>
                    <div><h4><a href="https://www.p2q4.org/">https://www.p2q4.org/</a></h4></div>
            <div className="table-responsive-sm">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>0900</td>
                            <td>1000</td>
                            <td>Introduction DARPA and Creation of SUS Program (Chair: Reddy) <br/>
                            Cordell Green (?), Steve Crocker, Allen Sears(?), and Charles Wayne (?)</td>
                        </tr>
                        <tr>
                            <td>1000</td>
                            <td>1020</td>
                            <td>Coffee Break</td>
                        </tr>
                        <tr>
                            <td>1020</td>
                            <td>1220</td>
                            <td>Recollections of Early Pioneers: 1970s (Chair: Roni Rosenfeld)<br/>
                            {/* <div className="speakers">
                                <div>Erman Mark Fox</div>
                                <div>Lesser Jack Mostow</div>
                                <div></div>
                            </div> */}
                            Erman&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lesser&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jim Baker&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Janet Baker<br/>
                            Mark Fox&nbsp;&nbsp;&nbsp;Jack Mostow(?)&nbsp;&nbsp;Henry Goldberg(?)</td>
                        </tr>

                        <tr>
                            <td>1220</td>
                            <td>1330</td>
                            <td>Lunch</td>
                        </tr>

                        <tr>
                            <td>1330</td>
                            <td>1500</td>
                            <td>Recollections of CMU Speech Group: 1980s (Chair: Rich Stern)<br/>
                                Stern&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rudnicky&nbsp;&nbsp;&nbsp;&nbsp;Roni Rosenfeld<br/>
                                Bisiani&nbsp;&nbsp;&nbsp;Cole&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ward<br/>
                                xxx	xxx	xxx	</td>
                        </tr>

                        <tr>
                            <td>1500</td>
                            <td>1620</td>
                            <td>Recollections of CMU Speech:1990s and beyond (Chair: Alex Rudnicky)
                                <br/>
                                xxx	xxx	xxx	<br/>
                                xxx	xxx	xxx	</td>
                        </tr>

                        <tr>
                            <td>1620</td>
                            <td>1640</td>
                            <td>Coffee Break</td>
                        </tr>

                        <tr>
                            <td>1640</td>
                            <td>1800</td>
                            <td>Panel Discussion:  Industrial Impact of CMU Speech Group (Chair: Harry Shum?)
                                <br/>KaiFu Lee(?), Alex Waibel(?), Xuedong Huang, Hsiao Wuen Hon, Alex Acero etc</td>
                        </tr>

                        <tr>
                            <td>1800</td>
                            <td>2100</td>
                            <td>Reception and Dinner	Perlis Atrium (Chair: Reddy)<br/>
                                Comments by President, Provost and SCS Dean<br/>
                                DARPA’s Impact – Vint Cerf, Bill Scherlis, Peter Highnam(?)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}
		





