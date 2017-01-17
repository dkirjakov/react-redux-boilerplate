import React from 'react';
import {IndexLink} from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <IndexLink to="/">
          <h1>react redux boilerplate</h1>
        </IndexLink>
      </div>
    );
  }
}

export default Header;
