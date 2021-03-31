import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from "react";

export class CreateLocation extends React.Component {
constructor(props) {
    super(props);
}
    state={
        lng:0,
        lat:0,
        lng2:0,
        lat2:0,
        redirect:false,
        error:false
    }
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
        console.log(this.state)
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        fetch("/login", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)

        }).then( res => {
            if (res.status===200||res.status===201){
                this.setState({ redirect: true });
            }  else{
                this.setState({ redirect: false})}
            this.setState({error: true})
            console.log(this.state)
        });
    }

    render() {
        const mapData = {
            center: [55.751574, 37.573856],
            zoom: 5,
        };
        let coordinates = [
            [this.state.lat, this.state.lng],
            [this.state.lat2, this.state.lng2]
        ];
        return (
            <div>
            <YMaps>
                <div>
                    <Map defaultState={mapData}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                    </Map>
                </div>
            </YMaps>
            </div>
        );
    }
}
export default CreateLocation;
