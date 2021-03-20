import React from 'react';
import {Redirect} from "react-router-dom";


class createOrder extends React.Component {
    state={
        id:3,
        redirect:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
        console.log(this.state)
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        fetch("/order/create", {
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
                this.setState({ redirect: false})
            }
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
                        <input type='text' name='firstName' placeholder='firstname...' required onChange={this.handleChange}/>
                        <input type='text' name='lastName' placeholder='lastname...' required onChange={this.handleChange}/>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='text' name='userName' placeholder='username...' required onChange={this.handleChange}/>
                        <input type='password' name='password' placeholder='password...' required onChange={this.handleChange}/>
                        <select name='userType' defaultValue="CLIENT" onChange={this.handleChange}>
                            <option value="TAXI">taxi</option>
                            <option value="ADMIN">admin</option>
                            <option value="CLIENT">client</option>
                        </select>
                        <button onSubmit={this.handleSubmit}>register</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default createOrder