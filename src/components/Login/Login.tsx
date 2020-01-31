import React from "react";
import "./Login.css";
import {PostService} from '../../services/PostService';
import {Redirect} from 'react-router-dom';

export default class Login extends React.Component<any,any>{
  
  
  constructor(props:any){
    super(props);

    this.state={
      email: '',
      password: '',
      redirect: false,
      isLogged: null
    }

    this.login=this.login.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  async login(){
    let isConnected = await PostService(this.state.email, this.state.password) || false;
    console.log(isConnected, this.props.isLogged);

    this.props.handleLog(isConnected);
    return isConnected ? this.setState({isLogged: true}) : this.setState({isLogged: false});
  }

  onChange(e:any){
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }

  render(){
    if(this.state.isLogged){
      return (<Redirect to={'/home'}/>);
    }

    return ( 
      <div>
        <div className="row center wallpaper">
          <div className="column bodyPart board">
            <h2>Login Page</h2>
            <label>Email</label>
              <input type="email" name="email" placeholder="Email" onChange={e => this.setState({email: e.target.value})}/>
            <label>Password</label>
              <input type="password" name="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/>
              <input type="submit" value="Login" className="button block" onClick={this.login}/>
          </div>
        </div>
      </div>
    );
  }
    
}
