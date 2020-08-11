import React, {Component} from 'react';
import {Header} from './header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './home'
import Transactions from './transactions';
import './style.css'

export default class Main extends Component {

    render() {
        return(
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/transactions' component={Transactions} />
                    </Switch>
                </Router>
            </div>
        )
    }
}