import React from 'react';

class register extends React.Component {
            state={
                id:1,
                firstName: '',
                lastName: '',
                email: '',
                userName:'',
                password: '',
                userType: ''
            }

        handleChange = (e) =>{
            const {name,value} = e.target
            this.setState({[name]:value})
            console.log(this.state)
        }

        handleSubmit = (e) =>{
            e.preventDefault()
            fetch("/register", {
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

    export default register;
