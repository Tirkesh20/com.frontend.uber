import React from 'react';
import './login.css';
class Login extends React.Component{
    state={
        userName:'',
        password:''
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
            console.log(res)
        });

    }
    render(){
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                </div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='text' name='userName' placeholder='username...' required onChange={this.handleChange}/>
                        <input type='password' name='password' placeholder='password...' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;