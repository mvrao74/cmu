import {BrowserRouter as Router,useRoutes} from "react-router-dom";
import Home from './Components/Home/Home';
import Videos from './Components/Videos/Videos';
import Program from "./Components/Program/Program";
import Historical_Documents from "./Components/Historical_Documents/Historical_Documents";
import Registrations from "./Components/Registrations/Registrations";
import Registered from "./Components/Registered/Registered";
import './App.css'

function App() {
  const RouteHelper = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/Videos", element: <Videos /> },
      { path: "/Program", element: <Program /> },
      { path: "/Historical_Documents", element: <Historical_Documents /> },
      { path: "/Registrations", element: <Registrations /> },
      { path : "/Registered", element: <Registered/>}
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
