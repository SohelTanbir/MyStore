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
import Admin from './components/Admin/Admin';
import SignUp from './components/SignUp/SignUp';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <Route path="/admin">
                <Admin/>
            </Route>
          </Switch>
     </Router>
     </userContext.Provider>
    </div>
  );
}

export default App;
