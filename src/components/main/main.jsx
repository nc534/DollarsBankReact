import React, {Component} from 'react';
import {Header} from './header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {customerData} from '../data/data';
import Home from './home'
import Transactions from './transactions';
import Customer from './customer';
import Login from '../login/login';
import './style.css'

export default class Main extends Component {

    constructor(props){
        super(props)
        this.state={
            username: ""
        }
    }
    
    //does not do anything
    componentDidMount(){
        if(this.props.location.state){
            this.setState({
                username: this.props.location.state.username
                })
            }
        
        console.log(this.state.username);
    }

    render() {

        return(
            <div className="customerMain">
                <Router>
                    <Header />
                    
                    <Switch>
                        {/* Default page */}
                        <Route exact path='/main' component={Home} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/transactions' component={Transactions} />
                        <Route exact path='/accountinfo' component={Customer} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </Router>
            </div>
        )
    }
}