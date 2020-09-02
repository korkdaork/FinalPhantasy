import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Main from "./Pages/Main";
import Store from "./Pages/Store";
import Stage1 from "./Pages/Stage1";
import Boss from "./Pages/Boss"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Signup}/>
        <Route exact path = "/Signup" component = {Signup}/>
        <Route exact path = "/Main" component = {Main}/>
        <Route exact path = "/Store" component = {Store}/>
        <Route exact path = "/Stage1" component = {Stage1}/>
        <Route exact path = "/Boss" component = {Boss}/>
      </Switch>
    </Router>
  );
}

export default App;
