import React, {Component} from 'react';
import {customerData} from '../data/data';

export default class Home extends Component {
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
            <div>
                <h3>Hello, {this.state.data[0].name}</h3>
                <div className='accountcontainer'>
                    <div className='balance'>
                        <p>Account: {this.state.data[0].accounts[0].account_type}</p>
                        <hr />  
                        <p>Balance: {this.state.data[0].accounts[0].account_balance}</p>
                    </div>
                </div>
            </div>
        )
    }
}