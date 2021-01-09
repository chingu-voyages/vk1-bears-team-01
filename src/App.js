import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
// import NavBar from "./components/NavBar";
import HomePage from "./components/pages/HomePage";
import NewItems from "./components/pages/NewItems";
import Sellers from "./components/pages/Sellers";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import Activate from "./components/authentication/Activate";
import ForgotPassword from "./components/authentication/ForgotPassword";
import ChangePassword from "./components/authentication/ChangePassword";
import AddProduct from "./components/product/AddProduct";
import UpdateProduct from "./components/product/UpdateProduct";
import AllProduct from "./components/product/AllProduct";
import Product from "./components/product/Product";
import UserProduct from "./components/product/UserProduct";
import Category from "./components/product/Category";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/activate/:token" component={Activate} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/newItems" component={NewItems} />
        <Route exact path="/sellers" component={Sellers} />
        <Route exact path="/addproduct" component={AddProduct} />
        <Route exact path="/allproduct" component={AllProduct} />
        <Route exact path="/updateProduct" component={UpdateProduct} />
        <Route exact path="/UserProduct" component={UserProduct} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/product/:productId" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
