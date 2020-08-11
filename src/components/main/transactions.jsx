import React, {Component} from 'react';
import {customerData} from '../data/data';

export default class Transactions extends Component {
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
        console.log(this.state.data)
        return(
            <div>
                <h3>Recent Transactions</h3>
                <div className='transactions'>
                    <table>
                        <thead>
                            <th>Transaction Type</th>
                            <th>Transaction Amount</th>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}