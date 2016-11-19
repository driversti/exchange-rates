import * as React from 'react';
import { Routes } from './routes'

const MuiThemeProvider = require('material-ui/styles').MuiThemeProvider;

export const App = ({ history }) => (
    <MuiThemeProvider>
        <Routes history={ history } />
    </MuiThemeProvider>
);