import React from 'react';

import Xkcd from '../components/Xkcd';

class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <span>Hello World</span>
        <Xkcd/>
      </div>
    );
  }
}

export default WelcomePage;
