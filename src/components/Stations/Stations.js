import React, { useState } from "react";
import "./Stations.css";
import {Redirect} from "react-router-dom";
import Select from "react-select";
import { SearchStation } from "./SearchStation";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {serviceStations} from "./ServiceStations";


export default function Stations(params){

  const [values, setValues] = useState({
    departure:'',
    arrival:''
  })
  
  const [departureGares, setdepartureGares] = useState([]);
  const [arrivalGares, setarrivalGares] = useState([]);



  const changeInputDeparture = (event , value) => {
      if (value === null) {
          setValues({...values, 'departure': "value.libelle"});
      } else {
          setValues({...values, 'departure': value.libelle});
      }
  };

  const changeInputArrival = (event , value) => {
    if (value === null) {
        setValues({...values, 'arrival': "value.libelle"});
    } else {
        setValues({...values, 'arrival': value.libelle});
    }
  };

  const onChangeInputDeparture  = async e => {
    let gares = await serviceStations(e.target.value) || [];
    setdepartureGares(gares);
  }

  const onChangeInputArrival  = async e => {
    let gares = await serviceStations(e.target.value) || [];
    setarrivalGares(gares);
  }

    
  return (
    <div>

      <div className="row large-up-2">
        <div className="columns bodyPart background">
            <Autocomplete
              className="autoComp"
              onChange={changeInputDeparture}
              id="combo-box-demo"
              options={departureGares}
              getOptionLabel={option => option.libelle}
              style={{ width: 300 }}
              renderInput={params => (
                <TextField {...params} label="Departure" variant="outlined" fullWidth onChange={onChangeInputDeparture} />
              )}
            />
            <Autocomplete 
              className="spaceBetween autoComp"
              onChange={changeInputArrival}
              id="combo-box-demo"
              options={arrivalGares}
              getOptionLabel={option => option.libelle}
              style={{ width: 300 }}
              renderInput={params => (
                <TextField {...params} label="Arrival" variant="outlined" fullWidth onChange={onChangeInputArrival} />
              )}
            />
        </div>
      </div>
    </div>
  );
  
}
