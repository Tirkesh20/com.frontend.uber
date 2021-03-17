import React from 'react';

class register extends React.Component {
            state={
                firstname: '',
                lastname: '',
                email: '',
                username:'',
                password: '',
            }

        handleChange = (e) =>{
            const {name,value} = e.target
            this.setState({[name]:value})
        }

        handleSubmit = (e) =>{
            e.preventDefault()
        }
        render(){
            return(
                <div className='div-login'>
                    <div className='div-login-logo'>
                    </div>
                    <div>
                        <form onSubmit = {this.handleSubmit}>
                            <input type='text' name='firstname' placeholder='firstname...' required onChange={this.handleChange}/>
                            <input type='text' name='lastname' placeholder='lastname...' required onChange={this.handleChange}/>
                            <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                            <input type='text' name='username' placeholder='username...' required onChange={this.handleChange}/>
                            <input type='password' name='password' placeholder='password...' required onChange={this.handleChange}/>
                            <select>
                                <option value="taxi">taxi</option>
                                <option value="admin">admin</option>
                                <option selected value="client">client</option>
                            </select>
                            <button onSubmit={this.handleSubmit}>register</button>
                        </form>
                    </div>
                </div>
            )
        }
    }

    export default register;
