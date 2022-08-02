import Navbar from "../Navbar/Navbar"
import './Accommodation.css'
export default function Accommodation()
{
    return(
        <div className="maindiv">
            <Navbar/>
            <br/>
            <div className="flex_container">
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
                            <td>The Oaklander Hotel</td>
                            <td>5130 Bigelow Boulevard</td>
                            <td>King $259.00</td>
                            <td>NO</td>
                            <td>$38.00</td>
                            <td>September 14</td>
                            <td> Becky Faris <br/>Becky.Faris@concordhotels.com<br/>
                                412-297-4072</td>
                        </tr>
                        <tr>
                            <td>Residence Inn</td>
                            <td>3341 Forbes Avenue</td>
                            <td>$169.00</td>
                            <td>YES</td>
                            <td>$20.00 per day</td>
                            <td>September 13</td>
                            <td> Micki Despard <br/>Micki.Despard@marriott.com<br/>
                                412-621-5600</td>
                        </tr>
                        <tr>
                            <td>Hyatt Regency Pittsburgh International Airport</td>
                            <td>1111 Airport Boulevard</td>
                            <td>King $159.00</td>
                            <td>NO</td>
                            <td>$9.00 or $16.00</td>
                            <td>September 26</td>
                            <td> Lauren Soriano <br/>lauren.soriano@hyatt.com<br/>
                                724-899-6045</td>
                        </tr>
                        <tr>
                            <td>Hilton Garden Inn</td>
                            <td>3454 Forbes Avenue</td>
                            <td>King $179<br/>
                                Queen $189</td>
                            <td>NO</td>
                            <td>$20.00 per day<br/>
                                $25.00 overnight</td>
                            <td>September 15</td>
                            <td> Abbey Perez <br/>Abbey.Perez@hilton.com<br/>
                                412-688-1990</td>
                        </tr>
                        <tr>
                            <td>Wyndham Pittsburgh University Center</td>
                            <td>100 Lytton Avenue</td>
                            <td>King $169.00</td>
                            <td>NO</td>
                            <td>$29.00 per day</td>
                            <td>September 22</td>
                            <td> Ryan Hunt <br/>
                            rhunt@wyndham.com<br/>
                                412-682-6237</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}