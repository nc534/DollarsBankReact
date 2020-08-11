import React, {Component} from 'react';
import {customerData} from '../data/data';

export default class Customer extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: 'testuser',
            data: customerData
        }
    }

    componentDidMount() {
        this.accountBalance();
    }

    accountBalance() {
        this.setState({
            data: this.state.data.filter(customer => customer.username === this.state.username)
        })
    }

    render() {
        return(
            <div className='accountInfo'>
                <h3>Account Information</h3>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td>Name: </td>
                            <td>{this.state.data[0].name}</td>
                        </tr>
                        <tr>
                            <td>Address: </td>
                            <td>{this.state.data[0].address}</td>
                        </tr>
                        <tr>
                            <td>Phone: </td>
                            <td>{this.state.data[0].phone}</td>
                        </tr>
                        <tr>
                            <td>Username: </td>
                            <td>{this.state.data[0].username}</td>
                        </tr>
                        <tr>
                            <td>Password: </td>
                            <td>{this.state.data[0].password}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}