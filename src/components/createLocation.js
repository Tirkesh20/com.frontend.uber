import React from 'react';
import {Redirect} from "react-router-dom";

class createLocation extends React.Component {
    state={
        lat:'',
        lng: '',
        lat2: '',
        lng2: '',
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
        console.log(this.state)
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        fetch("/location/create", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then( res => {
            if (res.status===404)
                this.setState({ error:true})

            this.setState({error: true})

            console.log(this.state)
        });
    }
    render(){
        const { redirect } = this.state;
        const{error} = this.state;
        if (redirect) {
            return <Redirect to='/log'/>;
        }
        if (error){
            return <Redirect to='/reg'/>;
        }

        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='text' name='lat' placeholder='from' required onChange={this.handleChange}/>
                        <input type='text' name='lng' placeholder='from...' required onChange={this.handleChange}/>
                        <input type='text' name='lat2' placeholder='to...' required onChange={this.handleChange}/>
                        <input type='text' name='lng2' placeholder='to...' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>register</button>
                    </form>
                </div>
            </div>
        )
    }





}
export default createLocation;