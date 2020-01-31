import React from 'react';
import {serviceStations} from "./ServiceStations"
import 'bootstrap/dist/css/bootstrap.css';


export default class InputStation extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);

    }

    async onChangeInput(e:any) {
        let gares = await serviceStations(e.target.value) || [];
        await this.props.setGares(gares);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input className="form-control" type="text" id={"input-search"} onChange={this.onChangeInput}
                           placeholder="Enter le nom d'une gare/ville"/>
                </div>
            </form>
        );
    }

}