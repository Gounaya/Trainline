import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.css';
import './UserPanel.css';
import NotFound from '../NotFound/NotFound';




export default class UserPanel extends React.Component<any, any> {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }
    
    static defaultProps = {
        firstName: 'Oussama',
        lastName: 'Gounaya',
        email: 'o.gounaya@gmail.com'
    }

    constructor(props:any) {
        super(props);
        this.onChangePromo = this.onChangePromo.bind(this);
    }

    async onChangePromo(e: any) {
        await this.props.setPromo(e.target.checked);
    }
    
    render() {
      const hash = md5(this.props.email);
  
      if(this.props.isLog){
        return (
            <div className="boardback">
                <div className="centreIn">
                    <p className="red">First Name: {this.props.firstName}</p>
                    <p style={{color: 'blue'}}>Last Name: {this.props.lastName}</p>
                    <p className="green">Email: {this.props.email}</p>
                    <img src={"https://www.gravatar.com/avatar/" + hash}/>
                    <br/>
                    <div className="form-check promo">
                        <input className="form-check-input" type="checkbox" checked={this.props.promo} id="defaultCheck1"
                            onChange={this.onChangePromo}/>
                        <label className="" htmlFor="defaultCheck1">
                            Promo
                        </label>
                    </div>
                </div>
                
            </div>);
      }else{
          return (<NotFound/>)
      }

       
   }

}