import React, { Component } from 'react';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      needs: [],
    };
  }

  componentDidMount() {
    // runs two fetch requests in parallel to add offers & needs arrays to state
    Promise.all([
      fetch(`/offer/${this.props.group_id}`),
      fetch(`/need/${this.props.group_id}`),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          offers: data1,
          needs: data2,
        }),
      );
  }

  render() {
    // add list items filled with offers to an offers array
    const offers = this.state.offers.map(item => {
      return (
        <li key={item + item.id}>{`${item.description  }, ${  item.username}`}</li>
      );
    });
    // add list items filled with needs to needs array
    const needs = this.state.needs.map(item => {
      return (
        <li key={item + item.id}>{`${item.description  }, ${  item.username}`}</li>
      );
    });

    return (
      <div id='group-box' style={styles}>
        <div id='offers'>
          <h3>Offers</h3>
          {offers}
        </div>
        <div id='needs'>
          <h3>Needs</h3>
          {needs}
        </div>
      </div>
    );
  }
}

export default Group;
