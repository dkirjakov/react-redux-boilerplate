import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadCurrent} from '../redux/xkcd';

class Xkcd extends React.Component {
  static propTypes = {
    num: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    loadCurrentProp: PropTypes.func,
  }

  componentDidMount() {
    this.props.loadCurrentProp();
  }

  render() {
    const {
      num,
      title,
      description,
      img,
    } = this.props;
    return (
      <div className="xkcd">
        <h2>{num}:{title}</h2>
        <img src={img} alt={description}/>
        <p>{description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    num: state.xkcd.num,
    title: state.xkcd.title,
    description: state.xkcd.description,
    img: state.xkcd.img,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCurrentProp: bindActionCreators(loadCurrent, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Xkcd);
