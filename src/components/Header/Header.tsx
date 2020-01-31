import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";



export default class Header extends React.Component<any, any>{

  constructor(props:any) {
    super(props);
  }

  disconnect(){
    if(this.props.isLog){

    }
  }
  
    render(){
      return (
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/userpanel">Account</Link></li>
            <li><Link to="/stations">SearchSNCF</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="#" >Logout</Link></li>
          </ul>
        </div>
      );
    }
    
}
