import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  // login: (email, username, password) => dispatch(actions.login(email, username, password)),
});

class GroupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: null,
    };
  }

  componentDidMount() {
    // functionality to iterate through offers and needs and fill the div with a list
  }

  render() {
    return (
      <div className='group-box'>
        <div id='offers'>{offers}</div>
        <div id='needs'>{needs}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);
