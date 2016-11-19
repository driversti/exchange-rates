import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import configureStore from './store/configureStore';

const { AppContainer } = require('react-hot-loader');
const { browserHistory } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');
const root = document.getElementById('app');

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

// RENDER
function renderRootComponent(rootComponent) {
    render(
        <AppContainer>
            <Provider store={ store }>
                { rootComponent }
            </Provider>
        </AppContainer>,
        root
    )
}

renderRootComponent(<App history={ history } />);

declare var module: { hot: any };

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').App;

        renderRootComponent(<NextApp history={ history } />)
    })
}