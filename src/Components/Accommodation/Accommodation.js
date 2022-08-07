import Navbar from "../Navbar/Navbar"
import './Accommodation.css'
export default function Accommodation()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <br/>
            <div className="flex_container">
            <div><h7>The hyperlinked hotels have online reservation with CMU special rates.<br/> Ask for CMU special rates if calling the hotel for reservation.</h7></div>
            <div className="table-responsive-sm">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Hotel</th>
                            <th>Address</th>
                            <th width="15%">Rates</th>
                            <th>Breakfast</th>
                            <th width="15%">Parking <br/>Rates</th>
                            <th>Reservation <br/>Deadline</th>
                            <th>Contact</th>
                        </tr>
                        <tr>
                            <td><a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1659380111128&key=GRP&app=resvlink" target={"_blank"}>Residence Inn</a></td>
                            <td>3341 Forbes Avenue</td>
                            <td>$169.00</td>
                            <td>YES</td>
                            <td>$20.00 per day</td>
                            <td>September 20</td>
                            <td> Micki Despard <br/>Micki.Despard@marriott.com<br/>
                                412-621-5600</td>
                        </tr>
                        <tr>
                            <td><a href="https://www.hyatt.com/en-US/group-booking/PITAP/G-CMUB" target={"_blank"}>Hyatt Regency Pittsburgh International Airport</a></td>
                            <td>1111 Airport Boulevard</td>
                            <td>King $159.00</td>
                            <td>NO</td>
                            <td>$9.00 or $16.00</td>
                            <td>September 22</td>
                            <td> Lauren Soriano <br/>lauren.soriano@hyatt.com<br/>
                                724-899-6045</td>
                        </tr>
                        <tr>
                            <td><a href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=PITUCGI&arrivalDate=2022-10-13&departureDate=2022-10-15&groupCode=P2Q4&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink" target={"_blank"}>Hilton Garden Inn</a></td>
                            <td>3454 Forbes Avenue</td>
                            <td>King $179<br/>
                                Queen $189</td>
                            <td>NO</td>
                            <td>$20.00 per day<br/>
                                $25.00 overnight</td>
                            <td>September 22</td>
                            <td> Abbey Perez <br/>Abbey.Perez@hilton.com<br/>
                                412-688-1990</td>
                        </tr>
                        <tr>
                            <td>Wyndham Pittsburgh University Center</td>
                            <td>100 Lytton Avenue</td>
                            <td>King $169.00</td>
                            <td>NO</td>
                            <td>$29.00 per day</td>
                            <td>Not holding rooms</td>
                            <td> Ryan Hunt <br/>
                            rhunt@wyndham.com<br/>
                                412-682-6237</td>
                        </tr>
                        <tr>
                            <td>Hyatt House Pittsburgh/Bloomfield/Shadyside</td>
                            <td>5335 Baum Boulevard</td>
                            <td>$245.00</td>
                            <td>NO</td>
                            <td>$10.00 per day</td>
                            <td>Not holding rooms</td>
                            <td>Dominic Caringola <br/>
                            dominic.caringola@hyatt.com<br/>
                            412-621-9900</td>
                        </tr>
                        <tr>
                            <td>The Oaklander Hotel</td>
                            <td>5130 Bigelow Boulevard</td>
                            <td>King $259.00</td>
                            <td>YES</td>
                            <td>$38.00</td>
                            <td>Not holding rooms</td>
                            <td> Becky Faris <br/>Becky.Faris@concordhotels.com<br/>
                                412-297-4072</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}