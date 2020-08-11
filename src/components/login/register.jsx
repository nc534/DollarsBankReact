import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {customerData} from '../data/data';
import './style.css';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            phone: null,
            username: '',
            password: '',
            errorMsg: '',
            data: customerData,
            isSubmitted: ''
        }
    }

    handleChange = e => {
        if(e.target.name === 'phone'){
            this.setState({
                phone : Number(e.target.value)
            })
        } else {
            this.setState({
                [e.target.name] : e.target.value
            })
        }
    }

    handleRegister = e => {
        e.preventDefault();

        let exists = false;

        for(var i = 0; i < customerData.length; i++){
            var customer = customerData[i];

            if(this.state.username === customer.username || this.state.phone === customer.phone){
                exists = true;
            }

            if(exists){
                this.setState({errorMsg: 'Account with that username or phone number already exists.'});
            }else {
                var newCustomer = {
                    name: this.state.name,
                    address: this.state.address,
                    phone: this.state.phone,
                    username: this.state.username,
                    password: this.state.password
                }
                customerData.push(newCustomer);
                this.props.history.push({
                    pathname: '/login'
                });
                break;
            }

        }

    }

    render() {

        return (
            <div className="main">
                <div className="container">
                    <div className="header">
                        Register
                    </div>
                    { this.state.errorMsg &&
                    <p className="error"> { this.state.errorMsg } </p> }
                    <form onSubmit={this.handleRegister} className="form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" required placeholder="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" required placeholder="address" value={this.state.address} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" required placeholder="phone" value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" required placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" required placeholder="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn">Register</button>
                        <div>
                        <Link to='/login' style={{ textDecoration: 'none' }}><p>Cancel</p></Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}