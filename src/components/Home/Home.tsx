import React from "react";
import "./Home.css";
import {Redirect} from "react-router-dom"
import Stations from "../../components/Stations/Stations"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotFound from "../NotFound/NotFound";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default class Home extends React.Component<any, any> {
    
  constructor(props:any){
    super(props);
    this.state={
      redirect: false,
    }
    this.logout = this.logout.bind(this);
  }

  logout(){
    sessionStorage.setItem("userData", '');
    sessionStorage.clear();
    this.setState({redirect: true})
  }
  
  render(){

    if(this.state.redirect){
      return (<Redirect to={'/login'}/>)
    }

    if(this.props.isLog){
      return (
      
        <div>
          <div className="row " id="Body">
            <div className="medium-12 columns bodyPart">
              <h2>Home</h2>
              <a href="#" className="button logout" onClick={this.logout}>Logout</a>
                <Stations/>
  
            </div>
          </div>
        </div>
      );
    }else{
      return(<NotFound/>)
    }
    
  }
    
}
