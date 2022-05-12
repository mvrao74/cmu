import {BrowserRouter as Router,useRoutes} from "react-router-dom";
import Home from './Components/Home/Home';
import Videos from './Components/Videos/Videos';
import Program from "./Components/Program/Program";
import Historical_Documents from "./Components/Historical_Documents/Historical_Documents";
import Registrations from "./Components/Registrations/Registrations";
import './App.css'

function App() {
  const RouteHelper = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/Videos", element: <Videos /> },
      { path: "/Program", element: <Program /> },
      { path: "/Historical_Documents", element: <Historical_Documents /> },
      { path: "/Registrations", element: <Registrations /> }
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
