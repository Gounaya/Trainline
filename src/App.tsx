import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import "./styles/foundation.css";
import "./styles/custom.css";

import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import UserPanel from "./components/UserPanel/UserPanel";
import Stations from "./components/Stations/Stations";

export default function App (){

  let log = false;


  if(localStorage.getItem("isLogged") === "true"){
    log = true;
  }

  const [isLog, setLog] = useState(log);

    const [promo, setPromo] = useState(
        // initial value
        document.cookie.split(';').some((item) => item.trim().startsWith('reduc=')));

    return (
      <Router>
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" >
          
            <Header isLog={isLog}/>

            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login">
                <Login handleLog={setLog} ></Login>
              </Route>
              <Route exact path="/stations"><Home isLog={isLog} /></Route>
              <Route exact path="/userpanel" ><UserPanel promo={promo} setPromo ={setPromo} isLog={isLog}/></Route>
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
      
    );
  }
    
