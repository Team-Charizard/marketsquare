import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions';

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch => ({
//   // login: (email, username, password) => dispatch(actions.login(email, username, password)),
// });

class GroupContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    Promise.all([
      fetch(`/offer/${this.props.group_id}`),
      fetch(`/need/${this.props.group_id}`),
    ])
      .then((offerVals, needVals) => {
        return Promise.all([offerVals.json, needVals.json()]);
      })
      .then((offerVals, needVals) => {
        console.log('offerVals', offerVals);
        console.log('needVals', needVals);
      });
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

export default GroupContainer;
