import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/App';
import WelcomePage from './pages/WelcomePage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={WelcomePage}/>
  </Route>
);
