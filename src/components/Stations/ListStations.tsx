import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


export default class ListStations extends React.Component<any, any> {

    constructor(props:any){
        super(props);
    }
    
    render() {
        return(
            <div>
                <ul className="list-group">
                    {this.props.stations.map((value:any, index:any) => {
                        return <li className="list-group-item">{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}