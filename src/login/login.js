import React from 'react';
import './login.css';
import {Redirect} from "react-router-dom";
class Login extends React.Component{
    state={
        userName:'',
        password:'',
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
              this.setData()
                this.getData()
                this.setState({ redirect: true });
            }  else{
                this.setState({ redirect: false})}
            this.setState({error: true})
            console.log(this.state)
        });

    }
    setData(){
        localStorage.setItem('session', JSON.stringify(this.state))
        console.log(this.state)
    }
    getData() {
        let data =localStorage.getItem('session');
        data=JSON.parse(data);
        console.log(data)
    }
    render(){
        const { redirect } = this.state;
        const{error} = this.state;
        if (redirect) {
           let x =()=>this.setData();
           let y=()=>this.getData();
            return <Redirect on={()=>this.setData()} to='/home'/>;
        }
        if (error){
            return <Redirect to='/log'/>;
        }
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