import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

import POINTS from "./points";

import "./../styles.css";

const mapState = {
    center: [53.893009, 27.567444],
    zoom: 12
};

const BalloonContentLayout = (layoutFactory, Component) => {
    const html = ReactDOMServer.renderToString(Component);
    const Layout = layoutFactory.createClass(`<div id="balloon">${html}</div>`, {
        build: function() {
            Layout.superclass.build.call(this);
        }
    });

    return Layout;
};

class Balloon extends React.Component {
    state = {
        incr: 0
    };

    icrement = () => {
        this.setState(prevState => ({ incr: prevState.incr + 1 }));
    };

    render() {
        return (
            <div>
                <h1>Test {this.props.id}</h1>
                <button onClick={this.icrement}>Click me</button>
                Clicked: {this.state.incr}
            </div>
        );
    }
}

class CreateOrder extends React.Component {
    state = {
        ymaps: null,
        selectedPoint: null
    };

    onPlacemarkClick = point => () => {
        this.setState({ selectedPoint: point });
    };

    render() {
        const { selectedPoint, ymaps } = this.state;

        return (
            <div className="OrderBoard">
                <div className="layer">
                <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
                    <Map
                        defaultState={mapState}
                        onLoad={ymaps => this.setState({ ymaps })}
                        height="100%"
                        width="100%"
                    >
                        <Clusterer
                            options={{
                                preset: "islands#invertedVioletClusterIcons",
                                groupByCoordinates: false,
                                balloonPanelMaxMapArea: Infinity
                            }}
                        >
                            {ymaps &&
                            POINTS.map((point, index) => (
                                <Placemark
                                    modules={[
                                        "geoObject.addon.balloon",
                                        "geoObject.addon.hint"
                                    ]}
                                    key={index}
                                    geometry={point.coords}
                                    onBalloonOpen={() => {
                                        ReactDOM.hydrate(
                                            <Balloon id={point.title} />,
                                            document.getElementById("balloon")
                                        );
                                    }}
                                    onClick={this.onPlacemarkClick(point)}
                                    options={{
                                        balloonContentLayout: BalloonContentLayout(
                                            ymaps.templateLayoutFactory,
                                            <Balloon />
                                        ),
                                        balloonPanelMaxMapArea: Infinity
                                    }}
                                />
                            ))}
                        </Clusterer>
                    </Map>

                </YMaps>
            </div>
                <div id="test" />
                {selectedPoint && (
                    <div>
                        <h1>Selected point: {selectedPoint.title}</h1>
                        <p>{selectedPoint.descr}</p>
                    </div>
                )}
            </div>
        );
    }
}
export default CreateOrder;
