import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from "react";

export class CreateLocation extends React.Component {
constructor(props) {
    super(props);
}
    render() {
        const mapData = {
            center: [55.751574, 37.573856],
            zoom: 5,
        };
        const coordinates = [
            [55.684758, 37.738521],
            [57.684758, 39.738521]
        ];
        return (
            <YMaps>
                <div>
                    <Map defaultState={mapData}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                    </Map>
                </div>
            </YMaps>
        );
    }
}
export default CreateLocation;
