import React, { createContext, useState } from 'react'
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Product from './components/Product/Product';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';

import Dashboard from './components/Dashboard/Dashboard';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({});
  const [payment, setPayment]= useState({});
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInUser], [cart, setCart],[payment, setPayment]}>
     <Router>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/product">
                <Product/>
            </Route>
            <Route path="/blog">
                <Blog/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/checkout:id">
              <CheckOut/>
            </Route>
            <Route path="/addproduct">
                <AddProduct/>
            </Route>
          </Switch>
     </Router>
     </userContext.Provider>
    </div>
  );
}

export default App;
