import React, {Component, PropTypes} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
