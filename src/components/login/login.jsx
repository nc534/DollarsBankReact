import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {customerData} from '../data/data';
import './style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            username:'',
            password:'',
            errorMsg: '',
            isLoggedIn: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleLogin = e => {
        e.preventDefault();

        let isValid = false;

        for(var i = 0; i < customerData.length; i++){
            var customer = customerData[i];

            if(this.state.username == customer.username && this.state.password == customer.password){
                isValid = true;
            }

            if(isValid){
                this.props.history.push('/main');
            }

        }

    }

    render() {
        return (
            <div className="main">
                <h1>DOLLARSBANK ATM Welcomes You!!</h1>
                
                <div className="container">
                    <div className="header">
                        Login
                    </div>
                    <form onSubmit={this.handleLogin} className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" required placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" required placeholder="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <button type="submit" className="btn">Login</button>
                        </div>
                        <div>
                        <Link to='/register' style={{ textDecoration: 'none' }}><p>Register</p></Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}