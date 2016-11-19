import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import { Home } from "./components/home";
import { NotFound } from "./components/notFound";


export const Routes = ({ history }) => (
    <Router history={ history }>
        <Route path="/" component={ Home }>
            <IndexRoute component={ Home } />
            <Route path="error" component={ NotFound } />
        </Route>
        <Route path='*' component={ NotFound } />
    </Router>
);