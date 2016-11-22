import * as React from 'react';
import { Routes } from './routes'
//require('babel-polyfill');

const MuiThemeProvider = require('material-ui/styles').MuiThemeProvider;

export const App = ({ history }) => (
    <MuiThemeProvider>
        <Routes history={ history } />
    </MuiThemeProvider>
);