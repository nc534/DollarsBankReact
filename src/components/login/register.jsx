import React, {Component} from 'react';
import './style.css';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            phone: '',
            username: '',
            password: '',
            errorMsg: '',
            isSubmitted: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleRegister = e => {

    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="header">
                        Register
                    </div>
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
                    </form>
                </div>
            </div>
        )
    }
}