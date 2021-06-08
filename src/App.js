import React from 'react'
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';


function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
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
            <Route path="/admin">
                <Admin/>
            </Route>
          </Switch>
     </Router>



    </div>
  );
}

export default App;
