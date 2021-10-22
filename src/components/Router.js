import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './Home/Home';

export const WithRouter = () => {
    return <Router>
        <Switch>
            <Route exact path="/">
                <Redirect from="/" to={'/home'} />
            </Route>
            <Route exact path={'/home'} component={Home} />
        </Switch>
    </Router>
};