// router component with three routes, associé, b2b, b2c 

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from '../App';

export const RouterPage = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/b2b" component={App} />
            <Route path="/b2c" component={App} />
            <Route path="/associé" component={App} />
        </Switch>
    </Router>
);
