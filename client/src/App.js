import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Main from "./Pages/Main";
import Store from "./Pages/Store";
import Stage1 from "./Pages/Stage1";
import Boss from "./Pages/Boss";
import Login from "./Pages/Login";
import Defeat from "./Pages/Defeat";
import Victory from "./Pages/Victory";
import DeveloperContext from './Utils/DeveloperContext';

function App() {
  const [developerContext, setDeveloperContext]=
  useState({
    gil: 500,
    hp: 5,
    attack: 5,
    defense: 5,
    speed: 5,
    potion: 1

  })
  function buyPotion(name, quantity){
    console.log("hit buy potion");
    console.log(quantity);
    const newQuantity = developerContext[name] + quantity;
    setDeveloperContext({...developerContext, name: newQuantity});
  // function updateAttack(quantity){
  //   console.log("update attack");
  //   const newAttack= developerContext.attack + quantity;
  //   setDeveloperContext({...developerContext, attack: newAttack })
  // }
  }
  return (
    <DeveloperContext.Provider value={developerContext}>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Login}/>
        <Route exact path = "/Login" component = {Login}/>
        <Route exact path = "/Signup" component = {Signup}/>
        <Route exact path = "/Main" component = {Main}/>
        <Route exact path = "/Store" render = {(props)=>
        (<Store {...props}  buyPotion={buyPotion}/>)}/>
        
        <Route exact path = "/Stage1" component = {Stage1}/>
        <Route exact path = "/Boss" component = {Boss}/>
        <Route exact path = "/Defeat" component = {Defeat}/>
        <Route exact path = "/Victory" component = {Victory}/>
      </Switch>
    </Router>
    </DeveloperContext.Provider>
  );
}

export default App;
