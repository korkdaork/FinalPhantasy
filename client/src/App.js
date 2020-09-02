import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Signup from "./Pages/Signup";
import Store from "./Pages/Store";
import Main from "./Pages/Main";
import Stage1 from "./Pages/Stage1";
import Boss from "./Pages/Boss";
import Navbar from "./Components/Navbar"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path = "/"><Signup/></Route>
        <Route path = "/Signup"><Signup/></Route>
        <Route path ="/Main"><Main/></Route>
        <Route path ="/Store"><Store/></Route>
        <Route path ="/Stage1"><Stage1/></Route>
        <Route path ="/Boss"><Boss/></Route>
      </div>
    </Router>
  );
}

export default App;
