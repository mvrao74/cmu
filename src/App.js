import {BrowserRouter as Router,useRoutes} from "react-router-dom";
import Home from './Components/Home/Home';
import Videos from './Components/Videos/Videos';
import './App.css'

function App() {
  const RouteHelper = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/Videos", element: <Videos /> },
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
