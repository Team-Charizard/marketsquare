/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

// FeedItem should consist of an image (src contained in the data from the AJAX request)
class OfferItem extends Component {
  render() {
    return (
      <div className='offerItem'>
        <li>{this.props}</li>
      </div>
    );
  }
}
module.exports = OfferItem;
