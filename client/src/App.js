import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import API from "./Utils/API";

function App() {
  const [developerContext, setDeveloperContext] =
    useState({
      gilcontext: 500,
      hpcontext: 5,
      attackcontext: 5,
      defensecontext: 5,
      speedcontext: 5,
      potioncontext: 1,

      buyPotion: (name, quantity)=>{
        setDeveloperContext({ ...developerContext, [name]: quantity });
      

      },
      setInitialState:(name, quantity)=>{
        setDeveloperContext({ ...developerContext, [name]: quantity });
        
        

    },})
  // function buyPotion(name, quantity) {
  // //   console.log("hit buy potion");
  // //   console.log(quantity);
  // // //   // const newQuantity = developerContext[name] + quantity;
  // setDeveloperContext({ ...developerContext, [name]: quantity });
  // // //   // function updateAttack(quantity){
  // // //   //   console.log("update attack");
  // // //   //   const newAttack= developerContext.attack + quantity;
  // // //   //   setDeveloperContext({...developerContext, attack: newAttack })
  // // //   // }
  // // // }
  // console.log("appjs");
  // console.log(developerContext);

  // function buyPotion(name,quantity){
  //   console.log("hit buy potion");
  //   console.log(quantity);
  //   setDeveloperContext({...developerContext[name]+ quantity});
  // }

  useEffect(
    // console.log(developerContext);
    function () {
      let userdata;
      const userId = localStorage.getItem("id");
       API.getStat(userId).then((data)=>{
         userdata=data.data
         console.log("user data");
         console.log(data);
         if (data) {
          setDeveloperContext({
            ...developerContext, attackcontext: userdata.attack, defensecontext: userdata.defense,
            gilcontext: userdata.gil, hpcontext: userdata.hp, potioncontext:userdata.potion
          })
        }
       })
       .catch((err)=>{
         console.log(err);
       });
     
      // const useritem= API.getItem();
      // const userdata= {gil: 500,
      //   hp: 30,
      //   attack: 40,
      //   defense: 50,
      //   speed: 5,
      //   potion: 1,}
      
      
    },[localStorage.getItem("id")]
  )
  return (
    <DeveloperContext.Provider value={developerContext}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Store" render={(props) =>
            (<Store {...props}  />)} />
          <Route exact path="/Stage1" component={Stage1} />
          <Route exact path="/Boss" component={Boss} />
          <Route exact path="/Defeat" component={Defeat} />
          <Route exact path="/Victory" component={Victory} />
        </Switch>
      </Router>
    </DeveloperContext.Provider>
  );
}

export default App;