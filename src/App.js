import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
// import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import NewItems from "./components/NewItems";
import Sellers from "./components/Sellers";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/newItems" component={NewItems} />
        <Route exact path="/sellers" component={Sellers} />
      </Switch>
    </Router>
  );
}

export default App;
