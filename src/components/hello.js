import React from 'react';
import {PlanetUpdate} from "./PlanetUpdate";

export class Hello extends React.Component {
 constructor(props) {
     super(props);
     console.log(props);
     this.state = {
         counter:0
     };
  this.updateButton=this.updateButton.bind(this);
 }
    updateButton(){
    this.setState({ counter:this.state.counter+1})
}
render() {
        return<div>
            <span>{this.state.counter}</span>
            <PlanetUpdate triggerParentUpdate={this.updateButton}/>
        </div>
    }
}