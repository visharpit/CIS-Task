import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import './Menu.css';

function Nav() {
    return (
        <BrowserRouter>
        <div className="nav">
            <Link className="navItem" to="/login">Login</Link>
            <Link className="navItem" to="/registration">Registration</Link>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
            </Switch>
        </BrowserRouter>
    );
}

export default Nav;