import {BrowserRouter as Router,useRoutes} from "react-router-dom";
import Home from './Components/Home/Home';
import Videos from './Components/Videos/Videos';
import Apra_Internet from "./Components/Arpa-Internet/Arpa_Internet";
import Attendees from "./Components/Attendees/Attendees";
import Newell_Report from "./Components/Newell-Report/Newell_Report";
import './App.css'

function App() {
  const RouteHelper = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/Videos", element: <Videos /> },
      { path: "/Apra_Internet", element: <Apra_Internet /> },
      { path: "/Attendees", element: <Attendees /> },
      { path: "/Newell_Report", element: <Newell_Report /> }
    ]);
    return routes;
  };

  return (
    <Router>
      <RouteHelper />
    </Router>
    );
}
export default App;
