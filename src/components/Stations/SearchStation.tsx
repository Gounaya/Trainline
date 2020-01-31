import React from 'react';
import InputStation from "./InputStation";
import ListStations from "./ListStations";

export class SearchStation extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            stations: []
        };
        this.setGares = this.setGares.bind(this);
    }

    async setGares(gares:any) {
        this.setState({stations: gares});
    }

    render() {
        return (
            <div>
                <InputStation setGares={this.setGares}/>
                <ListStations stations={this.state.stations}/>
            </div>
        );
    }

}