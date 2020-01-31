import React from "react";
import "./Stations.css";
import {Redirect} from "react-router-dom";
import Select from "react-select";
import {StationService} from "../../services/StationService"; //why {} and sometimes not


export default class Stations extends React.Component<any, any> {
   dataValues = [
      { label: 2021, value: 2021 },
      { label: 2020, value: 2020 },
      { label: 2001, value: 2001 },
      { label: 2000, value: 2000 },
    ]
  
  constructor(props:any){
    super(props);
    this.state={
      departure: "",
      arrived: "",
      stationsList: []
    }

    this.setGares = this.setGares.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleDepChange= this.handleDepChange.bind(this);
    this.handleArrChange= this.handleArrChange.bind(this);

  }

  componentDidMount() {
    fetch(
      "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let stationsFromApi = data.map((station: any) => {
          return { value: station};
        });
        this.setState({
          stations: [
            {
              value: "",
              display:
                "(Select your station)"
            }
          ].concat(stationsFromApi)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  async onChangeInput(e:any) {
    let gares = await StationService(e.target.value) || [];
    await this.props.setGares(gares);
  } 

  async setGares(gares:any) {
    this.setState({stations: gares});
  } 

  handleDepChange(value:any){
    this.setState({departure :value})
  }

  handleArrChange(value:any){
    this.setState({arrived :value})
  }
  
  render(){
    
    return (
      <div>
        <div className="row large-up-2">
          <div className="columns bodyPart">
          <div>
            <h4>Ticket : </h4>
            <div className="spaceRight">
              <Select
                  className="spaceBetween"
                  options={this.state.stations}
                  value={this.state.departure}
                  onChange={value => this.handleDepChange(value)}
                  defaultValue={{ label: 2002, value: 2002 }}
                  placeholder="Enter le nom d'une gare/ville de départ"
              />
              <Select
                  options={this.dataValues}
                  value={this.state.arrived}
                  onChange={value => this.handleArrChange(value)}
                  defaultValue={{ label: 2002, value: 2002 }}
                  placeholder="Enter le nom d'une gare/ville d'arriver"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
    
}
