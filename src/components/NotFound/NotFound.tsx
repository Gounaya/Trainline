import React from "react";
import "./NotFound.css";
import {Redirect, Link} from "react-router-dom"
import Stations from "../../components/Stations/Stations"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




export default class NotFound extends React.Component<any, any> {

  render(){

    return (
      <div id="notfound">
          <div className="notfound">
              <div className="notfound-404">
                  <h1>404 Sorry :( </h1>
              </div>
              <p>Sorry but the page you are looking for you need to log before</p>
              <Link to="/">Go To Homepage</Link>
          </div>
      </div>
    );
  }
    
}
