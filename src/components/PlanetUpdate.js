import React from 'react';

export class PlanetUpdate extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return<button onClick={this.props.triggerParentUpdate}>update</button>
    }

}