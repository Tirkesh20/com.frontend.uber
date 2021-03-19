import React from 'react';

export class Hello extends React.Component {
 constructor(props) {
     super(props);
     console.log(props);
     this.state = {
         counter:300
     };
     setInterval(()=>{
         this.setState({counter:this.state.counter-1})
     },1500 );
 }

    render() {
        return<h1>time is dropping {this.state.counter}</h1>
    }
}