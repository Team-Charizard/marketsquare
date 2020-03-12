/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
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
    const fetchOffers = async () => {
      const { group_id } = this.props;
      const res = await fetch(`/offer/${group_id}`);
      // const offers = await res.json();
      console.log(res);
    }
    fetchOffers();
    // Promise.all([
    //   fetch(`/offer/${group_id}`),
    //   fetch(`/need/${group_id}`),
    // ])
    //   .then(values => values.forEach(value => console.log(value)))
    //   .then(([offerVals, needVals]) => {
    //     console.log('offerVals', offerVals);
    //     console.log('needVals', needVals);
    //   });
  }

  render() {
    return (
      <div className='group-box'>
        Group Container
        {/* <div id='offers'>{offers}</div>
        <div id='needs'>{needs}</div> */}
      </div>
    );
  }
}

export default GroupContainer;
