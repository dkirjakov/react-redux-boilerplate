import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './container/App';
import WelcomePage from './container/WelcomePage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={WelcomePage}/>
  </Route>
);
