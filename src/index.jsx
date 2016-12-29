/* eslint-disable import/default */
/* eslint eqeqeq: ["error", "allow-null"]*/
/* eslint-enable */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import ReactGA from 'react-ga';
import routes from './routes';
import configureStore from './store/configureStore';
import Config from './config/config';
import './main.less';

require('./favicon.ico'); // Tell webpack to load favicon.ico


const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// Here We initialize the things we need for the entire application lifecycle
// Initialize Google Analytics only when enabled
if (Config.GA_ENABLED) {
  ReactGA.initialize(Config.GA_TRACKING_ID, {
    debug: Config.GA_TRACKING_DEBUG,
  });
}

document.title = 'Installer Portal';

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>, document.getElementById('app')
);
